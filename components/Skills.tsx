'use client';

import { motion } from 'framer-motion';
import TechStackIcon from 'tech-stack-icons';

// Inline SVG components
const BusinessAnalysisSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const DataAnalysisSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MachineLearningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const GenerativeAiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const skillCategories = [
  {
    title: 'Renewable Energy AI',
    description: 'Specialized AI systems for forecasting and optimizing renewable energy generation, trading, and grid operations',
    skills: ['Wind & Solar Forecasting', 'Energy Price Prediction', 'Load & Generation Forecasting', 'Battery Degradation Modeling', 'Grid Optimization'],
    icon: <MachineLearningIcon />,
  },
  {
    title: 'Energy Trading & Risk',
    description: 'Portfolio optimization and risk management systems for volatile energy markets',
    skills: ['Portfolio Pricing', 'Risk Assessment (VaR/ES)', 'Supply Matching Algorithms', 'Trading Strategy Optimization', 'Market Analysis'],
    icon: <BusinessAnalysisSvg />,
  },
  {
    title: 'Data Engineering & Visualization',
    description: 'Robust data pipelines and compelling visualizations for energy market insights',
    skills: ['Time Series Processing', 'Weather Data Integration', 'Real-time Analytics', 'Interactive Dashboards', 'Data Storytelling'],
    icon: <DataAnalysisSvg />,
  },
  {
    title: 'MLOps & Deployment',
    description: 'Production-ready ML systems with monitoring, versioning, and automated retraining capabilities',
    skills: ['Model Deployment', 'MLflow & Experiment Tracking', 'Automated Retraining', 'Performance Monitoring', 'Scalable Infrastructure'],
    icon: <GenerativeAiIcon />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="section bg-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Energy-AI Expertise</h2>
          <motion.div 
            className="mt-3 h-1 w-20 bg-energy-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          ></motion.div>
          <p className="mt-6 text-dark-200 max-w-2xl mx-auto">
            Specialized expertise in AI-powered forecasting and optimization systems for 
            renewable energy markets, grid operations, and trading strategies
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card-readable rounded-lg shadow-professional p-8 transition-shadow duration-300 hover:shadow-professional-lg border border-dark-700/50"
            >
              <div className="flex items-start">
                <motion.div 
                  className="flex-shrink-0 text-energy-400 mr-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                  <p className="text-dark-200 mb-4">{category.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skill} 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 border border-energy-600/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Python', icon: 'python' },
              { name: 'PostgreSQL', icon: 'postgresql' },
              { name: 'PyTorch', icon: 'pytorch' },
              { name: 'Grafana', icon: 'grafana' },
              { name: 'Docker', icon: 'docker' },
              { name: 'Kubernetes', icon: 'kubernetes' },
              { name: 'AWS', icon: 'amznwebserv' },
              { name: 'Google Cloud', icon: 'gcloud' },
              { name: 'Streamlit', icon: 'streamlit' },
              { name: 'OpenAI', icon: 'openai' },
              { name: 'MLflow', icon: 'python' },
              { name: 'Flask', icon: 'flask' }
            ].map((tech, index) => (
              <motion.div 
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center p-4 glass-card-readable rounded-lg border border-dark-700/50 transition-all duration-300 hover:border-energy-600/30 hover:shadow-professional-lg"
              >
                <div className="flex items-center justify-center h-14">
                  <TechStackIcon name={tech.icon} className="w-10 h-10" />
                </div>
                <span className="text-white font-medium text-sm mt-2">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 