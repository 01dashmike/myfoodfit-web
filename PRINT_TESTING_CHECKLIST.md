# Print Mode Testing Checklist

## Quick Test Instructions

### 1. Start the Development Server
```bash
cd site
npm run dev
```

### 2. Test Each Page

#### Home Page (`http://localhost:3000`)
**Print Test (Cmd+P / Ctrl+P):**
- [ ] Header is hidden
- [ ] Footer is hidden
- [ ] White background (no gray)
- [ ] All cards visible with borders
- [ ] Grid sections stack vertically
- [ ] Text is black and readable
- [ ] No content cut off

**Expected Output:**
- Clean, professional document
- ~3-4 pages depending on content
- Clear hierarchy with h1, h2, h3
- All sections properly separated

#### For Funders Page (`http://localhost:3000/for-funders`)
**Print Test:**
- [ ] Header/footer hidden
- [ ] Contact email visible and underlined
- [ ] All sections clearly separated
- [ ] No page breaks inside cards
- [ ] Professional grant-ready appearance

**Expected Output:**
- ~2-3 pages
- Suitable for grant applications
- Contact information clearly visible
- Professional formatting

#### How It Works (`http://localhost:3000/how-it-works`)
**Print Test:**
- [ ] Screenshot containers visible (gray boxes)
- [ ] "Screenshot to be added" text readable
- [ ] 3-column grid stacks to single column
- [ ] All explanatory text readable
- [ ] Proper spacing maintained

**Expected Output:**
- ~3-4 pages
- Screenshot placeholders visible
- Technical content well-formatted

#### Research Method (`http://localhost:3000/research-method`)
**Print Test:**
- [ ] Long lists properly formatted
- [ ] Multiple sections don't break awkwardly
- [ ] Principles section readable
- [ ] Internal link to "Responsible use" visible
- [ ] All bullet points aligned

**Expected Output:**
- ~4-5 pages (longest page)
- Academic/research-ready formatting
- Clear section breaks
- Professional appearance

#### About Page (`http://localhost:3000/about`)
**Print Test:**
- [ ] Mission and values cards visible
- [ ] 2-column grid stacks properly
- [ ] Clean, simple layout maintained

**Expected Output:**
- ~1-2 pages (shortest page)
- Clean and professional

### 3. PDF Export Test

For each page:
1. Open print dialog (Cmd+P / Ctrl+P)
2. Select "Save as PDF" or "Microsoft Print to PDF"
3. Save to desktop
4. Open PDF and verify:
   - [ ] No duplicate pages
   - [ ] Professional appearance
   - [ ] Readable at 100% zoom
   - [ ] Suitable for email to funders/institutions
   - [ ] No broken layouts
   - [ ] Page numbers (if browser adds them) look good

### 4. Browser Compatibility Test

Test in multiple browsers:
- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (Mac only)

**Expected:** Identical output across all browsers

### 5. Visual Quality Checks

For any page in print preview:
- [ ] Font sizes are readable (not too small)
- [ ] Hierarchy is clear (h1 > h2 > h3 > body)
- [ ] White space is appropriate (not too cramped)
- [ ] Borders are visible but subtle
- [ ] No overlapping content
- [ ] No cut-off text
- [ ] Links are underlined
- [ ] External URLs shown in parentheses
- [ ] Internal links don't show URLs

### 6. Grant Review Simulation

Print or export "For Funders" page and ask:
- [ ] Would I submit this to a grant committee?
- [ ] Does it look professional?
- [ ] Is all information clearly visible?
- [ ] Are there any embarrassing layout issues?
- [ ] Could this be included in a grant application as-is?

**Expected Answer:** YES to all questions

## Common Issues to Check

### ❌ Problems That Should NOT Occur:
- Duplicate pages
- Header/footer visible in print
- Gray background wasting ink
- Text too small to read
- Cards split across pages awkwardly
- Content cut off at page edges
- Overlapping text
- Missing content

### ✅ Expected Behavior:
- Clean white background
- Professional typography
- Clear hierarchy
- Proper page breaks
- Readable text sizes
- Subtle borders on cards
- No navigation/footer chrome
- Grant-ready appearance

## Quick Visual Test

**Fastest way to verify:**
1. Open http://localhost:3000/for-funders
2. Press Cmd+P (Mac) or Ctrl+P (Windows)
3. Look at print preview
4. Should see: Clean white page, large title, no header/footer, professional layout
5. If it looks grant-ready → ✅ Success!

## Troubleshooting

### If print preview looks wrong:
1. Hard refresh the page (Cmd+Shift+R / Ctrl+Shift+R)
2. Clear browser cache
3. Check that `globals.css` was saved
4. Verify dev server restarted after CSS changes

### If styles aren't applying:
1. Open browser DevTools
2. Go to "Elements" or "Inspector"
3. Look for `@media print` styles in globals.css
4. Verify they're not being overridden

## Success Criteria

✅ **Implementation is successful if:**
- All pages print cleanly without manual editing
- PDFs are suitable for grant applications
- No duplicate pages generated
- Professional appearance maintained
- No post-processing required
- Institutional reviewers would find it acceptable

## Time Estimate

- Quick test (one page): ~2 minutes
- Full test (all pages): ~10 minutes
- PDF export test: ~5 minutes
- **Total: ~15 minutes for complete verification**
