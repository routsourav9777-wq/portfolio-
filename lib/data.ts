export const SKILLS = [
  { name: 'Flutter', level: 90, category: 'Mobile', color: '#00d4ff' },
  { name: 'Firebase', level: 90, category: 'Backend', color: '#ffca28' },
  { name: 'Firestore', level: 88, category: 'Database', color: '#00ff41' },
  { name: 'Firebase Storage', level: 85, category: 'Backend', color: '#00d4ff' },

  { name: 'React / Next.js', level: 80, category: 'Frontend', color: '#00ff41' },
  { name: 'JavaScript', level: 82, category: 'Language', color: '#00d4ff' },
  { name: 'HTML5', level: 90, category: 'Frontend', color: '#ff006e' },
  { name: 'CSS3', level: 85, category: 'Frontend', color: '#00d4ff' },
  { name: 'Tailwind CSS', level: 80, category: 'Frontend', color: '#00ff41' },

  { name: 'Git & GitHub', level: 85, category: 'Tools', color: '#00d4ff' },
  { name: 'REST APIs', level: 82, category: 'API', color: '#00ff41' },

  // Programming Languages
  { name: 'C', level: 75, category: 'Language', color: '#bf00ff' },
  { name: 'C++', level: 72, category: 'Language', color: '#ff006e' },
  { name: 'Python', level: 70, category: 'Language', color: '#00d4ff' },
  { name: 'Java', level: 68, category: 'Language', color: '#00ff41' },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'NeuralChat AI',
    description: 'Real-time AI chat platform with multi-model support, streaming responses, and a custom markdown renderer. Handles 50k+ concurrent users with sub-100ms latency.',
    tech: ['Next.js', 'Rust', 'WebSockets', 'Redis', 'PostgreSQL'],
    color: '#00ff41',
    github: 'https://github.com/routsourav9777-wq',
    live: '#',
    featured: true,
    year: '2024',
  },
  {
    id: 2,
    title: 'HyperStore Commerce',
    description: 'Headless e-commerce engine with AI-powered recommendations, edge delivery, and a visual page builder. Processes $2M+ in monthly transactions.',
    tech: ['TypeScript', 'Next.js', 'Stripe', 'Prisma', 'GraphQL'],
    color: '#00d4ff',
    github: 'https://github.com/routsourav9777-wq',
    live: '#',
    featured: true,
    year: '2024',
  },
  {
    id: 3,
    title: 'DevFlow CI/CD',
    description: 'Self-hosted CI/CD pipeline orchestrator with visual workflow builder, Docker-native runners, and Slack integrations. Used by 200+ engineering teams.',
    tech: ['Go', 'Docker', 'Kubernetes', 'React', 'gRPC'],
    color: '#bf00ff',
    github: 'https://github.com/routsourav9777-wq',
    live: '#',
    featured: true,
    year: '2023',
  },
  {
    id: 4,
    title: 'QuantumViz Dashboard',
    description: 'Real-time analytics dashboard with WebGL-powered charts, customizable widgets, and a drag-and-drop layout engine for financial data.',
    tech: ['React', 'D3.js', 'WebGL', 'Node.js', 'TimescaleDB'],
    color: '#ff006e',
    github: 'https://github.com/souravr',
    live: '#',
    featured: false,
    year: '2023',
  },
  {
    id: 5,
    title: 'OSS Terminal UI',
    description: 'Open-source TUI framework for building beautiful command-line apps in TypeScript. 4k+ GitHub stars, used by major CLI tools.',
    tech: ['TypeScript', 'Node.js', 'ANSI', 'Ink'],
    color: '#00ff41',
    github: 'https://github.com/souravr',
    live: '#',
    featured: false,
    year: '2023',
  },
  {
    id: 6,
    title: 'SecureVault API',
    description: 'Zero-knowledge secrets manager with end-to-end encryption, RBAC, audit logs, and SDKs for 8 languages. SOC2 Type II compliant.',
    tech: ['Rust', 'AES-256', 'PostgreSQL', 'Docker'],
    color: '#00d4ff',
    github: 'https://github.com/souravr',
    live: '#',
    featured: false,
    year: '2022',
  },
];

export const EXPERIENCE = [
  {
    role: 'Senior Full Stack Engineer',
    company: 'TechNova Labs',
    period: '2023 — Present',
    description: 'Leading a team of 6 engineers to build scalable SaaS platforms. Architected a microservices backbone handling 10M+ daily requests. Reduced infrastructure costs by 40% through Kubernetes optimization.',
    tech: ['Next.js', 'Rust', 'K8s', 'GCP'],
    color: '#00ff41',
  },
  {
    role: 'Full Stack Developer',
    company: 'PixelCraft Studios',
    period: '2021 — 2023',
    description: 'Built interactive 3D web experiences and high-performance e-commerce platforms. Shipped 12 major features used by 500k+ users. Mentored 3 junior developers.',
    tech: ['React', 'Three.js', 'Node.js', 'AWS'],
    color: '#00d4ff',
  },
  {
    role: 'Frontend Engineer',
    company: 'DataStream Inc.',
    period: '2020 — 2021',
    description: 'Developed real-time data visualization dashboards for financial clients. Improved dashboard render performance by 3x using WebGL and virtual DOM optimizations.',
    tech: ['Vue.js', 'D3.js', 'WebSockets', 'Python'],
    color: '#bf00ff',
  },
  {
    role: 'Software Engineering Intern',
    company: 'InnovateTech',
    period: '2019 — 2020',
    description: 'Contributed to open-source developer tooling. Built a CLI tool that gained 2k+ GitHub stars within a month of release.',
    tech: ['TypeScript', 'Node.js', 'CLI'],
    color: '#ff006e',
  },
];

export const SERVICES = [
  {
    icon: '⚡',
    title: 'Full Stack Development',
    description: 'End-to-end web application development from database architecture to pixel-perfect UI, built for scale and performance.',
    color: '#00ff41',
  },
  {
    icon: '🎮',
    title: '3D Web Experiences',
    description: 'Immersive WebGL and Three.js experiences, interactive 3D visualizations, and cutting-edge browser-based graphics.',
    color: '#00d4ff',
  },
  {
    icon: '🛡️',
    title: 'API Architecture',
    description: 'Robust RESTful and GraphQL APIs designed for high throughput, security-first, with comprehensive documentation.',
    color: '#bf00ff',
  },
  {
    icon: '🚀',
    title: 'DevOps & Cloud',
    description: 'CI/CD pipelines, containerization, Kubernetes orchestration, and cloud infrastructure on AWS, GCP, and Vercel.',
    color: '#ff006e',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Priya Sharma',
    role: 'CTO, TechNova Labs',
    text: 'Sourav consistently delivers beyond expectations. His architectural decisions have saved us months of rework. An absolute top-tier engineer.',
    avatar: 'PS',
    color: '#00ff41',
  },
  {
    name: 'Marcus Chen',
    role: 'Lead Designer, PixelCraft Studios',
    text: 'The best developer I\'ve worked with for bridging design and engineering. He turns complex UI specs into flawless, performant code.',
    avatar: 'MC',
    color: '#00d4ff',
  },
  {
    name: 'Aisha Patel',
    role: 'Product Manager, DataStream Inc.',
    text: 'Sourav shipped features 40% faster than any engineer I\'ve managed, without compromising code quality. He\'s simply exceptional.',
    avatar: 'AP',
    color: '#bf00ff',
  },
];
