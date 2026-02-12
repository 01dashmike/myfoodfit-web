# MyFoodFit Website Theme - Quick Start

## 🚀 Setup in 3 Steps

### Step 1: Link the CSS

Add to your HTML `<head>`:

```html
<link rel="stylesheet" href="web/theme/tokens.css">
<link rel="stylesheet" href="web/theme/marketing-styles.css">
```

### Step 2: Use the Classes

```html
<!-- Hero Section -->
<section class="hero">
  <h1 class="hero-title">Analyze packaged food against dietary preferences</h1>
  <p class="hero-subtitle">See how products align with dietary preferences</p>
  <a href="#" class="btn btn-primary btn-large">Download app</a>
</section>

<!-- Feature Card -->
<div class="feature-card">
  <div class="feature-card-icon">🗄️</div>
  <h3 class="feature-card-title">Cupboard</h3>
  <p class="feature-card-description">Track saved items</p>
</div>

<!-- RAG Indicator -->
<span class="rag-indicator rag-indicator-green"></span>
<span class="text-secondary">Green band</span>
```

### Step 3: View the Example

Open `example.html` in your browser to see all components in action.

---

## 🎨 Key Colors

```css
/* Backgrounds */
--bg-primary: #0E1116        /* Gunmetal - page background */
--bg-surface: #161A22        /* Gunmetal - cards, panels */

/* Brand */
--brand-primary: #1F7A4D     /* Brand green - buttons, links */
--brand-primary-hover: #2FA36A  /* Hover state */

/* Text */
--text-primary: #FFFFFF      /* White - headings */
--text-secondary: #B6BDC9    /* Muted grey - body text */
--text-muted: #7C8391        /* Dark muted - captions */

/* RAG (small elements only) */
--rag-green: #2ECC71         /* Green indicator */
--rag-amber: #F4C430         /* Amber indicator */
--rag-red: #E74C3C           /* Red indicator */
```

---

## 📦 Component Quick Reference

### Buttons

```html
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-secondary">Secondary Action</button>
<button class="btn btn-ghost">Tertiary Action</button>
<button class="btn btn-primary btn-large">Large Button</button>
<button class="btn btn-primary btn-small">Small Button</button>
```

### Cards

```html
<div class="card">Basic card</div>
<div class="card card-hover">Hoverable card</div>
<div class="feature-card">Feature card with icon</div>
```

### RAG Indicators

```html
<!-- Dots (8px) -->
<span class="rag-indicator rag-indicator-green"></span>
<span class="rag-indicator rag-indicator-amber"></span>
<span class="rag-indicator rag-indicator-red"></span>

<!-- Badges -->
<span class="rag-badge rag-badge-green">Green</span>
<span class="rag-badge rag-badge-amber">Amber</span>
<span class="rag-badge rag-badge-red">Red</span>

<!-- Border Accents -->
<div class="card rag-accent-green">...</div>
```

### Typography

```html
<h1>Heading 1 (2.5rem)</h1>
<h2>Heading 2 (2rem)</h2>
<h3>Heading 3 (1.5rem)</h3>
<p class="text-secondary">Body text</p>
<span class="text-muted">Caption text</span>
```

---

## ✅ Do's and ❌ Don'ts

### ✅ DO
- Use gunmetal backgrounds
- Use brand green for primary actions
- Use white for headings
- Use muted grey for body text
- Use RAG colors for small indicators only

### ❌ DON'T
- Don't use RAG colors for buttons
- Don't use RAG colors for large backgrounds
- Don't change layout structure
- Don't modify copy without approval

---

## 📚 Full Documentation

- **README.md** - Complete usage guide
- **VISUAL_ALIGNMENT_GUIDE.md** - Before/after details
- **IMPLEMENTATION_COMPLETE.md** - Status and checklist
- **example.html** - Working demo

---

## 🎯 Need Help?

1. Open `example.html` in browser
2. Check `README.md` for detailed examples
3. Reference mobile app: `src/theme/tokens.ts`

---

**Implementation note:** Start with the example page and adapt as needed.
