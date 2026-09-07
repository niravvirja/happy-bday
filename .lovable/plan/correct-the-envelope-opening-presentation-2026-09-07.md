# Correct the envelope opening presentation

## Changes
- Emphasize **Manasvi** with a heavier weight wherever the name appears in the small “delivered today” text, while keeping the surrounding sentence unchanged.
- Reverse the letter’s horizontal flip so it opens from the opposite side, and mirror that direction when it folds back into the envelope.
- Perfectly center the fully opened letter in the viewport by removing the layout offset created by the label above the envelope; keep both the envelope and opened card aligned to the screen center throughout the sequence.
- Preserve the existing colors, card brightness, background texture, content, and animation timing.

## Technical details
- Render the name as a separately styled inline element instead of interpolating the whole sentence as one text node.
- Change the closed/folded rotation from `rotateY(-180deg)` to `rotateY(180deg)` across desktop and mobile opening/closing keyframes.
- Take the top delivery label out of normal layout flow so it does not push the envelope—and therefore the expanded letter—below the viewport midpoint.

## Verification
- Confirm the name is visibly bolder in the delivery labels.
- Confirm opening and closing use the corrected flip direction.
- Confirm the opened card’s center matches the viewport center on desktop and mobile, then run the project checks.
