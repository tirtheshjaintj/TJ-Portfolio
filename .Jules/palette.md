# Palette's Journal

## 2025-05-18 - Chatbot Accessibility and Async Feedback Pattern
**Learning:** Floating widget buttons and conversational AI interfaces in legacy React apps often lack accessible names, live regions (`aria-live="polite"`), and pending feedback states, leading to poor screen reader support and double submissions.
**Action:** Always provide explicit ARIA labels on icon buttons, disable inputs/buttons during pending async requests, and announce typing states via live regions.
