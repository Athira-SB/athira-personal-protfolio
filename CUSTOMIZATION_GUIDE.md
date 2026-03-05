# Customization Guide

Detailed instructions for customizing your Digital Marketing Portfolio.

## 🎨 Customizing Colors & Themes

### Adding a New Color Theme

1. **Edit `src/index.css`**

Add a new theme color scheme:

```css
:root[data-theme="rose"] {
  --color-primary: 244, 63, 94;        /* Rose-500 */
  --color-primary-dark: 225, 29, 72;   /* Rose-600 */
  --color-primary-light: 251, 146, 160; /* Rose-200 */
}
```

2. **Update `src/components/ThemeSwitcher.jsx`**

Add your theme to the themes array:

```jsx
const themes = [
  { name: 'blue', label: 'Blue' },
  { name: 'purple', label: 'Purple' },
  { name: 'green', label: 'Green' },
  { name: 'orange', label: 'Orange' },
  { name: 'pink', label: 'Pink' },
  { name: 'rose', label: 'Rose' },  // Add this line
];
```

3. **Find Your colors**

Use Tailwind's color palette:
- https://tailwindcss.com/docs/customizing-colors

Convert to RGB format:
- `#F03F5E` → `244, 63, 94`

## 📝 Updating Content

### Hero Section

Edit `src/components/Hero.jsx`:

```jsx
// Change name and profession
<h1 className="text-5xl md:text-6xl font-bold mb-4">
  Hi, I'm <span style={{ color: `rgb(var(--color-primary))` }}>Your Name</span>
</h1>
<p className="text-xl">Your Professional Title</p>

// Update introduction text
<p className="text-lg leading-relaxed">
  Your introduction text here...
</p>

// Update quick stats
<div className="grid grid-cols-3 gap-4">
  <div>
    <h3 style={{ color: `rgb(var(--color-primary))` }}>X+</h3>
    <p>Years Experience</p>
  </div>
  {/* More stats */}
</div>
```

### About Section

Edit `src/components/About.jsx`:

```jsx
// Update about text
<p className="text-lg leading-relaxed">
  Your about paragraph...
</p>

// Update highlights (what you bring)
const highlights = [
  'Your highlight 1',
  'Your highlight 2',
  // Add more highlights
];
```

### Services

Edit `src/components/Services.jsx`:

```jsx
const services = [
  {
    id: 1,
    title: 'Your Service',
    icon: '🎯',  // Any emoji
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
      'Feature 5'
    ]
  },
  // Add more services
];
```

### Add Service Example

```jsx
{
  id: 6,
  title: 'Video Marketing',
  icon: '🎬',
  features: [
    'Video strategy',
    'Script writing',
    'Production support',
    'Distribution',
    'Analytics tracking'
  ]
}
```

### Specializations

Edit `src/components/Specializations.jsx`:

```jsx
const specializations = [
  { title: 'Performance Marketing', icon: '📊' },
  { title: 'SEO & Organic Growth', icon: '🔍' },
  { title: 'Social Media Strategy', icon: '📱' },
  { title: 'Lead Generation', icon: '🎯' },
  { title: 'Conversion Rate Optimization (CRO)', icon: '💹' },
  { title: 'Email Marketing Automation', icon: '📧' },
  // Add more
];
```

### Tools & Platforms

Edit `src/components/Tools.jsx`:

```jsx
const tools = [
  { name: 'Google Analytics', emoji: '📊' },
  { name: 'Google Ads', emoji: '🔍' },
  { name: 'Your Tool', emoji: '🛠️' },
  // Add more tools
];
```

## 📸 Replacing Images

### Profile Picture

1. Add your image to `src/assets/images/profile.jpg`

2. Update Hero.jsx:
```jsx
import profileImg from '../assets/images/profile.jpg';

// In the component:
<img
  src={profileImg}
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

3. Repeat for About.jsx and other components

### Case Studies Images

```jsx
// In CaseStudies.jsx
const caseStudies = [
  {
    title: 'Web Design',
    image: 'https://your-image-url.jpg', // Replace with your image
    link: 'https://your-project-link.com',
  },
];
```

### Best Practices for Images

1. **Optimize image size**
   - Use tools like TinyPNG or ImageOptim
   - Keep file size < 500KB per image
   - Use modern formats (WebP when possible)

2. **Image dimensions**
   - Profile pictures: 400x400px minimum
   - Case study images: 800x600px
   - Testimonial avatars: 100x100px

3. **Quality**
   - Use high-quality, professional images
   - Ensure good lighting and composition
   - Remove sensitive information from images

## 🔗 Updating Links

### Contact Information

Edit `src/components/Contact.jsx`:

```jsx
const contactInfo = [
  { 
    label: 'Email', 
    value: 'your.email@example.com',  // Your email
    icon: '📧', 
    href: 'mailto:your.email@example.com' 
  },
  { 
    label: 'Website', 
    value: 'www.yourwebsite.com',     // Your website
    icon: '🌐', 
    href: 'https://www.yourwebsite.com' 
  },
  { 
    label: 'LinkedIn', 
    value: 'linkedin.com/in/yourname', // Your profile
    icon: '💼', 
    href: 'https://linkedin.com/in/yourname' 
  },
];
```

### Social Media Links

Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`:

