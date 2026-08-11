import { Project, ResearchNote, ExpertiseCategory, Venture, EcosystemDomain, TimelineMilestone } from '../types';
import { RESEARCH_PAPERS } from './researchPapers';

export const RESEARCH_NOTES: ResearchNote[] = RESEARCH_PAPERS;
export { RESEARCH_PAPERS };

export const PERSONAL_INFO = {
  name: 'SAYEM',
  brand: 'SAYEMATRIX',
  company: 'SANR Corporation Limited',
  tagline: 'Founder. Builder. Systems Thinker.',
  headline: 'Building at the intersection of AI, Automation, Financial Intelligence, and Digital Systems.',
  subheadline: 'I research complex problems, build practical systems, and turn ideas into technology, tools, digital products, and long-term ventures.',
  primaryStatement: 'Building systems, not just projects.',
  location: 'Bangladesh',
  education: 'Southeast University',
  roles: [
    'Founder | SANR Corporation Limited',
    'Creator & Builder | SAYEMATRIX',
    'AI • Automation • FinTech • Financial Intelligence',
    'Quantitative Analysis • Digital Systems • Research',
  ],
  bioSummary: `AI, automation, financial technology, and financial markets enthusiast focused on building intelligent systems, quantitative tools, automation workflows, and digital products.`,
  fullBioParagraphs: [
    `Building at the intersection of AI, Automation, Financial Intelligence, and Financial Markets—with the goal of turning complex knowledge into intelligent systems, tools, and businesses.`,
    `I am interested in how technology, finance, and intelligent systems can work together to solve real problems, improve decision-making, and create better ways of working.`,
    `Through SANR Corporation Limited and the SAYEMATRIX ecosystem, I explore multi-disciplinary research, practical software engineering, quantitative finance, and digital infrastructure to build long-term value.`
  ],
  philosophies: [
    'RESEARCH DEEPLY.',
    'BUILD INTELLIGENTLY.',
    'CREATE LONG-TERM VALUE.'
  ],
  workingPrinciples: [
    'Learn Deeply',
    'Build Practically',
    'Test in Reality',
    'Improve Continuously',
    'Create Long-Term Value'
  ],
  operatingLoop: [
    'Faith', 'Learn', 'Build', 'Earn', 'Create', 'Grow', 'Impact'
  ],
  beyondWorkInterests: [
    'Learning', 'Faith', 'Fitness', 'Discipline', 'Creativity', 'Technology', 'Business', 'Personal Development'
  ],
  contact: {
    email: 'sayem.professiona@gmail.com',
    emailNote: 'For professional inquiries and opportunities.',
    linkedin: 'https://www.linkedin.com/in/sayematrix/',
    linkedinNote: 'For professional networking and industry connections.',
    github: 'https://github.com/sayematrix',
    githubNote: 'For technical projects, systems, and experiments.',
    sayematrixNote: 'For my digital work, ideas, content, and ecosystem.',
    instagram: 'https://instagram.com/sayematrix',
    youtube: 'https://youtube.com/@sayematrix',
    location: 'Bangladesh'
  }
};

export const CORE_FOCUS_ITEMS = [
  {
    number: '01',
    title: 'AI & AUTOMATION',
    description: 'Intelligent multi-agent systems, automated workflows, and cognitive decision tools.'
  },
  {
    number: '02',
    title: 'FINANCIAL TECHNOLOGY',
    description: 'Algorithmic tools, market analytical engines, and quantitative infrastructure.'
  },
  {
    number: '03',
    title: 'QUANTITATIVE SYSTEMS',
    description: 'Mathematical market modeling, backtesting frameworks, and systematic risk management.'
  },
  {
    number: '04',
    title: 'DIGITAL VENTURES',
    description: 'Scalable software assets, structured knowledge products, and long-term venture engines.'
  }
];

export const CURRENT_FOCUS_GRID = [
  {
    number: '01',
    title: 'AI-POWERED SYSTEMS',
    description: 'Developing autonomous agentic workflows and context-aware computational decision engines.'
  },
  {
    number: '02',
    title: 'AUTOMATION WORKFLOWS',
    description: 'Engineering resilient backend pipelines that automate complex business and digital tasks.'
  },
  {
    number: '03',
    title: 'FINANCIAL TECHNOLOGIES',
    description: 'Architecting market technology interfaces, liquidity metrics, and portfolio tracking tools.'
  },
  {
    number: '04',
    title: 'QUANTITATIVE TOOLS',
    description: 'Building custom backtesting routines, Expert Advisors (MQL5/Python), and risk engines.'
  },
  {
    number: '05',
    title: 'DIGITAL PRODUCTS',
    description: 'Designing structured digital knowledge bases, productivity platforms, and web assets.'
  },
  {
    number: '06',
    title: 'RESEARCH & INTELLIGENCE',
    description: 'Publishing deep analytical notes across macroeconomic, technological, and market domains.'
  }
];

