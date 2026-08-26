import { Project, ResearchNote, ExpertiseCategory, Venture, EcosystemDomain, TimelineMilestone } from '../types';
import { RESEARCH_PAPERS } from './researchPapers';

export const RESEARCH_NOTES: ResearchNote[] = RESEARCH_PAPERS;
export { RESEARCH_PAPERS };

export const PERSONAL_INFO = {
  name: 'SAYEM',
  brand: 'SAYEMATRIX',
  company: 'SANR Corporation Limited',
  tagline: 'Quant Finance & Algorithmic Trading • AI & Automation • Financial Technology',
  headline: 'Building at the intersection of AI, Automation, Financial Technology, and Quantitative Systems.',
  subheadline: 'Focused on multi-agent AI, financial market technology, automated workflow infrastructure, and quantitative decision platforms.',
  primaryStatement: 'Engineering resilient systems, quantitative tools, and scalable ventures.',
  location: 'Bangladesh · Remote — Worldwide',
  education: 'Southeast University',
  degreeProgram: 'Computer Science & Engineering',
  roles: [
    'Founder | SANR Corporation Limited',
    'Creator & Systems Architect | SAYEMATRIX',
    'Quant Finance & Algorithmic Trading',
    'AI • Automation • Financial Technology',
    'Quantitative Analysis • Market Systems • Research'
  ],
  bioSummary: `A multidisciplinary builder focused on quantitative finance, algorithmic trading, financial intelligence, AI, automation, and financial technology.`,
  fullBioParagraphs: [
    `A multidisciplinary builder focused on quantitative finance, algorithmic trading, financial intelligence, AI, automation, and financial technology.`,
    `Combines quantitative analysis, market intelligence, data, AI, automation, and systems architecture to research, design, and build intelligent financial systems, trading technologies, and digital products.`,
    `Through SANR Corporation Limited and the SAYEMATRIX ecosystem, conducts multidisciplinary research and develops proprietary systems, tools, and digital infrastructure for long-term technological and venture development.`
  ],
  philosophies: [
    'RESEARCH DEEPLY.',
    'BUILD INTELLIGENTLY.',
    'CREATE LONG-TERM VALUE.'
  ],
  workingPrinciplesDetailed: [
    { number: '01', title: 'RESEARCH DEEPLY', description: 'Understand the underlying system before acting.' },
    { number: '02', title: 'BUILD SYSTEMATICALLY', description: 'Turn knowledge into structured, repeatable systems.' },
    { number: '03', title: 'VALIDATE WITH EVIDENCE', description: 'Test assumptions through data, experimentation, and real-world results.' },
    { number: '04', title: 'ITERATE CONTINUOUSLY', description: 'Improve systems through feedback, measurement, and refinement.' },
    { number: '05', title: 'DELIVER ENDURING VALUE', description: 'Prioritize durable knowledge, technology, systems, and long-term value creation.' }
  ],
  professionalPositioning: {
    coreIdentity: 'Quant Finance & Algorithmic Trading',
    technicalEdge: 'AI • Automation • Data • Systems Architecture',
    primaryDomain: 'Financial Technology & Financial Markets',
    buildingFocus: 'Trading Systems • Financial Intelligence • Digital Systems',
    longTermDirection: 'Financial Technology → Digital Products → Scalable Ventures',
    businessVehicles: 'SANR Corporation Limited • SAYEMATRIX',
    operatingLoop: 'Research → Design → Build → Test → Deploy → Improve → Scale'
  },
  workingPrinciples: [
    'Research Deeply',
    'Build Systematically',
    'Validate with Evidence',
    'Iterate Continuously',
    'Deliver Enduring Value'
  ],
  operatingLoop: [
    'Faith', 'Learn', 'Build', 'Earn', 'Create', 'Grow', 'Impact'
  ],
  beyondWorkInterests: [
    'Strength & Conditioning', 'Physical Training', 'Nutrition & Recovery', 'Productivity Systems', 'Time & Energy Management', 'Discipline & Consistency', 'Focus & Deep Work', 'Personal Performance', 'Habit & Routine Systems', 'Sustainable Lifestyle Design'
  ],
  contact: {
    email: 'sayem.professional@gmail.com',
    emailNote: 'For professional inquiries and opportunities.',
    linkedin: 'https://www.linkedin.com/in/sayematrix/',
    linkedinNote: 'For professional networking and industry connections.',
    github: 'https://github.com/sayematrix',
    githubNote: 'For technical projects, systems, and experiments.',
    telegram: 'https://t.me/sayematrix',
    telegramNote: 'For direct messaging and real-time engagement.',
    sayematrixNote: 'For digital work, ideas, content, and ecosystem.',
    instagram: 'https://instagram.com/sayematrix',
    youtube: 'https://youtube.com/@sayematrix',
    location: 'Bangladesh · Remote — Worldwide'
  }
};

