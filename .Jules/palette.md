## 2025-05-18 - Floating Action Controls Accessibility
**Learning:** Floating action widgets (such as theme toggles and chatbot launchers) built using `div` elements with `onClick` listeners are invisible to keyboard tab navigation and screen readers.
**Action:** Always implement floating action controls using semantic `<button type="button">` elements with explicit `aria-label`, `title`, and state attributes (`aria-expanded`).
