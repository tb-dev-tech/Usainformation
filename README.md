# 🇺🇸 USA Informational Website

A comprehensive, multi-page informational website about the United States featuring retro aesthetics, light/dark modes, and fully editable content designed for export to Framer.

## 📋 Project Overview

This is a school project-style website that explores various aspects of the United States including:
- Facts and history
- Tourism destinations
- Language and dialects
- Geography and nature
- Culture (music, film, sports)
- Traditions and holidays
- Sustainable development
- Food culture
- Sources and references

## 🎨 Design System

### Color Palette

**Light Mode (Home & Sources pages)**
- Background Light: `#F7F7F7`
- Text Dark: `#1A1A1A`
- Accent Red: `#B33A3A`
- Accent Blue: `#2E4A78`
- Accent Beige: `#E8DCC2`

**Dark Mode (All other pages)**
- Background Dark: `#0F0F0F`
- Text Light: `#F2F2F2`
- Accent Red: `#B33A3A`
- Accent Blue: `#2E4A78`
- Accent Gold: `#C9A86A`

### Typography

**Headings** - Playfair Display (Serif)
- H1: 64px Bold
- H2: 48px Bold
- H3: 32px SemiBold

**Body Text** - Inter (Sans-serif)
- Body Large: 20px Regular
- Body Medium: 18px Regular
- Body Small: 16px Regular

**Navigation** - Montserrat (Sans-serif)
- Nav Item: 18px SemiBold, Uppercase

### Spacing System
- 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Buttons.tsx          # Primary & Secondary buttons
│   │   ├── Cards.tsx             # Info cards & info boxes
│   │   ├── Icons.tsx             # Custom SVG icons
│   │   ├── Header.tsx            # Sticky navigation header
│   │   ├── Footer.tsx            # Sticky footer
│   │   └── PageLayout.tsx        # Layout wrapper component
│   ├── pages/
│   │   ├── HomePage.tsx          # Light mode home page
│   │   ├── FaktaPage.tsx         # Facts about USA
│   │   ├── TurismePage.tsx       # Tourism destinations
│   │   ├── SprakPage.tsx         # Language & dialects
│   │   ├── GeografiPage.tsx      # Geography & nature
│   │   ├── KulturPage.tsx        # Culture (music, film, sports)
│   │   ├── TradisjonerPage.tsx   # Traditions & holidays
│   │   ├── BaerekraftigPage.tsx  # Sustainable development
│   │   ├── MatkulturPage.tsx     # Food culture
│   │   └── KilderPage.tsx        # Sources (light mode)
│   └── App.tsx                   # Main routing component
└── styles/
    ├── fonts.css                 # Google Fonts imports
    ├── theme.css                 # Design system & CSS variables
    ├── tailwind.css              # Tailwind base
    └── index.css                 # Global styles
```

## 🧩 Component Library

### Buttons
- **PrimaryButton** - Solid background (red for light, blue for dark)
- **SecondaryButton** - Transparent with red border

### Cards
- **InfoCard** - Versatile card with optional icon, title, description, and image
- **LargeInfoBox** - Bordered box with gold accent for main content
- **SmallInfoBox** - Compact info box for grid layouts

### Icons (Custom SVG)
- StarIcon, StripeIcon, USAMapIcon, StatueIcon
- Route66Icon, BurgerIcon, FilmIcon, MicrophoneIcon
- GlobeIcon, FlagBadgeIcon

### Layout Components
- **Header** - Sticky navigation with 10 page links
- **Footer** - Sticky footer with links and copyright
- **PageLayout** - Wrapper with background image support

## 🛣️ Page Routes

| Route | Page | Mode |
|-------|------|------|
| `/` | Home | Light |
| `/fakta-om-usa` | Facts | Dark |
| `/turisme` | Tourism | Dark |
| `/sprak` | Language | Dark |
| `/geografi` | Geography | Dark |
| `/kultur` | Culture | Dark |
| `/tradisjoner` | Traditions | Dark |
| `/baerekraftig-utvikling` | Sustainability | Dark |
| `/matkultur` | Food Culture | Dark |
| `/kilder` | Sources | Light |

## 🎯 Key Features

✅ **Multi-page routing** with React Router  
✅ **Light/Dark mode** per page specifications  
✅ **Sticky header and footer** on all pages  
✅ **Background images** with overlay effects  
✅ **Retro USA aesthetic** with vintage colors  
✅ **Fully responsive** design  
✅ **Editable content** structure for Framer  
✅ **Custom icon set** in retro style  
✅ **Consistent spacing** system  
✅ **Hover interactions** on all interactive elements  

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🖼️ Images

All images are sourced from **Unsplash** via API:
- High-quality, royalty-free images
- Themed backgrounds for each page
- Optimized for web performance

## 🎨 Framer Export Guidelines

This website is designed to be fully editable in Framer:

✔ All components use auto-layout principles  
✔ Text fields are designed to be editable  
✔ Navigation labels are fixed  
✔ Content text remains fully editable  
✔ Consistent spacing with CSS variables  
✔ Reusable component architecture  

## 📱 Responsive Design

- **Desktop**: Full navigation, multi-column layouts
- **Tablet**: Responsive grid adjustments
- **Mobile**: Simplified navigation, stacked layouts

## 🎭 Interaction States

- **Hover**: Scale, color change, underline effects
- **Active**: Color change for current page
- **Pressed**: Scale-down animation on buttons

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 📄 License

Educational project - 2026 Trym

## 🙏 Credits

- **Design & Development**: Trym
- **Images**: Unsplash
- **Fonts**: Google Fonts (Playfair Display, Inter, Montserrat)
- **Icons**: Custom SVG designs

---

**Project**: USA Informational Website  
**Year**: 2026  
**Type**: School Project  
**Framework**: React + TypeScript + Tailwind CSS  
**Routing**: React Router v7
