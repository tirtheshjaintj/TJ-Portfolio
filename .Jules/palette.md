# Palette's Journal - Critical Learnings

## 2025-02-18 - Semantic Buttons for Floating Theme Toggles
**Learning:** Icon-only floating controls implemented with `div` and `onClick` are inaccessible to screen reader and keyboard users (unfocusable and unannounced). Converting them to `<button>` with explicit `aria-label` and `title` improves accessibility while maintaining fixed position styles.
**Action:** Always wrap floating or icon-only toggle controls in semantic `<button type="button">` elements with descriptive `aria-label` attributes.
