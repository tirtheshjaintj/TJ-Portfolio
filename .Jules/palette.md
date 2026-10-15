# Palette's Journal - UX & Accessibility Learnings

## 2025-05-10 - Semantic Controls for Floating Actions
**Learning:** Floating action elements (like theme toggles or chatbot triggers) in custom components are frequently built using `<div>` tags without keyboard focus or screen reader attributes. Converting these into `<button type="button">` with explicit `aria-label` and `title` attributes restores full keyboard navigation (Tab, Space, Enter) and screen reader support without breaking CSS floating styles.
**Action:** Always replace floating `<div>` click handlers with semantic `<button>` elements and ensure proper `aria-label` attributes are added.
