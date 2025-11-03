# Setting Up Netlify Forms

Your contact form is now configured to work with Netlify Forms! Here's what you need to do:

## ✅ What I've Already Done

1. Added `data-netlify="true"` to your form
2. Added `name="contact"` to identify the form
3. Added hidden form fields for Netlify recognition
4. Added spam protection (honeypot field)
5. Updated form submission to work with Netlify
6. Added error handling

## 📧 Step 1: Update Your Email Address

**IMPORTANT:** Update the email address in `src/components/Contact.jsx`:

Find this line (around line 48):
```javascript
value: 'your-email@example.com',
href: 'mailto:your-email@example.com'
```

Replace `your-email@example.com` with your actual email address.

## 🚀 Step 2: Deploy to Netlify

1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Add Netlify Forms support to contact form"
   git push origin main
   ```

2. **If you haven't connected to Netlify yet:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Connect your GitHub repository
   - Netlify will auto-deploy

## ⚙️ Step 3: Configure Email Notifications in Netlify

After deploying:

1. Go to your Netlify dashboard
2. Click on your site
3. Go to **Forms** in the left sidebar
4. You should see your "contact" form listed
5. Click on the form to configure:
   - **Notifications**: Choose how you want to be notified (email, Slack, webhook, etc.)
   - **Email notifications**: Add your email address to receive submissions
   - **Spam filtering**: Already enabled via honeypot

## 📨 Step 4: Test the Form

1. Visit your deployed site
2. Fill out the contact form
3. Submit it
4. Check:
   - You should see a success message on the page
   - You should receive an email (if email notifications are set up)
   - Check Netlify dashboard → Forms → contact form to see submissions

## 🔍 Viewing Form Submissions

You can view all form submissions in two ways:

1. **Netlify Dashboard:**
   - Go to Forms → Your form name
   - See all submissions in the dashboard

2. **Email Notifications:**
   - If configured, you'll receive an email for each submission

## 🛡️ Spam Protection

The form includes:
- **Honeypot field**: Catches basic bots
- **Netlify's built-in spam filtering**: Advanced protection

## 🐛 Troubleshooting

### Form submissions not working:
- Make sure the form is deployed to Netlify (not just running locally)
- Check that `public/index.html` exists (I created it for you)
- Verify the form has `data-netlify="true"` attribute

### Not receiving emails:
- Check Netlify Forms → Settings → Notifications
- Make sure your email is added in notifications
- Check spam folder

### Form works but no success message:
- Check browser console for errors
- The form should still submit even if JavaScript has issues

## 📝 Customizing Notifications

In Netlify dashboard → Forms → Notifications, you can:
- Set up email notifications to multiple addresses
- Configure Slack notifications
- Set up webhooks
- Create custom notification templates

## 🎉 You're All Set!

Once deployed to Netlify, your contact form will automatically:
- ✅ Collect submissions
- ✅ Send you email notifications
- ✅ Protect against spam
- ✅ Store submissions in Netlify dashboard

Just remember to **update your email address** in the Contact.jsx file!
