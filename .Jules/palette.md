## 2025-05-18 - Semantic Icon Buttons & Floating Controls
**Learning:** Floating widget elements and icon-only controls (like dark mode toggles and chatbot triggers) built with non-semantic `div` elements prevent keyboard focus and block screen reader users from discovering core interactive features.
**Action:** Always wrap interactive icon-only triggers in semantic `<button type="button">` elements with explicit `aria-label` and `title` attributes, while setting `aria-hidden="true"` on decorative child icons.
