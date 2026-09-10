# Antigravity Agent Guidelines & Workflow Rules

Always adhere strictly to the following critical developer rules and workflow constraints:

---

## 1. Manual User Verification Only
- Once code generation, editing, or refactoring is complete, notify the user immediately so they can inspect and test manually.
- Do NOT run automated browser subagents, test runners, or automatic browser validations on your own; the user will perform all verification manually in their browser.

## 2. No Premature Commits or Pushes
- Never execute `git commit` or `git push` without explicit user permission or instruction.
- Only prepare and present the changes, and wait for the user to review before any Git commit/push action is initiated.

## 3. Clarify Any Confusion First
- If there is any ambiguity, confusion, or underspecified requirement regarding design, functionality, or workflow, always ask the user to clarify before making assumptions or proceeding.
