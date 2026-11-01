# Palette's UX Journal

## 2025-05-18 - Chat Assistant Async Feedback and Screen Reader Politeness
**Learning:** Floating conversational widgets like AI assistants (e.g. JARVIS) can feel unresponsive and confusing to users if submit buttons lack a disabled state or loading feedback while awaiting external API responses. Furthermore, assistive technology users miss state updates unless messages are contained in an `aria-live="polite"` region and the trigger button specifies `aria-expanded` and an informative `aria-label`.
**Action:** When adding or enhancing chat widgets, always pair async requests with inline loading indicators ("is thinking...", spinner), disable submit triggers until input is present and requests resolve, and ensure all icon-only buttons declare explicit `aria-label`s.
