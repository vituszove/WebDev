---
name: commit-msg
description: Generate a conventional commit message from the staged diff and commit with it. Use when the user says "write a commit message", "generate a commit", "commit my changes", or runs /commit-msg.
---

# commit-msg

Generate and apply a commit message for the currently staged changes.

## Steps

1. Run `git diff --staged --stat` and `git diff --staged` to check for staged changes.
   - If there is nothing staged, stop immediately and tell the user to stage changes first (e.g. `git add <files>`). Do not stage anything on their behalf.
2. Read the full staged diff to understand what changed and why (infer intent from the code, don't guess wildly).
3. Compose a commit message in this exact format:

   ```
   type(scope): short subject

   - bullet of what changed
   - bullet of why
   ```

   - `type` is one of: `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, `test`.
   - `scope` is a short identifier for the affected area (e.g. a directory, component, or module name) — omit the `(scope)` parens if nothing fits cleanly.
   - Subject line (including `type(scope): `) must be under 60 characters, imperative mood, no trailing period.
   - Body bullets are optional but encouraged — include them when there's a non-obvious "why". Keep bullets concise.
   - Never include a `Co-Authored-By` trailer or any other trailer.

4. Run `git commit -m "$(cat <<'EOF' ... EOF)"` with the composed message (heredoc keeps multi-line formatting intact).
5. Confirm the commit succeeded (e.g. `git log -1 --oneline` or the commit output) and report the result to the user.

## Notes

- Only commit what is already staged — never run `git add` implicitly.
- If a pre-commit hook fails, fix the underlying issue, re-stage, and create a new commit rather than amending or skipping hooks.
