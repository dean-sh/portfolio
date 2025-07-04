"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DocumentArrowDownIcon,
  ArrowTopRightOnSquareIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

// Experience data
const experiences = [
  {
    id: 1,
    title: "Founder",
    company: "Bloome AI",
    location: "Remote",
    period: "May 2025-present",
    description:
      "\nThe first AI agent that finds jobs, researches companies & applies for you. \n Grow your career, not frustration.",
    image: "/images/bloome.png",
    skills: [
      "AI Agents",
      "Product Development",
      "Entrepreneurship",
      "Full-Stack Development",
    ],
  },
  {
    id: 2,
    title: "Senior Data Scientist",
    company: "Renewcast",
    location: "Italy (Remote)",
    period: "2025-present",
    description:
      "\nBuilding high-precision forecasting models for renewable (wind, solar) energy production using machine learning, numerical weather prediction, and satellite data. \n Improving forecast accuracy and reliability by integrating real-time meteorological data, telemetry, and spatial modeling at scale. \n Delivering scalable, API-driven forecast products that support energy traders, grid operators, and renewable asset managers in optimizing operations and reducing imbalance penalties.",
    image: "/images/renewcast.png",
    skills: [
      "Machine Learning",
      "Weather Prediction",
      "Satellite Data",
      "Python",
      "API Development",
      "Spatial Modeling",
    ],
  },
  {
    id: 3,
    title: "Founding Data Scientist",
    company: "tem.energy",
    location: "London (Remote)",
    period: "2024-May 2025",
    description:
      "\nLeading the AI backbone of RED, our flagship product for renewable energy. \n Built Rosso, an automated pricing engine that optimizes portfolio risk while ensuring growth. \n Delivered precise half-hourly, multi-year horizon forecasts and developed a modern ML stack for rapid iteration and scaling.",
    image: "/images/tem.png",
    skills: ["AWS", "Python", "Grafana", "PyTorch", "dbt"],
  },
  {
    id: 4,
    title: "Data Scientist for Energy",
    company: "AmpX",
    location: "Prague, London (Remote)",
    period: "2023-2024",
    description:
      "\nDeveloped advanced time series models for generation, load, and market price forecasting. \n Created battery degradation estimation models for hundreds of assets. \n Pioneered an end-to-end MLOps framework on AWS with Kubernetes. \n Led development of a novel PV power generation forecasting product and mentored colleagues in data science.",
    image: "/images/ampx.webp",
    skills: ["AWS", "Kubernetes", "Python", "Airflow", "Grafana"],
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "Datamole AI",
    location: "Prague",
    period: "2019-2022",
    description:
      "\nDelivered tailored, end-to-end ML projects with domain expert collaboration. \n Projects included animal sickness detection, predictive maintenance, anomaly detection, and time series applications. \n Built data pipelines using real-world data from robots, sensors, IIoT devices, and more across manufacturing, automotive, and agritech sectors.",
    image: "/images/datamole.avif",
    skills: ["SQL", "Docker", "Python", "Azure", "Scikit-Learn"],
  },
  {
    id: 6,
    title: "Project Lead in Aerospace Defense",
    company: "Israeli Air Force",
    location: "Israel",
    period: "2015-2019",
    description:
      "\nLed engineering teams in designing high-budget technological projects for F16 and F15 jet fighters. \n Managed collaboration with Israeli military industries, conducting R&D in RF, signal processing, and aviation. \n Created ML models for computer vision and data analysis.",
    image: "/images/iaf.avif",
    skills: ["Python", "TensorFlow", "MatLab", "Scikit-Learn", "Keras"],
  },
  {
    id: 7,
    title: "Flight Researcher and Analyst",
    company: "Israeli Air Force",
    location: "Israel",
    period: "2014-2015",
    description:
      "\nManaged high-end, real-time RF systems for protection of Israeli jet fighters during missions. \n Analyzed and researched vast amounts of data collected by these systems. \n Conducted field testing, research, and evaluation via flight and laboratory tests.",
    image: "/images/iaf.avif",
    skills: ["Data Analysis", "RF Systems", "Field Testing", "Research"],
  },
];

