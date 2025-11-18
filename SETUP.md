# Environment Setup

## EmailJS Configuration

This project uses EmailJS for the contact form. You'll need to set up your own EmailJS account and credentials.

### Steps to Set Up:

1. **Create an EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Get Your Credentials**
   - **Service ID**: Create an email service (Gmail, Outlook, etc.)
   - **Template ID**: Create an email template for contact form submissions
   - **Public Key**: Found in your EmailJS account settings

3. **Create Your `.env` File**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Replace the placeholder values with your actual credentials:
     ```
     REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
     REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
     REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
     ```

4. **Never Commit `.env`**
   - The `.env` file is already in `.gitignore`
   - **Never** push your actual credentials to GitHub
   - Always use `.env.example` to show what variables are needed

### Template Variables

Your EmailJS template should include these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content

### Security Notes

- ⚠️ **Never share your `.env` file**
- ⚠️ **Never commit API keys to Git**
- ⚠️ **Regenerate keys immediately if exposed**
- ✅ Use environment variables for deployment (GitHub Secrets, Vercel, Netlify)

### For Deployment

When deploying to platforms like Vercel, Netlify, or GitHub Pages:
- Add environment variables in the platform's settings
- Do NOT include the `.env` file in your build
- Use the platform's secrets/environment variable feature

### Regenerating Exposed Keys

If your keys were exposed:
1. Go to EmailJS Dashboard
2. Delete the old service/template
3. Create new ones with new IDs
4. Update your local `.env` file
5. Update deployment environment variables
