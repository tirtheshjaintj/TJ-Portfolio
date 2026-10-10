## 2026-10-10 - Floating Action Controls A11y Pattern
**Learning:** Floating action widgets implemented as `div`s with `onClick` lack keyboard focusability and ARIA accessibility, preventing screen readers and keyboard users from interacting with dark mode or chat assistant features.
**Action:** Always replace interactive floating `div`s with semantic `<button type="button">` elements with explicit `aria-label`, `title`, and `aria-hidden="true"` on inner icons to retain floating layout while ensuring accessibility.