export interface LifestyleItem {
  number: string;
  title: string;
  description: string;
  category: 'Physical' | 'Productivity' | 'Discipline' | 'Systems';
  icon: string;
  principles: string[];
}

export const LIFESTYLE_DATA = {
  title: 'LIFESTYLE',
  subtitle: 'DISCIPLINE • TRAINING • PERFORMANCE • PRODUCTIVITY',
  summary: 'A systems-based approach to physical training, personal productivity, discipline, recovery, and sustainable high-performance living.',
  focusAreas: [
    'Strength & Conditioning',
    'Physical Training',
    'Nutrition & Recovery',
    'Productivity Systems',
    'Time & Energy Management',
    'Discipline & Consistency',
    'Focus & Deep Work',
    'Personal Performance',
    'Habit & Routine Systems',
    'Sustainable Lifestyle Design'
  ],
  detailedItems: [
    {
      number: '01',
      title: 'Strength & Conditioning',
      description: 'Structured progressive overload, compound functional strength, structural bone density, and athletic injury-resistance.',
      category: 'Physical',
      icon: 'Dumbbell',
      principles: ['Progressive Overload', 'Compound Movements', 'Biomechanical Precision', 'Structural Resilience']
    },
    {
      number: '02',
      title: 'Physical Training',
      description: 'Systematic endurance, aerobic zone-2 conditioning, mobility drills, and cardiovascular durability.',
      category: 'Physical',
      icon: 'Activity',
      principles: ['Aerobic Capacity', 'Joint Mobility', 'Kinetic Durability', 'Daily Movement Baselines']
    },
    {
      number: '03',
      title: 'Nutrition & Recovery',
      description: 'Metabolic fuel calibration, nutrient-dense whole foods, circadian sleep architecture, and physiological restoration.',
      category: 'Physical',
      icon: 'HeartPulse',
      principles: ['Sleep Hygiene (8h)', 'Metabolic Precision', 'Hydration Protocols', 'Systemic Anti-Inflammation']
    },
    {
      number: '04',
      title: 'Productivity Systems',
      description: 'Deterministic toolchains, asynchronous communications, zero-friction task pipelines, and high output velocity.',
      category: 'Productivity',
      icon: 'Workflow',
      principles: ['Automated Tooling', 'Single-Task Execution', 'Context Batching', 'Friction Reduction']
    },
    {
      number: '05',
      title: 'Time & Energy Management',
      description: 'Circadian-aligned cognitive scheduling, calendar defense, biological energy management, and zero wasted hours.',
      category: 'Productivity',
      icon: 'Clock',
      principles: ['Circadian Rhythm Alignment', 'Calendar Defense', 'Energy Peak Batching', 'Leisure Boundaries']
    },
    {
      number: '06',
      title: 'Discipline & Consistency',
      description: 'Non-negotiable operational baselines, emotional regulation, high internal locus of control, and daily execution.',
      category: 'Discipline',
      icon: 'ShieldCheck',
      principles: ['Non-Negotiable Standards', 'Emotional Equanimity', 'Identity-Based Habits', 'Long-Term Horizons']
    },
    {
      number: '07',
      title: 'Focus & Deep Work',
      description: 'Distraction-free environment engineering, extended cognitive immersion, flow-state induction, and complex synthesis.',
      category: 'Productivity',
      icon: 'Target',
      principles: ['Zero Notifications', 'Extended Unbroken Blocks (90m+)', 'Cognitive Immersion', 'Artifact Production']
    },
    {
      number: '08',
      title: 'Personal Performance',
      description: 'Quantitative self-tracking, cognitive acuity benchmarking, feedback iteration, and sustained high-output capability.',
      category: 'Systems',
      icon: 'Zap',
      principles: ['Quantitative Metrics', 'Objective Self-Auditing', 'Cognitive Acuity', 'Continuous Optimization']
    },
    {
      number: '09',
      title: 'Habit & Routine Systems',
      description: 'Morning and evening ritual protocols, automated decision reduction, habit stacking, and environment design.',
      category: 'Systems',
      icon: 'Layers',
      principles: ['Morning Priming Protocol', 'Evening Wind-Down', 'Habit Stacking Chains', 'Environment Architecture']
    },
    {
      number: '10',
      title: 'Sustainable Lifestyle Design',
      description: 'Multi-decade sustainable health, mental clarity, purpose alignment, and durable human energy renewal.',
      category: 'Systems',
      icon: 'Compass',
      principles: ['Multi-Decade Horizon', 'Mental Equilibrium', 'Purpose Alignment', 'Renewable Vitality']
    }
  ] as LifestyleItem[]
};

