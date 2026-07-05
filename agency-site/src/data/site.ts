// Central content store for the agency site.
// Replace [Agency Name] and copy throughout as needed for a real client.

export const AGENCY_NAME = "Meridian";

export const NAV_LINKS = [
  { label: "Services", href: "/services" }, 
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export type Service = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  startingPrice: string;
  features: string[];
  tiers: { name: string; price: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "mobile-app-development",
    name: "Mobile App Development",
    icon: "Smartphone",
    tagline: "Native and cross-platform apps built to scale",
    description:
      "High-performance mobile applications for startups and enterprises, engineered for App Store approval and long-term maintainability.",
    startingPrice: "€8,000",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Apps (React Native)",
      "Flutter Apps",
      "MVP Development",
      "Startup Apps",
      "Enterprise Mobile Apps",
      "App Modernization",
      "App Store Deployment",
      "App Maintenance",
    ],
    tiers: [
      { name: "MVP App", price: "€8,000+" },
      { name: "Business App", price: "€20,000+" },
      { name: "Enterprise App", price: "€80,000+" },
    ],
  },
  {
    slug: "web-development",
    name: "Web Development",
    icon: "Globe",
    tagline: "Websites and platforms that convert and scale",
    description:
      "From landing pages to full SaaS platforms, we build fast, accessible, SEO-ready web products on modern infrastructure.",
    startingPrice: "€3,000",
    features: [
      "Corporate Websites",
      "Landing Pages",
      "Dashboards",
      "SaaS Platforms",
      "Admin Panels",
      "Customer Portals",
      "Booking Systems",
      "Internal Business Tools",
    ],
    tiers: [
      { name: "Landing Page", price: "€3,000+" },
      { name: "Business Website", price: "€6,000+" },
      { name: "SaaS Platform", price: "€30,000+" },
    ],
  },
  {
    slug: "backend-development",
    name: "Backend Development",
    icon: "Server",
    tagline: "Infrastructure that holds under real-world load",
    description:
      "Resilient APIs, databases, and cloud infrastructure engineered for scale, security, and observability from day one.",
    startingPrice: "€5,000",
    features: [
      "REST APIs",
      "GraphQL APIs",
      "Database Architecture",
      "Authentication Systems",
      "Cloud Infrastructure",
      "Server Development",
      "Third-Party Integrations",
      "Payment Systems",
    ],
    tiers: [
      { name: "API Development", price: "€5,000+" },
      { name: "Backend Platform", price: "€15,000+" },
      { name: "Enterprise Backend", price: "€50,000+" },
    ],
  },
  {
    slug: "ai-integration",
    name: "AI Integration",
    icon: "Brain",
    tagline: "Applied AI that ships, not just demos",
    description:
      "Custom AI chatbots, assistants, and automation pipelines built on production-grade infrastructure and real evaluation.",
    startingPrice: "€7,500",
    features: [
      "AI Chatbots",
      "AI Assistants",
      "Computer Vision",
      "Image Recognition",
      "Document Analysis",
      "Voice AI",
      "Automation",
      "OpenAI Integration",
      "AI Workflow Automation",
      "Custom AI Solutions",
    ],
    tiers: [
      { name: "AI Chatbot", price: "€7,500+" },
      { name: "AI Assistant", price: "€15,000+" },
      { name: "Enterprise AI Platform", price: "€50,000+" },
    ],
  },
  {
    slug: "ar-vr-development",
    name: "AR / VR Development",
    icon: "Glasses",
    tagline: "Immersive experiences for commerce and training",
    description:
      "Augmented and virtual reality applications that turn spatial computing into measurable business outcomes.",
    startingPrice: "€15,000",
    features: [
      "Augmented Reality Apps",
      "Virtual Reality Applications",
      "3D Product Visualization",
      "Interactive Experiences",
      "AR Shopping",
      "AR Furniture Placement",
      "Virtual Showrooms",
    ],
    tiers: [
      { name: "AR Experience", price: "€15,000+" },
      { name: "Advanced AR Platform", price: "€50,000+" },
    ],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    icon: "Cpu",
    tagline: "Systems built around how your business actually runs",
    description:
      "CRM, ERP, and internal platforms engineered to replace spreadsheets and brittle tools with software that scales with you.",
    startingPrice: "€20,000",
    features: [
      "CRM Systems",
      "ERP Systems",
      "Accounting Software",
      "Business Management Systems",
      "Enterprise Software",
      "Internal Platforms",
      "Workflow Automation",
      "Custom Business Applications",
    ],
    tiers: [
      { name: "CRM", price: "€20,000+" },
      { name: "ERP", price: "€40,000+" },
      { name: "Enterprise Platform", price: "€100,000+" },
    ],
  },
  {
    slug: "ecommerce-development",
    name: "E-Commerce Development",
    icon: "ShoppingCart",
    tagline: "Storefronts engineered to convert at scale",
    description:
      "Full-featured online stores and marketplaces with reliable checkout, inventory, and subscription infrastructure.",
    startingPrice: "€7,500",
    features: [
      "Online Stores",
      "Payment Integration",
      "Inventory Management",
      "Checkout Systems",
      "Order Management",
      "Customer Accounts",
      "Subscription Systems",
      "Marketplace Development",
    ],
    tiers: [
      { name: "Online Store", price: "€7,500+" },
      { name: "Advanced E-Commerce", price: "€20,000+" },
      { name: "Marketplace Platform", price: "€60,000+" },
    ],
  },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "€8,000",
    period: "starting at",
    description: "Perfect for startups validating a new product idea.",
    features: [
      "Discovery Workshop",
      "UI/UX Design",
      "MVP Development",
      "Testing",
      "Deployment",
    ],
    highlighted: false,
    cta: "Start a Project",
  },
  {
    name: "Business",
    price: "€25,000",
    period: "starting at",
    description: "For growing companies that need a full product build.",
    features: [
      "Everything in Starter",
      "Backend",
      "Authentication",
      "Dashboard",
      "API Integration",
      "Analytics",
    ],
    highlighted: true,
    cta: "Start a Project",
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    period: "",
    description: "For enterprises with complex, mission-critical systems.",
    features: [
      "Everything in Business",
      "Dedicated Team",
      "Enterprise Architecture",
      "Cloud Infrastructure",
      "AI Integration",
      "Long-Term Support",
      "SLA",
    ],
    highlighted: false,
    cta: "Talk to Sales",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We dig into your business goals, users, and constraints to define what actually needs to be built.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We map scope, architecture, and timeline into a plan that's realistic and easy to track.",
  },
  {
    step: "03",
    title: "UI/UX Design",
    description:
      "High-fidelity design that reflects your brand and is validated with real users before development starts.",
  },
  {
    step: "04",
    title: "Development",
    description:
      "Senior engineers build in focused sprints, with staging environments you can review at every step.",
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Automated and manual QA across devices, browsers, and edge cases before anything ships.",
  },
  {
    step: "06",
    title: "Deployment",
    description:
      "Production release with monitoring, rollback plans, and zero-downtime deployment pipelines.",
  },
  {
    step: "07",
    title: "Maintenance",
    description:
      "Ongoing support, monitoring, and iteration so your product keeps improving after launch.",
  },
];

