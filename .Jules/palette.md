## 2025-02-18 - Semantic HTML & ARIA for Floating Action Buttons
**Learning:** Floating action buttons and toggle icons (like dark mode toggles and chatbot triggers) rendered with non-semantic `div` elements lack tab-focusability and screen reader announcements, rendering critical UI tools inaccessible to keyboard and assistive technology users.
**Action:** Always wrap floating action controls in native `<button>` elements with explicit `aria-label`, `title`, and appropriate state attributes like `aria-expanded`.