export const CORE_FOCUS_ITEMS = [
  {
    number: '01',
    title: 'AI & AUTOMATION',
    description: 'Artificial intelligence, machine learning, intelligent automation, and autonomous workflows.'
  },
  {
    number: '02',
    title: 'QUANTITATIVE FINANCE & TRADING',
    description: 'Quantitative finance, algorithmic trading, systematic strategies, financial modeling, and risk management.'
  },
  {
    number: '03',
    title: 'FINANCIAL MARKETS & INTELLIGENCE',
    description: 'Financial markets, macroeconomics, market microstructure, data-driven intelligence, and quantitative research.'
  },
  {
    number: '04',
    title: 'DATA & COMPUTATIONAL SYSTEMS',
    description: 'Data analysis, statistics, programming, computational research, and quantitative data infrastructure.'
  },
  {
    number: '05',
    title: 'SYSTEM ARCHITECTURE & ENGINEERING',
    description: 'Software systems, architecture, APIs, infrastructure, scalable engineering, and trading technology.'
  },
  {
    number: '06',
    title: 'BUSINESS & DIGITAL PRODUCTS',
    description: 'Business strategy, product development, digital products, web platforms, automation, and venture building.'
  }
];

export const CURRENT_FOCUS_GRID = [
  {
    number: '01',
    title: 'AI-POWERED FINANCIAL SYSTEMS',
    description: 'Architecting context-aware AI models, retrieval systems, and real-time financial market intelligence infrastructure.'
  },
  {
    number: '02',
    title: 'QUANTITATIVE TRADING & MARKET INTELLIGENCE',
    description: 'Developing multi-asset backtesting frameworks, Expert Advisors (MQL5/Python), quantitative strategies, and market microstructure research.'
  },
  {
    number: '03',
    title: 'FINANCIAL AUTOMATION & DATA INFRASTRUCTURE',
    description: 'Engineering resilient financial data pipelines, automated analytics, reporting systems, and operational workflows.'
  },
  {
    number: '04',
    title: 'AI WORKFLOW AUTOMATION',
    description: 'Building intelligent multi-agent workflows that automate complex technical, research, and operational processes.'
  },
  {
    number: '05',
    title: 'FINANCIAL DATA & ANALYTICS',
    description: 'Developing financial datasets, liquidity indicators, volatility metrics, quantitative analytics, and portfolio risk-management dashboards.'
  },
  {
    number: '06',
    title: 'DIGITAL PRODUCTS & INFRASTRUCTURE',
    description: 'Building modular digital tools, structured knowledge systems, web assets, and technology infrastructure for scalable platforms.'
  },
  {
    number: '07',
    title: 'EMERGING FINANCIAL TECHNOLOGIES',
    description: 'Researching macroeconomic liquidity, decentralized financial systems, market infrastructure, and low-latency execution architectures.'
  }
];

