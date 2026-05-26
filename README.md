# configurator-3d

A 3D product configurator: customize materials, colors, and details on a 3D model in real time. A portfolio piece exploring WebGL, React Three Fiber, and the UX patterns that make 3D feel native to the web.

## Status

Pre-development. Scope and architecture defined; implementation in progress.

## Why this exists

3D on the web is increasingly table-stakes for premium consumer products — but most implementations feel bolted on. This project explores what a configurator looks like when motion, material swaps, camera transitions, and mobile gestures are treated as first-class UX, not afterthoughts.

## Planned stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15 (App Router) | Easy deploy, marketing-page friendly |
| 3D | React Three Fiber + Drei | The de facto declarative R3F stack |
| Post-processing | @react-three/postprocessing | Bloom, SSAO, color grading |
| Motion | Framer Motion + GSAP | UI motion + camera tweens |
| Models | GLTF (Khronos format) | Industry standard |
| Deploy | Vercel | Standard |

## Planned features

- Real-time material and color customization
- Smooth camera transitions to focus configurable regions
- Mobile-friendly: pinch zoom, drag-rotate, haptic feedback
- Shareable URLs encoding the full configuration
- Performance budget: 60fps on M1 / mid-tier Android
- Light/dark studio environments

## Planned product

A sneaker configurator — high visual complexity, recognizable, and an excuse to handle multiple swappable materials (leather, mesh, sole, laces).

## Roadmap

- [ ] Scene setup, lighting, base model
- [ ] Material/color swap UI
- [ ] Camera transitions per region
- [ ] Mobile gestures + haptics
- [ ] Shareable URL state
- [ ] Polish: post-processing, motion, marketing-quality landing

---

By [Jamison Kimminau](https://github.com/jkimminau).
