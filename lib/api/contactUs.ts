import * as z from "zod";
import nodemailer from "nodemailer";

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
            // const transporter = nodemailer.createTransport({
            //     host: "smtp.gmail.com",
            //     port: 587,
            //     auth: {
            //         user: process.env.SMTP_USER,
            //         pass: process.env.SMTP_PASS,
            //     },
            // });

            // await transporter.sendMail({
            //     from: `"Gapbridge Web" <${process.env.SMTP_USER}>`,
            //     to: "infogapbridgeoutsourcing@gmail.com",
            //     subject: `New Inquiry from ${validatedData.name}`,
            //     html: `<p>${validatedData.message}</p>`,
            // });

        return { success: true };
    } catch (error) {
        return { success: false, message: "Server error. Please try again later." };
    }
}