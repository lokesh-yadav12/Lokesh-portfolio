# Email Setup Instructions

## How to Setup Contact Form Email

Your contact form now uses **Web3Forms** - a free service that sends emails directly to your inbox.

### Steps to Complete Setup:

1. **Get Your Free Access Key**
   - Go to: https://web3forms.com/
   - Enter your email: `lokesh916635@gmail.com`
   - Click "Get Access Key"
   - Copy the access key they send you

2. **Add the Access Key to Your Code**
   - Open: `src/components/Form/Form.tsx`
   - Find line 26: `formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY_HERE')`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual access key

3. **Test the Form**
   - Save the file
   - The form will now send emails to `lokesh916635@gmail.com`

### Example:
```typescript
formData.append('access_key', 'abc123-your-actual-key-here')
```

### Features:
- ✅ Free forever (up to 250 submissions/month)
- ✅ No backend required
- ✅ Spam protection included
- ✅ Email notifications to lokesh916635@gmail.com
- ✅ Works on Vercel and any hosting platform

### Need Help?
Visit: https://docs.web3forms.com/
