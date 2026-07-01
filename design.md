# VSA Enterprises Design System

Status: draft for approval before any code work.

This document translates the supplied brief and brochure into a premium industrial web design system for a static Next.js marketing site. The visual direction is engineering precision with quiet luxury: dark forged-metal surfaces, restrained brass highlights, high-legibility typography, and motion that feels deliberate rather than decorative.

## Source Reconciliation

I reviewed the 12-page PDF and matched it against the supplied Section 5 copy.

- Core company facts, location, contact data, raw-material claims, and category pages align with the PDF.
- The screw page in the PDF uses `Pin Head` and `Philips Head`; the brief matches that wording.
- The PDF studs image shows 9 stud types, not 10. It includes `Fully Threaded`, `Tap End`, `Double End`, `Reduced Shank`, `Shoulder Stud`, `Weld Bolts Stud`, `Dowel Stud`, `Partial Thread`, `U-Stud Bolt`, and `Eye Stud Bolt` is present visually while the count reads as a 5 + 4 composition because the title occupies the center.
- The only real content conflict is structural: the About copy mentions `anchors`, but the product taxonomy in the brochure is `Bolts, Nuts, Screws, Washers, Rivets, Studs`, with no anchors category page.

For design and later implementation, Section 5 should remain the source of truth unless you want the taxonomy corrected first.

## Brand Positioning

VSA Enterprises should read as a serious industrial supplier, not a commodity catalog. The tone is credible, exact, and dependable. The site should communicate:

- manufacturing-grade reliability
- disciplined material knowledge
- broad fastener coverage
- responsive B2B supply capability
- confidence despite being a newer company

The site should feel more like a premium engineering firm than a template-driven distributor.

## Visual Principles

- Use darkness as structure, not as mood for its own sake.
- Let brass accents signal trust, precision, and premium craft.
- Keep layouts spare and well-aligned; density should come from information, not clutter.
- Favor sharp edges, thin dividers, and disciplined spacing over rounded, soft consumer UI.
- Show hardware as tactile, metallic, and exact.

## Color System

### Core Palette

| Token | Hex | Role |
| --- | --- | --- |
| `obsidian` | `#0B0B0C` | primary page background |
| `forge` | `#16171A` | section background |
| `graphite` | `#1D1E22` | elevated panels and cards |
| `steel-line` | `#2A2B2F` | borders, dividers, keylines |
| `warm-ivory` | `#F2F0EA` | primary text on dark |
| `smoke` | `#B8BCC2` | secondary text, icons |
| `muted-metal` | `#8C8C90` | tertiary text, labels |
| `brass` | `#C9A24B` | primary accent |
| `brass-hover` | `#D8B65F` | hover and active highlight |
| `deep-brass` | `#A78337` | pressed states, dark-on-gold text support |
| `oxide` | `#9A3B3B` | highly sparing emphasis |
| `success-olive` | `#5F8A6D` | success/status only |

### Usage Rules

- Neutral dark tones should carry roughly 80 to 85 percent of the interface.
- Brass should stay under 10 percent of the total visible color area.
- Rust red should stay under 2 percent and only appear for key micro-accents, active markers, or editorial separators.
- White should never be pure; use warm ivory for a more premium finish.
- Avoid large gold fills except on primary buttons or small trust markers.

### Background Treatment

- Main page background: layered obsidian with a subtle forged-metal grain or soft radial falloff.
- Alternate sections can shift from `obsidian` to `forge` for depth.
- Cards should sit on `graphite` with fine borders, not drop-shadow-heavy glass or glossy surfaces.
- Hero areas may use a restrained charcoal-to-bronze vignette, but never loud gradients.

## Typography

### Font Pairing

- Headings: `Bricolage Grotesque`
- Body and UI: `Inter`
- Technical labels, dimensions, micro-metadata: `IBM Plex Mono`

### Typographic Character

- Headings should feel authoritative and slightly sculptural.
- Body text should remain neutral, efficient, and very readable.
- Mono text should be used for section codes, inventory cues, category markers, stat labels, and small trust details.

### Type Scale

| Style | Mobile | Tablet | Desktop | Usage |
| --- | --- | --- | --- | --- |
| `display` | `44/46` | `60/62` | `80/82` | hero title |
| `h1` | `36/40` | `48/52` | `64/68` | section-leading headlines |
| `h2` | `30/34` | `38/44` | `48/54` | major sections |
| `h3` | `24/30` | `28/34` | `36/42` | component or subsection titles |
| `h4` | `20/26` | `22/28` | `28/34` | cards and content blocks |
| `body-lg` | `18/30` | `18/30` | `20/32` | intro copy |
| `body` | `16/26` | `16/28` | `18/30` | standard paragraph |
| `body-sm` | `14/22` | `14/22` | `15/24` | support copy |
| `label` | `12/18` | `12/18` | `13/18` | buttons, tags |
| `mono-meta` | `11/16` | `12/16` | `12/16` | technical metadata |

### Typographic Rules

- Hero and major headings: `font-weight 700` or `800`, tight tracking from `-0.03em` to `-0.05em`.
- Section labels in mono: uppercase, `0.16em` tracking.
- Body copy should cap at 68 to 74 characters per line.
- Avoid centered paragraph blocks except short hero support lines.

## Layout, Grid, and Spacing

### Breakpoints

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Containers

- Standard content max width: `1280px`
- Wide hero/media band max width: `1440px`
- Reading column max width: `720px`