// Education data
const education = [
  {
    id: 1,
    degree: "Machine Learning and AI Specialization",
    institution: "Technion - Israel Institute of Technology",
    location: "Israel",
    period: "2018-2019",
    description:
      "Intensive program covering Python, R, SQL, Statistics, and Machine Learning. Final project (100% grade): Movie Recommender System using Singular Value Decomposition.",
  },
  {
    id: 2,
    degree: "Officers' Training",
    institution: "Israel Defence Force",
    location: "Israel",
    period: "2014",
    description:
      "Completed rigorous military leadership training. Achieved rank of Captain through demonstrated leadership and technical expertise.",
  },
  {
    id: 3,
    degree: "B.Sc. Electrical and Electronics Engineering",
    institution: "Tel Aviv University",
    location: "Israel",
    period: "2010-2014",
    description:
      "Specialized in electro-optical systems, control engineering, and bio-engineering. Thesis on Segmentation and Real-Time Video Tracking in Medical Imaging.",
  },
  {
    id: 4,
    degree: "B.Sc. Physics",
    institution: "Tel Aviv University",
    location: "Israel",
    period: "2010-2014",
    description: "Focused on astrophysics and theory of relativity.",
  },
];

// Skills data
const skills = [
  {
    category: "Data Science & ML",
    skills: [
      "Machine Learning",
      "Time Series Forecasting",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Predictive Modeling",
      "Optimization",
    ],
  },
  {
    category: "Programming",
    skills: ["Python", "SQL", "R", "MATLAB", "JavaScript", "React", "FastAPI"],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure",
      "Kubernetes",
      "Docker",
      "MLflow",
      "Airflow",
      "dbt",
    ],
  },
  {
    category: "Libraries & Frameworks",
    skills: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Pandas",
      "Keras",
      "Grafana",
      "Streamlit",
    ],
  },
];

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <main>
      <Navbar />

      <section className="pt-24 md:pt-32 pb-20">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="mb-8" variants={itemVariants}>
              <Link
                href="/"
                className="inline-flex items-center text-secondary hover:text-accent transition-all duration-300 mb-4"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </motion.div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-8">
              <motion.div variants={itemVariants}>
                <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2">
                  Resume
                </h1>
                <p className="text-secondary text-base md:text-lg">
                  My professional background and experience
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <a
                  href="https://www.linkedin.com/in/dean-shabi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex items-center justify-center text-sm md:text-base"
                >
                  <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                  View LinkedIn Profile
                </a>
              </motion.div>
            </div>

            {/* Experience Section */}
            <motion.div
              className="mb-12 bg-white p-8 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold mb-8">
                Professional Experience
              </h2>

              <div className="space-y-8 md:space-y-16 relative">
                {/* Timeline line - hidden on mobile */}
                <div className="hidden md:block absolute left-[76px] top-6 bottom-6 w-px bg-gradient-to-b from-accent/10 via-accent/40 to-accent/10"></div>

                {experiences.map((exp, index) => {
                  // Extract years from period
                  const years = exp.period.split("-");
                  const startYear = years[0];
                  const endYear = years.length > 1 ? years[1] : "present";

                  return (
                    <motion.div key={exp.id} className="relative">
                      <div className="flex items-start">
                        {/* Year column - mobile and desktop */}
                        <div className="w-auto md:w-[76px] flex-shrink-0 pr-3 md:pr-6 pt-1 md:text-right">
                          <span className="text-sm font-medium text-accent/90 bg-accent/10 px-2 py-1 rounded md:bg-transparent md:p-0">
                            {startYear}
                          </span>
                        </div>

                        {/* Timeline dot - hidden on mobile */}
                        <div className="hidden md:block absolute left-[76px] top-1.5 -ml-[5px] w-[10px] h-[10px] rounded-full bg-accent/80"></div>

                        {/* Content area */}
                        <div className="flex-1 md:pl-10">
                          <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                            {/* Company logo - mobile position at top */}
                            <div className="w-16 h-16 md:hidden flex-shrink-0 rounded-md overflow-hidden bg-accent/5 p-2 flex items-center justify-center backdrop-blur-sm border border-accent/10 mb-3">
                              <Image
                                src={exp.image}
                                alt={exp.company}
                                width={56}
                                height={56}
                                className="object-contain"
                                priority
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg md:text-xl font-semibold">
                                {exp.title}
                              </h3>
                              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-2 text-secondary mb-3 mt-1 text-sm md:text-base">
                                <span className="font-medium">
                                  {exp.company}
                                </span>
                                <span className="hidden sm:inline opacity-50">•</span>
                                <span className="text-sm">{exp.location}</span>
                              </div>
                              <div className="text-secondary text-sm leading-relaxed mb-3">
                                {exp.description
                                  .split("\n")
                                  .map((line, index) => (
                                    <div
                                      key={index}
                                      className="flex items-start mb-1"
                                    >
                                      {index > 0 && (
                                        <span className="text-accent mr-2 mt-0.5">
                                          •
                                        </span>
                                      )}
                                      <span
                                        className={index === 0 ? "" : "flex-1"}
                                      >
                                        {line.trim()}
                                      </span>
                                    </div>
                                  ))}
                              </div>
                              {exp.skills && (
                                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3">
                                  {exp.skills.map((skill, i) => (
                                    <span
                                      key={i}
                                      className="px-2 py-0.5 md:py-1 bg-accent/10 text-accent rounded-md text-xs font-medium"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            {/* Company logo - desktop position */}
                            <div className="hidden md:flex w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-accent/5 p-2 items-center justify-center backdrop-blur-sm border border-accent/10">
                              <Image
                                src={exp.image}
                                alt={exp.company}
                                width={64}
                                height={64}
                                className="object-contain"
                                priority
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div
              className="mb-8 md:mb-12 bg-white p-4 md:p-8 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Education</h2>

              <div className="space-y-8 md:space-y-16 relative">
                {/* Timeline line - hidden on mobile */}
                <div className="hidden md:block absolute left-[76px] top-6 bottom-6 w-px bg-gradient-to-b from-accent/10 via-accent/40 to-accent/10"></div>

                {education.map((edu) => {
                  // Extract years from period
                  const years = edu.period.split("-");
                  const startYear = years[0];
                  const endYear = years.length > 1 ? years[1] : "present";

                  return (
                    <motion.div key={edu.id} className="relative">
                      <div className="flex items-start">
                        {/* Year column - mobile and desktop */}
                        <div className="w-auto md:w-[76px] flex-shrink-0 pr-3 md:pr-6 pt-1 md:text-right">
                          <span className="text-sm font-medium text-accent/90 bg-accent/10 px-2 py-1 rounded md:bg-transparent md:p-0">
                            {startYear}
                          </span>
                        </div>

                        {/* Timeline dot - hidden on mobile */}
                        <div className="hidden md:block absolute left-[76px] top-1.5 -ml-[5px] w-[10px] h-[10px] rounded-full bg-accent/80"></div>

                        {/* Content area */}
                        <div className="flex-1 md:pl-10">
                          <h3 className="text-lg md:text-xl font-semibold">
                            {edu.degree}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-2 text-secondary mb-3 mt-1 text-sm md:text-base">
                            <span className="font-medium">
                              {edu.institution}
                            </span>
                            <span className="hidden sm:inline opacity-50">•</span>
                            <span className="text-sm">{edu.location}</span>
                          </div>
                          <p className="text-secondary text-sm leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              className="mb-8 md:mb-12 bg-white p-4 md:p-8 rounded-lg shadow-md"
              variants={itemVariants}
            >
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Skills & Expertise</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="space-y-2 md:space-y-3">
                    <h3 className="font-semibold text-base md:text-lg">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 md:px-3 py-0.5 md:py-1 bg-accent/10 text-accent rounded-full text-xs md:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div className="text-center mt-8 md:mt-12" variants={itemVariants}>
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Interested in working together?
              </h2>
              <p className="text-secondary mb-4 md:mb-6 text-sm md:text-base">
                Feel free to reach out to discuss potential opportunities.
              </p>
              <Link href="/#contact" className="btn btn-primary">
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
