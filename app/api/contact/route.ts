import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_Dcznxdqq_9rjvimSJEPw5KkRphCPYJThe');

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
  const suspiciousWords = ['viagra', 'casino', 'loan', 'credit', 'free money', 'make money fast'];
  const projectText = data.project.toLowerCase();
  for (const word of suspiciousWords) {
    if (projectText.includes(word)) {
      return { isSpam: true, reason: 'Contains suspicious content' };
    }
  }
  if (data.project.length < 10) {
    return { isSpam: true, reason: 'Message too short' };
  }
  if (data.project.length > 2000) {
    return { isSpam: true, reason: 'Message too long' };
  }
  const email = data.email.toLowerCase();
  if (email.includes('test') && email.includes('@test.com')) {
    return { isSpam: true, reason: 'Test email detected' };
  }
  const suspiciousNames = ['test', 'admin', 'user', 'guest', 'anonymous'];
  const name = data.name.toLowerCase();
  for (const suspiciousName of suspiciousNames) {
    if (name === suspiciousName) {
      return { isSpam: true, reason: 'Suspicious name detected' };
    }
  }
  return { isSpam: false };
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateFormData(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }
  if (!data.project || data.project.trim().length < 10) {
    errors.push('Project description must be at least 10 characters long');
  }
  if (!data.selectedServices || data.selectedServices.length === 0) {
    errors.push('Please select at least one service');
  }
  if (!data.selectedBudget) {
    errors.push('Please select a budget range');
  }
  return {
    isValid: errors.length === 0,
    errors,
  };
}

async function sendEmail(formData: ContactFormData): Promise<boolean> {
  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'moinsayyad529@gmail.com',
      subject: `New Contact Form Submission from ${formData.name}`,
      replyTo: formData.email,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Services:</strong> ${formData.selectedServices.join(', ')}</p>
          <p><strong>Budget:</strong> ${formData.selectedBudget}</p>
          <p><strong>Project:</strong><br>${formData.project.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    await resend.emails.send({
      from: 'MOIN\'s COLLECTION <onboarding@resend.dev>',
      to: formData.email,
      subject: 'Thank you for contacting MOIN\'s COLLECTION',
      html: `
        <div>
          <h2>Thank You for Reaching Out!</h2>
          <p>Hi ${formData.name},</p>
          <p>Thank you for contacting MOIN's COLLECTION. We've received your message and are excited to learn more about your project.</p>
          <p><strong>Services:</strong> ${formData.selectedServices.join(', ')}</p>
          <p><strong>Budget Range:</strong> ${formData.selectedBudget}</p>
          <p>We’ll get back to you within 24-48 hours.</p>
          <p>Best regards,<br>The MOIN's COLLECTION Team</p>
        </div>
      `,
    });
    return true;
  } catch (error) {
    console.error('Failed to send email via Resend:', error);
    return false;
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

    const body = await request.json();
    const formData: ContactFormData = body;

    const validation = validateFormData(formData);
    if (!validation.isValid) {
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

    const emailSent = await sendEmail(formData);
    if (!emailSent) {
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send email notification. Please check server logs for details.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! We\'ll get back to you soon.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form API error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error. Please try again later.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Contact API endpoint' }, { status: 200 });
}
