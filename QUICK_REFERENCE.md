# Quick Reference Guide

## Common Commands

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Accessing the Application

| Purpose | URL |
|---------|-----|
| Homepage | http://localhost:3000 |
| Sanity Studio (Admin) | http://localhost:3000/studio |

## Environment Variables

File: `.env.local`

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## File Locations Reference

### Key Configuration Files

```
📄 next.config.js           → Next.js settings
📄 tailwind.config.ts       → Styling configuration
📄 sanity.config.ts         → Sanity CMS setup
📄 tsconfig.json            → TypeScript config
📄 .env.local              → Environment variables
```

### Important Directories

```
📁 app/                    → Next.js pages
📁 components/             → React components
📁 schemas/                → Sanity content models
📁 lib/                    → Utilities (Sanity client)
📁 types/                  → TypeScript definitions
```

## Sanity Schema Reference

| Schema | Type | Purpose |
|--------|------|---------|
| `settings` | Singleton | Website name, logo, colors |
| `about` | Singleton | About section content |
| `approach` | Singleton | Therapy approach |
| `whyChoose` | Singleton | Why choose section |
| `service` | Multiple | Service offerings |
| `mythFact` | Multiple | Myths & facts |
| `package` | Multiple | Pricing packages |
| `contactInfo` | Singleton | Contact details |

## Component Reference

| Component | Purpose | Data Source |
|-----------|---------|-------------|
| `WelcomePopup` | First-visit modal | settings.welcomeTitle |
| `HeroSection` | Main header | settings |
| `AboutSection` | About content | about |
| `ApproachSection` | Approach content | approach |
| `WhyChooseSection` | Why choose | whyChoose |
| `ServicesGrid` | Services display | service[] |
| `MythsFactsSection` | Myths & facts | mythFact[] |
| `PackagesSection` | Pricing display | package[] |
| `ContactSection` | Contact info | contactInfo |
| `Footer` | Footer | settings |

## Common Tasks

### Add New Service

1. Go to http://localhost:3000/studio
2. Click "Services" → "+ Create"
3. Fill in details
4. Click "Publish"

### Update Homepage Content

1. Go to http://localhost:3000/studio
2. Select the section you want to edit
3. Make changes
4. Click "Publish"

### Change Website Colors

1. Go to http://localhost:3000/studio
2. Click "Website Settings"
3. Edit "Primary Color" field
4. Click "Publish"

### Upload New Image

1. In Sanity Studio, click the image field
2. Click "Select" or drag & drop
3. Upload image
4. Adjust hotspot if needed
5. Click "Publish"

## Troubleshooting Quick Fixes

### Website shows "Please configure settings"
```bash
# Create Settings document in Sanity Studio
1. Visit http://localhost:3000/studio
2. Create "Website Settings" document
3. Publish
```

### Changes not showing
```bash
# Clear browser cache and refresh
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### Port already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### "Invalid projectId" error
```bash
# Check .env.local file exists and has correct ID
# Restart dev server
Ctrl + C
npm run dev
```

## Content Management Quick Tips

### Rich Text Formatting

| Action | How |
|--------|-----|
| Bold | Select text → Click **B** |
| Italic | Select text → Click *I* |
| Heading | Click ¶ → Choose level |
| Link | Select text → Click 🔗 |
| List | Click bullet/number icon |

### Image Best Practices

- **Format**: JPG for photos, PNG for graphics
- **Size**: At least 1000px wide
- **File size**: Under 2MB
- **Quality**: High resolution

### Content Writing Tips

- **Headlines**: Clear and descriptive
- **Body text**: Short paragraphs (2-3 sentences)
- **Lists**: Use bullet points for scanning
- **Tone**: Professional yet warm

## Deployment Quick Reference

### Deploy to Vercel

```bash
# 1. Push code to GitHub
git init
git add .
git commit -m "Initial commit"
git push origin main

# 2. Go to vercel.com
# 3. Import repository
# 4. Add environment variables
# 5. Deploy
```

### Environment Variables for Production

Add these in Vercel dashboard:

```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SANITY_API_VERSION
```

## Performance Tips

### Optimize Images
- Use appropriate sizes
- Enable hotspot in Sanity
- Let next/image handle optimization

### Content Strategy
- Keep text concise
- Use headings for hierarchy
- Break content into sections

### Loading Speed
- Minimize number of images
- Compress images before upload
- Use WebP format when possible

## Security Checklist

- [ ] `.env.local` in `.gitignore`
- [ ] Never commit API keys
- [ ] Use environment variables
- [ ] Keep dependencies updated
- [ ] Enable CORS only for your domain

## Keyboard Shortcuts

### Sanity Studio

| Action | Shortcut |
|--------|----------|
| Publish | Ctrl/Cmd + Alt + P |
| Save draft | Ctrl/Cmd + S |
| Close pane | Esc |

### VS Code (Development)

| Action | Shortcut |
|--------|----------|
| Open terminal | Ctrl + ` |
| Quick open file | Ctrl/Cmd + P |
| Search in files | Ctrl/Cmd + Shift + F |

## Useful Links

| Resource | URL |
|----------|-----|
| Sanity Dashboard | https://sanity.io/manage |
| Next.js Docs | https://nextjs.org/docs |
| Tailwind Docs | https://tailwindcss.com/docs |
| Vercel Dashboard | https://vercel.com/dashboard |

## Support Documents

| Document | Purpose |
|----------|---------|
| `README.md` | Complete documentation |
| `SETUP_GUIDE.md` | Step-by-step setup |
| `GETTING_STARTED.md` | First-time setup |
| `CONTENT_MANAGEMENT_GUIDE.md` | Admin user guide |
| `ARCHITECTURE.md` | Technical overview |
| `PROJECT_SUMMARY.md` | Project overview |

## Version Information

- **Next.js**: 14.1.0
- **React**: 18.2.0
- **Sanity**: 3.22.0
- **TypeScript**: 5.x
- **Tailwind CSS**: 3.3.0

## Quick Diagnostic

### Is everything working?

✅ Run: `npm run dev`
✅ Visit: http://localhost:3000
✅ Should see: Website with content
✅ Visit: http://localhost:3000/studio
✅ Should see: Sanity Studio login

### Common Error Messages

| Error | Solution |
|-------|----------|
| "Module not found" | Run `npm install` |
| "Port in use" | Use `npm run dev -- -p 3001` |
| "Invalid project ID" | Check `.env.local` |
| "Please configure settings" | Create Settings in Studio |

## Getting Help

1. Check this Quick Reference
2. Read SETUP_GUIDE.md
3. Check TROUBLESHOOTING section in README
4. Visit Next.js/Sanity documentation
5. Contact developer/support

---

**Keep this file handy for quick lookups!** 📚