export const EXPERTISE_CATEGORIES: ExpertiseCategory[] = [
  {
    id: 'quant-algo',
    number: '01',
    title: 'QUANTITATIVE FINANCE & ALGORITHMIC TRADING',
    subtitle: 'Systematic financial engineering, algorithmic models, and automated execution engines',
    iconName: 'LineChart',
    skills: [
      'Quantitative Finance & Modeling',
      'Algorithmic Trading Systems',
      'Automated Strategy Development',
      'Expert Advisor Engineering (MQL5)',
      'Backtesting & Walk-Forward Optimization',
      'Risk & Capital Management Models'
    ]
  },
  {
    id: 'financial-intelligence',
    number: '02',
    title: 'FINANCIAL INTELLIGENCE',
    subtitle: 'Macroeconomic analysis, market microstructure dynamics, and actionable intelligence',
    iconName: 'TrendingUp',
    skills: [
      'Macroeconomic & Global Liquidity Analysis',
      'Market Microstructure & Order Flow',
      'Fundamental & Quantitative Valuation',
      'Institutional Derivatives & Futures',
      'Multi-Asset Market Intelligence',
      'Portfolio & Capital Allocation'
    ]
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI & AUTOMATION',
    subtitle: 'Cognitive multi-agent architectures and autonomous operational workflow pipelines',
    iconName: 'Bot',
    skills: [
      'Artificial Intelligence & Machine Learning',
      'AI Automation Engineering',
      'Multi-Agent Systems Design',
      'Workflow Automation Pipelines',
      'LLM RAG & Knowledge Graphs',
      'Autonomous Task Orchestration'
    ]
  },
  {
    id: 'market-tech',
    number: '04',
    title: 'MARKET TECHNOLOGY & SYSTEMS',
    subtitle: 'High-throughput trading infrastructure, API integrations, and execution protocols',
    iconName: 'Cpu',
    skills: [
      'Financial Systems Architecture',
      'Python & C++ Financial Systems',
      'Low-Latency Execution Infrastructure',
      'Exchange & Broker API Integrations',
      'Real-Time Order & Feed Processing',
      'Trading Infrastructure Security'
    ]
  },
  {
    id: 'data-research',
    number: '05',
    title: 'DATA & RESEARCH',
    subtitle: 'Empirical data science, quantitative investigation, and econometric research',
    iconName: 'BrainCircuit',
    skills: [
      'Quantitative & Econometric Research',
      'Financial & Market Data Analytics',
      'Time-Series Forecasting & Statistics',
      'Systemic Risk & Anomaly Investigation',
      'Empirical Backtest Validation',
      'Interdisciplinary Technical Synthesis'
    ]
  },
  {
    id: 'business-digital',
    number: '06',
    title: 'BUSINESS & DIGITAL SYSTEMS',
    subtitle: 'Scalable digital infrastructure, venture operations, and product engineering',
    iconName: 'Layers',
    skills: [
      'Digital Infrastructure Design',
      'Software & Systems Architecture',
      'Enterprise Automation Systems',
      'Information Architecture & Databases',
      'Product Development & Venture Engineering',
      'Operational Efficiency Engineering'
    ]
  }
];

