# MyFoodFit Website Theme

Visual alignment with the mobile app for brand consistency.

## 📋 Overview

This theme package provides CSS tokens, styles, and Tailwind configuration to match the MyFoodFit mobile app's visual design.

**Goal:** Visual alignment only - no new features, no layout changes, just color/typography/button updates.

## 🎨 Design Principles

### 1. **Gunmetal Background**
- Primary: `#0E1116`
- Surface: `#161A22`
- Surface Alt: `#1D222C`

### 2. **Brand Green for Actions**
- Primary: `#1F7A4D`
- Hover: `#2FA36A`

### 3. **Text Hierarchy**
- Primary (headings): `#FFFFFF` (white)
- Secondary (body): `#B6BDC9` (light muted grey)
- Muted (captions): `#7C8391` (dark muted grey)

### 4. **RAG Colors - Small Indicators Only**
- Green: `#2ECC71`
- Amber: `#F4C430`
- Red: `#E74C3C`

**⚠️ Important:** RAG colors should ONLY be used for:
- Small dots/indicators
- Tiny badges
- Border accents
- NOT for buttons or large backgrounds

## 📦 Files Included

```
web/theme/
├── tokens.css              # CSS custom properties (variables)
├── marketing-styles.css    # Complete CSS stylesheet
├── tailwind.config.js      # Tailwind configuration
└── README.md              # This file
```

## 🚀 Quick Start

### Option 1: Using Plain CSS

1. Import the tokens and styles in your HTML:

```html
<link rel="stylesheet" href="theme/tokens.css">
<link rel="stylesheet" href="theme/marketing-styles.css">
```

2. Use the pre-built classes:

```html
<!-- Hero Section -->
<section class="hero">
  <h1 class="hero-title">MyFoodFit</h1>
  <p class="hero-subtitle">Analyze packaged food against dietary preferences</p>
  <div class="hero-cta">
    <a href="#" class="btn btn-primary btn-large">Download app</a>
    <a href="#" class="btn btn-secondary btn-large">How it works</a>
  </div>
</section>

<!-- Feature Cards -->
<div class="feature-card">
  <div class="feature-card-icon">🗄️</div>
  <h3 class="feature-card-title">Cupboard</h3>
  <p class="feature-card-description">Track saved items</p>
</div>

<!-- RAG Indicators -->
<div>
  <span class="rag-indicator rag-indicator-green"></span>
  <span class="text-secondary">Green band</span>
</div>
```

### Option 2: Using Tailwind CSS

1. Copy `tailwind.config.js` to your project root

2. Import in your CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Use Tailwind classes:

```html
<!-- Hero Section -->
<section class="bg-bg-primary py-32 text-center">
  <h1 class="text-hero text-text-primary mb-6">MyFoodFit</h1>
  <p class="text-heading-md text-text-secondary mb-10">Analyze packaged food against dietary preferences</p>
  <div class="flex gap-4 justify-center">
    <button class="btn btn-primary btn-large">Download app</button>
    <button class="btn btn-secondary btn-large">How it works</button>
  </div>
</section>

<!-- Feature Card -->
<div class="feature-card">
  <div class="text-5xl mb-4">🗄️</div>
  <h3 class="text-heading-sm text-text-primary mb-3">Cupboard</h3>
  <p class="text-body text-text-secondary">Track saved items</p>
</div>

<!-- RAG Indicator -->
<div class="flex items-center">
  <span class="rag-indicator rag-indicator-green"></span>
  <span class="text-text-secondary">Green band</span>
</div>
```

## 🎯 Component Examples

### Buttons

```html
<!-- Primary Action (Brand Green) -->
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-primary btn-large">Large Primary</button>

<!-- Secondary Action -->
<button class="btn btn-secondary">Secondary Action</button>

<!-- Ghost/Subtle -->
<button class="btn btn-ghost">Tertiary Action</button>

<!-- Disabled -->
<button class="btn btn-primary btn-disabled">Disabled</button>
```

### Cards

```html
<!-- Basic Card -->
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>

<!-- Hoverable Card -->
<div class="card card-hover">
  <h3>Interactive Card</h3>
  <p>Hover to see effect</p>
</div>

<!-- Feature Card -->
<div class="feature-card">
  <div class="feature-card-icon">🍳</div>
  <h3 class="feature-card-title">Recipes</h3>
  <p class="feature-card-description">Recipe suggestions</p>
</div>
```

### RAG Indicators

