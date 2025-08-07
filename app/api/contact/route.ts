import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const message = formData.get('message') as string

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.redirect(new URL('/contact?error=true', request.url))
    }

    // Create email content
    const emailContent = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

---
This message was sent from the contact form on the website.
    `.trim()

    // For now, we'll log the email data
    // In production, you would send the actual email here
    console.log('Email data to be sent:', {
      to: 'chris.gamer@thisiswellness.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: emailContent,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from the contact form on the website.</em></p>
      `
    })

    // Redirect back to contact page with success message
    return NextResponse.redirect(new URL('/contact?success=true', request.url))

  } catch (error) {
    console.error('Contact form error:', error)
    // Redirect back to contact page with error message
    return NextResponse.redirect(new URL('/contact?error=true', request.url))
  }
} 