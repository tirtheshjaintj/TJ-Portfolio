# Palette's Journal

## 2025-05-14 - Floating Action Toggle Accessibility Pattern
**Learning:** In this portfolio app, floating utility controls (like `ModeBall` and chat widgets) are styled with custom circular layout classes (`.float`, `.my-float`). When converted to semantic `<button>` elements, they need Bootstrap's `.btn.p-0.border-0.d-flex.align-items-center.justify-content-center` to prevent default browser button borders/backgrounds while maintaining crisp icon centering and keyboard focus outlines. Additionally, binary state toggles must explicitly sync `aria-pressed` and dynamic `aria-label` / `title` values based on active theme state.
**Action:** When updating floating action widgets or icon-only controls across the app, preserve `.float` positioning while replacing div-clicks with `<button type="button">`, adding `aria-pressed`, dynamic descriptive `aria-label`, and `title` tooltips.
