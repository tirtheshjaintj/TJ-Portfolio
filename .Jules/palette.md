## 2025-05-18 - Keyboard Navigation and ARIA Labels for Floating Widgets
**Learning:** Custom interactive elements inside floating overlay widgets (like the ChatBot widget) lacked standard button semantics, `tabIndex`, keyboard event listeners, and `aria-label` attributes, making them unusable for screen reader and keyboard-only users.
**Action:** Always wrap action controls in semantic `<button>` elements or provide `tabIndex={0}`, `aria-label`, and `onKeyDown` handlers supporting `Enter` and `Space` key triggers for custom `role="button"` elements.