export const INDUSTRIES = [
  { name: "Healthcare", icon: "HeartPulse" },
  { name: "Finance", icon: "Landmark" },
  { name: "Real Estate", icon: "Building2" },
  { name: "Retail", icon: "Store" },
  { name: "Logistics", icon: "Truck" },
  { name: "Hospitality", icon: "UtensilsCrossed" },
  { name: "Education", icon: "GraduationCap" },
  { name: "Automotive", icon: "Car" },
  { name: "Manufacturing", icon: "Factory" },
  { name: "Technology", icon: "Cpu" },
  { name: "Government", icon: "Landmark" },
  { name: "Startups", icon: "Rocket" },
];

export const WHY_CHOOSE_US = [
  {
    title: "Senior Developers",
    description: "Every engineer on your project has 5+ years of production experience.",
    icon: "BadgeCheck",
  },
  {
    title: "Fast Delivery",
    description: "Agile sprints and clear milestones keep your project moving without delays.",
    icon: "Zap",
  },
  {
    title: "Transparent Pricing",
    description: "Fixed-scope quotes with no hidden costs or surprise change orders.",
    icon: "Receipt",
  },
  {
    title: "Scalable Architecture",
    description: "We build for the traffic and team size you'll have in two years, not just today.",
    icon: "Layers",
  },
  {
    title: "Secure Development",
    description: "Security reviews and best practices baked into every stage of the build.",
    icon: "ShieldCheck",
  },
  {
    title: "Modern Technologies",
    description: "React, Next.js, Node, Swift, Kotlin, and cloud-native infrastructure as standard.",
    icon: "Sparkles",
  },
  {
    title: "Agile Workflow",
    description: "Two-week sprints with demos, so you always see real progress.",
    icon: "RefreshCw",
  },
  {
    title: "Dedicated Project Manager",
    description: "One point of contact who owns timeline, scope, and communication.",
    icon: "UserCheck",
  },
  {
    title: "Long-Term Support",
    description: "Post-launch maintenance plans so your product keeps running smoothly.",
    icon: "LifeBuoy",
  },
  {
    title: "Enterprise Quality",
    description: "The same engineering rigor for a five-person startup as a Fortune 500 team.",
    icon: "Award",
  },
];