export const SELECTED_PROJECTS: Project[] = [
  {
    id: 'project-ai-automation',
    number: '01',
    title: 'AI & AUTOMATION SYSTEMS',
    category: 'AI / Multi-Agent / Workflows',
    status: 'Active',
    featured: true,
    description: 'Engineers intelligent multi-agent orchestration frameworks and deterministic workflow systems designed to automate complex research, technical, and operational processes.',
    overview: 'An integrated framework connecting multi-step language model agents with API endpoints, database triggers, and event notification streams.',
    problem: 'Manual operational workflows in digital business create execution bottlenecks, high error rates, and delayed decision latency.',
    approach: 'Constructed deterministic workflow graphs where LLMs perform reasoning at specific decision nodes while structured code enforces execution constraints.',
    architecture: [
      'Multi-Agent Orchestration Engine',
      'Event-Driven Webhook Dispatcher',
      'Vector Memory & Context Retriever',
      'Real-Time Status & Audit Logging Bus'
    ],
    techStack: ['TypeScript', 'Python', 'Express', 'Gemini API', 'Node.js', 'Tailwind CSS'],
    process: [
      'Workflow mapping & bottleneck identification',
      'System prompt engineering & structured output schema design',
      'Integration testing with simulated operational inputs',
      'Performance benchmarking & automated error-recovery logging'
    ],
    results: [
      '92% reduction in repetitive operational task cycles',
      'Sub-second response latency for context-aware document processing',
      'Zero-loss error capture with automatic retry queues'
    ],
    learnings: [
      'Constraining AI outputs with rigid schema validation is essential for production reliability',
      'Modular agent design outperforms single massive prompt architectures'
    ],
    nextSteps: [
      'Integrating local model execution for privacy-sensitive environments',
      'Expanding autonomous tool usage across cloud infrastructure APIs'
    ],
    tags: ['AI', 'Automation', 'Systems Design', 'Workflow']
  },
  {
    id: 'project-financial-quant',
    number: '02',
    title: 'FINANCIAL & QUANTITATIVE SYSTEMS',
    category: 'Quant / Trading / Modeling',
    status: 'Active',
    featured: true,
    description: 'Architects algorithmic backtesting engines, financial data pipelines, quantitative research frameworks, and real-time risk-analysis systems for financial markets.',
    overview: 'A high-performance algorithmic evaluation engine for tick-level backtesting, trade strategy execution, and dynamic value-at-risk calculations.',
    problem: 'Retail and institutional traders often rely on overfitting backtests that fail under real market slippage and regime changes.',
    approach: 'Built a vectorized Python & MQL5 simulation environment with Monte Carlo walk-forward optimization and spread-sensitivity stress testing.',
    architecture: [
      'Tick-Data Processing Pipeline (C++ / Python)',
      'MetaTrader 5 Expert Advisor Bridge (MQL5)',
      'Monte Carlo & Sensitivity Matrix Simulator',
      'Real-Time Portfolio Exposure Monitor'
    ],
    techStack: ['Python', 'MQL5', 'C++', 'MetaTrader 5', 'NumPy/Pandas', 'Express API'],
    process: [
      'Historical market data scrubbing & regime identification',
      'Strategy rule formulation & indicator vectorization',
      'In-sample vs out-of-sample walk-forward validation',
      'Execution deployment with automated spread checks'
    ],
    results: [
      'Validated strategy Sharpe ratios above 1.8 across 5-year historical market cycles',
      'Execution latency minimized under 15ms via direct socket connections',
      'Complete risk drawdown protection capped at strictly defined threshold limits'
    ],
    learnings: [
      'Execution quality and transaction costs account for up to 40% of strategy variance',
      'Regime detection filters drastically reduce drawdowns during non-trending periods'
    ],
    nextSteps: [
      'Developing machine learning regime classifiers based on order book imbalance',
      'Expanding multi-asset cross-hedging algorithms across forex and futures'
    ],
    tags: ['Quant', 'Trading', 'Backtesting', 'Financial Analysis']
  },
  {
    id: 'project-digital-products',
    number: '03',
    title: 'DIGITAL PRODUCTS & SYSTEMS',
    category: 'Products / Infrastructure',
    status: 'Building',
    featured: true,
    description: 'Constructs structured knowledge-management systems, modular digital utilities, web infrastructure, and technology assets designed for high-performance workflows.',
    overview: 'A cohesive digital workspace system and product suite designed for founders, researchers, and systems thinkers to manage intellectual capital.',
    problem: 'Information overload and fragmented tools prevent knowledge workers from transforming raw research into actionable assets.',
    approach: 'Created atomic knowledge databases mapped to execution pipelines, transforming raw notes into published assets and modular tools.',
    architecture: [
      'Atomic Knowledge Repository Engine',
      'Structured Metadata Tagging Schema',
      'Content Generation & Export Pipeline',
      'Cross-Device Synchronization Layer'
    ],
    techStack: ['React', 'TypeScript', 'Notion API', 'Tailwind CSS', 'Vite', 'Node.js'],
    process: [
      'Information architecture taxonomy design',
      'Component UI system creation with dark-first theme',
      'API sync layer development with resilient local caching',
      'Usability testing with structured knowledge workflows'
    ],
    results: [
      'Streamlined central repository managing thousands of research data points',
      'Instant search and tag query response times',
      'Seamless multi-channel publishing to ecosystem platforms'
    ],
    learnings: [
      'Clear relational databases outperform rigid hierarchy folders in knowledge management',
      'Minimal visual friction increases daily documentation discipline'
    ],
    nextSteps: [
      'Building public digital product storefront integrations',
      'Adding semantic search using local vector embeddings'
    ],
    tags: ['Digital Products', 'Systems', 'Productivity', 'Infrastructure']
  },
  {
    id: 'project-research-lab',
    number: '04',
    title: 'RESEARCH & INTELLIGENCE',
    category: 'Research / Strategy / Macro',
    status: 'Research',
    featured: true,
    description: 'Conducts quantitative research, financial-market analysis, macroeconomic and liquidity research, and technical investigations into emerging financial technologies.',
    overview: 'A continuous analytical research laboratory compiling quantitative market studies, technological trend forecasts, and system design frameworks.',
    problem: 'Short-term hype cycles obscure fundamental shifts in technology, economic liquidity, and market mechanics.',
    approach: 'Conducted rigorous multi-disciplinary synthesis combining macroeconomic data, academic papers, open-source codebase analysis, and empirical testing.',
    architecture: [
      'Macro Liquidity Index Tracker',
      'Academic Paper Indexer & Summarizer',
      'Market Sentiment Matrix Data Engine',
      'Open-Access Digital Research Portal'
    ],
    techStack: ['TypeScript', 'Python', 'D3.js', 'Lucide React', 'MDX Data Structure'],
    process: [
      'Primary source data gathering & statistical verification',
      'Synthesis of complex concepts into structured research notes',
      'Peer review with financial and engineering specialists',
      'Digital publishing with open data visualizations'
    ],
    results: [
      'Published series of deep technical notes covering market microstructure and AI workflows',
      'High engagement among quantitative researchers and systems engineers',
      'Actionable insights feeding directly into quantitative trading and AI systems'
    ],
    learnings: [
      'Deep research is the foundational moat behind high-performance practical systems',
      'Visualizing complex data models drastically improves strategic clarity'
    ],
    nextSteps: [
      'Launching interactive web-based financial data charts',
      'Expanding macro research scope to global liquidity cycles'
    ],
    tags: ['Research', 'Data', 'Strategy', 'Intelligence']
  }
];

