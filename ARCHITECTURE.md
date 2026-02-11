# Project Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         USER BROWSER                         │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │         http://localhost:3000 (Homepage)           │    │
│  │                                                     │    │
│  │  ┌──────────────┐  ┌──────────────┐               │    │
│  │  │  Hero        │  │  About       │               │    │
│  │  └──────────────┘  └──────────────┘               │    │
│  │  ┌──────────────┐  ┌──────────────┐               │    │
│  │  │  Services    │  │  Packages    │               │    │
│  │  └──────────────┘  └──────────────┘               │    │
│  └────────────────────────────────────────────────────┘    │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │     http://localhost:3000/studio (Admin CMS)       │    │
│  │                                                     │    │
│  │  📝 Edit Settings   📝 Add Services                │    │
│  │  📝 Edit About      📝 Add Packages                │    │
│  │  📝 Edit Contact    📝 Add Myths/Facts            │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              ↕
                    (Fetch/Update Data)
                              ↕
┌─────────────────────────────────────────────────────────────┐
│                    SANITY CMS (Cloud)                        │
│                                                              │
│  Database with Content:                                      │
│  • Settings                                                 │
│  • About                                                    │
│  • Approach                                                 │
│  • Services (multiple)                                      │
│  • Packages (multiple)                                      │
│  • Myths & Facts (multiple)                                │
│  • Contact Info                                             │
│  • Images (CDN)                                             │
└─────────────────────────────────────────────────────────────┘
```

## Data Flow

```
Admin Updates Content
        ↓
Sanity Studio (/studio)
        ↓
Sanity Cloud Database
        ↓
Next.js fetches data (GROQ queries)
        ↓
Homepage displays content
        ↓
User sees updated website
```

## Component Architecture

```
app/page.tsx (Homepage)
│
├─ Fetches all data from Sanity
│
└─ Renders components:
   ├─ WelcomePopup (client component)
   ├─ HeroSection
   ├─ AboutSection
   ├─ ApproachSection
   ├─ WhyChooseSection
   ├─ ServicesGrid
   ├─ MythsFactsSection
   ├─ PackagesSection
   ├─ ContactSection
   └─ Footer
```

## File Organization

```
nachiket/
│
├─ 🎨 Frontend (Next.js)
│  ├─ app/
│  │  ├─ layout.tsx        → Root layout
│  │  ├─ page.tsx          → Homepage
│  │  └─ studio/           → Sanity Studio
│  │
│  └─ components/          → UI Components
│     ├─ HeroSection.tsx
│     ├─ AboutSection.tsx
│     └─ ... (10 components)
│
├─ 📦 CMS Configuration
│  ├─ schemas/             → Content models
│  │  ├─ settings.ts
│  │  ├─ about.ts
│  │  └─ ... (8 schemas)
│  │
│  └─ sanity.config.ts     → Sanity setup
│
├─ 🔧 Configuration
│  ├─ lib/sanity.ts        → Client & image builder
│  ├─ types/sanity.ts      → TypeScript types
│  ├─ tailwind.config.ts   → Styling config
│  └─ next.config.js       → Next.js config
│
└─ 📚 Documentation
   ├─ README.md
   ├─ SETUP_GUIDE.md
   ├─ GETTING_STARTED.md
   └─ ... (5 docs)
```

## Tech Stack Layers

```
┌─────────────────────────────────────┐
│         USER INTERFACE              │
│  React Components + Tailwind CSS    │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│       APPLICATION LOGIC             │
│    Next.js 14 (App Router)          │
│    TypeScript                       │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│         DATA LAYER                  │
│    Sanity Client (lib/sanity.ts)    │
│    GROQ Queries                     │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│       CONTENT STORAGE               │
│    Sanity CMS (Cloud Database)      │
│    CDN for Images                   │
└─────────────────────────────────────┘
```

## Request Flow

### When user visits the homepage:

```
1. Browser requests http://localhost:3000
                ↓
2. Next.js receives request
                ↓
3. app/page.tsx runs getPageData()
                ↓
4. Fetches all data from Sanity (8 parallel queries)
                ↓
5. Sanity returns JSON data
                ↓
6. Components render with data
                ↓
7. HTML sent to browser
                ↓
8. Browser displays the page
```

### When admin updates content:

```
1. Admin opens /studio
                ↓
2. Logs in with Sanity account
                ↓
3. Edits a document
                ↓
4. Clicks "Publish"
                ↓
5. Sanity updates database
                ↓
6. Next time homepage is loaded:
                ↓
7. New content is fetched
                ↓
8. Updated content displays
```

## Deployment Architecture

### Development (Local)

```
Your Computer
├─ Next.js Dev Server (http://localhost:3000)
├─ Sanity Studio (http://localhost:3000/studio)
└─ Connected to Sanity Cloud
```

### Production (Vercel)

```
                  Internet Users
                        ↓
                    Vercel CDN
                        ↓
        ┌───────────────┴───────────────┐
        ↓                               ↓
  Next.js App                    Sanity Studio
  (Homepage)                     (/studio route)
        ↓                               ↓
        └───────────────┬───────────────┘
                        ↓
                  Sanity Cloud
                  (CMS Database)
```

## Security Model

```
Public Access:
  ✅ Homepage (read-only)
  ✅ All content (visible to all)

Authenticated Access:
  🔒 Sanity Studio
  🔒 Content editing
  🔒 Publishing changes

Admin Only:
  🔐 Sanity project settings
  🔐 Schema changes
  🔐 API tokens
```

## Image Optimization Flow

```
1. Admin uploads image to Sanity
                ↓
2. Sanity stores original + generates variants
                ↓
3. Image served via Sanity CDN
                ↓
4. next/image component requests optimized size
                ↓
5. Sanity CDN returns:
   • Correct size
   • WebP format (if supported)
   • Optimized quality
                ↓
6. Browser displays optimized image
```

## Content Update Cycle

```
    ┌─────────────────────────────────┐
    │  Admin updates content in CMS   │
    └─────────────┬───────────────────┘
                  ↓
    ┌─────────────────────────────────┐
    │    Content saved to Sanity      │
    └─────────────┬───────────────────┘
                  ↓
    ┌─────────────────────────────────┐
    │  User visits/refreshes website  │
    └─────────────┬───────────────────┘
                  ↓
    ┌─────────────────────────────────┐
    │   Next.js fetches from Sanity   │
    └─────────────┬───────────────────┘
                  ↓
    ┌─────────────────────────────────┐
    │   Updated content displays      │
    └─────────────────────────────────┘
```

## Schema Relationships

```
Settings (1)
  ↓
  Has: Logo image, welcome content

About (1)
  ↓
  Has: Profile image, rich text

Services (many)
  ↓
  Each has: Image, icon, description

Packages (many)
  ↓
  Each has: Price, features list

Myths/Facts (many)
  ↓
  Each has: Myth text, fact text

Contact (1)
  ↓
  Has: Email, phone, address
```

## Performance Strategy

```
Static Generation:
  • Homepage pre-rendered
  • Content fetched at build time
  • Fast load times

Image Optimization:
  • next/image component
  • Lazy loading
  • Responsive images
  • WebP format

Caching:
  • Sanity CDN caches images
  • Browser caches assets
  • Optional: ISR (revalidate: 60)
```

---

This architecture ensures:
✅ Separation of concerns
✅ Easy content management
✅ Fast performance
✅ Type safety
✅ Scalability
