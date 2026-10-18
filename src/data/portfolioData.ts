export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'Generative AI & LLMs' | 'Machine Learning & Deep Learning' | 'Big Data & Data Engineering' | 'Business Intelligence & Analytics' | 'Research & Experiments';
  status: 'Completed' | 'Ongoing' | 'Lab Prototype';
  tagline: string;
  description: string;
  problemStatement: string;
  objectives: string[];
  actualContribution: string[];
  architecture: {
    title: string;
    description: string;
    steps: { name: string; tech: string; detail: string }[];
  };
  technologies: string[];
  implementationSteps: string[];
  challengesAndSolutions: { challenge: string; solution: string }[];
  verifiedMetrics?: { label: string; value: string; context: string }[];
  media?: {
    type: 'image' | 'video';
    url: string;
    caption: string;
  };
  githubUrl?: string;
  liveDemoUrl?: string;
  keyTakeaways: string[];
  futureImprovements: string[];
  featured: boolean;
  orbitRadius: number; // for universe visualization
  orbitSpeed: number;
  nodeSize: number;
  glowColor: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Internship' | 'Academic / PFE' | 'IT Infrastructure';
  summary: string;
  highlightConcepts: string[];
  achievements: string[];
  technologies: string[];
  verificationDoc?: {
    name: string;
    url: string;
    type: 'pdf' | 'image';
  };
  architectureFlow?: {
    title: string;
    nodes: string[];
  };
  statusVerified: boolean;
}

export interface ResearchItem {
  id: string;
  title: string;
  category: string;
  status: 'Ongoing Experiment' | 'Idea / Proposal' | 'Validated Prototype';
  researchQuestion: string;
  whyItMatters: string;
  methodsExplored: string[];
  currentProgress: string;
  references: string[];
  nextSteps: string;
  featuredConcept?: boolean;
}

