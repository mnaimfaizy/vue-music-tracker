# Testing Forgot Password Feature Locally

## Quick Start

The app is running at: http://localhost:5174

## Two Ways to Test

### Option 1: Using Firebase's Default Reset Page (Current Setup)

1. **Start the app** (already running)
2. **Test the flow:**
   - Go to http://localhost:5174
   - Click the login button
   - Click "Forgot password?" link
   - Enter a valid email address
   - Check your email inbox
   - Click the reset link in the email
   - You'll be redirected to Firebase's default reset page

### Option 2: Using Custom In-App Reset Page (Recommended)

This provides a better user experience by keeping users in your app.

#### Setup Steps:

1. **Configure Firebase Console:**
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Select your project: `musictracker-d32f9`
   - Navigate to: **Authentication** → **Templates** → **Password reset**
   - Click **"Customize action URL"**
   - Enter: `http://localhost:5174/reset-password`
   - Click **Save**

2. **Test the complete flow:**
   - Go to http://localhost:5174
   - Click login → "Forgot password?"
   - Enter your email
   - Check your email
   - Click the reset link
   - You'll be redirected to your custom reset password page
   - Enter a new password
   - Password is reset!

## Customizing Email Template

### Via Firebase Console:

1. Go to **Authentication** → **Templates** → **Password reset**
2. Customize:
   - **Sender name**: (e.g., "Music Tracker Team")
   - **Subject**: (e.g., "Reset your Music Tracker password")
   - **Email body**: Use variables like:
     - `%LINK%` - The reset link
     - `%EMAIL%` - User's email
     - `%APP_NAME%` - Your app name

### Example Custom Email Body:

```
Hello,

We received a request to reset your password for your Music Tracker account (%EMAIL%).

Click the link below to reset your password:
%LINK%

If you didn't request this, you can safely ignore this email.

Thanks,
The Music Tracker Team
```

## For Production Deployment

When deploying to production, update the action URL in Firebase Console to your production domain:
- Instead of `http://localhost:5174/reset-password`
- Use: `https://yourdomain.com/reset-password`

## Testing Tips

1. **Use a real email** you have access to
2. **Check spam folder** if email doesn't arrive
3. **Reset links expire** after a certain time (Firebase default: 1 hour)
4. The custom URL in the code (`actionCodeSettings`) will work automatically for both local and production

## Troubleshooting

- **Link redirects to wrong domain**: Update the action URL in Firebase Console
- **Link expired**: Request a new reset link
- **Email not received**: Check Firebase Console → Authentication to see if user exists
