## 2025-05-18 - Floating theme toggles need native button semantics and accessible names
**Learning:** Icon-only floating controls styled with absolute/fixed positions often default to clickable `<div>` elements, preventing screen readers from announcing their purpose and blocking keyboard accessibility (Tab, Enter, Space).
**Action:** When working on floating utility controls (like theme switchers or FABs), always use semantic `<button type="button">` with descriptive `aria-label` and `title` attributes, while preserving existing floating class layouts (`btn float ... border-0 p-0`).