export interface SkillCategory {
  domain: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Core Mastery' | 'Advanced' | 'Working Knowledge';
    relatedProjectIds: string[];
    description: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badgeUrl?: string;
  credentialUrl?: string;
  date?: string;
  skills: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    labName: string;
    headline: string;
    subheadline: string;
    identityLabel: string;
    statusBadge: {
      available: boolean;
      label: string;
      domains: string[];
    };
    currentExploration: string[];
    contact: {
      email: string;
      phone: string;
      linkedin: string;
      github: string;
      location: string;
      cvFile: string;
      pfeAttestation: string;
    };
    education: { degree: string; institution: string; period: string; details: string }[];
    leadership: { role: string; organization: string; description: string }[];
    languages: { name: string; level: string }[];
    aboutMeBio: string;
  };
  projects: Project[];
  experiences: Experience[];
  researchItems: ResearchItem[];
  skillsData: SkillCategory[];
  certifications: Certification[];
  aiGuideKnowledgeBase: { keywords: string[]; question: string; answer: string }[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: "Cyrine Fakhfakh",
    labName: "CYRINE AI LAB",
    headline: "Turning Data Into Intelligence.",
    subheadline: "I build intelligent data solutions, explore machine learning, and transform complex information into meaningful insights.",
    identityLabel: "DATA SCIENCE · GENERATIVE AI · BIG DATA",
    statusBadge: {
      available: true,
      label: "Seeking 6-Month PFE Internship (Feb 2027)",
      domains: ["Data Science", "Artificial Intelligence", "Machine Learning", "Data Engineering"]
    },
    currentExploration: [
      "Agentic Systems with Model Context Protocol (MCP)",
      "Explainable AI (SHAP & LIME in Healthcare)",
      "Text-to-SQL Enterprise Grounding & Query Optimization"
    ],
    contact: {
      email: "cyrine.fakhfakh@dauphine.eu",
      phone: "+216 24 414 028",
      linkedin: "https://www.linkedin.com/in/cyrine-fakhfakh/",
      github: "https://github.com/cyrinefakhfakh",
      location: "Paris, France & Tunis, Tunisia",
      cvFile: "/CV_Cyrine_Fakhfakh_2027.pdf",
      pfeAttestation: "/LAGID_Attestation_de_stage_PFE.pdf"
    },
    education: [
      {
        degree: "Master Intelligence Artificielle, Data et Systèmes Agentiques (AIDA)",
        institution: "Université Paris-Dauphine PSL",
        period: "2025 – 2027",
        details: "Focus on deep learning, predictive modeling, NLP, multi-cloud platforms, agentic systems, and research methodologies."
      },
      {
        degree: "Licence en Big Data & Data Analytics",
        institution: "ISAMM – Institut Supérieur des Arts du Multimédia de la Manouba",
        period: "2022 – 2025",
        details: "Specialized in data warehousing, distributed systems, Big Data algorithms, statistics, and business intelligence."
      }
    ],
    leadership: [
      {
        role: "Responsable Marketing (Membre fondatrice)",
        organization: "Club Dauphine DataIn",
        description: "Co-founded data science student initiative; designed visual identity and technical workshop campaigns."
      },
      {
        role: "Responsable Logistique",
        organization: "Club de Robotique de l'ISAMM",
        description: "Coordinated technical equipment, component inventory, and hardware prototyping sessions for robotics challenges."
      }
    ],
    languages: [
      { name: "English", level: "Fluent (EF SET Certified)" },
      { name: "French", level: "Bilingual / Professional Fluency" },
      { name: "Arabic", level: "Native" }
    ],
    aboutMeBio: `I am Cyrine Fakhfakh, a data enthusiast and AI graduate student fascinated by the journey from raw information to intelligent decisions. My work spans data engineering, machine learning, business intelligence, and generative AI.

Currently pursuing my Master's in Artificial Intelligence, Data & Agentic Systems (AIDA) at Université Paris-Dauphine PSL, I bridge the gap between rigorous data architecture and state-of-the-art AI. I enjoy exploring how technical systems can solve concrete business challenges—from natural language business intelligence to predictive health diagnostic support.`
  },

  projects: [
    {
      id: "genbi-platform",
      title: "GenBI Platform",
      slug: "genbi-platform",
      category: "Generative AI & LLMs",
      status: "Completed",
      tagline: "Natural-language enterprise BI engine translating business questions into optimized SQL queries.",
      description: "An end-to-end Generative Business Intelligence platform combining LLM agents, automated schema introspection, and natural language to SQL translation. Connects business stakeholders directly to multi-cloud data warehouses.",
      problemStatement: "Non-technical business decision makers face bottlenecks waiting for analytics teams to write complex SQL queries and assemble ad-hoc reports.",
      objectives: [
        "Translate natural language queries into accurate, syntactically correct SQL.",
        "Ground LLM generations in enterprise schema metadata using Model Context Protocol (MCP).",
        "Enable automated data visualization and narrative reporting without leaking sensitive credentials."
      ],
      actualContribution: [
        "Architected Python & FastAPI microservices implementing OAuth 2.0 PKCE authentication.",
        "Integrated the Model Context Protocol (MCP) to securely expose data warehouses (BigQuery, Databricks) to LLM agents.",
        "Built schema introspection pipelines that inject table DDIs and business glossaries into prompt contexts.",
        "Implemented SQL guardrails, query validation, and read-only execution sandboxes."
      ],
      architecture: {
        title: "Agentic Text-to-SQL Pipeline",
        description: "User Question → Intent Parsing → MCP Schema Grounding → LLM Query Synthesizer → Validation Engine → Multi-Cloud Execution (BigQuery/Databricks) → Automated Visual Report",
        steps: [
          { name: "Client / Prompt", tech: "Next.js & REST API", detail: "Accepts business inquiry with user context" },
          { name: "MCP Gateway", tech: "FastAPI & MCP SDK", detail: "Provides agent with catalog schema & constraints" },
          { name: "LLM Synthesizer", tech: "Vertex AI / OpenAI", detail: "Generates dialect-specific SQL with chain-of-thought" },
          { name: "Safe Executor", tech: "Databricks & BigQuery", detail: "Runs validated SELECT query with strict timeout limits" }
        ]
      },
      technologies: ["Python", "FastAPI", "Model Context Protocol (MCP)", "Vertex AI", "BigQuery", "Databricks", "OAuth 2.0 PKCE", "SQL"],
      implementationSteps: [
        "Constructed semantic catalog for database schema inspection.",
        "Implemented few-shot prompt templates tailored to enterprise SQL dialects.",
        "Connected FastAPI endpoints with OAuth 2.0 security.",
        "Engineered automatic chart suggestion based on query result data types."
      ],
      challengesAndSolutions: [
        {
          challenge: "LLM hallucinating column names or attempting dangerous mutations.",
          solution: "Enforced strict AST parser validation allowing only read-only SELECT clauses, cross-referenced with catalog tables."
        },
        {
          challenge: "Handling complex joins across multiple normalized entities.",
          solution: "Supplied entity-relationship graph definitions within the MCP context payload."
        }
      ],
      verifiedMetrics: [
        { label: "Query Accuracy", value: ">92%", context: "On benchmark domain-specific business question test set" },
        { label: "Inference Latency", value: "<1.4s", context: "Average response time for query generation and validation" }
      ],
      githubUrl: "https://github.com/cyrinefakhfakh/GenBI-Platform",
      keyTakeaways: [
        "MCP provides a standardized, clean bridge between agentic reasoning and operational databases.",
        "Rigorous schema grounding is 10x more effective than fine-tuning for dynamic enterprise schemas."
      ],
      futureImprovements: [
        "Integrate semantic caching for recurring queries.",
        "Support multi-turn conversational drill-downs with memory persistence."
      ],
      featured: true,
      orbitRadius: 160,
      orbitSpeed: 0.008,
      nodeSize: 22,
      glowColor: "#38bdf8"
    },
    {
      id: "breast-cancer-ai",
      title: "Breast Cancer AI Diagnostic Tool",
      slug: "breast-cancer-ai",
      category: "Machine Learning & Deep Learning",
      status: "Completed",
      tagline: "Interactive clinical diagnostic assistant predicting tumor malignancy with Plotly radar analysis.",
      description: "An interactive clinical decision-support application designed to assist medical researchers and healthcare professionals in analyzing fine needle aspirate (FNA) cytological biopsies.",
      problemStatement: "Rapid, objective assessment of cytological biopsy features is critical in oncology to reduce diagnostic turnaround times and assist cytopathologists.",
      objectives: [
        "Classify cellular biopsies as benign or malignant based on digitized nucleus characteristics.",
        "Provide real-time probability confidence scores alongside deterministic classifications.",
        "Visualize multidimensional nuclear morphometry (radius, texture, perimeter, concavity, symmetry) on interactive radar charts."
      ],
      actualContribution: [
        "Trained, cross-validated, and benchmarked classification algorithms (Logistic Regression, Random Forest, SVM).",
        "Engineered an interactive Streamlit application with intuitive real-time input sliders.",
        "Rendered dynamic Plotly radar visualizations comparing sample measurements against clinical benign/malignant population baselines.",
        "Packaged and produced a comprehensive video demonstration showcasing model inference."
      ],
      architecture: {
        title: "Clinical Morphometry Inference Pipeline",
        description: "Cytological Parameters → Standard Scaler Normalization → Pre-trained Classifier → Probability Calibration → Plotly Multi-Axis Radar Plot",
        steps: [
          { name: "Input Features", tech: "Streamlit UI", detail: "Mean, SE, and Worst values for 10 cell nucleus features" },
          { name: "Data Normalization", tech: "NumPy & Pandas", detail: "Standardized against training distribution" },
          { name: "Inference Engine", tech: "Scikit-learn", detail: "Outputs calibrated probability distribution" },
          { name: "Interactive Visual", tech: "Plotly.js", detail: "Multi-parameter radar comparison against healthy baseline" }
        ]
      },
      technologies: ["Python", "Streamlit", "Plotly", "Scikit-learn", "Pandas", "NumPy", "Machine Learning"],
      implementationSteps: [
        "Cleaned and explored the Wisconsin Diagnostic Breast Cancer (WDBC) dataset.",
        "Addressed multicollinearity through correlation matrix inspection and PCA.",
        "Built hyperparameter tuning pipeline with cross-validation.",
        "Created real-time radar chart overlay comparing patient sample against mean cohorts."
      ],
      challengesAndSolutions: [
        {
          challenge: "High penalty for false negatives in clinical diagnosis.",
          solution: "Adjusted classification threshold to prioritize recall while maintaining high overall ROC-AUC."
        }
      ],
      verifiedMetrics: [
        { label: "Model Accuracy", value: "98.2%", context: "On held-out validation cohort" },
        { label: "Sensitivity (Recall)", value: "97.6%", context: "Minimized critical false negative risk" }
      ],
      media: {
        type: "video",
        url: "/projects/bread cancer project.mp4",
        caption: "Interactive screen recording demonstrating real-time cytological feature adjustments and live probability inference."
      },
      keyTakeaways: [
        "In healthcare AI, probability transparency and visual feature comparison are essential for clinician trust.",
        "Explainability transforms a black-box model into a viable clinical partner."
      ],
      futureImprovements: [
        "Integrate Grad-CAM visual heatmaps for raw histological slide image inputs.",
        "Expand feature set to incorporate longitudinal patient records."
      ],
      featured: true,
      orbitRadius: 210,
      orbitSpeed: 0.006,
      nodeSize: 20,
      glowColor: "#f43f5e"
    },
    {
      id: "crypto-tracker",
      title: "Cryptocurrency Tracker & AI Predictor",
      slug: "crypto-tracker",
      category: "Machine Learning & Deep Learning",
      status: "Completed",
      tagline: "End-to-end time-series forecasting and market segmentation dashboard with LSTM and XGBoost.",
      description: "A comprehensive financial intelligence web application tracking global crypto assets, performing automated PCA and K-Means clustering, and modeling future price trends with deep learning and boosted trees.",
      problemStatement: "Cryptocurrency markets exhibit extreme volatility, non-stationary dynamics, and noisy time-series signals that deceive conventional linear models.",
      objectives: [
        "Extract, clean, and engineer rolling indicators (RSI, MACD, volatility, seasonality).",
        "Cluster crypto assets dynamically based on trading behavior and risk profiles.",
        "Train and contrast recurrent LSTM networks against gradient-boosted XGBoost regressors."
      ],
      actualContribution: [
        "Designed the complete Streamlit dashboard architecture from data ingestion to predictive output.",
        "Built automated dimensionality reduction (PCA) pipelines and K-Means segmentation.",
        "Developed sliding-window sequence generators for LSTM training and lag-feature matrices for XGBoost.",
        "Implemented performance comparison dashboards evaluating RMSE, MAE, and directional accuracy."
      ],
      architecture: {
        title: "Time-Series Predictive Workflow",
        description: "Market API Data → Feature Engineering (RSI/MACD/Lags) → PCA & K-Means Market Segmentation → Sequential LSTM & XGBoost Training → Comparative Forecast Visualizer",
        steps: [
          { name: "Historical Ingestion", tech: "Pandas & Yahoo Finance", detail: "Collects multi-asset OHLCV bars" },
          { name: "Signal Engineering", tech: "NumPy / Ta-Lib", detail: "Computes momentum, volatility, and trend indicators" },
          { name: "Deep Sequential Model", tech: "PyTorch / Keras LSTM", detail: "Captures long-term temporal dependencies" },
          { name: "Ensemble Comparison", tech: "XGBoost", detail: "Tree-based benchmark with Optuna tuned hyperparameters" }
        ]
      },
      technologies: ["Python", "Streamlit", "LSTM", "XGBoost", "Scikit-learn", "Pandas", "Plotly", "PCA", "K-Means"],
      implementationSteps: [
        "Created automated data cleaning and lag feature creation scripts in Jupyter notebooks.",
        "Standardized multi-scale cryptocurrency pairs for comparative clustering.",
        "Tuned LSTM hidden units, dropout rates, and lookback window size.",
        "Deployed interactive web application with date range selector and model picker."
      ],
      challengesAndSolutions: [
        {
          challenge: "Lagged prediction bias where the model simply copies the previous day's closing price.",
          solution: "Trained models on percentage returns rather than raw nominal prices, reducing drift and spurious correlation."
        }
      ],
      verifiedMetrics: [
        { label: "Assets Analyzed", value: "20+", context: "Major token pairs with historical depth" },
        { label: "Directional Accuracy", value: "64.8%", context: "Predicting next-day price movement vector" }
      ],
      githubUrl: "https://github.com/cyrinefakhfakh/Cryptocurrency_Tracker/blob/main/app.py",
      keyTakeaways: [
        "Feature engineering on returns and volatility yields far superior generalization than feeding raw prices.",
        "Ensembling tree models with recurrent architectures mitigates sudden regime changes."
      ],
      futureImprovements: [
        "Incorporate NLP sentiment signals from crypto news feeds and on-chain whale transaction alerts.",
        "Deploy automated retraining pipeline triggered by statistical drift detection."
      ],
      featured: true,
      orbitRadius: 260,
      orbitSpeed: -0.005,
      nodeSize: 18,
      glowColor: "#fbbf24"
    },
    {
      id: "amana-takaful-platform",
      title: "Amana Takaful Insurance Analytics & PFE Platform",
      slug: "amana-takaful-platform",
      category: "Big Data & Data Engineering",
      status: "Completed",
      tagline: "End-to-end insurance data warehouse, deep learning claim prediction, and executive Power BI dashboards.",
      description: "Capstone graduation project optimizing the insurance product portfolio of El Amana Takaful. Built a centralized SQL Server Data Warehouse, dimensional star schemas, predictive deep learning models for insurance KPIs, and operational customer web apps.",
      problemStatement: "Insurance institutions struggle with fragmented policy data across legacy operational databases, delaying loss-ratio calculations and risk assessment.",
      objectives: [
        "Consolidate operational data into an enterprise SQL Server Data Warehouse via ETL pipelines.",
        "Calculate key insurance indicators: gross written premiums, incurred claims, loss ratios, and expense margins.",
        "Train predictive models to anticipate claim settlement amounts.",
        "Deploy interactive Power BI dashboards and a fluid client web application."
      ],
      actualContribution: [
        "Designed star-schema dimensional models with fact tables (Policies, Claims, Premiums) and conformed dimensions.",
        "Engineered robust ETL workflows transforming heterogeneous transactional sources.",
        "Trained a deep learning model to forecast claims settlement trends and fiscal indicators.",
        "Crafted comprehensive executive Power BI dashboards adopted for operational decision-making.",
        "Developed and launched the web portal `pfeapp` streamlining client interactions."
      ],
      architecture: {
        title: "Enterprise Insurance Analytics Pipeline",
        description: "Operational Data Sources → ETL & Staging → SQL Server Data Warehouse (Star Schema) → Deep Learning Inference Engine → Executive Power BI Dashboards & Client Web Portal",
        steps: [
          { name: "Data Sources", tech: "OLTP DBs & Flat Files", detail: "Transactional insurance policies, claims records" },
          { name: "ETL & Modeling", tech: "SQL Server & SSIS", detail: "Cleansing, surrogate keys, star-schema loading" },
          { name: "Predictive Analytics", tech: "Deep Learning / Python", detail: "Settlement cost estimation & loss ratio forecasts" },
          { name: "Business Delivery", tech: "Power BI & Web Portal", detail: "Live KPI tracking for underwriting committees" }
        ]
      },
      technologies: ["SQL Server", "ETL", "Data Warehousing", "Power BI", "Deep Learning", "Python", "Dimensional Modeling"],
      implementationSteps: [
        "Conducted requirements analysis with insurance underwriters and actuaries.",
        "Designed logical and physical data warehouse schemas adhering to Kimball methodology.",
        "Built automated cleansing and incremental loading pipelines.",
        "Trained neural network regression models on historical claims data.",
        "Published interactive Power BI reports with role-based row-level security."
      ],
      challengesAndSolutions: [
        {
          challenge: "Highly skewed claims distribution with rare catastrophic loss events.",
          solution: "Applied log-transformations and separate stratified pipelines for routine versus severe claim distributions."
        }
      ],
      media: {
        type: "image",
        url: "/projects/amana takaful platform.jpeg",
        caption: "Production view of the Amana Takaful client and analytics management platform interface."
      },
      githubUrl: "https://github.com/cyrinefakhfakh/pfeapp",
      keyTakeaways: [
        "Dimensional modeling remains the foundation of reliable enterprise reporting.",
        "Data quality at the ETL stage directly dictates the ceiling of machine learning accuracy."
      ],
      futureImprovements: [
        "Migrate SQL Server staging to cloud lakehouse architecture using Delta Lake.",
        "Integrate automated fraud anomaly triggers into underwriting workflows."
      ],
      featured: true,
      orbitRadius: 310,
      orbitSpeed: 0.004,
      nodeSize: 22,
      glowColor: "#10b981"
    },
    {
      id: "bank-fraud-detection",
      title: "Bank Fraud Detection & Risk Scoring Dashboard",
      slug: "bank-fraud-detection",
      category: "Machine Learning & Deep Learning",
      status: "Completed",
      tagline: "High-throughput anomaly detection and risk scoring engine for financial transactions.",
      description: "An advanced fraud classification system detecting anomalous financial transactions under heavy class imbalance. Features explainable risk scoring and interactive transaction investigation tools.",
      problemStatement: "Financial institutions lose billions to fraudulent transactions; traditional static rules generate massive false positive rates, frustrating legitimate customers.",
      objectives: [
        "Detect credit card fraud patterns with high precision and near-instant latency.",
        "Solve severe class imbalance (frauds representing <0.2% of transactions).",
        "Provide explainable risk indicators for compliance and security audit teams."
      ],
      actualContribution: [
        "Engineered behavioral transaction features: velocity, location delta, and deviation from customer spending baseline.",
        "Applied SMOTE and cost-sensitive loss functions to balance training gradients.",
        "Benchmarked Isolation Forests, XGBoost, and LightGBM models.",
        "Built an interactive risk monitoring dashboard visualizing high-risk transaction clusters."
      ],
      architecture: {
        title: "Transaction Risk Scoring Architecture",
        description: "Streaming Transaction Record → Feature Vector Extraction → Cost-Sensitive XGBoost / Isolation Forest → Risk Probability Scorer → Alert Triage Dashboard",
        steps: [
          { name: "Transaction Stream", tech: "Pandas & Python", detail: "Extracts amount, merchant category, time interval" },
          { name: "Risk Profiling", tech: "Feature Engineering", detail: "Z-score against individual customer spending history" },
          { name: "Ensemble Classifier", tech: "XGBoost & SMOTE", detail: "Calibrated probability of fraudulent activity" },
          { name: "Compliance View", tech: "Interactive UI", detail: "Color-coded priority queue with feature contribution breakdown" }
        ]
      },
      technologies: ["Python", "XGBoost", "Scikit-learn", "Imbalanced-learn", "Pandas", "Matplotlib", "Seaborn"],
      implementationSteps: [
        "Explored anonymized transaction data with over 280,000 credit card operations.",
        "Tuned decision thresholds optimizing the PR-AUC (Precision-Recall Area Under Curve).",
        "Evaluated false alarm vs detection trade-offs using cost-matrix simulations."
      ],
      challengesAndSolutions: [
        {
          challenge: "Standard ROC-AUC was misleadingly high due to the vast majority of negative examples.",
          solution: "Switched primary evaluation to Precision-Recall AUC and Average Precision Score."
        }
      ],
      verifiedMetrics: [
        { label: "PR-AUC Score", value: "0.89", context: "Demonstrating high precision under 0.17% fraud prevalence" },
        { label: "False Positive Reduction", value: "38%", context: "Compared to standard baseline rule heuristic" }
      ],
      githubUrl: "https://github.com/cyrinefakhfakh/Bank-Fraud-Detection",
      keyTakeaways: [
        "In fraud detection, PR-AUC and cost-weighted loss matter significantly more than naive accuracy.",
        "Feature engineering around velocity and deviation outperforms raw transactional amounts."
      ],
      futureImprovements: [
        "Implement Graph Neural Networks (GNNs) to detect mule networks and coordinated fraud rings."
      ],
      featured: false,
      orbitRadius: 360,
      orbitSpeed: -0.0035,
      nodeSize: 16,
      glowColor: "#a855f7"
    },
    {
      id: "seam-carving",
      title: "Content-Aware Image Resizing (Seam Carving)",
      slug: "seam-carving",
      category: "Research & Experiments",
      status: "Completed",
      tagline: "Dynamic programming implementation of seam carving for intelligent non-distorting image retargeting.",
      description: "An algorithmic project implementing the seminal Avidan & Shamir seam carving algorithm. Resizes images by calculating energy gradients and dynamically carving out low-energy paths without distorting prominent subjects.",
      problemStatement: "Standard cropping cuts out important peripheral details, while uniform scaling squashes or stretches essential visual elements.",
      objectives: [
        "Compute image energy maps using Sobel and dual-gradient operators.",
        "Find the optimal vertical and horizontal minimum-energy seams using dynamic programming.",
        "Retarget image dimensions cleanly while preserving salient visual content."
      ],
      actualContribution: [
        "Implemented the dynamic programming energy accumulator in Python and NumPy.",
        "Built seam-carving and seam-insertion mechanisms with forward-energy optimizations.",
        "Added visual debugging modes displaying energy gradients and highlighted seams in real time."
      ],
      architecture: {
        title: "Dynamic Seam Retargeting Pipeline",
        description: "Source Image → Gradient Energy Function → Dynamic Programming Matrix M(i,j) → Backtrack Optimal Seam → Remove Seam Pixels → Iterate Until Target Dimension",
        steps: [
          { name: "Energy Operator", tech: "NumPy / Sobel", detail: "Computes |dI/dx| + |dI/dy| edge energy" },
          { name: "DP Accumulator", tech: "Dynamic Programming", detail: "Calculates cumulative minimum energy matrix" },
          { name: "Seam Extraction", tech: "Backtracking", detail: "Identifies connected path of 1 pixel per row" },
          { name: "Carving Iteration", tech: "Matrix Slicing", detail: "Reconstructs compacted (W-1, H) image array" }
        ]
      },
      technologies: ["Python", "NumPy", "OpenCV", "Algorithms", "Dynamic Programming", "Image Processing"],
      implementationSteps: [
        "Derived dual-gradient energy function across RGB channels.",
        "Implemented vector-accelerated cumulative energy calculation.",
        "Handled boundary conditions and aspect ratio transformations."
      ],
      challengesAndSolutions: [
        {
          challenge: "Naive recursive implementations were computationally slow for high-resolution images.",
          solution: "Vectorized cumulative calculations across NumPy arrays, reducing execution time by 85%."
        }
      ],
      githubUrl: "https://github.com/cyrinefakhfakh/Image-Resizing-with-Seam-Carving",
      keyTakeaways: [
        "Dynamic programming elegantly solves 2D spatial optimization with provable global minimums.",
        "Gradient energy functions mirror the human visual system's attention mechanism."
      ],
      futureImprovements: [
        "Implement object protection and removal masks allowing users to protect or erase specific regions."
      ],
      featured: false,
      orbitRadius: 400,
      orbitSpeed: 0.003,
      nodeSize: 15,
      glowColor: "#ec4899"
    },
    {
      id: "azure-security-simulator",
      title: "Azure Cloud Security Simulator",
      slug: "azure-security-simulator",
      category: "Big Data & Data Engineering",
      status: "Completed",
      tagline: "Simulation environment testing cloud defense postures, RBAC policies, and threat detections.",
      description: "A cloud security testing laboratory designed to simulate attack vectors, evaluate role-based access control (RBAC), and monitor identity telemetry in enterprise cloud environments.",
      problemStatement: "Cloud misconfigurations and over-privileged identities are the leading cause of enterprise cloud security breaches.",
      objectives: [
        "Model cloud infrastructure topologies and simulate privilege escalation scenarios.",
        "Audit least-privilege RBAC assignments against simulated threat actors.",
        "Analyze security telemetry logs for suspicious anomalous access patterns."
      ],
      actualContribution: [
        "Engineered simulation scripts testing cloud resource authorization boundaries.",
        "Built automated compliance audit routines validating configuration drift.",
        "Analyzed identity event logs to trace simulated intrusion paths."
      ],
      architecture: {
        title: "Cloud Threat Simulation Pipeline",
        description: "Cloud Topology Definition → Policy Rules Engine → Threat Vector Ingestion → Access Control Verification → Security Telemetry Report",
        steps: [
          { name: "Topology Modeler", tech: "Python & JSON Schema", detail: "Defines simulated resource hierarchy & VNETs" },
          { name: "Policy Validator", tech: "RBAC Engine", detail: "Checks identity permissions against resource scopes" },
          { name: "Threat Vector", tech: "Scenario Runner", detail: "Simulates lateral movement and credential theft" },
          { name: "Audit Output", tech: "Compliance Logger", detail: "Generates risk score and mitigation recommendations" }
        ]
      },
      technologies: ["Python", "Cloud Security", "Azure Architecture", "RBAC", "Network Security", "Docker"],
      implementationSteps: [
        "Designed state machine simulating cloud service permissions.",
        "Implemented MITRE ATT&CK cloud matrix mapping.",
        "Generated audit metrics highlighting over-privileged service principals."
      ],
      challengesAndSolutions: [
        {
          challenge: "Modeling nested permission inheritance accurately without cloud provider costs.",
          solution: "Built a lightweight graph-based offline simulator mimicking Azure Resource Manager evaluation logic."
        }
      ],
      githubUrl: "https://github.com/cyrinefakhfakh/Azure-security-simulator",
      keyTakeaways: [
        "Least-privilege architecture must be continuously validated rather than periodically audited.",
        "Simulating adversarial behavior is the most effective method to discover blind spots in cloud defenses."
      ],
      futureImprovements: [
        "Expand simulation coverage to multi-cloud federated identity bridges across AWS and GCP."
      ],
      featured: false,
      orbitRadius: 440,
      orbitSpeed: -0.0028,
      nodeSize: 15,
      glowColor: "#06b6d4"
    },
    {
      id: "biceps-tracker-cv",
      title: "Computer Vision Pose & Exercise Tracker",
      slug: "biceps-tracker",
      category: "Machine Learning & Deep Learning",
      status: "Completed",
      tagline: "Real-time biomechanical pose estimation and repetition counter with angle calculation.",
      description: "A computer vision application tracking human joint coordinates in real-time, computing joint angles (elbow flexion/extension), and verifying exercise form while counting repetitions.",
      problemStatement: "Improper exercise form during strength training frequently leads to injury or ineffective muscular recruitment.",
      objectives: [
        "Track landmark coordinates of shoulders, elbows, and wrists at 30+ FPS.",
        "Calculate 2D anatomical joint angles dynamically throughout movement phases.",
        "Accurately count valid repetitions while flagging incomplete range of motion."
      ],
      actualContribution: [
        "Implemented real-time video stream processing with OpenCV and MediaPipe.",
        "Calculated geometric vector angles using trigonometric dot-product formulations.",
        "Designed hysteresis state machines preventing double-counting noise at inflection points."
      ],
      architecture: {
        title: "Biomechanical Tracking Pipeline",
        description: "Webcam Video Feed → MediaPipe Pose Landmarks → Trigonometric Angle Calculation → Finite State Machine Rep Counter → Real-Time Feedback Overlay",
        steps: [
          { name: "Frame Capture", tech: "OpenCV", detail: "Buffers 1080p webcam frames" },
          { name: "Pose Extraction", tech: "MediaPipe Pose", detail: "Extracts 33 3D body landmark points" },
          { name: "Kinematics Engine", tech: "NumPy Trigonometry", detail: "Computes θ = arccos((a·b)/(||a||·||b||))" },
          { name: "HUD Render", tech: "OpenCV Graphics", detail: "Displays live rep count, stage, and joint angle" }
        ]
      },
      technologies: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "NumPy", "Real-Time Tracking"],
      implementationSteps: [
        "Benchmarked landmark jitter across different lighting conditions.",
        "Formulated the three-point angle equation for shoulder-elbow-wrist joints.",
        "Implemented audio feedback and visual indicators when repetition form is complete."
      ],
      challengesAndSolutions: [
        {
          challenge: "Jitter near inflection points triggering false repetition counts.",
          solution: "Established strict two-state threshold boundaries (Up: <30°, Down: >160°) with debounce hysteresis."
        }
      ],
      githubUrl: "https://github.com/cyrinefakhfakh/BicepsTracker",
      keyTakeaways: [
        "Edge-based computer vision enables instantaneous feedback without network round-trip delays.",
        "Deterministic geometric rules layered on top of neural pose models provide rock-solid reliability."
      ],
      futureImprovements: [
        "Extend model to full-body compound movements like squats and deadlifts.",
        "Deploy lightweight version in browser via WebAssembly and TensorFlow.js."
      ],
      featured: false,
      orbitRadius: 480,
      orbitSpeed: 0.0025,
      nodeSize: 15,
      glowColor: "#8b5cf6"
    },
    {
      id: "bigquery-ml-taxi",
      title: "BigQuery ML — NYC Taxi Fare Forecaster",
      slug: "bigquery-ml-taxi",
      category: "Big Data & Data Engineering",
      status: "Completed",
      tagline: "Large-scale regression modeling directly inside Google Cloud BigQuery data warehouse.",
      description: "A big data analytics and machine learning project processing millions of NYC yellow taxi trip records using SQL and BigQuery ML, eliminating data movement for model training.",
      problemStatement: "Exporting terabytes of warehouse data to external Python runtimes introduces severe latency, egress costs, and data synchronization headaches.",
      objectives: [
        "Clean and preprocess multi-million record transactional datasets using scalable SQL.",
        "Feature engineer spatial coordinates, hour-of-day, day-of-week, and distance metrics.",
        "Train, tune, and evaluate boosted tree regressors in-situ using BigQuery ML syntax."
      ],
      actualContribution: [
        "Crafted optimized BigQuery SQL transformation queries with partitioning and clustering.",
        "Trained multiple model architectures (Linear Regression, Boosted Trees) directly in GCP.",
        "Evaluated models with RMSE, MAE, and R² metrics against test holdouts."
      ],
      architecture: {
        title: "In-Warehouse Machine Learning Flow",
        description: "Raw BigQuery NYC Taxi Table → SQL Filtering & Geographic Cleaning → Feature Transformation View → CREATE MODEL (Boosted Trees) → ML.EVALUATE & ML.PREDICT",
        steps: [
          { name: "Data Warehouse", tech: "Google BigQuery", detail: "Hosts billions of historical ride logs" },
          { name: "SQL Feature View", tech: "BigQuery SQL", detail: "Haversine distance, rush hour flags, outlier filters" },
          { name: "Model Training", tech: "BigQuery ML", detail: "Trains gradient boosted trees inside warehouse compute" },
          { name: "Evaluation", tech: "ML.EVALUATE", detail: "Inspects learning curves and residuals" }
        ]
      },
      technologies: ["Google Cloud Platform", "BigQuery", "BigQuery ML", "SQL", "Feature Engineering", "Data Warehousing"],
      implementationSteps: [
        "Filtered invalid latitude/longitude bounding boxes and negative fare records.",
        "Calculated geodesic distance between pickup and dropoff points.",
        "Executed CREATE MODEL statements with hyperparameter exploration."
      ],
      challengesAndSolutions: [
        {
          challenge: "High query cost when performing full table scans across massive historical partitions.",
          solution: "Applied date partition filtering and clustered on pickup location IDs, slashing scan bytes by 72%."
        }
      ],
      verifiedMetrics: [
        { label: "Dataset Scaled", value: "10M+ Records", context: "Processed efficiently without local memory limits" },
        { label: "RMSE Improvement", value: "24%", context: "Compared to baseline linear trip-distance model" }
      ],
      keyTakeaways: [
        "In-warehouse ML bridges data engineering and predictive modeling with zero ETL data egress.",
        "Proper partitioning and clustering are paramount when operating on cloud data warehouses."
      ],
      futureImprovements: [
        "Integrate real-time streaming ride events using Pub/Sub and BigQuery continuous queries."
      ],
      featured: false,
      orbitRadius: 520,
      orbitSpeed: -0.0022,
      nodeSize: 15,
      glowColor: "#3b82f6"
    }
  ],

  experiences: [
    {
      id: "olivesoft-internship",
      role: "Stagiaire Data & IA (Data & AI Intern)",
      company: "OliveSoft",
      period: "Juin 2026 – Août 2026",
      location: "Tunis, Tunisie",
      type: "Internship",
      summary: "Conception et développement d'une plateforme d'intelligence d'affaires générative (GenBI) associant agents LLM, analyse de données automatisée et génération de requêtes SQL en langage naturel.",
      highlightConcepts: [
        "Natural Language to SQL",
        "Model Context Protocol (MCP)",
        "Generative Business Intelligence",
        "Multi-Cloud Data Connectors",
        "FastAPI Backend & OAuth 2.0 PKCE"
      ],
      achievements: [
        "Conçu une plateforme de Generative BI associant agents LLM, analyse de données et reporting métier automatisé.",
        "Implémenté une fonctionnalité text-to-SQL convertissant des questions en langage naturel en requêtes SQL validées pour l'analyse métier.",
        "Intégré le Model Context Protocol (MCP) afin de relier les agents d'IA aux données et aux outils de l'entreprise de manière standardisée.",
        "Développé des services backend sécurisés en Python et FastAPI, avec authentification OAuth 2.0 PKCE pour des connecteurs de données multi-cloud.",
        "Raccordé Google Cloud Platform, BigQuery et Databricks à la plateforme data et IA."
      ],
      technologies: ["Python", "FastAPI", "Model Context Protocol (MCP)", "Google Cloud Platform", "BigQuery", "Databricks", "OAuth 2.0 PKCE", "SQL", "LLMs"],
      architectureFlow: {
        title: "Architecture GenBI chez OliveSoft",
        nodes: [
          "Utilisateur Métier (Requête NL)",
          "Passerelle FastAPI & Sécurité OAuth 2.0",
          "Agent LLM & MCP Catalog Inspector",
          "Moteur de Génération & Validation SQL",
          "Entrepôts Multi-Cloud (BigQuery / Databricks)",
          "Restitution Visuelle & Rapport Automatisé"
        ]
      },
      statusVerified: true
    },
    {
      id: "amana-takaful-internship",
      role: "Stagiaire Data (PFE Licence Data Science)",
      company: "Amana Takaful Insurance",
      period: "Février – Juin 2025",
      location: "Tunis, Tunisie",
      type: "Academic / PFE",
      summary: "Projet de fin d'études axé sur l'optimisation du portefeuille de produits d'assurance via l'ingénierie des données, la modélisation décisionnelle et l'apprentissage profond pour l'anticipation des sinistres.",
      highlightConcepts: [
        "SQL Server Data Warehouse",
        "Modélisation Dimensionnelle (Star Schema)",
        "ETL & Intégration de Données",
        "Tableaux de Bord Power BI",
        "Apprentissage Profond (Deep Learning)"
      ],
      achievements: [
        "Entraîné un modèle de deep learning pour prédire des indicateurs fiscaux et anticiper les montants de sinistres.",
        "Centralisé et structuré l'ensemble des données opérationnelles dans un entrepôt de données SQL Server selon la méthodologie de Kimball.",
        "Créé des tableaux de bord Power BI interactifs pour appuyer la prise de décision stratégique du comité de direction.",
        "Réalisé et déployé un site web d'assurance (`pfeapp`) pour fluidifier la relation client et la gestion des polices."
      ],
      technologies: ["SQL Server", "ETL", "Data Warehousing", "Power BI", "Deep Learning", "Python", "Modélisation Dimensionnelle"],
      verificationDoc: {
        name: "Attestation de stage PFE - Cyrine FAKHFAKH",
        url: "/LAGID_Attestation_de_stage_PFE.pdf",
        type: "pdf"
      },
      architectureFlow: {
        title: "Chaîne Décisionnelle Amana Takaful",
        nodes: [
          "Bases Transactionnelles & Fichiers Polices",
          "Pipelines ETL & Zone de Staging",
          "Entrepôt de Données SQL Server (Schéma en Étoile)",
          "Modèle Prédictif Deep Learning",
          "Tableaux de Bord Power BI & Application Web"
        ]
      },
      statusVerified: true
    },
    {
      id: "tunisie-telecom-internship",
      role: "Stagiaire IT Infrastructure",
      company: "Tunisie Telecom",
      period: "Été 2024 (Juillet 2024)",
      location: "Tunis, Tunisie",
      type: "IT Infrastructure",
      summary: "Immersion pratique au sein de l'infrastructure informatique centrale et du centre de données de l'opérateur national de télécommunications.",
      highlightConcepts: [
        "Data Center Infrastructure & Cooling",
        "Active Directory Haute Disponibilité",
        "Virtualisation Hyper-V",
        "Automatisation PowerShell / CSV",
        "Administration Windows Server 2012 R2"
      ],
      achievements: [
        "Déployé et configuré une infrastructure Active Directory à haute disponibilité.",
        "Virtualisé des serveurs avec Microsoft Hyper-V : création et allocation de machines virtuelles et réseaux virtuels dédiés.",
        "Configuré les rôles Windows Server 2012 R2, le DNS et les contrôleurs de domaine (DC).",
        "Automatisé la création en masse d'utilisateurs et de stratégies d'annuaire à partir de données CSV.",
        "Appréhendé les contraintes réelles des centres de données : redondance électrique, refroidissement, stockage SAN et sécurité physique."
      ],
      technologies: ["Windows Server", "Active Directory", "Hyper-V", "PowerShell", "DNS", "Virtualisation", "Infrastructure Réseau"],
      verificationDoc: {
        name: "Attestation de Stage Tunisie Telecom",
        url: "/projects/attestation stage telecom.jpeg",
        type: "image"
      },
      architectureFlow: {
        title: "Infrastructure Système Tunisie Telecom",
        nodes: [
          "Infrastructure Matérielle & Serveurs Physiques",
          "Couche de Virtualisation Hyper-V",
          "Contrôleurs de Domaine & DNS Windows Server",
          "Forêt Active Directory & Unités Organisationnelles",
          "Scripts de Provisionnement Automatisé (CSV/PowerShell)"
        ]
      },
      statusVerified: true
    }
  ],

  researchItems: [
    {
      id: "making-ai-understandable",
      title: "Making AI Understandable: Explainable AI (XAI) in High-Stakes Domains",
      category: "Explainable AI (XAI)",
      status: "Ongoing Experiment",
      featuredConcept: true,
      researchQuestion: "How can post-hoc explainability techniques (SHAP, LIME, Grad-CAM) be integrated into clinical and financial decision workflows without sacrificing predictive capability?",
      whyItMatters: "High-accuracy neural networks and ensemble trees are often treated as 'black boxes'. In healthcare (e.g. oncology diagnostics) and finance (e.g. fraud scoring, credit underwriting), clinicians and auditors cannot rely on predictions without transparent, reproducible explanations of feature contributions.",
      methodsExplored: [
        "Kernel SHAP & Tree SHAP for localized feature attribution in tabular regression and classification.",
        "LIME (Local Interpretable Model-agnostic Explanations) for surrogate linear boundaries.",
        "Grad-CAM (Gradient-weighted Class Activation Mapping) for visual heatmap attribution on convolutional layers.",
        "Contrastive explanations: 'Why this prediction instead of alternative class Y?'"
      ],
      currentProgress: "Integrated interactive Plotly radar and feature contribution charts into the Breast Cancer AI Diagnostic tool; currently benchmarking SHAP attribution consistency across deep models vs tree ensembles on tabular clinical datasets.",
      references: [
        "Lundberg & Lee (2017) — A Unified Approach to Interpreting Model Predictions (NeurIPS)",
        "Ribeiro et al. (2016) — 'Why Should I Trust You?': Explaining the Predictions of Any Classifier (KDD)",
        "Selvaraju et al. (2017) — Grad-CAM: Visual Explanations from Deep Networks (ICCV)"
      ],
      nextSteps: "Build a unified Python explainability wrapper providing standardized waterfall plots and counterfactual guidance for enterprise end-users."
    },
    {
      id: "agentic-data-systems",
      title: "Agentic Systems & The Model Context Protocol (MCP) in Enterprise BI",
      category: "Generative AI & Agentic Systems",
      status: "Validated Prototype",
      researchQuestion: "Can standardized protocols like MCP eliminate schema hallucinations and enable reliable multi-hop data retrieval for LLMs?",
      whyItMatters: "Current LLM query generation frequently fails on enterprise schemas with ambiguous nomenclature, compound primary keys, or subtle temporal joins. Standardizing tool calling through MCP connects models securely to live metadata.",
      methodsExplored: [
        "Dynamic tool registration via Model Context Protocol (MCP) servers.",
        "Schema embedding and vector indexing for automated table/column retrieval.",
        "Dual-phase verification: natural language to abstract semantic plan, followed by dialect-specific SQL synthesis.",
        "Automated syntax validation against live schema ASTs."
      ],
      currentProgress: "Prototyped and validated in the GenBI platform connecting FastAPI to BigQuery and Databricks endpoints during the OliveSoft research internship.",
      references: [
        "Anthropic Model Context Protocol (MCP) Specification (2024)",
        "Schick et al. (2023) — Toolformer: Language Models Can Teach Themselves to Use Tools"
      ],
      nextSteps: "Incorporate conversational query repair loops where execution error traces are fed back to the agent for self-correction."
    },
    {
      id: "multivariate-financial-forecasting",
      title: "Non-Stationary Time Series Forecasting with Recurrent Networks & Gradient Boosters",
      category: "Time Series & Deep Learning",
      status: "Validated Prototype",
      researchQuestion: "Does decomposing high-frequency financial series into trend, seasonality, and residual noise improve LSTM generalization over raw sequential feeds?",
      whyItMatters: "Financial series violate standard stationarity assumptions. Standard deep learning models overfit noise and suffer from phase lag bias.",
      methodsExplored: [
        "Wavelet decomposition and STL seasonal decomposition.",
        "Long Short-Term Memory (LSTM) cells with recurrent dropout and sliding temporal windows.",
        "Gradient Boosted Trees (XGBoost) trained on lag features and rolling volatility metrics.",
        "Directional movement classification versus nominal price regression."
      ],
      currentProgress: "Implemented in the Cryptocurrency Tracker project; verified that modeling percentage returns rather than raw price indices eliminates 80% of persistent lag bias.",
      references: [
        "Hochreiter & Schmidhuber (1997) — Long Short-Term Memory",
        "Chen & Guestrin (2016) — XGBoost: A Scalable Tree Boosting System (KDD)"
      ],
      nextSteps: "Evaluate Temporal Fusion Transformers (TFT) with multi-horizon quantile forecasting."
    },
    {
      id: "responsible-ai-bias",
      title: "Responsible AI: Measuring Bias & Fairness in Underwriting Algorithms",
      category: "Responsible AI",
      status: "Idea / Proposal",
      researchQuestion: "How can disparate impact and proxy variables be detected in automated risk scoring before algorithmic models reach production?",
      whyItMatters: "Automated underwriting and risk models can inadvertently perpetuate systemic historical biases through correlated geographic or demographic proxy features.",
      methodsExplored: [
        "Demographic Parity and Equalized Odds statistical testing.",
        "Adversarial debiasing techniques in neural networks.",
        "Fairlearn and AIF360 metric integration."
      ],
      currentProgress: "Literature review underway; formulating research methodology to be applied to tabular risk scoring datasets.",
      references: [
        "Hardt et al. (2016) — Equality of Opportunity in Supervised Learning (NeurIPS)",
        "Barocas et al. (2019) — Fairness and Machine Learning"
      ],
      nextSteps: "Formulate synthetic testing benchmark for insurance risk scoring."
    }
  ],

  skillsData: [
    {
      domain: "Programming & Core Engineering",
      description: "Fundamental languages, algorithms, and software development practices.",
      iconName: "Code2",
      skills: [
        { name: "Python", level: "Core Mastery", relatedProjectIds: ["genbi-platform", "breast-cancer-ai", "crypto-tracker", "bank-fraud-detection", "seam-carving", "biceps-tracker-cv", "azure-security-simulator"], description: "Primary language for data science, machine learning, backend microservices, and mathematical computing." },
        { name: "SQL", level: "Core Mastery", relatedProjectIds: ["genbi-platform", "amana-takaful-platform", "bigquery-ml-taxi"], description: "Complex joins, analytical window functions, DDL/DML, and performance optimization." },
        { name: "R", level: "Working Knowledge", relatedProjectIds: ["crypto-tracker"], description: "Statistical testing, exploratory data analysis, and econometric modeling." },
        { name: "Java", level: "Working Knowledge", relatedProjectIds: ["seam-carving"], description: "Object-oriented software principles, data structures, and algorithmic foundations." },
        { name: "FastAPI", level: "Advanced", relatedProjectIds: ["genbi-platform"], description: "Asynchronous REST APIs, Pydantic validation, OAuth 2.0 PKCE, and OpenAPI documentation." }
      ]
    },
    {
      domain: "Machine Learning & Deep Learning",
      description: "Supervised and unsupervised learning, deep neural architectures, and model evaluation.",
      iconName: "BrainCircuit",
      skills: [
        { name: "Scikit-learn", level: "Core Mastery", relatedProjectIds: ["breast-cancer-ai", "crypto-tracker", "bank-fraud-detection"], description: "Pipelines, cross-validation, feature selection, regression, classification, and clustering." },
        { name: "XGBoost", level: "Core Mastery", relatedProjectIds: ["crypto-tracker", "bank-fraud-detection", "bigquery-ml-taxi"], description: "Gradient boosted decision trees, hyperparameter tuning with Optuna, and early stopping." },
        { name: "Deep Learning & Neural Networks", level: "Advanced", relatedProjectIds: ["amana-takaful-platform", "crypto-tracker"], description: "Multilayer perceptrons, backpropagation, gradient descent optimization, and loss calibration." },
        { name: "LSTM & RNNs", level: "Advanced", relatedProjectIds: ["crypto-tracker"], description: "Sequential modeling, lookback windows, gating mechanisms, and time-series forecasting." },
        { name: "Computer Vision & MediaPipe", level: "Working Knowledge", relatedProjectIds: ["biceps-tracker-cv", "seam-carving"], description: "OpenCV image processing, facial and pose landmark tracking, and geometric angle calculation." },
        { name: "Model Evaluation & Metrics", level: "Core Mastery", relatedProjectIds: ["breast-cancer-ai", "bank-fraud-detection", "crypto-tracker"], description: "ROC-AUC, PR-AUC, confusion matrices, RMSE/MAE, precision-recall trade-offs." }
      ]
    },
    {
      domain: "Generative AI & Agentic Systems",
      description: "Large Language Models, automated tool calling, and prompt design.",
      iconName: "Sparkles",
      skills: [
        { name: "Model Context Protocol (MCP)", level: "Advanced", relatedProjectIds: ["genbi-platform"], description: "Connecting LLM agents to structured enterprise databases and tools via Anthropic MCP." },
        { name: "Text-to-SQL & NL2SQL", level: "Advanced", relatedProjectIds: ["genbi-platform"], description: "Translating natural language questions to syntactically verified, secure SQL queries." },
        { name: "LLM Integration & Prompt Design", level: "Advanced", relatedProjectIds: ["genbi-platform"], description: "Chain-of-thought prompting, schema grounding, few-shot examples (Vertex AI Certified)." },
        { name: "Explainable AI (XAI)", level: "Advanced", relatedProjectIds: ["breast-cancer-ai"], description: "SHAP values, LIME surrogate models, and interpretable clinical decision support." }
      ]
    },
    {
      domain: "Data Engineering & Big Data",
      description: "ETL pipelines, data warehousing, cloud infrastructure, and distributed compute.",
      iconName: "Database",
      skills: [
        { name: "SQL Server & Data Warehousing", level: "Core Mastery", relatedProjectIds: ["amana-takaful-platform"], description: "Kimball dimensional modeling, star schemas, fact/dimension table architecture." },
        { name: "Google Cloud BigQuery", level: "Advanced", relatedProjectIds: ["genbi-platform", "bigquery-ml-taxi"], description: "Serverless data warehousing, partition pruning, clustering, and in-warehouse BigQuery ML." },
        { name: "Databricks & Multi-Cloud", level: "Working Knowledge", relatedProjectIds: ["genbi-platform"], description: "Lakehouse concepts, Spark connectivity, and cloud data platform integration." },
        { name: "ETL & Data Integration", level: "Core Mastery", relatedProjectIds: ["amana-takaful-platform"], description: "Extract-transform-load workflows, data cleaning, staging tables, and automated pipelines." },
        { name: "Docker & Containerization", level: "Working Knowledge", relatedProjectIds: ["genbi-platform", "azure-security-simulator"], description: "Containerizing services, environment isolation, and multi-service development." }
      ]
    },
    {
      domain: "Business Intelligence & Visualization",
      description: "Interactive analytics, KPI reporting, and visual communication.",
      iconName: "BarChart3",
      skills: [
        { name: "Power BI", level: "Core Mastery", relatedProjectIds: ["amana-takaful-platform"], description: "DAX formulas, interactive multi-page dashboards, star-schema data modeling (365 Data Science Certified)." },
        { name: "Streamlit", level: "Core Mastery", relatedProjectIds: ["breast-cancer-ai", "crypto-tracker"], description: "Rapid prototyping of interactive AI web apps, widget state management, and real-time visualization." },
        { name: "Plotly & Data Viz", level: "Advanced", relatedProjectIds: ["breast-cancer-ai", "crypto-tracker"], description: "Multidimensional radar charts, interactive time-series plots, correlation heatmaps." },
        { name: "Pandas & NumPy", level: "Core Mastery", relatedProjectIds: ["breast-cancer-ai", "crypto-tracker", "bank-fraud-detection", "seam-carving"], description: "High-performance vector operations, tabular wrangling, grouping, and feature engineering." }
      ]
    },
    {
      domain: "Infrastructure & Systems",
      description: "Enterprise operating systems, virtualization, and identity management.",
      iconName: "Server",
      skills: [
        { name: "Active Directory & DNS", level: "Advanced", relatedProjectIds: [], description: "Domain controllers, high availability forests, user group policies, and DNS administration." },
        { name: "Hyper-V Virtualization", level: "Advanced", relatedProjectIds: [], description: "Hyper-V virtual machine deployment, virtual switch networks, and host resource allocation." },
        { name: "Linux & Bash", level: "Advanced", relatedProjectIds: ["azure-security-simulator", "genbi-platform"], description: "CLI scripting, process management, permissions, and server configuration." },
        { name: "Git & Version Control", level: "Core Mastery", relatedProjectIds: ["genbi-platform", "breast-cancer-ai", "crypto-tracker", "bank-fraud-detection"], description: "Branching workflows, GitHub collaboration, pull requests, and CI/CD basics." }
      ]
    }
  ],

  certifications: [
    {
      id: "vertex-ai-prompt-design",
      title: "Prompt Design in Vertex AI Skill Badge",
      issuer: "Google Cloud (Credly)",
      credentialUrl: "https://www.credly.com/badges/405d8fe7-a41e-4ed6-808a-2f42541191f2/linked_in?t=skugem",
      skills: ["Vertex AI", "Prompt Engineering", "Large Language Models", "Google Cloud Platform"]
    },
    {
      id: "hackerrank-ml-python",
      title: "Machine Learning in Python",
      issuer: "HackerRank",
      credentialUrl: "https://www.hackerrank.com/certificates/8e5671f36ec5?utm_campaign=social-buttons&utm_medium=linkedin&utm_source=certificate_social_share&social=linkedin",
      skills: ["Python", "Machine Learning", "Scikit-learn", "Algorithm Optimization"]
    },
    {
      id: "power-bi-achievement",
      title: "Certificate of Achievement in Power BI",
      issuer: "365 Data Science",
      credentialUrl: "https://learn.365datascience.com/certificates/CC-4122FB6790/",
      skills: ["Power BI", "DAX", "Data Modeling", "Business Intelligence", "KPIs"]
    },
    {
      id: "pandas-preprocessing",
      title: "Data Cleaning and Preprocessing with Pandas",
      issuer: "365 Data Science",
      credentialUrl: "https://learn.365datascience.com/certificates/CC-208E940F5B/",
      skills: ["Pandas", "Data Cleaning", "Feature Engineering", "NumPy"]
    },
    {
      id: "r-programming-cert",
      title: "R Programming Certification",
      issuer: "365 Data Science & HackerRank",
      credentialUrl: "https://learn.365datascience.com/certificates/CC-ECF3129A7E/",
      skills: ["R", "Statistical Computing", "Data Analysis"]
    },
    {
      id: "react-js-cert",
      title: "React.js Certification",
      issuer: "Great Learning",
      credentialUrl: "https://www.mygreatlearning.com/certificate/FLWENFKP",
      skills: ["React.js", "Frontend Development", "Component Architecture"]
    },
    {
      id: "nosql-cert",
      title: "NoSQL Database Certification",
      issuer: "Great Learning",
      credentialUrl: "https://www.mygreatlearning.com/certificate/NJMIMAAK",
      skills: ["NoSQL", "Document Stores", "Data Architectures"]
    },
    {
      id: "efset-english",
      title: "EF SET English Certificate (Fluent / Advanced)",
      issuer: "EF Standard English Test",
      credentialUrl: "https://lnkd.in/p/e5DsuAB4",
      skills: ["English Fluency", "Technical Communication", "International Collaboration"]
    },
    {
      id: "cybersecurity-cert",
      title: "Cybersecurity Fundamentals",
      issuer: "LinkedIn Learning / Industry Credential",
      credentialUrl: "https://lnkd.in/p/eaYJBd5K",
      skills: ["Cybersecurity", "Identity & Access Management", "Threat Vectors"]
    },
    {
      id: "opuslab-ai",
      title: "Attestation de Formation en Intelligence Artificielle",
      issuer: "OpusLab",
      credentialUrl: "https://lnkd.in/p/efD9a4CY",
      skills: ["Artificial Intelligence", "Neural Networks", "Applied AI"]
    }
  ],

  // Knowledge base for "Ask the Lab" interactive assistant
  aiGuideKnowledgeBase: [
    {
      keywords: ["who", "cyrine", "about", "profile", "background", "dauphine", "paris"],
      question: "Who is Cyrine Fakhfakh?",
      answer: "Cyrine Fakhfakh is a Big Data & Data Science graduate currently completing her Master in Artificial Intelligence, Data & Agentic Systems (AIDA) at Université Paris-Dauphine PSL (2025–2027), having earned her Big Data & Analytics Licence from ISAMM (2022–2025). She specializes in Machine Learning, Generative AI, Data Engineering, and Business Intelligence."
    },
    {
      keywords: ["internship", "pfe", "available", "hire", "recruiter", "seeking", "opportunity", "contract"],
      question: "Is Cyrine available for an internship / PFE?",
      answer: "Yes! Cyrine is actively seeking a 6-month end-of-studies (PFE) internship starting February 2027 in Data Science, Artificial Intelligence, Machine Learning, or Data Engineering. You can reach out directly via cyrine.fakhfakh@dauphine.eu or download her CV from the header."
    },
    {
      keywords: ["olivesoft", "genbi", "assistant", "sql", "mcp", "natural language"],
      question: "What did Cyrine build during her OliveSoft internship?",
      answer: "At OliveSoft (Summer 2026), Cyrine built a Generative Business Intelligence (GenBI) platform. She implemented an AI assistant that translates natural language questions into secure SQL queries, integrated Anthropic's Model Context Protocol (MCP) to ground the agent with live enterprise schemas, and developed secure Python/FastAPI microservices with OAuth 2.0 PKCE connecting to GCP BigQuery and Databricks."
    },
    {
      keywords: ["amana", "takaful", "insurance", "warehouse", "power bi", "pfe"],
      question: "Tell me about her Amana Takaful insurance project.",
      answer: "For her academic PFE at Amana Takaful Insurance, Cyrine designed and implemented an end-to-end data intelligence architecture: modeling a centralized SQL Server Data Warehouse with Kimball star schemas, building ETL data pipelines, training a deep learning model to forecast claims settlement amounts, and crafting executive Power BI dashboards. She also developed a web portal (`pfeapp`) to streamline policy management."
    },
    {
      keywords: ["telecom", "tunisie", "infrastructure", "hyper-v", "active directory"],
      question: "What was her role at Tunisie Telecom?",
      answer: "In Summer 2024 at Tunisie Telecom, Cyrine gained deep hands-on exposure to enterprise IT infrastructure: deploying high-availability Active Directory environments, configuring Hyper-V virtual machines and virtual networks, managing Windows Server 2012 R2 and DNS, automating bulk user provisioning via PowerShell/CSV, and learning data center cooling and electrical redundancy standards."
    },
    {
      keywords: ["generative ai", "llm", "genai", "prompt", "vertex"],
      question: "Which projects demonstrate Generative AI & LLMs?",
      answer: "Her flagship Generative AI project is the GenBI Platform (GitHub: cyrinefakhfakh/GenBI-Platform), combining LLM agents with the Model Context Protocol (MCP) for enterprise text-to-SQL. She also holds the official Google Cloud Prompt Design in Vertex AI Skill Badge and conducts research on agentic workflows and tool-calling reliability."
    },
    {
      keywords: ["breast cancer", "cancer", "medical", "radar", "healthcare", "video"],
      question: "Tell me about the Breast Cancer AI Diagnostic tool.",
      answer: "Cyrine built an interactive Streamlit application (with an included video demonstration) that classifies breast tissue biopsies with 98.2% accuracy. It features real-time probability calibration and a dynamic multi-parameter Plotly radar chart comparing biopsy cell nuclei against clinical benign and malignant distributions."
    },
    {
      keywords: ["crypto", "lstm", "xgboost", "time series", "trading"],
      question: "How does the Cryptocurrency Tracker work?",
      answer: "Her Cryptocurrency Tracker & AI Predictor uses Streamlit, LSTM deep networks, and Optuna-tuned XGBoost to model high-volatility financial time series. It performs automated PCA dimensionality reduction and K-Means clustering across 20+ cryptocurrency pairs to segment assets by risk profile."
    },
    {
      keywords: ["skills", "technologies", "stack", "python", "power bi"],
      question: "What are Cyrine's core technical skills?",
      answer: "Cyrine's core technical stack includes: Python, SQL, R, FastAPI; Machine Learning (Scikit-learn, XGBoost, LSTM, PyTorch, Optuna); Generative AI (Model Context Protocol, text-to-SQL, Prompt Design); Data Engineering (SQL Server, BigQuery, Databricks, ETL, Docker); and Business Intelligence (Power BI, Streamlit, Plotly, Pandas)."
    },
    {
      keywords: ["contact", "email", "phone", "linkedin", "github"],
      question: "How can I contact Cyrine?",
      answer: "You can email Cyrine at cyrine.fakhfakh@dauphine.eu, call +216 24 414 028, or connect with her on LinkedIn (linkedin.com/in/cyrine-fakhfakh) and GitHub (github.com/cyrinefakhfakh)."
    }
  ]
};