export const EXPERTISE_CATEGORIES: ExpertiseCategory[] = [
  {
    id: 'ai-automation',
    number: '01',
    title: 'AI & AUTOMATION',
    subtitle: 'Building cognitive agents and automated operational engines',
    iconName: 'Bot',
    skills: [
      'Artificial Intelligence',
      'AI Automation',
      'AI Systems Design',
      'AI Workflow Automation',
      'Intelligent Automation',
      'Automation Engineering'
    ]
  },
  {
    id: 'fintech-quant',
    number: '02',
    title: 'FINANCIAL TECHNOLOGY & QUANTITATIVE SYSTEMS',
    subtitle: 'Systematic financial engineering and statistical modeling',
    iconName: 'LineChart',
    skills: [
      'Quantitative Finance & Modeling',
      'Financial Analysis',
      'Financial Risk Management',
      'Portfolio Management',
      'Asset Allocation & Diversification',
      'Financial Modeling',
      'Risk & Money Management',
      'Financial Technology'
    ]
  },
  {
    id: 'market-tech',
    number: '03',
    title: 'MARKET TECHNOLOGY & SYSTEMS',
    subtitle: 'High-frequency algorithmic execution and strategy backtesting',
    iconName: 'Cpu',
    skills: [
      'Algorithmic Trading',
      'Trading Strategy Development',
      'Expert Advisor Development',
      'Python',
      'C++',
      'MQL5 / MT5',
      'High-Frequency Trading',
      'Backtesting',
      'Strategy Optimization'
    ]
  },
  {
    id: 'financial-markets',
    number: '04',
    title: 'FINANCIAL MARKETS',
    subtitle: 'Multi-asset market dynamics and macroeconomic analysis',
    iconName: 'TrendingUp',
    skills: [
      'Technical Analysis',
      'Fundamental Analysis',
      'Sentiment Analysis',
      'Behavioral Finance',
      'Market Microstructure',
      'Institutional Analysis',
      'Macroeconomic Analysis',
      'Global Economic Analysis',
      'Investment Analysis',
      'Derivatives',
      'DeFi',
      'Blockchain',
      'Crypto'
    ]
  },
  {
    id: 'research-intelligence',
    number: '05',
    title: 'RESEARCH & INTELLIGENCE',
    subtitle: 'Data-driven investigation and cross-disciplinary strategy',
    iconName: 'BrainCircuit',
    skills: [
      'Quantitative Analysis',
      'Data Analysis',
      'Financial Research',
      'Market Research',
      'Economic Research',
      'Historical Research',
      'Strategic Research',
      'Multidisciplinary Research'
    ]
  },
  {
    id: 'business-digital',
    number: '06',
    title: 'BUSINESS & DIGITAL SYSTEMS',
    subtitle: 'Scalable digital infrastructure and operational efficiency',
    iconName: 'Layers',
    skills: [
      'Digital Systems',
      'Notion Systems',
      'Productivity Systems',
      'E-commerce Growth Systems',
      'IT Automation',
      'Algorithmic Automation',
      'International Business',
      'Operational Efficiency',
      'Project Management'
    ]
  }
];

export const SELECTED_PROJECTS: Project[] = [
  {
    id: 'project-ai-automation',
    number: '01',
    title: 'AI & AUTOMATION SYSTEMS',
    category: 'AI / Automation / Workflows',
    status: 'Active',
    featured: true,
    description: 'Researching and developing AI-powered workflows and automation systems for productivity, business processes, and digital operations.',
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
    description: 'Developing and researching algorithmic and quantitative approaches to financial markets.',
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
    description: 'Designing digital products, knowledge systems, productivity workflows, and structured digital infrastructure.',
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
    description: 'Exploring financial, economic, technological, strategic, and multidisciplinary research.',
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
    label: 'LONG-TERM BUSINESS VENTURE',
    subtitle: 'Primary Business Foundation',
    description: 'SANR Corporation Limited is the primary long-term business venture and a foundation for future companies, projects, investments, technologies, and business initiatives. SANR represents a long-term ambition to build a scalable business organization focused on sustainable value, systems, opportunities, and ventures.',
    highlights: [
      'Core corporate framework for multi-domain ventures',
      'Focus on long-term capital allocation & software equity',
      'Incubator for AI, FinTech, and operational business systems',
      'Built with strategic patience and institutional structure'
    ],
    status: 'Active / Core Foundation',
    linkText: 'Explore SANR'
  },
  {
    id: 'sayematrix-eco',
    name: 'SAYEMATRIX',
    label: 'DIGITAL ECOSYSTEM',
    subtitle: 'Independent Digital Operating System',
    description: 'SAYEMATRIX is an independent digital ecosystem focused on learning, knowledge, content creation, digital products, technology, systems, business, health, fitness, productivity, mindset, personal development, creativity, and long-term growth. It is a space to learn, explore, build, document, and share.',
    highlights: [
      'Multi-domain knowledge & software hub',
      'Modular digital assets and structured learning platforms',
      'Unified brand connecting faith, human focus, wealth, and creativity',
      'Personal Operating System built for scalable impact'
    ],
    status: 'Active / Evolving Engine',
    linkText: 'Explore SAYEMATRIX'
  }
];

export const ECOSYSTEM_DOMAINS: EcosystemDomain[] = [
  {
    id: 'faith',
    pillar: 'FAITH',
    brand: 'GUID2FAITH',
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
    year: '2026',
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
    description: 'Launching GUID2FAITH, NEUROMATRIX, TOP10.INSIGHTS, WEALTRIXO, and ARTENIXO under the core SAYEMATRIX umbrella.',
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
