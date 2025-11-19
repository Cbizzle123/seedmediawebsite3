import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, company, message }: ContactFormData = await req.json();

    const emailBody = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}
    `;

    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY not configured');
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'Seeded Media Contact Form <onboarding@resend.dev>',
        to: ['charlie@seededmedia.co.uk'],
        subject: `New Contact Form: ${name}`,
        text: emailBody,
        reply_to: email,
      }),
    });

    const emailText = await emailResponse.text();

    if (!emailResponse.ok) {
      console.error('Resend API error:', emailText);
      throw new Error(`Failed to send email: ${emailText}`);
    }

    let emailData;
    try {
      emailData = JSON.parse(emailText);
    } catch (parseError) {
      console.error('Failed to parse email response:', emailText);
      throw new Error('Invalid response from email service');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully', data: emailData }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Error in send-contact-email function:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