export const VENTURES: Venture[] = [
  {
    id: 'sanr-corp',
    name: 'SANR CORPORATION LIMITED',
    label: 'PRIMARY BUSINESS VENTURE',
    subtitle: 'Primary Corporate Foundation',
    description: 'SANR Corporation Limited serves as the primary corporate foundation for building, holding, and scaling technology ventures, software intellectual property, strategic investments, and long-term business assets.',
    highlights: [
      'Corporate framework for multi-domain technology ventures',
      'Capital allocation and software equity development',
      'Incubator for AI, FinTech, and enterprise automation',
      'Structured for sustainable, long-term institutional value'
    ],
    status: 'Active / Core Foundation',
    linkText: 'Explore SANR'
  },
  {
    id: 'sayematrix-eco',
    name: 'SAYEMATRIX',
    label: 'DIGITAL ECOSYSTEM',
    subtitle: 'Independent Digital Ecosystem',
    description: 'SAYEMATRIX is an independent digital ecosystem integrating multidisciplinary research, technology, digital systems, financial intelligence, creative work, and personal development into a unified platform for learning, building, creating, and long-term growth.',
    highlights: [
      'Unified digital ecosystem connecting specialized domains and brands',
      'Multidisciplinary research, knowledge, technology, and digital systems',
      'Financial intelligence, creative development, and human growth',
      'Modular digital products, tools, and proprietary systems',
      'Built for continuous learning, creation, innovation, and scalable impact'
    ],
    status: 'Active / Evolving Engine',
    linkText: 'Explore SAYEMATRIX'
  }
];