```jsx
{[
  { name: 'Facebook', icon: '📘', link: 'https://facebook.com/yourprofile' },
  { name: 'YouTube', icon: '📺', link: 'https://youtube.com/yourprofile' },
  { name: 'Instagram', icon: '📸', link: 'https://instagram.com/yourprofile' },
].map((social, index) => (
  <a key={index} href={social.link} target="_blank">
    {social.icon}
  </a>
))}
```

## 💬 Customizing Testimonials

Edit `src/components/Testimonials.jsx`:

```jsx
const testimonials = [
  {
    id: 1,
    text: '"Your testimonial text here..."',
    clientName: 'Client Name',
    clientTitle: 'Their Title, Their Company',
    clientImage: 'https://your-image-url.jpg',
    rating: 5
  },
  {
    id: 2,
    text: '"Another testimonial..."',
    clientName: 'Another Client',
    clientTitle: 'CEO, Company Name',
    clientImage: 'https://another-image-url.jpg',
    rating: 5
  },
];
```

### Adding More Testimonials

```jsx
{
  id: 4,
  text: '"This new testimonial..."',
  clientName: 'New Client Name',
  clientTitle: 'Their Position',
  clientImage: 'image-url',
  rating: 5
}
```

## 🏆 Customizing Certifications

Edit `src/components/Certifications.jsx`:

```jsx
const certifications = [
  {
    id: 1,
    name: 'Your Certification Name',
    image: 'https://cert-image-url.jpg',
    issuer: 'Issuing Organization'
  },
  // Add more certs
];
```

## 📊 Customizing Case Studies

Edit `src/components/CaseStudies.jsx`:

```jsx
const caseStudies = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Brief description of the project and results.',
    image: 'https://project-image-url.jpg',
    link: 'https://project-url.com',
    category: 'Category' // e.g., Web Design, SEO, PPC
  },
];
```

## 📢 Customizing Campaigns

Edit `src/components/Campaigns.jsx`:

```jsx
const campaigns = [
  {
    id: 1,
    name: 'Campaign Name',
    icon: '📊',
    image: 'https://campaign-image.jpg',
    link: 'https://campaign-link.com',
    description: 'Brief description of the campaign.'
  },
];
```

## 🔄 Customizing the Approach

Edit `src/components/Approach.jsx`:

```jsx
const approachSteps = [
  {
    number: '01',
    title: 'Step Title',
    description: 'Description of what happens in this step.'
  },
  // Customize each step
];
```

## 🎯 Adding New Components

### Creating a New Section

1. **Create file** `src/components/NewSection.jsx`:

```jsx
import { useTheme } from '../context/ThemeContext';

const NewSection = () => {
  const { isDark } = useTheme();

  return (
    <section className={`py-20 px-4 transition-all duration-300 ${
      isDark ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 text-center ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Your <span style={{ color: `rgb(var(--color-primary))` }}>Section</span>
        </h2>

        {/* Your content here */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. **Add to Home.jsx**:

```jsx
import NewSection from '../components/NewSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewSection />  {/* Add here */}
      {/* Other sections */}
      <Footer />
    </div>
  );
};
```

## 🎨 Styling Customization

### Change Font

Edit `src/index.css`:

```css
:root {
  font-family: 'Your Font Family', sans-serif;
}
```

Or import from Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

<style>
  :root {
    font-family: 'Poppins', sans-serif;
  }
</style>
```

### Change Section Spacing

Update padding in components:

```jsx
// Default
<section className="py-20 px-4">

// More spacing
<section className="py-32 px-4">

// Less spacing
<section className="py-12 px-4">
```

### Customize Button Colors

All buttons use theme colors. To override:

```jsx
<button style={{ backgroundColor: '#YOUR_COLOR' }}>
  Button Text
</button>
```

## 🔍 SEO Customization

Update `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Your description (160 chars max)">
    <meta name="keywords" content="keyword1, keyword2, keyword3">
    <meta name="author" content="Your Name">
    <title>Your Title | Keywords (60 chars max)</title>
    
    <!-- Open Graph for Social Sharing -->
    <meta property="og:title" content="Your Title">
    <meta property="og:description" content="Your description">
    <meta property="og:image" content="image-url">
    <meta property="og:url" content="your-site-url">
  </head>
</html>
```

## 💾 Backup & Version Control

1. **Regular commits:**
```bash
git add .
git commit -m "Update portfolio content"
git push
```

2. **Create branches for experiments:**
```bash
git checkout -b feature/new-design
# Make changes
git push -u origin feature/new-design
```

## 🧪 Testing Your Changes

1. **Test locally:**
```bash
npm run dev
```

2. **Visit all sections:**
   - Check all links work
   - Test theme switching
   - Verify mobile responsiveness
   - Test form submission (if added)

3. **Test in different browsers:**
   - Chrome/Edge
   - Firefox
   - Safari
   - Mobile browsers

## 📚 Additional Resources

- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

---

Happy customizing! 🎉
