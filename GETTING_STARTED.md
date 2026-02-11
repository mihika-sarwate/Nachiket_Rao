# Installation & First Run Checklist

Follow these steps in order to get your website running:

## ✅ Step 1: Install Node.js (If Not Installed)

**Check if you have Node.js:**
```bash
node --version
```

If you see a version number (v18 or higher), skip to Step 2.

**If not installed:**
1. Go to [nodejs.org](https://nodejs.org)
2. Download LTS version
3. Install and restart your terminal

---

## ✅ Step 2: Install Dependencies

Open a terminal in the project folder and run:

```bash
npm install
```

**Wait for it to complete.** This may take 2-5 minutes.

---

## ✅ Step 3: Create Sanity Project

1. Go to [https://www.sanity.io/](https://www.sanity.io/)
2. Click "Get Started"
3. Sign up or log in (use Google/GitHub for quick signup)
4. Click "Create Project"
5. Enter project name (e.g., "My Therapy Website")
6. Choose dataset: "Production"
7. **COPY YOUR PROJECT ID** (looks like: `abc123def`)

---

## ✅ Step 4: Configure Environment Variables

1. Open the project folder
2. Find the file: `.env.example`
3. Create a copy and rename it to: `.env.local`
4. Open `.env.local` in a text editor
5. Paste your Project ID:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123def
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

6. Save the file

---

## ✅ Step 5: Start Development Server

In your terminal, run:

```bash
npm run dev
```

**Wait for:**
```
✓ Ready in 2.5s
○ Local: http://localhost:3000
```

---

## ✅ Step 6: Access Sanity Studio

1. Open browser
2. Go to: `http://localhost:3000/studio`
3. Click "Continue with Google" or your chosen login
4. Authorize the application

**You should now see the Sanity Studio!**

---

## ✅ Step 7: Add Required Content

### Create these documents (in order):

#### 1. Website Settings
- Click **"Website Settings"** in sidebar
- Click **"Create new"**
- Fill in ALL fields:
  - Website Name: "Your Practice Name"
  - Tagline: "Healing minds, changing lives"
  - Consultation Charge: "₹500 per session"
  - Welcome Title: "Welcome to Our Practice"
  - Welcome Content: Click "Add item" → Write welcome message
  - Primary Color: "#00137a"
  - (Optional) Upload logo
- Click **"Publish"** ✅

#### 2. About Section
- Click **"About Section"**
- Click **"Create new"**
- Fill in:
  - Title: "About Me"
  - Content: Write about yourself
  - Mission: "My mission is to..."
  - Profile Image: Upload a photo
- Click **"Publish"** ✅

#### 3. Approach Section
- Click **"Approach Section"**
- Click **"Create new"**
- Fill in:
  - Title: "My Approach"
  - Content: Describe your therapeutic approach
- Click **"Publish"** ✅

#### 4. Why Choose Section
- Click **"Why Choose Section"**
- Click **"Create new"**
- Fill in:
  - Title: "Why Choose Us"
  - Content: List your advantages
- Click **"Publish"** ✅

#### 5. Contact Information
- Click **"Contact Information"**
- Click **"Create new"**
- Fill in:
  - Email: your@email.com
  - Phone: +91 1234567890
  - Address: Your full address
- Click **"Publish"** ✅

#### 6. Add Services (at least 1)
- Click **"Services"**
- Click **"Create new"**
- Fill in:
  - Title: "Individual Therapy"
  - Description: Service details
  - Icon: "🧘" (copy/paste emoji)
  - (Optional) Upload image
- Click **"Publish"** ✅
- **Repeat** to add more services

#### 7. Add Packages (at least 1)
- Click **"Packages"**
- Click **"Create new"**
- Fill in:
  - Name: "Starter Package"
  - Duration: "4 Sessions"
  - Price: "₹2000"
  - Description: Optional details
  - What's Included: Click "Add item" multiple times
    - "Initial assessment"
    - "4 one-hour sessions"
    - "Follow-up support"
- Click **"Publish"** ✅
- **Repeat** to add more packages

#### 8. Add Myths & Facts (at least 1)
- Click **"Myths & Facts"**
- Click **"Create new"**
- Fill in:
  - Myth: "Therapy is only for crazy people"
  - Fact: "Therapy helps anyone facing life challenges"
- Click **"Publish"** ✅
- **Repeat** to add more

---

## ✅ Step 8: View Your Website

1. Open a new browser tab
2. Go to: `http://localhost:3000`
3. **YOU SHOULD SEE YOUR WEBSITE!** 🎉

---

## ✅ Verification Checklist

Make sure you see:

- [ ] Welcome popup appears on first load
- [ ] Hero section with logo and website name
- [ ] About section with your photo
- [ ] Approach section
- [ ] Why choose section
- [ ] Services grid with your services
- [ ] Myths & facts section
- [ ] Packages section with pricing
- [ ] Contact section with your info
- [ ] Footer at the bottom

---

## 🎉 SUCCESS!

If you see all sections, **congratulations!** Your website is working.

---

## 🚨 Troubleshooting

### Issue: "Please configure your settings"

**Solution:** You didn't create the Settings document in Sanity Studio. Go back to Step 7.1.

### Issue: Website shows blank sections

**Solution:** You need to create ALL required documents (Steps 7.1-7.5).

### Issue: Images not showing

**Solution:** 
- Check you uploaded images in Sanity
- Make sure images uploaded successfully (green checkmark)

### Issue: "Invalid projectId"

**Solution:**
- Check `.env.local` file
- Make sure Project ID is correct (no spaces)
- Restart the dev server: Stop with Ctrl+C, then `npm run dev` again

### Issue: npm install fails

**Solution:**
- Make sure Node.js v18+ is installed
- Delete `node_modules` folder
- Delete `package-lock.json` file
- Run `npm install` again

### Issue: Port 3000 already in use

**Solution:**
- Stop other applications using port 3000
- Or run: `npm run dev -- -p 3001` (uses port 3001)

---

## 📞 Need More Help?

Check these files:
- **SETUP_GUIDE.md** - Detailed setup instructions
- **README.md** - Technical documentation
- **CONTENT_MANAGEMENT_GUIDE.md** - How to edit content
- **PROJECT_SUMMARY.md** - Project overview

---

## Next Steps After Setup

1. **Customize content** - Add more services, packages, etc.
2. **Add images** - Upload professional photos
3. **Customize colors** - Edit in Sanity Settings
4. **Deploy to production** - See SETUP_GUIDE.md
5. **Set up custom domain** - After deployment

---

**You're all set!** Enjoy your new website! 🚀