### Grid

- Mobile: 4 columns, 16px gutters
- Tablet: 8 columns, 24px gutters
- Desktop: 12 columns, 32px gutters

### Spacing Scale

Base unit: 4px

Recommended scale: `4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128`

### Section Rhythm

- Mobile section padding: `72px` top and bottom
- Tablet section padding: `88px` to `96px`
- Desktop section padding: `112px` to `128px`
- Tight component stacks should use `24px` or `32px`, not arbitrary gaps

## Surfaces and Shape Language

- Primary corner radius: `6px`
- Tight UI elements: `4px`
- Large media panels: `8px`
- Avoid pills except for micro-badges or stat chips
- Default border: `1px solid #2A2B2F`
- Elevated surfaces may use a second inner hairline in a faint brass tint for premium detail

The geometry should feel machined and controlled, not bubbly or soft.

## Component Direction

### Buttons

Primary button:

- brass fill
- obsidian text
- height `48px` mobile, `52px` desktop
- horizontal padding `20px` to `24px`
- subtle lift on hover, never a large glow

Secondary button:

- transparent or graphite fill
- brass or ivory text
- steel-line border

Tertiary text action:

- mono label or compact sans label
- small arrow or line accent

### Navigation

- Transparent over hero, solid `obsidian` or `forge` after scroll
- Height: `68px` mobile, `76px` desktop
- Wordmark left, concise nav center/right, CTA on desktop
- Mobile menu should feel editorial and architectural, not drawer-template generic

### Section Eyebrows

- Use `IBM Plex Mono`
- uppercase
- brass or smoke
- generous tracking
- optional thin line extension to the right

### Cards

Use three card families:

- capability cards for strengths and differentiators
- product cards for category entry points
- trust cards for contact, delivery, or material assurances

Card rules:

- dark surface
- thin keyline
- strong heading hierarchy
- hover state adds slight translate and border-accent shift
- no soft shadows or pastel icon tiles

### Badges and Chips

- Mono text
- graphite background
- brass or smoke text
- used for material grades, categories, or short proof points

### Dividers

- Prefer hairline rules and inset separators
- Mix steel-line with occasional short brass segments
- Avoid heavy boxed sections unless supporting dense information

### Data and Trust Blocks

- Present phone, email, and address in a structured B2B layout
- Pair labels in mono with readable values in Inter
- Use icon support sparingly and consistently

## Iconography

- Use a restrained line icon set such as `lucide-react`
- Icon stroke weight should remain visually light against dense dark backgrounds
- Prefer engineering-adjacent icons: factory, bolt, shield, phone, mail, map pin, badge check, layers, cog
- Do not mix outline and filled icon styles
- Avoid novelty or cartoon industrial symbols

## Imagery Direction

### Photography

- Macro product photography with hard material definition
- Metal textures, threads, edges, machining marks, plated finishes
- Warehouse or fabrication context only when it adds credibility
- Lighting should feel directional, contrast-rich, and premium

### Composition

- Combine close-up hardware imagery with negative space for typography
- Use cropped detail shots rather than busy catalog collages on core landing sections
- Product-type montage graphics are acceptable inside category sections, but the homepage should feel more elevated than the brochure pages

### Asset Treatment

- Keep imagery slightly desaturated so brass UI accents stay dominant
- Prefer dark backplates, graphite staging, or industrial neutral backgrounds
- No fake 3D renders unless they are production-grade

## Motion System

Motion should feel precise, heavy, and controlled.

### Timing

- fast: `120ms`
- standard: `220ms`
- reveal: `360ms`
- section-enter: `500ms` to `600ms`

### Easing

- default: `cubic-bezier(0.22, 1, 0.36, 1)`
- linear only for ambient background drift or extremely slow mechanical rotation

### Patterns

- Hero text reveal with low-distance upward fade
- Staggered card entrances with `40ms` to `70ms` intervals
- Border or underline growth on hover
- Slow parallax or lighting shift on large hero imagery only if performance stays clean

### Constraints

- No bouncing
- No springy consumer-style motion
- No continuous animation on multiple elements at once
- Respect `prefers-reduced-motion`

## Accessibility

- Meet WCAG AA contrast across all production combinations
- Minimum body text size: `16px`
- Minimum tap target: `44px`
- Keyboard focus must be obvious: `2px` brass ring with visible offset
- Do not rely on brass alone to signal state changes
- Preserve readable line lengths and spacing on mobile
- Ensure overlays and hero text remain legible over imagery with gradient scrims when needed

## Content Presentation Guidance

- Speak in concise industrial B2B language.
- Favor proof-oriented statements over marketing adjectives.
- Product categories should be easy to scan before the user reads detail text.
- Contact and inquiry pathways should stay visible across the site, especially on mobile.
- The newer-company trust gap should be addressed through material breadth, responsiveness, precision, and professionalism rather than inflated claims.

## What This Means for the Build

- The homepage should feel like a flagship industrial brochure, not an ecommerce grid.
- The product pages or sections should inherit the same premium shell, even when presenting practical catalog information.
- The visual system should be tokenized cleanly enough for Tailwind theme extension and reusable React components.
- The site should remain largely static, fast, and image-forward without becoming visually noisy.

## Approval Checkpoint

This design direction is ready for implementation planning once approved. No code should start until this document is accepted and the taxonomy question around `anchors` versus the actual brochure categories is resolved or explicitly deferred.
