'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Updated project data with actual images found in public/images
const projects = [
  {
    id: 1,
    title: 'High-Accuracy Forecasting Models',
    description: 'Led the development of long-term load, generation, and price forecasting models—including PV generation, battery degradation, and price forecasting. These models power core product features, support trading decisions, and reduce balancing costs.',
    tags: ['Energy-Tech', 'Forecasting', 'ML'],
    image: '/images/energy-demand.jpg',
    category: 'Renewable Energy AI',
    link: '/projects/forecasting-models',
  },
  {
    id: 2,
    title: 'Portfolio Pricing Engine',
    description: 'Built a risk-based pricing optimisation algorithm that enables energy companies to grow rapidly while balancing risk and competitiveness—a critical edge in volatile energy markets.',
    tags: ['Energy-Tech', 'Optimization', 'Risk Analysis'],
    image: '/images/financial-analytics.jpg',
    category: 'Energy Trading',
    link: '/projects/portfolio-pricing',
  },
  {
    id: 3,
    title: 'Exempt Supply Matching Algorithm',
    description: 'Created a unique matching algorithm under UK regulations that optimally pairs SME energy consumers with local generators, unlocking ~£50/MWh in cost savings—generating millions in new revenue.',
    tags: ['Algorithm', 'Energy', 'Optimization'],
    image: '/images/equity-copilot.jpg',
    category: 'Energy Trading',
    link: '/projects/exempt-supply-matching',
  },
  {
    id: 4,
    title: 'EV Driver Behaviour Simulator',
    description: 'Developed a modular, agent-based simulator to model heterogeneous electric vehicle charging behaviours across diverse driver populations, with an interactive Streamlit dashboard for scenario testing.',
    tags: ['Simulation', 'Energy', 'Python'],
    image: '/images/ev-simulator.jpg',
    category: 'Grid Optimization',
    link: '/projects/ev-simulator',
  },
  {
    id: 6,
    title: 'Robot Failure Detection',
    description: 'Implemented anomaly detection algorithms to identify and predict robot failures in automotive manufacturing.',
    tags: ['Anomaly Detection', 'Manufacturing', 'Automotive'],
    image: '/images/robot-failure.jpg',
    category: 'Other AI',
    link: '/projects/robot-failure',
  },
  {
    id: 7,
    title: 'Reducing Fruit Waste with ML',
    description: 'Developed computer vision models to detect fruit ripeness and reduce waste in the food supply chain.',
    tags: ['Computer Vision', 'AgriTech', 'Sustainability'],
    image: '/images/fruit-waste.jpg',
    category: 'Other AI',
    link: '/projects/fruit-waste',
  },
  {
    id: 8,
    title: "UK's Wind Energy Generation ⚡💨",
    description: "Developed an advanced machine learning model for day-ahead wind power forecasting with remarkable improvements in accuracy, exceeding existing solutions by up to 57%.",
    tags: ['Energy', 'Forecasting', 'ML'],
    image: '/images/wind-energy.jpg',
    category: 'Renewable Energy AI',
    link: '/projects/wind-forecasting',
  },
  {
    id: 9,
    title: 'AI Agents for Stock Analysis 🤖',
    description: 'Created an Equity Analyst Copilot using CrewAI agents framework to revolutionize stock analysis, leveraging specialized AI agents with access to SEC filings, financial documents, and latest stock values.',
    tags: ['AI', 'Agents', 'Finance'],
    image: '/images/stock-analysis.jpg',
    category: 'Other AI',
    link: '/projects/equity-copilot',
  },
  {
    id: 10,
    title: 'Open Source MLOps Tools ⚙️',
    description: 'Comparative analysis of open-source MLOps tools including TensorFlow Serving, MLflow, AWS SageMaker, Seldon Core, and BentoML for efficient deployment and serving of ML models.',
    tags: ['MLOps', 'Tools', 'AI'],
    image: '/images/mlops-tools.jpg',
    category: 'Other AI',
    link: '/projects/mlops-tools',
  },
  {
    id: 11,
    title: 'Streamlit Advanced Guide 📊🤖',
    description: 'Exploration of advanced Streamlit features and tips for maximizing its utility, covering topics like multipage apps, logo integration, third-party libraries, data caching, and query parameter usage.',
    tags: ['Streamlit', 'Tools', 'Data Science'],
    image: '/images/streamlit-guide.jpg',
    category: 'Other AI',
    link: '/projects/streamlit-guide',
  },
];

const categories = ['All', 'Renewable Energy AI', 'Energy Trading', 'Grid Optimization', 'Other AI'];

export default function Works() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Define energy-related project IDs
  const energyProjectIds = [1, 2, 3, 4, 8]; // High-Accuracy Forecasting, Portfolio Pricing, Exempt Supply, EV Simulator, Wind Energy
  
  // First filter by category
  const categoryFilteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);
  
  // Then filter by energy relevance if not showing all projects
  const filteredProjects = showAllProjects 
    ? categoryFilteredProjects
    : categoryFilteredProjects.filter(project => energyProjectIds.includes(project.id));

  // Reset showAllProjects when category changes
  useEffect(() => {
    setShowAllProjects(false);
  }, [activeCategory]);

  return (
    <section id="works" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Portfolio</h2>
          <motion.div 
            className="mt-3 h-1 w-20 bg-energy-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          ></motion.div>
          <p className="mt-6 text-dark-200 max-w-2xl mx-auto">
            AI-powered solutions for renewable energy forecasting, grid optimization, and energy trading with quantified business impact
          </p>
        </motion.div>

        {/* Filter categories with improved animations */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-dark-800 text-dark-200 hover:bg-dark-700 border border-dark-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid with AnimatePresence for smooth transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence initial={false}>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                image={project.image}
                index={index}
                link={project.link}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Expand/Collapse Button - Only show if there are hidden projects */}
        {!showAllProjects && categoryFilteredProjects.length > filteredProjects.length && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.button
              onClick={() => setShowAllProjects(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-glass group text-lg px-8 py-4"
            >
              <span>Show More Projects</span>
              <svg 
                className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-y-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </motion.div>
        )}

        {/* Collapse Button - Only show if all projects are visible */}
        {showAllProjects && categoryFilteredProjects.length > energyProjectIds.length && (
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={() => setShowAllProjects(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-glass group text-lg px-8 py-4"
            >
              <span>Show Less</span>
              <svg 
                className="w-5 h-5 ml-2 transform transition-transform group-hover:-translate-y-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
} 