export type PortfolioProject = {
  slug: string;
  name: string;
  industry: string;
  description: string;
  technologies: string[];
  features: string[];
  results: string[];
  color: string;
};

export const PORTFOLIO: PortfolioProject[] = [
  {
    slug: "healthspan",
    name: "HealthSpan",
    industry: "Healthcare",
    description:
      "A patient engagement platform connecting clinics with remote monitoring and appointment scheduling.",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    features: ["Telehealth video calls", "Remote vitals monitoring", "Automated appointment reminders"],
    results: ["40% reduction in missed appointments", "120,000+ active patients"],
    color: "from-emerald-500/20 to-signal-500/10",
  },
  {
    slug: "ledgerly",
    name: "Ledgerly",
    industry: "Finance",
    description:
      "A real-time expense management SaaS platform for mid-market finance teams.",
    technologies: ["Next.js", "GraphQL", "PostgreSQL", "Stripe"],
    features: ["Automated expense categorization", "Multi-entity reporting", "Bank-level encryption"],
    results: ["€2.4M in tracked spend within 6 months", "98% customer retention"],
    color: "from-signal-500/20 to-purple-500/10",
  },
  {
    slug: "estatelink",
    name: "EstateLink",
    industry: "Real Estate",
    description:
      "A property management portal for landlords, tenants, and maintenance vendors.",
    technologies: ["React", "Node.js", "MongoDB", "Twilio"],
    features: ["Digital lease signing", "Maintenance request tracking", "Automated rent collection"],
    results: ["3x faster maintenance resolution", "15,000+ units managed"],
    color: "from-amber-500/20 to-signal-500/10",
  },
  {
    slug: "cartwheel",
    name: "Cartwheel",
    industry: "Retail / E-Commerce",
    description:
      "A headless commerce platform for a DTC fashion brand scaling across three markets.",
    technologies: ["Next.js", "Shopify API", "Tailwind CSS", "Vercel"],
    features: ["Headless storefront", "Subscription commerce", "Localized checkout"],
    results: ["65% faster page loads", "22% increase in conversion rate"],
    color: "from-pink-500/20 to-signal-500/10",
  },
  {
    slug: "routewise",
    name: "RouteWise",
    industry: "Logistics",
    description:
      "A fleet management and route optimization system for a regional delivery company.",
    technologies: ["React", "Python", "Google Maps API", "Kubernetes"],
    features: ["Real-time fleet tracking", "AI route optimization", "Driver mobile app"],
    results: ["18% reduction in fuel costs", "400+ vehicles managed daily"],
    color: "from-blue-500/20 to-signal-500/10",
  },
  {
    slug: "tutorloop",
    name: "TutorLoop",
    industry: "Education",
    description:
      "An AI-assisted tutoring marketplace connecting students with vetted tutors worldwide.",
    technologies: ["React Native", "OpenAI API", "Node.js", "PostgreSQL"],
    features: ["AI-matched tutor recommendations", "In-app video sessions", "Progress analytics"],
    results: ["50,000+ sessions booked", "4.9/5 average student rating"],
    color: "from-violet-500/20 to-signal-500/10",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "They took an ambiguous idea and turned it into a working product in ten weeks. The communication was clearer than teams we've hired full-time.",
    name: "Sarah Chen",
    role: "CEO, HealthSpan",
  },
  {
    quote:
      "Enterprise-grade engineering without the enterprise-grade bureaucracy. Our backend has handled 10x growth without a single rewrite.",
    name: "Marcus Webb",
    role: "CTO, Ledgerly",
  },
  {
    quote:
      "The team understood our compliance requirements immediately and built around them instead of treating them as an afterthought.",
    name: "Priya Nair",
    role: "VP Product, EstateLink",
  },
  {
    quote:
      "We've worked with three agencies before. This is the first one that delivered on time, on budget, and on scope, all three.",
    name: "Daniel Ortiz",
    role: "Founder, Cartwheel",
  },
  {
    quote:
      "Their AI integration work directly cut our support costs by a third within the first quarter of launch.",
    name: "Elena Kovacs",
    role: "Head of Operations, RouteWise",
  },
];

