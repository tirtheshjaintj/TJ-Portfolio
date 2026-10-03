## 2025-10-03 - Chatbot Header Accessibility
**Learning:** In React components with custom icons and title headers used as interactive controls (like "clear history" or "close"), wrapping icon-text pairs in semantic `<button type="button">` with `aria-label` ensures keyboard tab accessibility and screen reader support without altering styling.
**Action:** Always replace `onClick` handlers on `div` or standalone icon tags in floating widget headers with semantic `<button type="button">`.
