import sgMail from '@sendgrid/mail';

export default async function sendEmail (req, res) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { email, message } = req.body;

    const msg = {
        to: email,
        from: 'Your email',
        subject: 'Subject of your email',
        text: message,
        html: `<p>${message}</p>`,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error sending email' });
    }
    }
