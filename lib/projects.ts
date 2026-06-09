export type Project = {
  slug: string
  name: string
  category: string
  location: string
  year: string
  scope: string
  image: string
  size: 'wide' | 'tall' | 'regular'
}

export const projects: Project[] = [
  // ── Wall Painting ──────────────────────────────────────────────
  {
    slug: 'interior-roller-finish',
    name: 'Roller & Brush Finishing',
    category: 'Wall Painting',
    location: 'Dansoman, Accra',
    year: '2024',
    scope: 'Hand-rolled premium interior walls with a flawless, even finish',
    image: '/interior-living.jpeg',
    size: 'regular',
  },
  {
    slug: 'interior-accent-wall',
    name: 'Kitchen & Dining Finish',
    category: 'Wall Painting',
    location: 'Dansoman, Accra',
    year: '2024',
    scope: 'Deep-tone feature walls with precision cut lines across kitchen and dining spaces',
    image: '/interior-kitchen.jpeg',
    size: 'regular',
  },
  {
    slug: 'commercial-interior-repaint',
    name: 'Luxury Dining Room',
    category: 'Wall Painting',
    location: 'Accra, Ghana',
    year: '2023',
    scope: 'Full repaint and decorative finish in an upscale dining room interior',
    image: '/interior-dining.jpeg',
    size: 'tall',
  },
  {
    slug: 'interior-room-suite',
    name: 'Suite Interior Coat',
    category: 'Wall Painting',
    location: 'Accra, Ghana',
    year: '2023',
    scope: 'Premium two-coat finish across a full residential suite',
    image: '/interior-room1.jpeg',
    size: 'regular',
  },
  {
    slug: 'interior-room-refresh',
    name: 'Room Refresh & Repaint',
    category: 'Wall Painting',
    location: 'Accra, Ghana',
    year: '2022',
    scope: 'Colour refresh with flawless roller finish and hand-cut edges',
    image: '/interior-room2.jpeg',
    size: 'regular',
  },

  // ── Decorative ─────────────────────────────────────────────────
  {
    slug: 'decorative-green-living',
    name: 'Green Living Room',
    category: 'Decorative',
    location: 'Dansoman, Accra',
    year: '2024',
    scope: 'Bold green feature walls with complementary trim and accent detailing',
    image: '/decorative-green-living.jpeg',
    size: 'regular',
  },
  {
    slug: 'decorative-midnight-blue',
    name: 'Midnight Blue Feature',
    category: 'Decorative',
    location: 'Accra, Ghana',
    year: '2024',
    scope: 'Deep midnight blue finish with layered tonal depth on feature walls',
    image: '/decorative-midnight-blue.jpeg',
    size: 'regular',
  },
  {
    slug: 'decorative-wallpaper',
    name: 'Wallpaper & Paint Combo',
    category: 'Decorative',
    location: 'Accra, Ghana',
    year: '2023',
    scope: 'Coordinated wallpaper and painted surface treatment across a living room',
    image: '/decorative-wallpaper.jpeg',
    size: 'wide',
  },
  {
    slug: 'decorative-1',
    name: 'Decorative Colour Study',
    category: 'Decorative',
    location: 'Accra, Ghana',
    year: '2023',
    scope: 'Custom colour scheme with decorative paint finishes throughout',
    image: '/decorative-1.jpeg',
    size: 'regular',
  },
  {
    slug: 'decorative-2',
    name: 'Layered Tone Finish',
    category: 'Decorative',
    location: 'Accra, Ghana',
    year: '2023',
    scope: 'Multi-layer tonal paint finish for a rich, textured wall effect',
    image: '/decorative-2.jpeg',
    size: 'regular',
  },
  {
    slug: 'decorative-3',
    name: 'Accent & Trim Detail',
    category: 'Decorative',
    location: 'Accra, Ghana',
    year: '2022',
    scope: 'Precision accent colours with carefully matched trim and cornice work',
    image: '/decorative-3.jpeg',
    size: 'regular',
  },
  {
    slug: 'decorative-4',
    name: 'Statement Room Finish',
    category: 'Decorative',
    location: 'Accra, Ghana',
    year: '2022',
    scope: 'Full-room decorative finish with curated palette and contrast detailing',
    image: '/decorative-4.jpeg',
    size: 'regular',
  },
  {
    slug: 'decorative-duvet',
    name: 'Bedroom Colour Scheme',
    category: 'Decorative',
    location: 'Dansoman, Accra',
    year: '2022',
    scope: 'Soft tonal bedroom palette with complementary wall and ceiling finishes',
    image: '/decorative-duvet.jpeg',
    size: 'regular',
  },

  // ── Exterior ───────────────────────────────────────────────────
  {
    slug: 'airless-spray-facade',
    name: 'Modern House Elevation',
    category: 'Exterior',
    location: 'Accra, Ghana',
    year: '2023',
    scope: 'High-build elastomeric coating on a modern residential elevation',
    image: '/exterior-elevation.jpeg',
    size: 'regular',
  },
  {
    slug: 'commercial-exterior-tower',
    name: 'Villa Exterior Finish',
    category: 'Exterior',
    location: 'Accra, Ghana',
    year: '2023',
    scope: 'Full exterior repaint on a luxury villa with custom colour specification',
    image: '/exterior-villa.jpeg',
    size: 'regular',
  },
  {
    slug: 'warehouse-exterior',
    name: 'Grey Roof Colour Scheme',
    category: 'Exterior',
    location: 'Accra, Ghana',
    year: '2022',
    scope: 'Coordinated exterior palette designed to complement a grey roof system',
    image: '/exterior-grey-roof.jpeg',
    size: 'wide',
  },
  {
    slug: 'exterior-house-1',
    name: 'Contemporary Facade',
    category: 'Exterior',
    location: 'Dansoman, Accra',
    year: '2024',
    scope: 'Two-tone contemporary exterior with clean lines and durable finish coat',
    image: '/exterior-house-1.jpeg',
    size: 'regular',
  },
  {
    slug: 'exterior-house-2',
    name: 'Residential Repaint',
    category: 'Exterior',
    location: 'Dansoman, Accra',
    year: '2024',
    scope: 'Full residential exterior repaint with weather-barrier primer and topcoat',
    image: '/exterior-house-2.jpeg',
    size: 'tall',
  },
  {
    slug: 'exterior-modern',
    name: 'Modern Home Exterior',
    category: 'Exterior',
    location: 'Accra, Ghana',
    year: '2023',
    scope: 'Sleek modern exterior finished with low-sheen elastomeric coating',
    image: '/exterior-modern.jpeg',
    size: 'regular',
  },
]

