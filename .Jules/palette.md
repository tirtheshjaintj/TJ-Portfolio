## 2025-05-18 - Interactive Elements in Chatbot Header
**Learning:** Icon-only interactive elements or custom headers in floating widgets (like chat windows) often use `div` with `onClick` handlers, missing keyboard focus and screen reader semantics. Replacing them with `<button type="button">` and `aria-label` provides complete keyboard accessibility.
**Action:** When working with chatbot/modal headers, ensure trigger buttons and action links (Clear, Close) use semantic `<button>` elements with clear `aria-label` and `aria-expanded` attributes.
