# Component Documentation

Complete documentation of all components in your Digital Marketing Portfolio.

## 📋 Component Overview

All components are located in `src/components/` and follow the same design patterns:

- Use `useTheme()` hook for dark mode
- Responsive Tailwind CSS classes
- CSS variables for theme colors
- Proper ARIA labels for accessibility

---

## 🎯 Navbar Component

**File:** `src/components/Navbar.jsx`

**Features:**
- Sticky navigation bar
- Mobile hamburger menu
- Theme switcher integration
- Smooth scroll navigation
- Responsive design

**Key Props & Data:**
```jsx
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
];
```

**Customization:**
- Add/remove navigation links
- Change sticky behavior
- Modify menu styling

---

## 🎨 Theme Switcher Component

**File:** `src/components/ThemeSwitcher.jsx`

**Features:**
- Dark/Light mode toggle
- 5 color theme selector
- Dropdown menu
- localStorage persistence
- Smooth transitions

**Themes Array:**
```jsx
const themes = [
  { name: 'blue', label: 'Blue' },
  { name: 'purple', label: 'Purple' },
  { name: 'green', label: 'Green' },
  { name: 'orange', label: 'Orange' },
  { name: 'pink', label: 'Pink' },
];
```

**How to Add Themes:**
1. Add CSS variables in `src/index.css`
2. Add entry to themes array
3. Done! Theme is available

---

## 🦸 Hero Component

**File:** `src/components/Hero.jsx`

**Sections:**
1. **Main Heading** - Name and title
2. **Introduction** - Professional bio
3. **CTA Buttons** - Call-to-action links
4. **Quick Stats** - Key metrics (Years, Projects, Satisfaction)
5. **Profile Image** - Profile picture with gradient overlay

**Key Elements to Update:**
```jsx
// Name and title
<h1>Hi, I'm <span>Athira SB</span></h1>
<p>Digital Marketing Specialist</p>

// Introduction text
<p>As a Digital Marketing Specialist...</p>

// Quick stats
Years Experience / Projects Completed / Client Satisfaction

// Profile image
<img src="profile-image.jpg" alt="Athira SB" />
```

**Customization:**
- Change stats values
- Update introduction text
- Replace profile image
- Add/remove CTA buttons

---

## 👤 About Component

**File:** `src/components/About.jsx`

**Sections:**
1. **Profile Image** - About section photo
2. **About Text** - Biography and professional background
3. **Highlights** - "What I Bring to the Table" list

**Highlights Array:**
```jsx
const highlights = [
  'Data-driven digital marketing strategies',
  'Performance optimization expertise',
  'Analytics and reporting proficiency',
  'Lead generation and conversion focus',
  'Cross-channel campaign management',
  'Continuous learning and innovation'
];
```

**Customization:**
- Update about text
- Modify highlights
- Change profile image
- Add more highlights

---

## 🎯 Specializations Component

**File:** `src/components/Specializations.jsx`

**Features:**
- 6 specialization cards
- Emoji icons
- Hover animation
- Staggered entrance animation

**Specializations Array:**
```jsx
const specializations = [
  { title: 'Performance Marketing', icon: '📊' },
  { title: 'SEO & Organic Growth', icon: '🔍' },
  { title: 'Social Media Strategy', icon: '📱' },
  { title: 'Lead Generation', icon: '🎯' },
  { title: 'Conversion Rate Optimization (CRO)', icon: '💹' },
  { title: 'Email Marketing Automation', icon: '📧' },
];
```

**Customization:**
- Add/remove specializations
- Change icons
- Modify titles

---

## 💼 Services Component

**File:** `src/components/Services.jsx`

**Features:**
- Expandable service cards
- Click to view detailed features
- 5 services with individual features
- Smooth expand/collapse animation

**Service Structure:**
```jsx
{
  id: 1,
  title: 'Search Engine Optimization (SEO)',
  icon: '🔍',
  features: [
    'Keyword research & competitor analysis',
    'On-page & technical SEO',
    'Link-building strategies',
    'SEO audits',
    'Content optimization'
  ]
}
```

**Included Services:**
1. SEO - 5 features
2. PPC - 5 features
3. Social Media Marketing - 5 features
4. Content Marketing - 5 features
5. Email Marketing - 5 features

**Customization:**
- Edit service titles
- Modify feature lists
- Add/remove services
- Change icons

---

## 🛠️ Tools Component

**File:** `src/components/Tools.jsx`

**Features:**
- 9 tool/platform cards
- Grid layout with hover effect
- Emoji representation
- Responsive grid

