'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AIFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const features = [
    {
      title: "Predictive Analytics",
      description: "Leveraging ML algorithms to forecast future trends based on historical data patterns.",
      code: "import pandas as pd\nimport numpy as np\nfrom sklearn.ensemble import RandomForestRegressor\nfrom xgboost import XGBRegressor\n\n# Energy consumption forecasting model\nmodel = XGBRegressor(\n    n_estimators=100,\n    learning_rate=0.05,\n    max_depth=5\n)\n\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    {
      title: "Natural Language Processing",
      description: "Extracting insights from unstructured text data to power intelligent applications.",
      code: "import spacy\nimport pandas as pd\nfrom transformers import pipeline\n\n# Load pre-trained sentiment model\nsentiment_analyzer = pipeline('sentiment-analysis')\n\n# Process customer feedback\ndf = pd.read_csv('customer_feedback.csv')\nresults = []\n\nfor text in df['comments']:\n    sentiment = sentiment_analyzer(text)[0]\n    results.append(sentiment['label'])",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Computer Vision",
      description: "Enabling machines to interpret and make decisions based on visual data.",
      code: "import tensorflow as tf\nfrom tensorflow.keras.applications import EfficientNetB0\nfrom tensorflow.keras.preprocessing.image import ImageDataGenerator\n\n# Anomaly detection for industrial equipment\nmodel = EfficientNetB0(weights='imagenet', include_top=False,\n                      input_shape=(224, 224, 3))\n\n# Add custom layers for classification\nx = model.output\nx = tf.keras.layers.GlobalAveragePooling2D()(x)\nx = tf.keras.layers.Dense(128, activation='relu')(x)\npredictions = tf.keras.layers.Dense(2, activation='softmax')(x)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    // Simulate typing effect for code snippets
    const feature = features[activeFeature];
    setTypedText('');
    setIsTyping(true);
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < feature.code.length) {
        setTypedText(prev => prev + feature.code.charAt(i));
        i++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 20);
    
    return () => clearInterval(typeInterval);
  }, [activeFeature]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="ai-features" className="section bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">AI Capabilities</h2>
          <div className="mt-3 h-1 w-20 bg-accent mx-auto"></div>
          <p className="mt-6 text-secondary max-w-2xl mx-auto">
            Expert-level implementation of AI technologies to solve complex business challenges in energy, finance, and manufacturing.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-5 gap-8"
        >
          {/* Feature Selection */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-white/80 backdrop-blur-xs shadow-lg border-l-4 border-accent' 
                    : 'bg-white/50 hover:bg-white/80 hover:backdrop-blur-xs hover:shadow-md'
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ x: activeFeature === index ? 0 : 5 }}
              >
                <div className="flex items-start">
                  <div className={`rounded-full p-2 ${activeFeature === index ? 'text-accent' : 'text-primary/70'}`}>
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                    <p className="text-secondary text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Code Display */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3"
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
              <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-2 text-sm text-gray-400">{features[activeFeature].title}.py</div>
              </div>
              <div className="p-4 font-mono text-sm text-green-400 bg-gray-900 h-80 overflow-y-auto">
                <pre className="whitespace-pre-wrap">{typedText}</pre>
                {isTyping && <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-blink"></span>}
              </div>
            </div>
            
            <div className="mt-6">
              <div className="bg-white/80 backdrop-blur-xs rounded-lg p-6 shadow-lg border border-white/20">
                <h4 className="text-lg font-semibold text-primary mb-3">Industry Applications</h4>
                <ul className="space-y-2">
                  {activeFeature === 0 && (
                    <>
                      <li className="flex items-center">
                        <span className="text-accent mr-2">•</span>
                        <span>Energy demand forecasting with 22% error reduction</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-accent mr-2">•</span>
                        <span>UK wind energy generation prediction models</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-accent mr-2">•</span>
                        <span>Predictive maintenance for industrial equipment</span>
                      </li>
                    </>
                  )}
                  {activeFeature === 1 && (
                    <>
                      <li className="flex items-center">
                        <span className="text-accent mr-2">•</span>
                        <span>LLM-based AI agents for stock analysis and trading</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-accent mr-2">•</span>
                        <span>Customer feedback analysis for product improvement</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-accent mr-2">•</span>
                        <span>Automated reporting and data storytelling</span>
                      </li>
                    </>
                  )}
                  {activeFeature === 2 && (
                    <>
                      <li className="flex items-center">
                        <span className="text-accent mr-2">•</span>
                        <span>Automotive robot failure detection systems</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-accent mr-2">•</span>
                        <span>Defect identification in agrifood production</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-accent mr-2">•</span>
                        <span>Quality control for manufacturing processes</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 