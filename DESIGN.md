```markdown
# Design System Documentation: The Editorial Wellness Framework

## 1. Overview & Creative North Star
**Creative North Star: "The Rhythmic Monolith"**

This design system moves away from the frantic, high-energy aesthetic of traditional fitness platforms. Instead, it embraces a "Rhythmic Monolith" approach: a layout that feels grounded, intentional, and architecturally sound, yet possesses a fluid, organic pulse. 

We break the "standard template" look by utilizing **intentional asymmetry**. Hero sections should not be centered; they should lean into the edges of the viewport. Imagery should overlap container boundaries, and typography should vary in scale to create a sense of editorial prestige. The goal is to make the user feel like they are flipping through a high-end wellness journal, where the "white space" is just as active as the content itself.

---

## 2. Colors: Tonal Depth over Structural Lines
The palette is a sophisticated journey through rose and berry tones, designed to evoke both the warmth of a sunrise and the depth of a focused workout.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Sectioning is achieved through color-blocking using the `surface` tokens.
- **Transitioning Sections:** Move from `surface` (#fff8f7) to `surface-container-low` (#faf2f1) to create a soft "beat" in the layout.
- **High-Impact Breaks:** Use `primary` (#63232c) or `tertiary` (#503030) for full-bleed sections to provide a deep, grounding contrast to the softer rose tones.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine stationery.
*   **Base:** `surface` (#fff8f7)
*   **Lowest Layer (Nested Content):** `surface-container-lowest` (#ffffff)
*   **Highest Layer (Elevated Cards/Modals):** `surface-container-highest` (#e9e1e0)

### The "Glass & Gradient" Rule
To avoid a flat, "digital" feel, use **Glassmorphism** for navigation bars and floating action cards. 
- **Effect:** Apply a background of `surface-container/80%` with a 12px-20px backdrop-blur. 
- **Signature Gradients:** For primary CTAs, use a subtle linear gradient from `primary` (#63232c) to `primary-container` (#803a42) at a 135-degree angle. This adds a "soul" to the button that flat hex codes cannot replicate.

---

## 3. Typography: The Editorial Voice
The tension between the classic **Noto Serif** and the modern, geometric **Manrope** creates a professional yet welcoming dialogue.

- **Display & Headlines (Noto Serif):** These are your "Statement Pieces." Use `display-lg` for hero statements. Apply a slight negative letter-spacing (-0.02em) to large headers to give them an authoritative, bespoke feel.
- **Body & Labels (Manrope):** This is your "Functional Voice." Manrope provides a clean, breathable counter-balance to the serif headers.
- **Hierarchy Logic:** Use `on-surface-variant` (#554245) for secondary body text to reduce visual noise, reserving `on-surface` (#1e1b1b) for primary information and headers.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows and borders are often "cheap." We use **Tonal Layering** to achieve depth.

- **The Layering Principle:** Place a `surface-container-lowest` card atop a `surface-container-low` section. The change in "paper weight" provides all the hierarchy needed.
- **Ambient Shadows:** For floating elements (like a booking modal), use a shadow color derived from `on-surface` (#1e1b1b) at 4% opacity, with a 32px blur and 16px Y-offset. It should feel like a soft glow, not a hard drop.
- **The "Ghost Border":** If a boundary is required for accessibility, use `outline-variant` (#dac0c4) at 15% opacity. It should be barely perceptible.

---

## 5. Components: Refined Interaction

### Buttons
- **Primary:** Gradient from `primary` to `primary-container`. `lg` (0.5rem) roundedness. Text in `on-primary` (#ffffff).
- **Secondary:** Surface-only. Use `secondary-container` (#fdc7cb) with text in `on-secondary-container` (#795154). No border.
- **Tertiary:** Text-link style using `primary` (#63232c) with a custom 2px underline offset by 4px.

### Cards & Lists
- **Rule:** Forbid divider lines. 
- **Execution:** Use the Spacing Scale (e.g., `8` or `12`) to separate list items. For cards, use `surface-container` tiers to distinguish content blocks.
- **Signature Component - The "Wellness Card":** A `surface-container-low` card with an image that breaks the top-left corner boundary, creating an asymmetrical, premium feel.

### Input Fields
- **Styling:** Use `surface-container-highest` (#e9e1e0) as the fill color. 
- **State:** On focus, transition the background to `surface` and apply a 1px "Ghost Border" using `primary` at 30% opacity.

### Additional Signature Components
- **The Progress Bloom:** A custom progress indicator for workout completion using a circular stroke of `primary` that fades into `primary-fixed-dim`.
- **The Layered Hero:** A layout component where `display-lg` text sits 20% over a high-resolution image, utilizing a `surface-tint` backdrop-blur behind the overlapping text.

---

## 6. Do's and Don'ts

### Do:
- **Embrace Asymmetry:** Align text to the left while keeping imagery floated slightly right-of-center.
- **Use "Breathing Room":** Use large spacing values (`20` or `24`) between major sections to mimic a premium spa atmosphere.
- **Color-Match Shadows:** Ensure any shadows have a hint of the berry/rose palette to keep them from looking "dirty."

### Don't:
- **Don't use 100% Black:** Always use `on-surface` (#1e1b1b) for text; pure black is too harsh for a wellness context.
- **Don't use Sharp Corners:** Always use the Roundedness Scale (`DEFAULT` to `xl`). Pilates is about flow and curves; the UI should reflect that.
- **Don't Over-Animate:** Transitions should be "Slow & Meaningful" (e.g., 400ms Ease-In-Out), mimicking a deep breath rather than a quick snap.

---

**Director's Note:** Junior designers should remember that "Premium" is often defined by what you *don't* include. If a section feels cluttered, increase the spacing and remove a border. Let the typography and the rose-toned surfaces do the heavy lifting.```