**Tools Array:**
```jsx
const tools = [
  { name: 'Google Analytics', emoji: '📊' },
  { name: 'Google Ads', emoji: '🔍' },
  { name: 'Meta Ads Manager', emoji: '📱' },
  { name: 'SEMrush', emoji: '🎯' },
  { name: 'Ahrefs', emoji: '🔗' },
  { name: 'HubSpot', emoji: '🚀' },
  { name: 'Mailchimp', emoji: '📧' },
  { name: 'Canva', emoji: '🎨' },
  { name: 'WordPress', emoji: '📝' },
];
```

**Customization:**
- Add/remove tools
- Update tool names
- Change emojis
- Update description text

---

## 📸 Case Studies Component

**File:** `src/components/CaseStudies.jsx`

**Features:**
- 3 case study cards
- Image showcase with overlay on hover
- Category badges
- External links
- Rating/achievement display

**Case Study Structure:**
```jsx
{
  id: 1,
  title: 'Web Design',
  description: 'Planet Beauty Salon design...',
  image: 'https://image-url.jpg',
  link: 'https://project-link.com',
  category: 'Web Design'
}
```

**Included Case Studies:**
1. Web Design - Planet Beauty Salon
2. Blogging - Blog design
3. Poster Design - A4 poster example

**Customization:**
- Update project titles
- Change descriptions
- Replace images
- Update project links
- Modify categories

---

## 📢 Campaigns Component

**File:** `src/components/Campaigns.jsx`

**Features:**
- 3 campaign cards
- Campaign images with overlay
- External campaign links
- Icon representation
- Description text

**Campaign Structure:**
```jsx
{
  id: 1,
  name: 'Google Ads',
  icon: '🔍',
  image: 'https://image-url.jpg',
  link: 'https://campaign-url.com',
  description: 'Optimized search campaigns for maximum ROI'
}
```

**Included Campaigns:**
1. Google Ads - Search campaign
2. Meta Ads - Social media campaign
3. LinkedIn Ads - B2B campaign

**Customization:**
- Add/remove campaigns
- Update campaign names
- Change descriptions
- Replace images
- Update links

---

## 🔄 Approach Component

**File:** `src/components/Approach.jsx`

**Features:**
- 5-step methodology timeline
- Numbered steps with descriptions
- Centered layout
- Key insight callout box
- Smooth animations

**Approach Steps:**
```jsx
{
  number: '01',
  title: 'Research & Competitor Analysis',
  description: 'In-depth research and competitor analysis...'
}
```

**Included Steps:**
1. Research & Competitor Analysis
2. Strategy Development
3. Campaign Execution
4. Continuous Optimization
5. Transparent Reporting

**Customization:**
- Modify step descriptions
- Add/remove steps
- Change step order
- Update key insight

---

## 🏆 Certifications Component

**File:** `src/components/Certifications.jsx`

**Features:**
- Certification cards
- Issuer information
- Responsive grid layout
- Professional styling

**Certification Structure:**
```jsx
{
  id: 1,
  name: 'Google Ads Certification',
  image: 'https://cert-image.jpg',
  issuer: 'Google'
}
```

**Note:** Component needs to be created. Template structure:
- Add 4 certifications (Google Ads, Analytics, HubSpot, Meta)
- Include certification images
- Display issuer names

---

## 💬 Testimonials Component

**File:** `src/components/Testimonials.jsx`

**Features:**
- Carousel with navigation buttons
- Star ratings (5 stars)
- Client information with avatar
- Smooth transitions
- Dot indicators

**Testimonial Structure:**
```jsx
{
  id: 1,
  text: '"Athira helped us scale campaigns..."',
  clientName: 'Client Name',
  clientTitle: 'CEO, Company',
  clientImage: 'https://avatar.jpg',
  rating: 5
}
```

**Included Testimonials:**
1. E-commerce brand CEO
2. SaaS company Marketing Director
3. Digital agency Founder

**Features:**
- Previous/Next buttons
- Dot navigation
- Auto-cycling (manual controlled)
- Rating display

**Customization:**
- Add/remove testimonials
- Update client names and titles
- Change testimonial text
- Replace client avatars
- Modify ratings

---

## 📩 Contact Component

**File:** `src/components/Contact.jsx`

**Features:**
- Contact information section
- Working contact form
- Form validation
- Success message feedback
- Social media links
- Responsive layout

**Contact Info:**
```jsx
const contactInfo = [
  { 
    label: 'Email', 
    value: 'your@email.com',
    icon: '📧', 
    href: 'mailto:your@email.com' 
  },
  // Email, Website, LinkedIn
];
```

