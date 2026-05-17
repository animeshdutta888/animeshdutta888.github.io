export const profile = {
  name: "Animesh Dutta",
  title: "AI Systems Engineer · Backend & Platform Engineer",
  tagline:
    "I build production-grade AI systems, agentic workflows, and scalable backend infrastructure designed for real-world deployment.",
  email: "dutta.animesh08@gmail.com",
  github: "https://github.com/animeshdutta888",
  linkedin: "https://www.linkedin.com/in/animesh145",
  resume:
    "https://drive.google.com/file/d/1Org5rGm6DEI-C8OnCoQHmt_BH1R8E33o/view?usp=sharing",
  heroStats: [
    { label: "6+ Years in Engineering", value: "" },
    { label: "Focused on Production AI Systems", value: "" },
  ],
  about:
    "I’m a software engineer focused on building AI products that hold up outside demos. My work spans edge ML, backend systems, internal tooling, and applied agent workflows, with a consistent focus on turning complex technical problems into dependable product experiences.",
  experience: [
    {
      company: "Arm",
      role: "Senior Software Engineer",
      period: "Aug 2024 - Present",
      summary:
        "Leading platform and product engineering for silicon signoff workflows, spanning metrics visibility, backend services, collaborative state management, and AI-assisted internal tooling.",
      highlights: [
        "Spearheaded the architecture and cross-functional requirement analysis of a unified silicon chip signoff platform covering QoR metrics, checksum validation across netlists, waiver management, and Power/Performance/Area insights across multiple stages of the design lifecycle.",
        "Led a team of 3 engineers to build a scalable Svelte and TypeScript frontend with Flask REST APIs, PostgreSQL-backed services, and Redis caching for high-performance state management and collaborative signoff workflows.",
        "Designed a UUID-based page state system that enables persistent, shareable dashboards and smoother collaboration across signoff investigations.",
        "Led development of a Databricks-backed metrics dashboard used as a single source of truth for chip lifecycle health across frontend, backend, timing, power, verification, and KPI workflows.",
        "Built Python-based ingestion and parsing pipelines for large silicon reports and logs, extracting critical engineering metrics at scale.",
        "Integrated Databricks Medallion workflows, MCP-based access layers, and FastAPI dashboards used by engineering leadership for project health tracking.",
        "Built a RAG and FAISS-powered Slack support assistant for first-level support automation, Jira ticket generation, and escalation workflows.",
      ],
    },
    {
      company: "Qualcomm",
      role: "Senior Software Engineer -> Associate Software Engineer",
      period: "Aug 2020 - Aug 2024",
      summary:
        "Worked across edge AI infrastructure and embedded systems software, with contributions spanning SNPE model enablement, ML validation tooling, memory analysis, and platform efficiency improvements.",
      highlights: [
        "Worked on the Snapdragon Neural Processing Engine AI software stack, enabling deployment and validation of edge AI models across Qualcomm chipsets.",
        "Enhanced Python-based ML QA infrastructure for on-device inference, benchmarking, stress testing, and SDK validation workflows used in production release cycles.",
        "Enabled integration and validation of customer TensorFlow and PyTorch models across Qualcomm Model Zoo and deployment pipelines for multiple hardware targets.",
        "Improved model conversion and quantization workflows using SNPE Converter and Quantizer tools for more reliable edge-device deployment.",
        "Built a heap-usage visualization tool on AWS SageMaker to analyze memory patterns across modules and support data-driven heap budgeting decisions.",
        "Optimized log compression with a memory-efficient hashing algorithm used in debugging workflows, reducing final ELF size by 30 MB.",
        "Developed a Python tool to parse JIRA crash dumps and predict heap-usage patterns for predictive maintenance through machine learning.",
        "Implemented a memory reclaim strategy for one-time-use segments after bootup, reducing footprint in embedded systems.",
        "Optimized TLB usage through improved padding and alignment strategies to improve embedded system performance.",
        "Enhanced a Java-based ELF memory visualization tool and Python parser adopted across teams for debugging and memory analysis workflows.",
      ],
    },
    {
      company: "Kesowa / PredictivEye / TCS / Celebal Technologies",
      role: "ML and Product Internships",
      period: "2018 - 2020",
      summary:
        "Built early experience across computer vision, predictive modeling, anomaly detection, and product thinking through a mix of startup and enterprise internships.",
      highlights: [
        "Used deep learning and density-mapping approaches for crowd and anomaly detection on drone video.",
        "Built predictive models for checkout probability, retention, and customer lifetime value using marketing and behavioral data.",
        "Developed a computer-vision workflow to transcribe chess games into algebraic notation with OpenCV.",
        "Created an LSTM-based system failure prediction project from system logs and later published related work.",
      ],
    },
  ],
  projects: [
    {
      name: "Chronicle",
      problem:
        "Coding agents waste tokens and still hallucinate when they operate over large repositories without grounded context.",
      solution:
        "Built a context operating system for coding agents that indexes repo structure, ranks the smallest useful context, compresses it to budget, validates provenance, and decides when an LLM call is even necessary.",
      impact:
        "Positions agent workflows around accuracy-per-token, deterministic retrieval, grounded repair loops, and multi-agent context handoffs instead of naive long-context prompting.",
      stack: ["Python", "SQLite", "MCP", "LLM guardrails", "SDK design"],
      href: "https://github.com/animeshdutta888/chronicle",
    },
    {
      name: "Nudge",
      problem:
        "Most personal AI assistants trade away privacy and memory quality by depending on cloud services and thin chat abstractions.",
      solution:
        "Built a local-first second-brain with CLI and dashboard interfaces, retrieval-backed memory, approval-based agent workflows, and Ollama-powered reasoning on-device.",
      impact:
        "Demonstrates practical agent orchestration, local memory recall, workflow planning, and safety-aware degraded modes for everyday AI assistance.",
      stack: ["Python", "Ollama", "LangGraph", "Local retrieval", "Dashboard UX"],
      href: "https://github.com/animeshdutta888/Nudge",
    },
    {
      name: "Pulse",
      problem:
        "Incident response is noisy, fragmented, and slow when context gathering, human review, and remediation are split across too many tools.",
      solution:
        "Designed an AI operations cockpit that monitors services, launches specialist agents, builds compact context packs, stores operational memory, and requires approval before remediation.",
      impact:
        "Brings together orchestration, observability, approval-based actions, and operational memory in a way that feels practical for real systems teams.",
      stack: ["Python", "Agent orchestration", "Observability", "Approval workflows"],
      href: "https://github.com/animeshdutta888/Pulse",
    },
    {
      name: "System Failure Prediction using Log Analysis",
      problem:
        "Infrastructure failures are often detected too late, after resource trends have already crossed into instability.",
      solution:
        "Built a failure-prediction pipeline using PCA and LSTMs on CPU, RAM, and disk signals to identify likely failures ahead of time.",
      impact:
        "Reached about 80% accuracy and became part of an early research and publication track around practical ML for systems telemetry.",
      stack: ["Python", "LSTM", "PCA", "Log analysis"],
      href: "https://github.com/animeshdutta888/System-Failure-Prediction-using-log-analysis",
    },
  ],
  skills: [
    {
      group: "AI / ML Systems",
      items: ["Edge AI", "Model validation", "Inference benchmarking", "TensorFlow", "OpenCV", "System-level ML debugging"],
    },
    {
      group: "Agentic AI / LLMs",
      items: ["Agent orchestration", "Context retrieval", "Memory-aware workflows", "Ollama", "LangGraph", "MCP-oriented design"],
    },
    {
      group: "Backend",
      items: ["Python", "Flask", "FastAPI", "PostgreSQL", "REST APIs", "CLI tooling"],
    },
    {
      group: "Cloud / DevOps",
      items: ["GitHub Actions", "Docker", "AWS SageMaker", "GitHub Pages"],
    },
    {
      group: "Data / Databricks",
      items: ["Analytics workflows", "Experimentation mindset", "Data-centric product thinking"],
    },
    {
      group: "Tools",
      items: ["Svelte", "TypeScript", "Java", "C", "Git", "Linux"],
    },
  ],
  contactBlurb:
    "If you're hiring for AI engineering, developer infrastructure, or backend platform roles, I'd love to connect.",
};

export type Profile = typeof profile;
