# ⚡ Quick Start Guide

Get your Digital Marketing Portfolio up and running in 5 minutes!

## 🚀 Step 1: Verify It's Running

The development server should already be running. If not:

```bash
npm run dev
```

Visit: **http://localhost:5173**

You should see your portfolio website loading with a beautiful hero section!

## 🎯 Step 2: See the Features (2 minutes)

### Theme Switcher (Top Right)
- Click the **sun/moon icon** to toggle dark mode
- Click **Theme** button to select from 5 colors
- Refresh the page - your choice persists!

### Navigation
- Click **Home, About, Services, Case Studies, Contact** links
- Page scrolls smoothly to each section
- Mobile view: Click hamburger menu

## 📝 Step 3: Update Your Info (3 minutes)

### Most Important - Update Your Name

1. Open `src/components/Hero.jsx`
2. Find line 17: `<h1>Hi, I'm <span>Athira SB</span></h1>`
3. Replace `Athira SB` with your name
4. Save file - changes show instantly in browser!

### Update Your Introduction

1. Same file (Hero.jsx)
2. Find line 22: Long intro text
3. Replace with your bio
4. Save!

### Update Email

1. Open `src/components/Contact.jsx`
2. Find line 27: `value: 'your@email.com',`
3. Replace with your actual email
4. Save!

## 📸 Step 4: Add Your Profile Picture

1. Save your profile picture as `profile.jpg` (400×400px recommended)
2. Copy to: `src/assets/images/profile.jpg`
3. That's it! Both Hero and About sections now use your image

## ✅ That's It!

You now have a working, personalized portfolio!

## 📚 Next: Full Customization

When ready to do full customization, follow:

1. **SETUP_CHECKLIST.md** - Complete checklist of all tasks
2. **CUSTOMIZATION_GUIDE.md** - Detailed how-to for each section
3. **COMPONENT_DOCUMENTATION.md** - Info about each component

## 🚢 Deploy When Ready

1. Build: `npm run build`
2. Follow: **DEPLOYMENT.md**
3. Choose platform (Vercel, Netlify, GitHub Pages, etc.)
4. Deploy in minutes!

## 🎨 Current Status

Your portfolio has:

✅ **Working Dark Mode** - Try toggling!
✅ **5 Color Themes** - Try Blue, Purple, Green, Orange, Pink
✅ **14 Components** - All ready to customize
✅ **Responsive Design** - Try resizing browser
✅ **Demo Content** - All properly filled with examples
✅ **Smooth Animations** - See as you scroll
✅ **Contact Form** - Try submitting (shows success message)

## 📋 Core Components

### Already Updated By You
- ✅ Name
- ✅ Email
- ✅ Profile picture

### Still Has Demo Content (Customize When Ready)
- Services (5 items)
- Tools (9 items)
- Specializations (6 items)
- Case Studies (3 samples)
- Campaigns (3 samples)
- Testimonials (3 samples)
- Certifications (4 samples)

Just replace the demo content with your actual content.

## 💡 Pro Tips

### 1. Live Preview
As you edit files, changes appear instantly in the browser without refreshing!

### 2. Mobile View
Toggle device toolbar (F12 > device icon) to preview mobile:
- Navigation hamburger menu works
- All text is readable
- Images scale properly

### 3. Dark Mode Test
Toggle dark/light mode on different sections:
- All colors adjust automatically
- Content remains readable
- Looks great in both modes

### 4. Theme Switching
Try all 5 color themes:
- Blue (professional)
- Purple (creative)
- Green (growth)
- Orange (energetic)
- Pink (modern)

Choose your favorite!

## 🎯 Next Actions

### Immediate (Today)
- [ ] Verify website loads at http://localhost:5173
- [ ] Toggle dark mode
- [ ] Try theme colors
- [ ] Update your name
- [ ] Add your profile picture

### This Week
- [ ] Update introduction text
- [ ] Update contact email
- [ ] Replace all placeholder images
- [ ] Update services and specializations

### Next Week
- [ ] Add real case studies
- [ ] Add real testimonials
- [ ] Add real certifications
- [ ] Add real campaigns

### Before Launch
- [ ] Test everything on mobile
- [ ] Test all links
- [ ] Review all content
- [ ] Setup analytics
- [ ] Build for production
- [ ] Deploy to domain

## 🐛 Troubleshooting

### Page not loading?
```bash
npm run dev
```

### Changes not showing?
1. Save file (Ctrl+S)
2. Refresh browser (F5)
3. Or use hard refresh (Ctrl+Shift+R)

### Images not showing?
Make sure images are in: `src/assets/images/`

### Need help?
See **CUSTOMIZATION_GUIDE.md** for detailed instructions

## 📞 Files You'll Edit

You'll mainly edit these files:

| Task | File |
|------|------|
| Name & Intro | `src/components/Hero.jsx` |
| About Section | `src/components/About.jsx` |
| Services | `src/components/Services.jsx` |
| Email & Links | `src/components/Contact.jsx` |
| Specializations | `src/components/Specializations.jsx` |
| Tools | `src/components/Tools.jsx` |
| Case Studies | `src/components/CaseStudies.jsx` |
| Campaigns | `src/components/Campaigns.jsx` |
| Testimonials | `src/components/Testimonials.jsx` |
| Certifications | `src/components/Certifications.jsx` |
| Approach | `src/components/Approach.jsx` |

All files are in `src/components/` folder.

## ✨ You're All Set!

Your portfolio is:
- ✨ Running successfully
- 🎨 Fully themed
- 📱 Mobile responsive
- 🌙 Dark mode ready
- 🚀 Ready for customization
- 📡 Ready for deployment

**Start customizing your info and it becomes your professional portfolio!**

---

## 🎉 Final Tips

1. **Keep it simple** - Don't overcomplicate
2. **Real content** - Use your actual bio, services, projects
3. **Good images** - Invest in professional photos
4. **Regular updates** - Keep content fresh
5. **Test often** - Preview changes frequently
6. **Mobile first** - Most users browse on phones
7. **SEO matters** - Update meta tags in index.html
8. **Share proudly** - Your portfolio is your business card

**Now go make it amazing! 🚀**

Questions? Check the detailed guides:
- README.md
- CUSTOMIZATION_GUIDE.md
- COMPONENT_DOCUMENTATION.md
- SETUP_CHECKLIST.md
- DEPLOYMENT.md
