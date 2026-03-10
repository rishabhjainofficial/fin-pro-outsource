// lib/email/templates.ts

interface ContactEmailData {
    name: string;
    email: string;
    service?: string;
    message: string;
}

export function getContactEmailTemplate(data: ContactEmailData): string {
    const currentDate = new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    });

    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif;
                    line-height: 1.6;
                    color: #333333;
                    background-color: #f4f7fa;
                    padding: 20px;
                }

                .email-wrapper {
                    max-width: 600px;
                    margin: 0 auto;
                    background: #ffffff;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                }

                .email-header {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                    color: #ffffff;
                    padding: 40px 30px;
                    text-align: center;
                }

                .email-header h1 {
                    font-size: 28px;
                    font-weight: 700;
                    margin: 0 0 8px 0;
                    letter-spacing: -0.5px;
                }

                .email-header p {
                    font-size: 14px;
                    opacity: 0.95;
                    margin: 0;
                }

                .email-body {
                    padding: 40px 30px;
                }

                .info-section {
                    margin-bottom: 32px;
                }

                .info-grid {
                    display: grid;
                    gap: 20px;
                }

                .info-item {
                    background: #f9fafb;
                    padding: 16px 20px;
                    border-radius: 8px;
                    border-left: 4px solid #10b981;
                    transition: transform 0.2s ease;
                }

                .info-item:hover {
                    transform: translateX(4px);
                }

                .info-label {
                    font-size: 11px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: #6b7280;
                    margin-bottom: 6px;
                    display: block;
                }

                .info-value {
                    font-size: 15px;
                    color: #1f2937;
                    font-weight: 500;
                    word-break: break-word;
                }

                .info-value a {
                    color: #10b981;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }

                .info-value a:hover {
                    color: #059669;
                    text-decoration: underline;
                }

                .message-section {
                    margin-top: 32px;
                    padding-top: 32px;
                    border-top: 2px solid #e5e7eb;
                }

                .message-label {
                    font-size: 11px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: #6b7280;
                    margin-bottom: 12px;
                    display: block;
                }

                .message-box {
                    background: #f9fafb;
                    padding: 24px;
                    border-radius: 8px;
                    border-left: 4px solid #10b981;
                    line-height: 1.8;
                    font-size: 15px;
                    color: #374151;
                    white-space: pre-wrap;
                    word-wrap: break-word;
                }

                .email-footer {
                    background: #f9fafb;
                    padding: 30px;
                    text-align: center;
                    border-top: 1px solid #e5e7eb;
                }

                .email-footer p {
                    font-size: 13px;
                    color: #6b7280;
                    margin: 8px 0;
                }

                .timestamp {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 12px;
                    color: #9ca3af;
                    margin-top: 12px;
                    padding: 8px 16px;
                    background: #ffffff;
                    border-radius: 20px;
                    border: 1px solid #e5e7eb;
                }

                .badge {
                    display: inline-block;
                    padding: 6px 12px;
                    background: #dbeafe;
                    color: #1e40af;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 600;
                    margin-top: 12px;
                }

                @media only screen and (max-width: 600px) {
                    .email-wrapper {
                        border-radius: 0;
                    }

                    .email-header {
                        padding: 30px 20px;
                    }

                    .email-body {
                        padding: 30px 20px;
                    }

                    .email-header h1 {
                        font-size: 24px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="email-wrapper">
                <!-- Header -->
                <div class="email-header">
                    <h1>📧 New Contact Form Submission</h1>
                    <p>You have received a new message from your website</p>
                </div>

                <!-- Body -->
                <div class="email-body">
                    <!-- Contact Information Grid -->
                    <div class="info-section">
                        <div class="info-grid">
                            <!-- Name -->
                            <div class="info-item">
                                <span class="info-label">👤 Full Name</span>
                                <div class="info-value">${data.name}</div>
                            </div>

                            <!-- Email -->
                            <div class="info-item">
                                <span class="info-label">📧 Email Address</span>
                                <div class="info-value">
                                    <a href="mailto:${data.email}">${data.email}</a>
                                </div>
                            </div>

                            <!-- How can we help? -->
                            <div class="info-item">
                                <span class="info-label">👤 How can we help?</span>
                                <div class="info-value">${data.service}</div>
                            </div>
                        </div>
                    </div>

                    <!-- Message Section -->
                    <div class="message-section">
                        <span class="message-label">💬 Message</span>
                        <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="email-footer">
                    <p><strong>GapBridge Outsourcing</strong></p>
                    <p>This email was automatically generated from your contact form</p>
                    <div class="timestamp">
                        🕒 Received on ${currentDate}
                    </div>
                    <div class="badge">Action Required: Reply within 24 hours</div>
                </div>
            </div>
        </body>
    </html>
`;
}

// Auto-Reply Template for Customer
export function getAutoReplyTemplate(name: string): string {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Us</title>
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f4f7fa;
            padding: 20px;
        }

        .email-wrapper {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .email-header {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #ffffff;
            padding: 50px 30px;
            text-align: center;
        }

        .checkmark {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
        }

        .email-header h1 {
            font-size: 32px;
            font-weight: 700;
            margin: 0 0 8px 0;
            letter-spacing: -0.5px;
        }

        .email-header p {
            font-size: 16px;
            opacity: 0.95;
            margin: 0;
        }

        .email-body {
            padding: 40px 30px;
        }

        .greeting {
            font-size: 18px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 20px;
        }

        .content-text {
            font-size: 15px;
            color: #4b5563;
            margin-bottom: 16px;
            line-height: 1.8;
        }

        .highlight-box {
            background: #ecfdf5;
            border-left: 4px solid #10b981;
            padding: 20px;
            border-radius: 8px;
            margin: 30px 0;
        }

        .highlight-box h3 {
            font-size: 16px;
            color: #065f46;
            margin-bottom: 12px;
            font-weight: 600;
        }

        .highlight-box ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .highlight-box li {
            padding: 8px 0;
            color: #047857;
            font-size: 14px;
        }

        .highlight-box li:before {
            content: "✓ ";
            font-weight: bold;
            margin-right: 8px;
        }

        .response-time {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 16px 20px;
            border-radius: 8px;
            margin: 24px 0;
            font-size: 14px;
            color: #92400e;
        }

        .response-time strong {
            color: #78350f;
            font-size: 16px;
        }

        .signature {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 2px solid #e5e7eb;
        }

        .signature p {
            margin: 6px 0;
            font-size: 15px;
            color: #374151;
        }

        .signature .name {
            font-weight: 600;
            font-size: 16px;
            color: #1f2937;
        }

        .signature .title {
            font-size: 13px;
            color: #6b7280;
            font-style: italic;
        }

        .email-footer {
            background: #f9fafb;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
        }

        .company-info {
            margin-bottom: 16px;
        }

        .company-info h4 {
            font-size: 16px;
            color: #1f2937;
            margin-bottom: 8px;
            font-weight: 700;
        }

        .contact-details {
            font-size: 13px;
            color: #6b7280;
            margin: 4px 0;
        }

        .contact-details a {
            color: #10b981;
            text-decoration: none;
        }

        .contact-details a:hover {
            text-decoration: underline;
        }

        .social-links {
            margin-top: 24px;
            text-align: center; /* Ensures centering if flex fails */
        }

        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            background: #e5e7eb;
            border-radius: 50%;
            color: #6b7280;
            text-decoration: none;
            font-size: 14px; /* Slightly smaller for better fit */
            font-weight: bold;
            transition: all 0.2s ease;

            /* The centering secret for emails: */
            line-height: 36px;
            text-align: center;
        }

        .social-links a:hover {
            background: #10b981;
            color: #ffffff;
        }

        @media only screen and (max-width: 600px) {
            .email-wrapper {
            border-radius: 0;
            }

            .email-header {
            padding: 40px 20px;
            }

            .email-body {
            padding: 30px 20px;
            }

            .email-header h1 {
            font-size: 26px;
            }
        }
        </style>
    </head>

    <body>
        <div class="email-wrapper">
        <!-- Header -->
        <div class="email-header">
            <div class="checkmark">✓</div>
            <h1>Thank You, ${name}!</h1>
            <p>We've received your message</p>
        </div>

        <!-- Body -->
        <div class="email-body">
            <p class="greeting">Dear ${name},</p>

            <p class="content-text">
            Thank you for reaching out to <strong>GapBridge Outsourcing</strong>. We truly appreciate you taking the time
            to contact us.
            </p>

            <p class="content-text">
            Your message has been successfully received by our team, and we're excited to learn more about how we can
            support your business.
            </p>

            <div class="response-time">
            <strong>⏱️ Expected Response Time:</strong><br>
            Our team will review your inquiry and get back to you within <strong>24 hours</strong> during business days
            (Monday - Friday).
            </div>

            <div class="highlight-box">
            <h3>What Happens Next?</h3>
            <ul>
                <li>Our team will carefully review your message</li>
                <li>We'll prepare a personalized response to your inquiry</li>
                <li>A dedicated account manager will reach out to discuss your needs</li>
                <li>We'll schedule a consultation call if needed</li>
            </ul>
            </div>

            <p class="content-text">
            In the meantime, feel free to explore our services and learn more about how we've helped businesses like yours
            streamline their accounting operations.
            </p>

            <!-- Signature -->
            <div class="signature">
            <p class="name">Best regards,</p>
            <p class="name">The GapBridge Team</p>
            <p class="title">Your Trusted Offshore Accounting Partner</p>
            </div>
        </div>

        <!-- Footer -->
        <div class="email-footer">
            <div class="company-info">
            <h4>GapBridge Outsourcing Private Limited</h4>
            <p class="contact-details">
                📧 <a href="mailto:info@gapbridgebiz.com">info@gapbridgebiz.com</a>
            </p>
            <p class="contact-details">
                🌐 <a href="https://www.gapbridgebiz.com" target="_blank">www.gapbridgebiz.com</a>
            </p>
            <p class="contact-details">
                📍 Ahmedabad, Gujarat, India
            </p>
            </div>

            <!-- Social Links (Optional) -->
            <div class="social-links">
            <a href="#" title="LinkedIn">in</a>
            <a href="#" title="Twitter">𝕏</a>
            <a href="#" title="Facebook">f</a>
            </div>

            <p style="font-size: 11px; color: #9ca3af; margin-top: 20px;">
            This is an automated response. Please do not reply directly to this email.
            </p>
        </div>
        </div>
    </body>
    </html>`;
}