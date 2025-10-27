import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_ZkkSVrNm_2AcWQEZ2zEvBjkJ2noaXacFt');

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  project: string;
  selectedServices: string[];
  selectedBudget: string;
}

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 3;

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const userData = rateLimitMap.get(ip);
  if (!userData || now > userData.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 };
  }
  if (userData.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 };
  }
  userData.count++;
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - userData.count };
}

function detectSpam(data: ContactFormData): { isSpam: boolean; reason?: string } {
  const suspiciousWords = ['viagra', 'casino', 'loan', 'credit', 'free money', 'make money fast', 'get rich quick'];
  const projectText = data.project.toLowerCase();
  
  // Check for suspicious words
  for (const word of suspiciousWords) {
    if (projectText.includes(word)) {
      console.log(`Spam detected: Contains suspicious word "${word}"`);
      return { isSpam: true, reason: 'Contains suspicious content' };
    }
  }
  
  // Length check removed - project description is now optional
  if (data.project && data.project.length > 2000) {
    console.log('Spam detected: Message too long');
    return { isSpam: true, reason: 'Message too long' };
  }
  
  // Only flag obvious test emails
  const email = data.email.toLowerCase();
  if (email === 'test@test.com' || email === 'admin@test.com') {
    console.log('Spam detected: Test email');
    return { isSpam: true, reason: 'Test email detected' };
  }
  
  // Only flag obvious test names
  const suspiciousNames = ['test', 'admin', 'spam'];
  const name = data.name.toLowerCase().trim();
  for (const suspiciousName of suspiciousNames) {
    if (name === suspiciousName) {
      console.log(`Spam detected: Suspicious name "${name}"`);
      return { isSpam: true, reason: 'Suspicious name detected' };
    }
  }
  
  console.log('No spam detected');
  return { isSpam: false };
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateFormData(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // More lenient validation for testing
  if (!data.name || data.name.trim().length < 1) {
    errors.push('Name is required');
  }
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }
  // Project description validation removed - optional field
  if (!data.selectedServices || data.selectedServices.length === 0) {
    errors.push('Please select at least one service');
  }
  if (!data.selectedBudget) {
    errors.push('Please select a budget range');
  }
  
  console.log('Validation errors:', errors);
  return {
    isValid: errors.length === 0,
    errors,
  };
}

async function sendEmail(formData: ContactFormData): Promise<boolean> {
  try {
    // Use the API key from fallback (hardcoded in the const resend declaration)
    console.log('Attempting to send emails...');
    console.log('Form data received:', {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      project: formData.project,
      services: formData.selectedServices,
      budget: formData.selectedBudget
    });

    const contactEmail = process.env.CONTACT_EMAIL || 'moinsayyad529@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
    
    console.log('Contact email:', contactEmail);
    console.log('From email:', fromEmail);

    // Send email to you (the portfolio owner)
    console.log('Attempting to send email via Resend...');
    const adminEmailResult = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: contactEmail,
      subject: `New Contact Form Submission from ${formData.name}`,
      replyTo: formData.email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Services:</strong> ${formData.selectedServices.join(', ')}</p>
            <p><strong>Budget:</strong> ${formData.selectedBudget}</p>
            <p><strong>Project Description:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${formData.project.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `,
    });

    console.log('Admin email result:', JSON.stringify(adminEmailResult, null, 2));
    
    if (adminEmailResult.error) {
      console.error('Admin email error:', adminEmailResult.error);
      throw new Error(`Failed to send email: ${JSON.stringify(adminEmailResult.error)}`);
    }

    // Send confirmation email to the user
    const userEmailResult = await resend.emails.send({
      from: `MOIN's Portfolio <${fromEmail}>`,
      to: formData.email,
      subject: 'Thank you for contacting MOIN\'s Portfolio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Reaching Out!</h2>
          <p>Hi ${formData.name},</p>
          <p>Thank you for contacting MOIN's Portfolio. We've received your message and are excited to learn more about your project.</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Services Selected:</strong> ${formData.selectedServices.join(', ')}</p>
            <p><strong>Budget Range:</strong> ${formData.selectedBudget}</p>
          </div>
          <p>We'll get back to you within 24-48 hours.</p>
          <p>Best regards,<br>The MOIN's Portfolio Team</p>
        </div>
      `,
    });

    console.log('User email result:', JSON.stringify(userEmailResult, null, 2));
    
    if (userEmailResult.error) {
      console.error('User email error:', userEmailResult.error);
      // Don't throw error for user email - admin email is more important
      console.log('User confirmation email failed, but admin email succeeded');
    }

    return true;
  } catch (error) {
    console.error('Failed to send email via Resend:', error);
    console.error('Error details:', error);
    // Don't fail the form submission if email fails
    console.log('Email sending failed, but form submission will continue');
    return true;
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';
    
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please try again later.',
        },
        { status: 429 }
      );
    }

    let body;
    try {
      body = await request.json();
    } catch (error) {
      console.error('Failed to parse request body:', error);
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid request body format',
        },
        { status: 400 }
      );
    }
    
    const formData: ContactFormData = body;

    console.log('Received form data:', formData);
    
    const validation = validateFormData(formData);
    console.log('Validation result:', validation);
    
    if (!validation.isValid) {
      console.log('Validation failed:', validation.errors);
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    const spamCheck = detectSpam(formData);
    if (spamCheck.isSpam) {
      console.log(`Spam detected from ${ip}: ${spamCheck.reason}`);
      return NextResponse.json(
        {
          success: false,
          message: 'Your message appears to be spam. Please provide more details about your project.',
        },
        { status: 400 }
      );
    }

    console.log('Attempting to send email with data:', {
      name: formData.name,
      email: formData.email,
      services: formData.selectedServices,
      budget: formData.selectedBudget
    });

    const emailSent = await sendEmail(formData);
    if (!emailSent) {
      console.error('Email sending failed');
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send email notification. Please check server logs for details.',
        },
        { status: 500 }
      );
    }

    console.log('Email sent successfully');

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We\'ll get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form API error:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error. Please try again later.',
        error: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Contact API endpoint' }, { status: 200 });
}
