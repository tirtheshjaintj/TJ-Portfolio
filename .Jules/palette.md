# Palette's Journal

Critical UX and accessibility learnings and design patterns.

## 2025-02-17 - Floating Widget Accessibility & Async Feedback
**Learning:** Floating action widgets like chatbots often omit ARIA roles, labels, and state indicators (`aria-expanded`, `aria-live`), causing severe barriers for screen reader users and keyboard navigators. Adding inline loading indicators and disabling submit during API calls prevents accidental double submissions while reassuring users.
**Action:** Always verify floating modal triggers have `aria-label`, `aria-expanded`, and corresponding close controls are true interactive elements with keyboard event handlers.