export const ECOSYSTEM_DOMAINS: EcosystemDomain[] = [
  {
    id: 'faith',
    pillar: 'FAITH',
    brand: 'GUIDE2FAITH',
    tagline: 'Spiritual grounding & purposeful living',
    description: 'Focused on faith, authentic Islamic knowledge, character development, and living with moral clarity and ultimate purpose.',
    focusArea: 'Faith, Islamic knowledge, meaningful living',
    topics: ['Islamic Wisdom', 'Character Development', 'Purposeful Living', 'Ethics'],
    color: '#10B981',
    active: true,
    instagramUrl: 'https://www.instagram.com/guide2faith/'
  },
  {
    id: 'human',
    pillar: 'HUMAN',
    brand: 'NEUROMATRIX',
    tagline: 'Cognition, discipline & peak performance',
    description: 'Deconstructs cognitive performance, neuroscience, mental toughness, daily discipline, and human optimization.',
    focusArea: 'Mind, discipline, psychology, human development',
    topics: ['Neuroscience', 'Mental Models', 'Habits', 'Focus & Discipline'],
    color: '#3B82F6',
    active: true,
    instagramUrl: 'https://www.instagram.com/neuromatrixo/'
  },
  {
    id: 'knowledge',
    pillar: 'KNOWLEDGE',
    brand: 'TOP10.INSIGHTS',
    tagline: 'Curated intelligence & deep learning',
    description: 'Synthesizes complex research, academic breakthroughs, technological trends, and structured mental models.',
    focusArea: 'Learning, research, ideas, structured knowledge',
    topics: ['Deep Learning', 'Research Synthesis', 'Tech Analysis', 'Mental Frameworks'],
    color: '#8B5CF6',
    active: true,
    instagramUrl: 'https://www.instagram.com/top10.insights/'
  },
  {
    id: 'wealth',
    pillar: 'WEALTH',
    brand: 'WEALTRIXO',
    tagline: 'Financial engineering & wealth systems',
    description: 'Dedicated to financial intelligence, quantitative markets, business building, asset allocation, and systemic economic growth.',
    focusArea: 'Finance, markets, business, wealth-building systems',
    topics: ['Quantitative Finance', 'Market Dynamics', 'Business Systems', 'Wealth Accumulation'],
    color: '#F59E0B',
    active: true,
    instagramUrl: 'https://www.instagram.com/wealtrixo/'
  },
  {
    id: 'creative',
    pillar: 'CREATIVE',
    brand: 'ARTENIXO',
    tagline: 'Design, media & digital aesthetics',
    description: 'Explores digital craftsmanship, minimal design systems, creative media production, and high-end visual communication.',
    focusArea: 'Creativity, media, design, digital expression',
    topics: ['UI/UX Systems', 'Digital Design', 'Media Production', 'Brand Identity'],
    color: '#EC4899',
    active: true,
    instagramUrl: 'https://www.instagram.com/artenixo/'
  },
  {
    id: 'life',
    pillar: 'LIFE',
    brand: 'SAYEMATRIX',
    tagline: 'The overarching digital operating ecosystem',
    description: 'The master node connecting learning, building, creating, personal growth, and holistic life balance into a singular operating system.',
    focusArea: 'The broader ecosystem connecting learning, building, creating, and living',
    topics: ['Life Operating System', 'Holistic Systems', 'Personal Growth', 'Legacy Building'],
    color: '#10B981',
    active: true
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: 'Working',
    title: 'Building AI + Financial Systems',
    subtitle: 'Research & Advanced System Integration',
    description: 'Developing high-throughput AI automation frameworks, quantitative trading tools, and multi-agent workflow systems.',
    status: 'In Progress',
    tags: ['AI', 'Quant Systems', 'FinTech']
  },
  {
    year: 'SAYEMATRIX',
    title: 'Digital Ecosystem Expansion',
    subtitle: 'Unified Multi-Domain Brand Engine',
    description: 'Launching GUIDE2FAITH, NEUROMATRIX, TOP10.INSIGHTS, WEALTRIXO, and ARTENIXO under the core SAYEMATRIX umbrella.',
    status: 'In Progress',
    tags: ['Ecosystem', 'Knowledge Hub', 'Digital Assets']
  },
  {
    year: 'SANR Corp',
    title: 'Long-Term Business Venture',
    subtitle: 'Corporate Foundation & Holding Infrastructure',
    description: 'Establishing SANR Corporation Limited as the formal corporate vehicle for software ventures, technology investments, and enterprise operations.',
    status: 'In Progress',
    tags: ['Venture', 'Corporate', 'Long-Term']
  },
  {
    year: 'Future',
    title: 'Ventures & Technology Scale',
    subtitle: 'Global Impact & Quantitative Expansion',
    description: 'Expanding digital products, algorithmic asset management, proprietary AI research labs, and international venture partnerships.',
    status: 'Future Ambition',
    tags: ['Investments', 'Proprietary AI', 'Global Business']
  },
  {
    year: 'Legacy',
    title: 'Long-Term Business Organization',
    subtitle: 'Sustainable Institutional Value',
    description: 'A resilient, self-sustaining business organization generating lasting technological, financial, and educational impact.',
    status: 'Future Ambition',
    tags: ['Enduring Impact', 'Global Infrastructure']
  }
];
