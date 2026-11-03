# Palette's Journal

## 2025-05-18 - Floating Action Controls and Overlay Widgets
**Learning:** Floating action buttons (FABs) like theme togglers and bottom-fixed chat assistants are often implemented with generic `<div>` tags or unlabelled icon `<button>` elements, rendering them completely opaque to keyboard navigation and screen readers. When conversational overlays accept user queries without async feedback, users repeatedly trigger requests due to missing visual and disabled states.
**Action:** Always wrap floating icons in semantic `<button>` elements with dynamic `aria-label`, `aria-expanded`, and keyboard handlers (`Enter` / `Space`), while managing an `isLoading` feedback state on chat input submissions.