```html
<!-- Dots -->
<span class="rag-indicator rag-indicator-green"></span>
<span class="rag-indicator rag-indicator-amber"></span>
<span class="rag-indicator rag-indicator-red"></span>

<!-- Badges -->
<span class="rag-badge rag-badge-green">Green</span>
<span class="rag-badge rag-badge-amber">Amber</span>
<span class="rag-badge rag-badge-red">Red</span>

<!-- Border Accents -->
<div class="card rag-accent-green">
  <p>Green-accented content</p>
</div>
```

### Typography

```html
<!-- Headings (White) -->
<h1 class="text-primary">Main Heading</h1>
<h2 class="text-primary">Section Heading</h2>

<!-- Body Text (Muted Grey) -->
<p class="text-secondary">Regular paragraph text</p>

<!-- Captions (Darker Muted Grey) -->
<span class="text-muted">Small caption or metadata</span>

<!-- Brand Color (Primary Green) -->
<a href="#" class="text-brand">Link Text</a>
```

### Navigation

```html
<nav class="nav">
  <div class="nav-container">
    <a href="/" class="nav-logo">MyFoodFit</a>
    <ul class="nav-links">
      <li><a href="#features" class="nav-link">Features</a></li>
      <li><a href="#pricing" class="nav-link">Pricing</a></li>
      <li><a href="#about" class="nav-link">About</a></li>
      <li><a href="#download" class="btn btn-primary btn-small">Download</a></li>
    </ul>
  </div>
</nav>
```

## 🎨 Color Reference

### Backgrounds
```css
--bg-primary: #0E1116        /* Main page background */
--bg-surface: #161A22        /* Cards, panels */
--bg-surface-alt: #1D222C    /* Alternate surfaces */
```

### Text
```css
--text-primary: #FFFFFF      /* Headings, important text */
--text-secondary: #B6BDC9    /* Body text */
--text-muted: #7C8391        /* Captions, metadata */
```

### Brand
```css
--brand-primary: #1F7A4D     /* Primary actions */
--brand-primary-hover: #2FA36A  /* Hover state */
```

### RAG (Use Sparingly)
```css
--rag-green: #2ECC71         /* Green indicator */
--rag-amber: #F4C430         /* Amber indicator */
--rag-red: #E74C3C           /* Red indicator */
```

### Borders
```css
--border-subtle: #252A36     /* Subtle borders */
--divider: #2A3036          /* Divider lines */
```

## ✅ Do's and Don'ts

### ✅ DO
- Use gunmetal backgrounds (`--bg-primary`, `--bg-surface`)
- Use brand green for primary actions (`--brand-primary`)
- Use white for headings (`--text-primary`)
- Use muted grey for body text (`--text-secondary`)
- Use RAG colors for small indicators only

### ❌ DON'T
- Don't use RAG colors for buttons
- Don't use RAG colors for large backgrounds
- Don't change layout or structure
- Don't add new sections without approval
- Don't change copy meaning

## 📱 Responsive Design

The styles include responsive breakpoints:

- **Desktop:** Default styles
- **Tablet:** `@media (max-width: 768px)`
- **Mobile:** `@media (max-width: 480px)`

Key responsive behaviors:
- Buttons become full-width on mobile
- Typography scales down appropriately
- Navigation adapts to smaller screens
- Cards stack vertically

## 🔧 Customization

### Adding Custom Colors

If you need additional colors, add them to `tokens.css`:

```css
:root {
  /* Your custom colors */
  --custom-accent: #YOUR_COLOR;
}
```

### Extending Components

You can extend the base styles by adding your own classes:

```css
/* Custom feature card variant */
.feature-card-premium {
  border: 2px solid var(--brand-primary);
  background: linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-surface-alt) 100%);
}
```

## 🧪 Testing

Before deploying, verify:

1. **Color Contrast:** Ensure text is readable on backgrounds
2. **Button States:** Test hover, active, disabled states
3. **Responsive:** Check on mobile, tablet, desktop
4. **RAG Indicators:** Confirm they're small and subtle
5. **Brand Consistency:** Compare with mobile app screenshots

## 📚 Additional Resources

- **Mobile App Theme:** `src/theme/tokens.ts`
- **Mobile App Colors:** `src/theme/colors.ts`
- **Architecture Doc:** `ARCHITECTURE_INVENTORY.md`

## 🤝 Support

For questions or issues:
1. Check the mobile app theme files for reference
2. Ensure you're using the exact color values provided
3. Test visual alignment with mobile app screenshots

---

**Last Updated:** January 2026  
**Version:** 1.0.0  
**Aligned with:** MyFoodFit Mobile App v2.0.0
