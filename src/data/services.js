/**
 * services.js — Single source of truth for the six service offerings.
 *
 * Consumed by both the homepage Services grid (`Services.jsx`) and the
 * per-service detail pages (`ServicePage.jsx`), plus the sitemap/SEO helpers.
 *
 * Each entry carries:
 *  - slug:        URL segment → /services/<slug>
 *  - icon:        react-icons component (Font Awesome set)
 *  - title:       full marketing title
 *  - short:       one-line summary used on the homepage card
 *  - image/imageAlt: on-brand placehold.co placeholder (swap per the TODO)
 *  - intro:       lead paragraph for the detail page
 *  - benefits[]:  bullet points (benefit-led copy)
 *  - faqs[]:      { q, a } pairs surfaced on the detail page + FAQ JSON-LD
 *
 * NOTE: All copy below is on-brand PLACEHOLDER copy. Every concrete claim
 * (numbers, certifications, warranty terms) is marked `TODO: confirm` so the
 * client can verify before launch. All `image` values are placehold.co
 * placeholders — see the Image Plan in CLAUDE.md and store finals in
 * public/images/.
 */
import {
  FaCar,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaBluetooth,
  FaVideo,
  FaBell,
} from 'react-icons/fa'

export const SERVICES = [
  {
    slug: 'ntsa-speed-limiters',
    icon: FaCar,
    title: 'NTSA Approved Vehicle Speed Limiters',
    short:
      "Stay compliant with Kenya's NTSA regulations. Certified speed limiters keep your vehicles within legal speed limits.",
    // TODO: Replace with a close-up photo of a fitted NTSA speed-limiter unit.
    image: 'images/services/speedgovernor.png',
    imageAlt: 'NTSA approved vehicle speed limiter device installed in a vehicle',
    intro:
      'Our NTSA-approved speed limiters help commercial operators meet Kenyan road-safety law while protecting drivers, cargo, and the public. Each unit is professionally fitted and calibrated by certified technicians at any of our three branches.',
    benefits: [
      // TODO: confirm current NTSA spec reference
      'Fully compliant with NTSA speed-governing regulations for PSVs and commercial vehicles.',
      'Professional installation and calibration by certified technicians.',
      // TODO: confirm a compliance certificate is issued
      'Tamper-evident fitting with compliance certificate issued on completion.',
      'Nationwide support and recalibration across Nairobi, Sagana, and Embu.',
    ],
    faqs: [
      {
        q: 'Is the speed limiter NTSA approved?',
        // TODO: confirm certificate wording
        a: 'Yes. We supply and fit speed limiters that meet NTSA requirements, with a compliance certificate on completion.',
      },
      {
        q: 'How long does installation take?',
        // TODO: confirm typical turnaround
        a: 'Most installations are completed the same day.',
      },
    ],
  },
  {
    slug: 'gps-trackers',
    icon: FaMapMarkerAlt,
    title: 'GPS Vehicle Trackers',
    short:
      'Real-time vehicle tracking with advanced GPS. Monitor your fleet 24/7 from anywhere in Kenya.',
    // TODO: Replace with GPS tracker hardware or a live tracking dashboard/map UI.
    image: 'images/services/gpstracker.png',
    imageAlt: 'GPS vehicle tracker showing real-time location on a live map',
    intro:
      'Know where every vehicle is, in real time. Our GPS trackers stream live location, speed, and trip history to a secure dashboard so you can manage fleets, recover stolen vehicles, and cut running costs.',
    benefits: [
      'Live 24/7 location, speed, and route history from any device.',
      'Geofence alerts and instant notifications for unauthorised movement.',
      'Trip reports to reduce fuel waste and improve driver accountability.',
      'Theft-recovery support with precise last-known location.',
    ],
    faqs: [
      {
        q: 'Can I track my vehicle from my phone?',
        // TODO: confirm app/portal details
        a: 'Yes. Live tracking is available from any phone or computer via a secure login.',
      },
      {
        q: 'Is there a monthly subscription?',
        // TODO: confirm pricing
        a: 'Tracking runs on an affordable monthly data/platform plan.',
      },
    ],
  },
  {
    slug: 'basic-trackers',
    icon: FaShieldAlt,
    title: 'Basic Vehicle Trackers',
    short:
      'Affordable, reliable tracking for personal and commercial vehicles.',
    // TODO: Replace with a basic tracker product photo (compact tracker unit).
    image: 'images/services/basicgpstracker.png',
    imageAlt: 'Compact basic vehicle tracker unit for affordable monitoring',
    intro:
      'A cost-effective entry into vehicle security. The basic tracker delivers dependable location and anti-theft essentials for private owners and small fleets who want peace of mind without the extras.',
    benefits: [
      'Budget-friendly tracking with the security essentials covered.',
      'Reliable location lookups and movement alerts.',
      'Discreet installation by our certified technicians.',
      'Easy upgrade path to full GPS fleet tracking later.',
    ],
    faqs: [
      {
        q: 'What is the difference from the GPS tracker?',
        // TODO: confirm feature split
        a: 'The basic tracker covers core location and anti-theft needs, while the GPS tracker adds live fleet dashboards, geofencing, and detailed reporting.',
      },
    ],
  },
  {
    slug: 'bluetooth-trackers',
    icon: FaBluetooth,
    title: 'Bluetooth Trackers',
    short:
      'Smart Bluetooth ignition technology for keyless vehicle security and convenience.',
    // TODO: Replace with a Bluetooth ignition module / phone app screen photo.
    image: 'images/services/btgpstracker.png',
    imageAlt: 'Bluetooth tracker with smart ignition technology for vehicle security',
    intro:
      'Smart, phone-aware vehicle security. Bluetooth ignition technology pairs your vehicle with an authorised device for keyless convenience and an extra layer of anti-theft protection.',
    benefits: [
      'Keyless, phone-based ignition convenience.',
      // TODO: confirm ignition behaviour
      'Added anti-theft layer — the engine only starts for paired devices.',
      'Seamless pairing with quick handover for multiple drivers.',
      'Works alongside GPS tracking for complete coverage.',
    ],
    faqs: [
      {
        q: 'What happens if my phone battery dies?',
        // TODO: confirm fallback access
        a: 'A backup access method is provided so you are never locked out.',
      },
    ],
  },
  {
    slug: 'video-telematics',
    icon: FaVideo,
    title: 'Vehicle Video Telematics',
    short:
      'HD video monitoring plus telematics data for complete fleet visibility and driver safety.',
    // TODO: Replace with a dash-cam mounted in a vehicle cab.
    image: 'images/services/videotelematics.png',
    imageAlt: 'In-cab vehicle dash camera for video telematics and fleet safety',
    intro:
      'See what your drivers see. Video telematics combines HD dash-cam footage with live vehicle data to improve driver safety, resolve disputes, and protect your business with verifiable evidence.',
    benefits: [
      'HD road- and cab-facing footage synced with trip data.',
      'Event clips on harsh braking, speeding, or impact.',
      // TODO: confirm insurer acceptance
      'Stronger insurance and dispute outcomes with video evidence.',
      'Driver coaching insights to reduce incidents over time.',
    ],
    faqs: [
      {
        q: 'Is footage stored in the cloud?',
        // TODO: confirm storage/retention
        a: 'Footage can be reviewed and retained per your plan.',
      },
    ],
  },
  {
    slug: 'car-alarms',
    icon: FaBell,
    title: 'Car Alarms',
    short:
      'Advanced car alarm systems that protect your vehicle from theft and unauthorised access.',
    // TODO: Replace with a car alarm system / siren / key fob photo.
    image: 'images/services/caralarm.png',
    imageAlt: 'Car alarm system with key fob for vehicle theft protection in Kenya',
    intro:
      'Deter theft before it happens. Our car alarm systems combine loud sirens, smart sensors, and remote control for everyday protection you can rely on.',
    benefits: [
      'Loud siren and flashing-light deterrent against break-ins.',
      'Shock and intrusion sensors for early warning.',
      'Convenient remote arming and disarming via key fob.',
      'Professional fitting that integrates cleanly with your vehicle.',
    ],
    faqs: [
      {
        q: 'Can the alarm be added to any vehicle?',
        // TODO: confirm any exceptions
        a: 'Yes, our technicians fit alarm systems across most makes and models.',
      },
    ],
  },
]

/** Look up a single service by its URL slug. */
export const getServiceBySlug = (slug) =>
  SERVICES.find((service) => service.slug === slug)
