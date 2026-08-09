# Guardería Mi Bendición

Standalone Next.js replacement for the Base44 site.

## Local setup
1. Install Node.js 20+
2. Run `npm install`
3. Copy `.env.example` to `.env.local`
4. Add your Resend key and recipient email
5. Run `npm run dev`

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Import the repo in Vercel.
3. Add environment variables:
   - `RESEND_API_KEY`
   - `INQUIRY_TO_EMAIL`
   - `INQUIRY_FROM_EMAIL`
4. Deploy.
5. In Vercel, add your custom domain.

## Resend
Verify your sending domain in Resend before using a custom `INQUIRY_FROM_EMAIL` address.
