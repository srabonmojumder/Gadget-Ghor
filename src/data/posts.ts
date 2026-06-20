import type { Post } from "@/lib/types";

const author = {
  name: "Arif Hossain",
  role: "Tech Editor",
  avatar: "/images/avatar-1.jpg",
};

export const POSTS: Post[] = [
  {
    id: 1,
    slug: "how-ai-earbuds-redefine-listening",
    title: "How AI Earbuds Are Redefining Everyday Listening",
    excerpt:
      "Adaptive noise cancellation and on-device AI are turning ordinary earbuds into personal sound engineers.",
    tag: "Audio",
    date: "Jun 12, 2026",
    read: "5 min read",
    image: "/images/blog-ai-earbuds.jpg",
    author,
    body: [
      "For years, earbuds were judged on a single question: do they sound good? In 2026, that question has been replaced by something far more interesting — can they adapt to you?",
      "Modern flagship earbuds now ship with dedicated neural processors that analyse your surroundings hundreds of times per second. They distinguish a passing bus from a colleague's voice, and they tune the soundstage to your ear shape during the first few minutes of use.",
      "The result is a listening experience that feels personal. Calls stay crisp in the wind, music adapts to the room, and battery life keeps stretching thanks to smarter power management. At Gadget-Ghor we test every pair against the same demanding benchmark, so you only see the ones worth your ears.",
    ],
  },
  {
    id: 2,
    slug: "building-ultimate-smart-home-2026",
    title: "Building the Ultimate Smart Home in 2026",
    excerpt:
      "From ambient lighting to AI assistants — the components you actually need to automate your space.",
    tag: "Smart Home",
    date: "Jun 08, 2026",
    read: "7 min read",
    image: "/images/smart-home.jpg",
    author,
    body: [
      "A truly smart home isn't about owning the most gadgets — it's about the right ones talking to each other. The arrival of Matter and Thread has finally made that possible without locking you into a single brand.",
      "Start with a reliable hub, add lighting you can schedule, then layer in security and climate control. Each piece should make a daily task disappear, not add a new one to manage.",
      "Privacy matters too. Local automation keeps your routines on-device instead of in the cloud, so your home stays yours. We round up the hubs and sensors that strike the best balance of power and privacy.",
    ],
  },
  {
    id: 3,
    slug: "laptops-vs-tablets-buying-guide",
    title: "Laptops vs Tablets: Which Should You Buy?",
    excerpt:
      "Performance, portability and price — a no-nonsense guide to picking your next daily driver.",
    tag: "Buying Guide",
    date: "Jun 02, 2026",
    read: "6 min read",
    image: "/images/blog-laptops.jpg",
    author,
    body: [
      "The line between laptops and tablets keeps blurring. Today's tablets run desktop-class apps, and the lightest laptops weigh barely more than a hardcover book.",
      "If you write, code or juggle dozens of tabs, a laptop's keyboard and multitasking still win. If you sketch, read and travel light, a tablet with a stylus may be all you need.",
      "Our advice: buy for the task you do most, not the one you do occasionally. We break down the trade-offs so the decision takes minutes, not weeks.",
    ],
  },
  {
    id: 4,
    slug: "best-gaming-gear-2026",
    title: "The Best Gaming Gear to Level Up in 2026",
    excerpt:
      "Hall-effect controllers, gasket keyboards and low-latency headsets that give you the edge.",
    tag: "Gaming",
    date: "May 28, 2026",
    read: "8 min read",
    image: "/images/gaming-controller.jpg",
    author,
    body: [
      "Competitive gaming rewards consistency, and your gear is the foundation. Stick drift, mushy keys and laggy audio quietly cost you matches.",
      "This year's standouts solve those problems at the hardware level: hall-effect sticks that never drift, hot-swappable keyboards you can tune to your touch, and headsets with sub-millisecond wireless.",
      "We tested them across genres so you can pick gear that disappears into your gameplay — exactly where great gear belongs.",
    ],
  },
  {
    id: 5,
    slug: "smartwatch-health-features-that-matter",
    title: "Smartwatch Health Features That Actually Matter",
    excerpt:
      "Beyond step counts — the sensors and metrics worth paying attention to in 2026.",
    tag: "Wearables",
    date: "May 20, 2026",
    read: "5 min read",
    image: "/images/smartwatch.jpg",
    author,
    body: [
      "Smartwatches now pack a clinic's worth of sensors, but not every metric is equally useful. Knowing which ones matter helps you cut through the noise.",
      "Heart-rate variability, blood-oxygen trends and sleep staging give a real picture of recovery. Flashy one-off readings make for nice screenshots but rarely change behaviour.",
      "We highlight the watches whose data you can actually act on, with battery life long enough to wear them through the night.",
    ],
  },
  {
    id: 6,
    slug: "drones-for-creators",
    title: "Drones for Creators: Cinematic Shots Made Simple",
    excerpt:
      "Foldable, stabilised and smarter than ever — drones that fit in a jacket pocket.",
    tag: "Cameras",
    date: "May 14, 2026",
    read: "6 min read",
    image: "/images/drone.jpg",
    author,
    body: [
      "Aerial footage used to demand a pilot's licence and a heavy case of gear. Today's foldable drones slip into a jacket pocket and practically fly themselves.",
      "Mechanical gimbals keep horizons level, automated flight paths nail repeatable shots, and obstacle sensors keep your investment safe.",
      "Whether you're filming travel reels or real estate, we cover the models that deliver the most cinematic results for the least hassle.",
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
