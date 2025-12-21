# Autaimate Hub

Marketing website for Autaimate - Automation solutions for UK businesses.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS

## Local Development

```bash
npm install
npm run dev
```

## Deploy to Railway

### Option 1: GitHub Integration (Recommended)

1. Push this code to a GitHub repository
2. Go to [Railway](https://railway.app)
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Railway auto-detects Vite and deploys

### Option 2: Railway CLI

```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

## Railway Configuration

Railway will automatically detect this as a Vite project. If needed, add these environment variables:

- `PORT`: Railway sets this automatically

The `vite.config.ts` is already configured to use the PORT environment variable.

## Build

```bash
npm run build
```

Output will be in the `dist` folder.

## Custom Domain

In Railway dashboard:
1. Go to your project settings
2. Click "Domains"
3. Add `autaimate.com` (or your domain)
4. Update DNS records as shown

## Structure

```
src/
├── App.tsx       # Main component with all sections
├── main.tsx      # Entry point
├── index.css     # Tailwind + custom styles
└── vite-env.d.ts # TypeScript declarations
```

## Customization

Edit `src/App.tsx` to update:
- Product list and details
- Contact information
- Company description
- Styling/colors
