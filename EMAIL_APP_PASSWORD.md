# Gmail App Password Setup

This guide explains how to create the `EMAIL_APP_PASSWORD` value used by the backend email server.

## Why you need it

The backend sends contact form emails through Gmail SMTP. Google requires an app password when:

- you use a Gmail account with 2-Step Verification enabled
- you send email from a third-party app or server

This password is not your normal Gmail login password.

## Steps to create the app password

1. Open your Google Account security settings:
   - Go to `https://myaccount.google.com/security`

2. Enable 2-Step Verification
   - Under the "Signing in to Google" section, turn on `2-Step Verification` if it is not already enabled.

3. Create an App Password
   - In the same `Security` section, open `App passwords`
   - Choose `Select app` → `Mail`
   - Choose `Select device` → `Other (Custom name)`
   - Enter a name like `VydyutSolutions` and click `Generate`

4. Copy the generated password
   - Google will display a 16-character app password
   - Copy this value exactly into your `.env` file

## Example `.env` entry

```env
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=abcd efgh ijkl mnop
SALES_EMAIL=sales@yourdomain.com
```

## Important notes

- Do not commit the actual app password to source control.
- Keep real credentials in `server/.env` only.
- Use `server/.env.example` as the safe template for repo sharing.
