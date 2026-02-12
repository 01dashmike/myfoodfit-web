# MyFoodFit Website - Visual Alignment Guide

## 🎯 Goal

Align the website visually with the mobile app for brand consistency.

**Scope:** Colors, typography, buttons, backgrounds, RAG indicators only.  
**No changes to:** Layout, copy, features, or structure.

---

## 📊 Color Migration Map

### Before → After

| Element | Old Color | New Color | Hex Value |
|---------|-----------|-----------|-----------|
| **Backgrounds** |
| Primary background | `#1E2327` | Gunmetal | `#0E1116` |
| Surface/Cards | `#262B30` | Gunmetal Surface | `#161A22` |
| Surface Alt | N/A | Gunmetal Alt | `#1D222C` |
| **Text** |
| Primary (headings) | `#FFFFFF` | White | `#FFFFFF` ✓ |
| Secondary (body) | `#B8C0C7` | Muted Grey | `#B6BDC9` |
| Muted (captions) | N/A | Dark Muted Grey | `#7C8391` |
| **Brand** |
| Primary actions | `#1F7A4A` | Brand Green | `#1F7A4D` |
| Hover state | N/A | Brand Green Hover | `#2FA36A` |
| **RAG Indicators** |
| Green | `#2ECC71` | Green | `#2ECC71` ✓ |
| Amber | `#F4B400` | Amber | `#F4C430` |
| Red | `#E5533D` | Red | `#E74C3C` |

---

## 🎨 Visual Design System

### 1. Backgrounds (Gunmetal Palette)

```
┌─────────────────────────────────────┐
│ #0E1116 - Primary Background        │  ← Main page background
│   ┌─────────────────────────────┐   │
│   │ #161A22 - Surface           │   │  ← Cards, panels
│   │   ┌─────────────────────┐   │   │
│   │   │ #1D222C - Alt       │   │   │  ← Nested elements
│   │   └─────────────────────┘   │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

**Usage:**
- `#0E1116` - Main page background, hero sections
- `#161A22` - Cards, feature boxes, navigation
- `#1D222C` - Hover states, nested panels

### 2. Text Hierarchy

```
┌─────────────────────────────────────┐
│ Heading                              │  ← #FFFFFF (White)
│ Body text goes here with regular    │  ← #B6BDC9 (Muted Grey)
│ content that is easy to read.       │
│                                      │
│ Caption or metadata text             │  ← #7C8391 (Dark Muted)
└─────────────────────────────────────┘
```

**Usage:**
- `#FFFFFF` - H1-H6, important labels, button text
- `#B6BDC9` - Paragraphs, descriptions, body copy
- `#7C8391` - Captions, metadata, timestamps

### 3. Buttons (Brand Green)

```
┌──────────────────────┐
│   Primary Action     │  ← #1F7A4D background, #FFFFFF text
└──────────────────────┘
        ↓ hover
┌──────────────────────┐
│   Primary Action     │  ← #2FA36A background
└──────────────────────┘

┌──────────────────────┐
│  Secondary Action    │  ← #161A22 background, #1F7A4D border
└──────────────────────┘
```

**Usage:**
- Primary: Brand green background for main CTAs
- Secondary: Outlined with brand green border
- Ghost: Subtle border, transparent background

### 4. RAG Indicators (Small Elements Only)

```
● Green   #2ECC71  ← Green indicator
● Amber   #F4C430  ← Amber indicator
● Red     #E74C3C  ← Red indicator
```

**Usage Examples:**

✅ **DO:**
```
● Green    Green band
[Green]    Small badge
│ Green    Border accent (3px)
```

❌ **DON'T:**
```
┌────────────────────┐
│  GREEN BUTTON      │  ← Never use RAG for buttons
└────────────────────┘

┌────────────────────┐
│                    │
│  GREEN BACKGROUND  │  ← Never use RAG for large areas
│                    │
└────────────────────┘
```

---

## 🔄 Component Transformations

### Hero Section

**Before:**
```
Background: #1E2327
Title: #FFFFFF
Subtitle: #B8C0C7
Button: #1F7A4A
```

**After:**
```
Background: #0E1116
Title: #FFFFFF (no change)
Subtitle: #B6BDC9
Button: #1F7A4D (brand green)
  Hover: #2FA36A
```

### Feature Cards

**Before:**
```
Card Background: #262B30
Title: #FFFFFF
Description: #B8C0C7
Border: Generic grey
```

**After:**
```
Card Background: #161A22 (gunmetal surface)
Title: #FFFFFF (no change)
Description: #B6BDC9 (muted grey)
Border: #252A36 (subtle)
Hover Border: #1F7A4D (brand green)
```

### Navigation

**Before:**
```
Nav Background: #262B30
Logo: #FFFFFF
Links: #B8C0C7
Active: #1F7A4A
```

**After:**
```
Nav Background: #161A22 (gunmetal surface)
Logo: #FFFFFF (no change)
Links: #B6BDC9 (muted grey)
Active: #1F7A4D (brand green)
Hover: #FFFFFF (white)
```

### Pricing Cards

**Before:**
```
Card Background: #262B30
Price: #FFFFFF
Features: #B8C0C7
Button: #1F7A4A
```

**After:**
```
Card Background: #161A22 (gunmetal surface)
Price: #FFFFFF (no change)
Features: #B6BDC9 (muted grey)
Button: #1F7A4D (brand green)
  Hover: #2FA36A
Selected Border: #1F7A4D (brand green)
```

