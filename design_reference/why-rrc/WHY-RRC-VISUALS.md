# Why RRC — Cinematic Visual System

Status: **hero + intro visuals live.** The two slots (`AcademicVisual`,
`StudyNotesVisual`) now crossfade to cinematic photographs supplied in
`src/assets/` via the progressive `WhyVisual` component
(`src/components/WhyVisual.jsx`). If a photograph is ever missing the approved
vector illustration stays and nothing breaks. The remaining sections below are
proposed (not yet wired).

## Conventions

- Location: `src/assets/` (repo convention), imported in `WhyRRC.jsx` and passed
  to `<WhyVisual src={...} />`.
- Prefer `.png` or high-quality `.jpg`. Hero ≤ ~400 KB, section images ≤ ~250 KB.
- No text, logos, watermarks, on-screen UI text, distorted hands, duplicate
  people or unnatural faces in any image.
- Shared palette: warm wood + paper + cream, an Indian subject, natural daylight,
  navy (#0E1C2F) and gold (#FED488 / #775A19) used only as accents. Bright and
  aspirational — never dark or moody.

## Filename → slot map

| File (`src/assets/`) | Section | Ratio | object-position | Wired now? |
|---|---|---|---|---|
| `why_rrc_hero_section.jpg` | Hero | 16:9 | `70% 50%` | **yes** |
| `why_rrc_next_hero_inside_section.png` | Why Structured Preparation Matters | 16:9 | `50% 50%` | **yes** |
| `why-rrc-core-strengths.png` | What the RRC Approach Focuses On | 3:2 | `50% 50%` | later |
| `why-rrc-preparation-cycle.png` | A Preparation Cycle Built Around Progress | 3:2 | `50% 50%` | later |
| `why-rrc-learning-areas.png` | Areas That Support Law Entrance Preparation | 3:2 | `50% 50%` | later |
| `why-rrc-application.png` | Learning Should Lead to Application | 3:2 | `50% 50%` | later |
| `why-rrc-awareness.png` | Stay Connected to Current Affairs | 3:2 | `50% 50%` | later |
| `why-rrc-guidance.png` | Guidance Across the Learning Journey | 3:2 | `50% 50%` | later |
| `why-rrc-programs.png` | Programs for Different Stages of Preparation | 3:2 | `50% 50%` | later |
| `why-rrc-environment.png` | An Environment Built for Focused Learning | 3:2 | `50% 50%` | later |
| `why-rrc-audience.png` | Who Can Explore RRC Law Academy? | 3:2 | `50% 50%` | later |
| `why-rrc-cta.png` | Start With a Structured Preparation Plan | 16:9 | `50% 50%` | later |

Tune a slot's focus with the `focus` prop (`object-position`) and, once the real
photo's aspect is known, an optional `--rrc-why-radius` / `--rrc-why-aspect` in
the slot's CSS.

## Shared negative block (append to every prompt)

> no text, no lettering, no logos, no watermarks, no captions, no UI screens with
> readable text, no charts with readable text, no distorted hands, no
> extra/duplicate people, no unnatural faces, no plastic skin, no oversaturation,
> not dark or moody, no heavy blue/gold colour grading, no CGI or illustration look.

---

## Prompts

### 1. `why-rrc-hero.png` — Hero (16:9)
Cinematic editorial photograph, a single focused Indian law aspirant aged 19-23
seated at a premium wooden study desk in a bright modern law-academy study room,
reading a thick legal preparation book with a notebook and a stack of law
textbooks beside them; dignified navy blazer or smart casual, subtle gold
desk-lamp accent; positioned on the RIGHT third of the frame in three-quarter
view, generous clean negative space on the LEFT; large window soft daylight from
the left, shallow depth of field f/2.0, warm library shelves soft in the
background; calm, confident, determined expression; natural skin tones, realistic
hands, premium educational atmosphere.

### 2. `why-rrc-structured-preparation.png` — Why Structured Preparation Matters (3:2)
Cinematic photograph, top-three-quarter view of a tidy premium wooden study desk
used by an Indian law aspirant: neat handwritten preparatory notes with
colour-coded tabs, an open law entrance guidebook, a stack of hardcover law
textbooks, a highlighter and pen, and a printed mock-test booklet - blurred pages
only, no readable text; a female Indian student's hands (correct anatomy)
arranging the notes; bright window daylight, warm wood and cream tones with a navy
notebook and a small brass/gold accent; shallow depth of field; disciplined,
purposeful mood.

### 3. `why-rrc-core-strengths.png` — What the RRC Approach Focuses On (3:2)
Cinematic editorial photograph, an experienced Indian male law mentor aged 38-45
in a navy blazer and light shirt reviewing material with three Indian students
aged 18-22 around a wooden table in a bright modern law classroom; he points
naturally at a set of abstract notes (no readable text, no on-screen text); the
students lean in attentively; large window daylight, soft falloff, shallow depth
of field; trust and personal-attention mood; realistic hands and faces, natural
skin tones; navy/gold accents only.

### 4. `why-rrc-preparation-cycle.png` — A Preparation Cycle Built Around Progress (3:2)
Cinematic photograph, Indian law aspirants aged 18-24 seated at neat rows of
wooden desks taking a serious timed mock test in a modern bright examination
hall; answer sheets and question booklets abstract and unreadable, pens in hand,
focused expressions; a wall clock soft-blurred in the background; daylight from
tall windows, shallow depth of field, quiet disciplined exam atmosphere; realistic
hands, correct posture, natural skin tones.

### 5. `why-rrc-learning-areas.png` — Areas That Support Law Entrance Preparation (3:2)
Cinematic photograph, two or three Indian law students aged 19-23 researching
legal material together at a long wooden library table in a bright modern law
library, open hardcover law books and a laptop with a blurred abstract screen, one
student pointing at a passage; warm wood shelves filled with books receding into
soft bokeh; natural window light, shallow depth of field; intellectual curiosity,
serious learning mood; realistic hands and faces.

### 6. `why-rrc-application.png` — Learning Should Lead to Application (3:2)
Cinematic editorial photograph, an Indian law candidate aged 20 and an experienced
Indian mentor aged 40 in a navy blazer reviewing a mock-test performance sheet
together at a desk in a bright study room; the mentor explains improvement points
(printed sheet abstract with squiggle marks only, no readable text); a coffee cup,
pen and a laptop with a blurred screen on the walnut desk; window daylight, shallow
depth of field; constructive, analytical, growth-oriented mood; realistic hands and
faces, natural skin tones; navy/gold accents.

### 7. `why-rrc-awareness.png` — Stay Connected to Current Affairs (3:2)
Cinematic photograph, an Indian law aspirant aged 18-22 seated by a bright window
in a modern study space reading a folded newspaper, a notebook and a smartphone
face-down beside them; newspaper pages abstract and unreadable; warm morning
daylight, quiet contemplative mood, shallow depth of field, soft neutral cream and
wood background; realistic hands and natural expression; no readable headlines.

### 8. `why-rrc-guidance.png` — Guidance Across the Learning Journey (3:2)
Cinematic editorial photograph, a warm one-to-one mentoring moment - an Indian
female student aged 19 and an Indian male mentor aged 36 seated across a light
wooden table in a bright modern law-academy counselling room, reviewing
preparation material together; the mentor gestures calmly, the student listens and
takes notes; window daylight, shallow depth of field, clean uncluttered background
with a subtle bookshelf and a framed abstract print; trust and personal-attention
mood, natural skin tones, realistic anatomy.

### 9. `why-rrc-programs.png` — Programs for Different Stages of Preparation (3:2)
Cinematic photograph, a mixed group of Indian law aspirants of different ages and
stages (a school student about 16, undergraduates about 19-21, a graduate about
24) gathered around a bright communal study table in a modern law academy, some
reading, some discussing, a mentor soft-blurred in the background; large windows,
warm daylight, shallow depth of field; inclusive, purposeful, progression mood;
realistic faces and hands, natural skin tones.

### 10. `why-rrc-environment.png` — An Environment Built for Focused Learning (3:2)
Cinematic architectural interior photograph of a premium modern law-academy study
hall: warm wooden reading desks with navy upholstered chairs neatly aligned, tall
bright windows, shelves of hardcover law books receding into bokeh, a brass
reading lamp as a gold accent; soft natural daylight, no people or one distant
out-of-focus figure; calm, disciplined, aspirational atmosphere; realistic
materials and light.

### 11. `why-rrc-audience.png` — Who Can Explore RRC Law Academy? (3:2)
Cinematic editorial photograph, an inclusive candid group of Indian learners of
varied ages and backgrounds (a teenage school student, two undergraduates, a young
graduate) seated and standing naturally with notebooks and law books in a bright
modern law-academy space; genuine relaxed confidence, slight depth of field,
window daylight; warm, welcoming, professional mood; realistic faces and hands,
natural skin tones.

### 12. `why-rrc-cta.png` — Start With a Structured Preparation Plan (16:9)
Cinematic photograph, a confident young Indian law student aged 21 standing near a
large bright window in a sophisticated law-academy library, holding a law book and
looking thoughtfully toward the light off-frame; navy blazer, natural daylight
rim-lighting, deep soft bokeh of bookshelves behind; ambitious, hopeful,
forward-looking mood with plenty of clean negative space on one side; realistic
anatomy, natural skin tones; navy/gold palette accents only.

---

The two wired slots load their photographs from `src/assets` and crossfade in on
load (hero eager, section lazy). The remaining slots in the map are proposed
filenames: add the artwork under `src/assets/`, import it in `WhyRRC.jsx`, and
wrap the section's visual with `<WhyVisual src={...} />` when we extend the page.
Remember the shared negative block above — in particular, no readable on-screen
text — before an asset is wired in.