export const services = [
  {
    title: 'Interior & Exterior Painting',
    description:
      'Premium paint finishes for homes, offices, hotels and commercial buildings using certified Sunville Paints products built for Ghana\'s climate.',
  },
  {
    title: 'Plastering & Rendering',
    description:
      'Smooth and textured wall plastering, sand and cement rendering, and decorative plaster finishes that provide a perfect base for any coating.',
  },
  {
    title: 'Tiling',
    description:
      'Professional floor and wall tiling for kitchens, bathrooms, terraces and commercial spaces — precision laid, perfectly grouted.',
  },
  {
    title: 'POP Design & Ceilings',
    description:
      'Plaster of Paris (POP) ceiling designs, cornices and decorative mouldings that transform living rooms, offices and reception areas.',
  },
]

export const process = [
  {
    step: '01',
    title: 'Site Visit',
    description:
      'We visit your property, assess the surfaces and scope of work, and give you an honest free estimate with no hidden charges.',
  },
  {
    step: '02',
    title: 'Surface Prep',
    description:
      'Proper filling, sanding, priming and masking — the groundwork that separates a finish that peels from one that lasts for years.',
  },
  {
    step: '03',
    title: 'Expert Application',
    description:
      'Our certified team applies your chosen finish on schedule, keeping your space clean and disruption to a minimum.',
  },
  {
    step: '04',
    title: 'Final Handover',
    description:
      'A full walkthrough, touch-ups if needed, and sign-off when you\'re completely satisfied with the result.',
  },
]
