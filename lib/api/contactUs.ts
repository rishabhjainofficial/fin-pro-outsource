'use server';
import * as z from "zod";
import nodemailer from "nodemailer";
import { getContactEmailTemplate, getAutoReplyTemplate } from "../email/inquiryTemplate";

const contactUsSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email"),
    service: z.string().min(1, "Service is required"),
    message: z.string().min(1, "Message is required"),
});

export async function contactUs(data: any) {
    // 1. Validate data safely
    const result = contactUsSchema.safeParse(data);

    if (!result.success) {
        // Return field-specific errors
        return {
            success: false,
            errors: result.error.flatten().fieldErrors,
        };
    }

    const validatedData = result.data;

    try {
        const contactEmailTemplate = getContactEmailTemplate(validatedData);
        const autoReplyTemplate = getAutoReplyTemplate(validatedData?.name);

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transporter.sendMail({
            from: `"Gapbridge Web" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_TO,
            subject: `New Inquiry from ${validatedData.name}`,
            html: contactEmailTemplate,
        });

        await transporter.sendMail({
            from: `"Gapbridge Web" <${process.env.SMTP_USER}>`,
            to: validatedData.email,
            subject: `Thank you for contacting Gapbridge Web`,
            html: autoReplyTemplate,
        });

        return { success: true };
    } catch (error: any) {
        return { success: false, message: error?.message };
    }
}