---

## 📐 Typography Scale

### Headings (White - #FFFFFF)

```
H1: 2.5rem (40px) - Hero titles
H2: 2rem (32px)   - Section headings
H3: 1.5rem (24px) - Card titles
H4: 1.25rem (20px) - Subsections
```

### Body (Muted Grey - #B6BDC9)

```
Large: 1.125rem (18px) - Hero subtitles
Body:  1rem (16px)     - Paragraphs
Small: 0.875rem (14px) - Descriptions
```

### Captions (Dark Muted - #7C8391)

```
Caption: 0.75rem (12px) - Metadata, timestamps
```

---

## 🎯 RAG Indicator Guidelines

### Sizes

```
Dot:    8px × 8px   ● Small circular indicator
Badge:  Auto height  [Green] Compact label
Border: 3px width   │ Left accent line
```

### Contexts

| Context | RAG Usage | Example |
|---------|-----------|---------|
| Health status | ✅ Dots | `● Green` Healthy choice |
| Product category | ✅ Small badges | `[Amber]` Moderate |
| Section accent | ✅ Border | `│ Green` accented card |
| Buttons | ❌ Never | Use coach-green instead |
| Backgrounds | ❌ Never | Use gunmetal palette |
| Large areas | ❌ Never | Keep subtle and small |

---

## 🔍 Before/After Visual Examples

### Example 1: Hero CTA

**Before:**
```css
.hero {
  background: #1E2327;
}
.hero-button {
  background: #1F7A4A;
  color: #FFFFFF;
}
```

**After:**
```css
.hero {
  background: #0E1116;
}
.hero-button {
  background: #1F7A4D;
  color: #FFFFFF;
}
.hero-button:hover {
  background: #2FA36A;
}
```

### Example 2: Feature Card

**Before:**
```css
.feature-card {
  background: #262B30;
  border: 1px solid #444;
}
.feature-title {
  color: #FFFFFF;
}
.feature-description {
  color: #B8C0C7;
}
```

**After:**
```css
.feature-card {
  background: #161A22;
  border: 1px solid #252A36;
}
.feature-card:hover {
  border-color: #1F7A4D;
}
.feature-title {
  color: #FFFFFF;
}
.feature-description {
  color: #B6BDC9;
}
```

### Example 3: Health Indicator

**Before:**
```html
<div class="health-badge green">
  Healthy Choice
</div>
```
```css
.health-badge.green {
  background: #2ECC71;
  padding: 12px 24px;
}
```

**After:**
```html
<div class="health-indicator">
  <span class="rag-indicator rag-indicator-green"></span>
  <span class="text-secondary">Healthy choice</span>
</div>
```
```css
.rag-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.rag-indicator-green {
  background: #2ECC71;
}
```

---

## ✅ Implementation Checklist

### Phase 1: Colors
- [ ] Update CSS variables in `tokens.css`
- [ ] Replace background colors (gunmetal palette)
- [ ] Update brand colors (coach-green)
- [ ] Adjust text colors (white + muted grey)

### Phase 2: Buttons
- [ ] Apply coach-green to primary buttons
- [ ] Add hover states (#2FA36A)
- [ ] Update secondary button borders
- [ ] Test disabled states

### Phase 3: Components
- [ ] Update hero section
- [ ] Restyle feature cards
- [ ] Adjust navigation
- [ ] Update pricing cards
- [ ] Restyle footer

### Phase 4: RAG Indicators
- [ ] Replace large RAG elements with small indicators
- [ ] Add dot indicators where appropriate
- [ ] Convert badges to subtle versions
- [ ] Add border accents

### Phase 5: Testing
- [ ] Check color contrast (WCAG AA)
- [ ] Test hover states
- [ ] Verify responsive design
- [ ] Compare with mobile app screenshots
- [ ] Test in different browsers

---

## 🎨 Quick Reference

### Most Common Replacements

```css
/* Backgrounds */
#1E2327 → #0E1116  (primary)
#262B30 → #161A22  (surface)

/* Text */
#B8C0C7 → #B6BDC9  (body)
Add: #7C8391      (captions)

/* Brand */
#1F7A4A → #1F7A4D  (primary)
Add: #2FA36A      (hover)

/* RAG */
#F4B400 → #F4C430  (amber)
#E5533D → #E74C3C  (red)
```

### CSS Variable Quick Copy

```css
:root {
  --bg-primary: #0E1116;
  --bg-surface: #161A22;
  --text-primary: #FFFFFF;
  --text-secondary: #B6BDC9;
  --text-muted: #7C8391;
  --brand-primary: #1F7A4D;
  --brand-primary-hover: #2FA36A;
  --rag-green: #2ECC71;
  --rag-amber: #F4C430;
  --rag-red: #E74C3C;
}
```

---

## 📱 Mobile App Reference

The mobile app theme is defined in:
- `src/theme/tokens.ts` - Token definitions
- `src/theme/colors.ts` - Color exports

All colors in this guide are sourced from these files to ensure perfect alignment.

---

## 🤝 Support

If you need clarification on any visual element:

1. Check the mobile app screenshots
2. Reference `src/theme/tokens.ts` for exact values
3. Review the `example.html` file for implementation examples
4. Test with the provided CSS files

---

**Last Updated:** January 2026  
**Aligned with:** MyFoodFit Mobile App v2.0.0  
**Status:** Ready for implementation
