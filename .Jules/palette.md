# Palette's UX & Accessibility Journal

## 2025-05-18 - Chatbot Accessibility and Async Feedback States
**Learning:** Floating action buttons and conversational chat widgets often lack essential accessibility properties (missing `aria-label`, `aria-expanded`, and missing semantic `<button>` elements for modal dismiss/action triggers). Furthermore, during async AI text generation, missing loading indicators and un-disabled submit controls lead to double-submissions and user confusion.
**Action:** When creating or refining chatbot widgets, always provide `aria-label` and `aria-expanded` attributes on the launcher FAB, replace generic divs/icons with semantic keyboard-accessible buttons for actions like clearing history or closing the panel, and disable submit actions while presenting an inline loading indicator during AI API requests.