export const FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most MVPs launch in 8-12 weeks. Larger platforms typically take 4-6 months depending on scope. We'll give you a realistic timeline during the discovery phase before any contract is signed.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer fixed-price quotes for well-defined projects and time-and-materials engagements for ongoing or evolving work. Every quote is broken down by milestone so you always know what you're paying for.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. We sign an NDA before any detailed discussion of your product, and can work under your own agreement if you prefer.",
  },
  {
    question: "Who owns the code after the project is complete?",
    answer:
      "You do, entirely. All source code, designs, and intellectual property are transferred to you upon final payment.",
  },
  {
    question: "Can you work with our existing in-house team?",
    answer:
      "Yes, we regularly integrate with in-house teams as an extension of your engineering org, following your existing workflows and tools.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "React, Next.js, React Native, Flutter, Node.js, Python, PostgreSQL, and major cloud providers (AWS, GCP, Azure). We choose the stack based on your product's needs, not our preferences.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. Every project includes a support window post-launch, and we offer ongoing maintenance retainers for ongoing feature work and monitoring.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "You get a dedicated project manager, weekly demos, and access to a shared Slack channel and project board for full visibility into progress.",
  },
  {
    question: "Can you help with an existing product instead of building from scratch?",
    answer:
      "Absolutely. We regularly take over legacy codebases, conduct audits, and modernize existing products without disrupting live users.",
  },
  {
    question: "What if our requirements change mid-project?",
    answer:
      "Agile sprints mean we can adapt scope between iterations. Larger changes are scoped and quoted transparently before any work begins.",
  },
  {
    question: "Do you work with startups pre-funding?",
    answer:
      "Yes, we work with founders at every stage, from pre-seed idea validation to enterprise-scale platforms, and can tailor engagement models accordingly.",
  },
  {
    question: "Where is your team located?",
    answer:
      "We have distributed senior engineers across 10+ countries, with overlapping hours for North American, European, and APAC clients.",
  },
];

export const OFFICE = {
  email: "meridian@support.com",
  phone: "+49 511 123 4567",
  address: "Georgstraße 42, 30159 Hannover, Germany",
  hours: "Monday – Friday, 9:00 – 18:00 CET",
};
