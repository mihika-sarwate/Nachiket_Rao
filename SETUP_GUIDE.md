# Setup Guide - Therapy Website

## Quick Start Steps

### Step 1: Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Sanity CMS
- Tailwind CSS
- TypeScript
- And all other dependencies

### Step 2: Create Sanity Project

1. Go to [https://www.sanity.io/](https://www.sanity.io/)
2. Click "Get Started" and sign up/log in
3. Create a new project
4. Choose a project name (e.g., "My Therapy Website")
5. Choose "Production" dataset
6. Copy your **Project ID** (you'll need this next)

### Step 3: Configure Environment Variables

1. Create a file named `.env.local` in the root directory
2. Add the following content (replace with your actual Project ID):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

**Example:**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123def
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Step 4: Start Development Server

```bash
npm run dev
```

Wait for the server to start. You should see:
```
✓ Ready in 2.5s
○ Local: http://localhost:3000
```

### Step 5: Access Sanity Studio

1. Open your browser
2. Go to: `http://localhost:3000/studio`
3. Log in with your Sanity account
4. You'll see the Sanity Studio admin panel

### Step 6: Add Required Content

You MUST create at least one document for each of these types:

#### 1. Settings (Required)
- Click "Website Settings" in the sidebar
- Click "Create new"
- Fill in:
  - Website Name: "Your Practice Name"
  - Tagline: "Your tagline here"
  - Consultation Charge: "₹500 per session"
  - Welcome Title: "Welcome"
  - Welcome Content: Add some welcome text
  - Primary Color: "#00137a"
  - Upload a logo image (optional)
- Click "Publish"

#### 2. About Section (Required)
- Click "About Section"
- Click "Create new"
- Fill in:
  - Title: "About Me"
  - Content: Write about yourself
  - Mission: Your mission statement
  - Upload Profile Image
- Click "Publish"

#### 3. Approach Section (Required)
- Click "Approach Section"
- Click "Create new"
- Fill in title and content
- Click "Publish"

#### 4. Why Choose Section (Required)
- Click "Why Choose Section"
- Click "Create new"
- Fill in title and content
- Click "Publish"

#### 5. Services (Add at least 1)
- Click "Services"
- Click "Create new"
- Fill in:
  - Title: "Individual Therapy"
  - Description: Service details
  - Icon: "🧘" (optional emoji)
  - Upload image (optional)
- Click "Publish"
- Repeat for more services

#### 6. Myths & Facts (Add at least 1)
- Click "Myths & Facts"
- Click "Create new"
- Fill in myth and fact
- Click "Publish"

#### 7. Packages (Add at least 1)
- Click "Packages"
- Click "Create new"
- Fill in:
  - Name: "Starter Package"
  - Duration: "4 Sessions"
  - Price: "₹2000"
  - Add items to "What's Included"
- Click "Publish"

#### 8. Contact Info (Required)
- Click "Contact Information"
- Click "Create new"
- Fill in email, phone, and address
- Click "Publish"

### Step 7: View Your Website

1. Go to: `http://localhost:3000`
2. You should see your fully populated website!
3. The welcome popup will appear on first visit

## Common Issues & Solutions

### Issue: "Please configure your settings"
**Solution:** You need to create a Settings document in Sanity Studio first.

### Issue: Website shows blank sections
**Solution:** Make sure you've created and published content for all sections in Sanity.

### Issue: Images not showing
**Solution:** Check that you've uploaded images in Sanity and that next.config.js allows cdn.sanity.io

### Issue: Fonts not loading
**Solution:** Check your internet connection. Fonts are loaded from Google Fonts and CDN Fonts.

### Issue: "Invalid projectId"
**Solution:** Double-check your .env.local file has the correct NEXT_PUBLIC_SANITY_PROJECT_ID

## Production Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variables:
   - NEXT_PUBLIC_SANITY_PROJECT_ID
   - NEXT_PUBLIC_SANITY_DATASET
   - NEXT_PUBLIC_SANITY_API_VERSION
6. Click "Deploy"

Your website will be live at: `https://your-project.vercel.app`

### Accessing Sanity Studio in Production

After deployment, access your CMS at:
`https://your-project.vercel.app/studio`

## Editing Content After Launch

1. Go to `https://yourdomain.com/studio`
2. Log in with your Sanity account
3. Edit any content
4. Click "Publish"
5. Changes appear on the website within seconds

## Need Help?

- Check the README.md file for detailed documentation
- Visit Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Visit Sanity docs: [sanity.io/docs](https://www.sanity.io/docs)

## File Structure Overview

```
nachiket/
├── app/
│   ├── layout.tsx          # Main layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── studio/             # Sanity Studio
├── components/             # All UI components
├── schemas/                # Sanity schemas
├── lib/
│   └── sanity.ts          # Sanity client
├── types/
│   └── sanity.ts          # TypeScript types
├── .env.local             # Environment variables (create this)
├── package.json           # Dependencies
└── README.md              # Documentation
```

## Customization Tips

### Change Colors
Edit `tailwind.config.ts` - change the `primary` color value

### Change Fonts
Edit `app/layout.tsx` - update the Google Fonts import

### Add New Sections
1. Create a new schema in `schemas/`
2. Create a new component in `components/`
3. Fetch data in `app/page.tsx`
4. Render the component

### Modify Gradient Background
Edit `app/layout.tsx` - change the gradient classes in the body tag

---

You're all set! 🎉