**Form Fields:**
- Name (required)
- Email (required)
- Subject (required)
- Message (required)
- Submit button
- Success feedback

**Social Links:**
- Facebook
- YouTube
- Instagram

**Customization:**
- Update contact information
- Modify form fields
- Change social links
- Update email destination
- Modify success message

---

## 🔗 Footer Component

**File:** `src/components/Footer.jsx`

**Features:**
- Brand information
- Quick links section
- Services listing
- Social media links
- Back to top button
- Copyright notice

**Footer Sections:**
1. **Brand** - Logo and description
2. **Quick Links** - Navigation links
3. **Services** - Service listing
4. **Social Links** - Social media icons
5. **Copyright** - Year and rights

**Customization:**
- Update brand description
- Modify navigation links
- Update service list
- Change social links
- Update copyright year

---

## 🎨 Theme Context

**File:** `src/context/ThemeContext.jsx`

**Features:**
- React Context for theme state
- localStorage persistence
- CSS data attributes
- useTheme() custom hook

**How It Works:**
1. Stores isDark (boolean) for dark mode
2. Stores colorTheme (string) for color theme
3. Persists to localStorage
4. Updates HTML data-theme attribute
5. Adds/removes dark class to html element

**Usage:**
```jsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { isDark, colorTheme, toggleDarkMode, setTheme } = useTheme();
  
  return (
    <div className={isDark ? 'dark' : ''}>
      {/* Content */}
    </div>
  );
}
```

---

## 📄 Global Styles

**File:** `src/index.css`

**Contents:**
1. **Tailwind directives** - @tailwind base/components/utilities
2. **CSS variables** - Color theme definitions
3. **Component classes** - Reusable utility classes
4. **Theme-specific rules** - Dark mode adjustments

**Color Variables:**
```css
:root {
  --color-primary: 59, 130, 246;        /* R, G, B */
  --color-primary-dark: 29, 78, 216;
  --color-primary-light: 147, 197, 253;
}

/* Usage: rgb(var(--color-primary)) */
```

---

## 🏠 Home Page

**File:** `src/pages/Home.jsx`

**Structure:**
```jsx
<Home>
  <Navbar />
  <Hero />
  <About />
  <Specializations />
  <Services />
  <Tools />
  <CaseStudies />
  <Campaigns />
  <Approach />
  <Certifications />
  <Testimonials />
  <Contact />
  <Footer />
</Home>
```

All components are imported and rendered in sequence.

---

## 🚀 Component Design Patterns

All components follow these patterns:

### 1. Theme Integration
```jsx
const { isDark } = useTheme();

<div className={isDark ? 'dark-style' : 'light-style'}>
```

### 2. Color Variables
```jsx
style={{ color: `rgb(var(--color-primary))` }}
```

### 3. Responsive Classes
```jsx
className="text-2xl md:text-4xl lg:text-5xl"
```

### 4. Animations
```jsx
className="animate-fade-in"
style={{ animationDelay: `${index * 0.1}s` }}
```

### 5. Accessibility
```jsx
aria-label="Description"
role="button"
```

---

## ✏️ Editing Guidelines

When editing components:

1. **Keep structure intact**
   - Don't remove the main section wrapper
   - Keep responsive classes

2. **Update data first**
   - Modify arrays/objects in the component
   - Keep same structure

3. **Maintain styling**
   - Use same color variable pattern
   - Keep responsive breakpoints

4. **Test changes**
   - Check on mobile view
   - Test theme switching
   - Verify links work

5. **Preserve accessibility**
   - Keep ARIA labels
   - Maintain semantic HTML

---

## 🔍 Quick Reference

| Component | Sections | Editable Items | Key File |
|-----------|----------|---|---|
| Navbar | Links | 5 items | Navbar.jsx |
| Hero | Intro + Stats | Name, title, stats | Hero.jsx |
| About | Bio + Highlights | Text, 6 highlights | About.jsx |
| Specializations | 6 Cards | Titles, icons | Specializations.jsx |
| Services | 5 Cards | Services, 5 features each | Services.jsx |
| Tools | 9 Grid | Tools array | Tools.jsx |
| CaseStudies | 3 Cards | Title, desc, image, link | CaseStudies.jsx |
| Campaigns | 3 Cards | Name, desc, image, link | Campaigns.jsx |
| Approach | 5 Steps | Step titles, descriptions | Approach.jsx |
| Testimonials | Carousel | 3 testimonials | Testimonials.jsx |
| Contact | Form + Info | Contact info, form action | Contact.jsx |
| Footer | Links | Links, copyright | Footer.jsx |

---

For more details, see **CUSTOMIZATION_GUIDE.md**
