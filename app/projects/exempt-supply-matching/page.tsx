import Image from 'next/image';
import { ProjectDetails } from '@/components/ProjectDetails';
import ProjectLayout from '@/components/ProjectLayout';
import { CodeBracketIcon, ChartBarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: "Exempt Supply Matching | Dean Shabi",
  description: "Matching exempt supply and demand using neural networks and graph optimization algorithms."
};

export default function ExemptSupplyMatchingProject() {
  return (
    <ProjectLayout>
      <ProjectDetails
        title="Exempt Supply Matching"
        subtitle="Optimizing energy distribution with ML algorithms"
        image="/images/equity-copilot.jpg"
        industry="Energy"
        client="Confidential Utility Partner"
        tags={['Neural Networks', 'Optimization', 'Graph Algorithms', 'Python', 'PyTorch', 'Energy Trading', 'Match-making']}
      >
        <div className="space-y-8">
          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-primary/90">
                Created a unique matching algorithm operating under the UK's Supplier Exempt Class A and BSC Modification P442 regulations. This innovative solution optimally pairs SME energy consumers with local sub–5 MW generators, unlocking approximately £50/MWh in non-commodity cost savings.
              </p>
              
              <p>
                This algorithm has generated millions in new revenue streams and savings for businesses, while promoting more sustainable, localized energy consumption patterns.
              </p>
            </div>
          </section>
          
          {/* Results & Metrics Section */}
          <section className="bg-card/30 rounded-xl p-6 border border-border/50">
            <h2 className="text-2xl font-bold text-primary mb-6">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 border border-border/30">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-accent/10 p-3">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-3">£50/MWh</div>
                <p className="text-secondary font-medium mb-3">Cost Savings</p>
                <div className="mt-3 h-2.5 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-xs mt-2 text-secondary">in non-commodity costs</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 border border-border/30">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-accent/10 p-3">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-3">£3M+</div>
                <p className="text-secondary font-medium mb-3">Value Generated</p>
                <div className="mt-3 h-2.5 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-xs mt-2 text-secondary">Unprecedented revenue stream for SMEs and utilities</p>
              </div>
              
              <div className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 border border-border/30">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-accent/10 p-3">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-3">60+</div>
                <p className="text-secondary font-medium mb-3">Successful Pairings</p>
                <div className="mt-3 h-2.5 bg-background/50 rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs mt-2 text-secondary">35% match success rate achieved</p>
              </div>
            </div>
            
            <div className="mt-8 bg-background/40 rounded-xl p-6 border border-border/30">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-accent/10 p-2 mr-3">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary">Annual Savings Calculation</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-card/50 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-2xl font-bold text-accent mb-1">7 GWh</div>
                  <p className="text-sm text-secondary">Annual Generation</p>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="bg-card/50 rounded-lg p-4 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">×</span>
                  </div>
                </div>
                
                <div className="bg-card/50 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                  <div className="text-2xl font-bold text-accent mb-1">£50/MWh</div>
                  <p className="text-sm text-secondary">Cost Savings</p>
                </div>
              </div>
              
              <div className="flex justify-center items-center my-4">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              
              <div className="bg-accent/10 rounded-lg p-5 flex flex-col items-center justify-center text-center border border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">£350,000</div>
                <p className="text-secondary">Total Annual Benefit</p>
              </div>
            </div>
          </section>
          
          {/* The Challenge Section */}
          <section className="rounded-xl p-6 border border-border bg-card/30 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">The Challenge</h2>
            <p className="mb-4 text-secondary">
              UK renewable energy regulations offer significant cost-saving opportunities through "exempt supply" arrangements, but establishing these partnerships presents complex challenges:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-card rounded-lg p-5 shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-3">Regulatory Complexity</h3>
                <p className="text-secondary">
                  UK energy regulations permit exemptions from certain non-commodity costs when generators supply nearby businesses directly, but navigating these regulations requires specialized expertise and careful compliance management.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-5 shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-3">Matching Difficulty</h3>
                <p className="text-secondary">
                  Finding viable generator-consumer pairs requires analyzing multiple complex factors: compatibility criteria, load profiles, suitable connection points, and technical feasibility.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-5 shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-3">Scale & Efficiency</h3>
                <p className="text-secondary">
                  Manually identifying and evaluating potential matches across thousands of sites is prohibitively time-consuming and prone to missed opportunities.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-5 shadow-md">
                <h3 className="text-lg font-semibold text-primary mb-3">Data Integration</h3>
                <p className="text-secondary">
                  Combining and analyzing fragmented data from generation profiles, consumption records, grid infrastructure, and regulatory requirements presents significant technical challenges.
                </p>
              </div>
            </div>
          </section>
          
          {/* Solution Overview Section */}
          <section className="rounded-xl p-6 border border-border bg-card/30">
            <h2 className="text-2xl font-bold text-primary mb-4">Solution</h2>
            <p className="mb-4 text-secondary">
              I developed a comprehensive solution to address the complex challenge of matching exempt renewable generators with nearby businesses, creating efficient and cost-effective energy partnerships that leverage UK electricity regulations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-card rounded-lg p-5 shadow-md">
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-3">
                  <CodeBracketIcon className="h-5 w-5 text-accent" />
                  Technical Approach
                </h3>
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1"><CheckCircleIcon className="h-4 w-4 text-accent" /></div>
                    <span>Advanced matching algorithm to identify optimal generator-consumer pairings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1"><CheckCircleIcon className="h-4 w-4 text-accent" /></div>
                    <span>Real-time regulatory compliance verification system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1"><CheckCircleIcon className="h-4 w-4 text-accent" /></div>
                    <span>Advanced load profiling to match generation and consumption patterns</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-card rounded-lg p-5 shadow-md">
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2 mb-3">
                  <ChartBarIcon className="h-5 w-5 text-accent" />
                  Key Innovations
                </h3>
                <ul className="space-y-2 text-secondary">
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1"><CheckCircleIcon className="h-4 w-4 text-accent" /></div>
                    <span>Proprietary scoring algorithm for optimal matching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1"><CheckCircleIcon className="h-4 w-4 text-accent" /></div>
                    <span>Dynamic regulatory compliance engine with real-time updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1"><CheckCircleIcon className="h-4 w-4 text-accent" /></div>
                    <span>AI-powered consumption forecasting for maximizing exemption value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="min-w-4 mt-1"><CheckCircleIcon className="h-4 w-4 text-accent" /></div>
                    <span>Automated contractual agreement generation with legal validation</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Regulatory Framework Section */}
          <section className="bg-card/30 rounded-xl p-6 border border-border/50">
            <h2 className="text-2xl font-bold text-primary mb-4">Regulatory Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg p-5 shadow-md">
                <h3 className="text-lg font-semibold text-accent mb-3">Supplier Exempt Class A</h3>
                <p>Regulatory classification that allows for certain exemptions from standard energy supply obligations when specific conditions are met between generators and consumers.</p>
              </div>
              
              <div className="bg-card rounded-lg p-5 shadow-md">
                <h3 className="text-lg font-semibold text-accent mb-3">BSC Modification P442</h3>
                <p>Balancing and Settlement Code modification that enables specific matching arrangements between small-scale generators and consumers, supporting localized energy markets.</p>
              </div>
            </div>
            
            <div className="mt-6 bg-accent/5 rounded-lg p-4 border border-accent/20">
              <h3 className="text-lg font-semibold text-accent mb-2">Key Regulatory Requirements</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Generators must be sub-5 MW capacity to qualify for exemptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Supply must meet regulatory requirements for direct supply</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Matching must be documented and reported to regulatory authorities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  <span>Balancing responsibilities must be properly assigned and managed</span>
                </li>
              </ul>
            </div>
          </section>
          
          {/* System Architecture Section */}
          <section className="bg-card/30 rounded-xl p-6 border border-border/50">
            <h2 className="text-2xl font-bold text-primary mb-4">System Architecture</h2>
            <div className="aspect-video relative rounded-lg overflow-hidden bg-background/50 flex items-center justify-center">
              <div className="text-center p-8 w-full">
                <div className="grid grid-cols-3 gap-4 mb-8 relative">
                  <div className="bg-card/60 rounded-xl p-4">
                    <h3 className="font-medium mb-2">Data Inputs</h3>
                    <div className="space-y-2">
                      <div className="bg-background/50 rounded-lg p-2 text-sm">Consumer Profiles</div>
                      <div className="bg-background/50 rounded-lg p-2 text-sm">Generator Output</div>
                      <div className="bg-background/50 rounded-lg p-2 text-sm">Location Data</div>
                    </div>
                  </div>
                  
                  {/* Arrow pointing right */}
                  <div className="absolute left-[31%] top-[40%] w-[5%]">
                    <svg className="w-full text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <div className="bg-card/60 rounded-xl p-4">
                    <h3 className="font-medium mb-2">Processing Layer</h3>
                    <div className="space-y-2">
                      <div className="bg-background/50 rounded-lg p-2 text-sm">Matching Algorithm</div>
                      <div className="bg-background/50 rounded-lg p-2 text-sm">Optimization Engine</div>
                      <div className="bg-background/50 rounded-lg p-2 text-sm">Forecast Models</div>
                    </div>
                  </div>
                  
                  {/* Arrow pointing right */}
                  <div className="absolute left-[64%] top-[40%] w-[5%]">
                    <svg className="w-full text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <div className="bg-card/60 rounded-xl p-4">
                    <h3 className="font-medium mb-2">Output Systems</h3>
                    <div className="space-y-2">
                      <div className="bg-background/50 rounded-lg p-2 text-sm">Match Reports</div>
                      <div className="bg-background/50 rounded-lg p-2 text-sm">Regulatory Docs</div>
                      <div className="bg-background/50 rounded-lg p-2 text-sm">Billing Integration</div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow pointing up in a loop */}
                <div className="relative w-24 h-12 mx-auto mb-4">
                  <svg className="w-full text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 9l4-4 4 4M7 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 15l-4 4-4-4M17 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <div className="bg-accent/10 rounded-xl p-4 mb-6 mx-auto max-w-md border border-accent/20">
                  <h3 className="font-medium">Continuous Optimization Loop</h3>
                </div>
              </div>
            </div>
          </section>
          
          {/* Case Study Section */}
          <section className="bg-card/30 rounded-xl p-6 border border-border/50">
            <h2 className="text-2xl font-bold text-primary mb-4">Application Scenario</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-accent mb-3">Example Pairing</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center mr-3 shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Solar Installation</h4>
                      <p className="text-sm text-secondary">~4.8 MW capacity solar farm with 7 GWh annual generation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center mr-3 shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Business Complex</h4>
                      <p className="text-sm text-secondary">A collection of 20-25 SMEs with varied energy needs</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 bg-background/30 rounded-lg p-4">
                  <h4 className="font-medium text-accent mb-2">Cost Calculation</h4>
                  <p className="text-sm">Annual generation: 7 GWh × £50/MWh savings = £350,000 potential annual benefit</p>
                </div>
              </div>
              
              <div className="bg-background/30 rounded-lg p-5">
                <h3 className="text-lg font-semibold text-accent mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start bg-card/30 rounded-lg p-3 hover:bg-card/50 transition-colors duration-200">
                    <div className="bg-accent/10 rounded-full h-7 w-7 flex items-center justify-center mr-3 shrink-0">
                      <span className="text-accent">✓</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-primary block text-sm">Cost Reduction</span>
                      <p className="text-xs text-secondary mt-1 break-words">Annual savings of £350,000 based on 7 GWh generation</p>
                    </div>
                  </li>
                  <li className="flex items-start bg-card/30 rounded-lg p-3 hover:bg-card/50 transition-colors duration-200">
                    <div className="bg-accent/10 rounded-full h-7 w-7 flex items-center justify-center mr-3 shrink-0">
                      <span className="text-accent">✓</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-primary block text-sm">Efficient Energy Use</span>
                      <p className="text-xs text-secondary mt-1 break-words">Up to 85% of generated power consumed locally</p>
                    </div>
                  </li>
                  <li className="flex items-start bg-card/30 rounded-lg p-3 hover:bg-card/50 transition-colors duration-200">
                    <div className="bg-accent/10 rounded-full h-7 w-7 flex items-center justify-center mr-3 shrink-0">
                      <span className="text-accent">✓</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-primary block text-sm">Revenue Stability</span>
                      <p className="text-xs text-secondary mt-1 break-words">More stable revenue streams for renewable generators</p>
                    </div>
                  </li>
                  <li className="flex items-start bg-card/30 rounded-lg p-3 hover:bg-card/50 transition-colors duration-200">
                    <div className="bg-accent/10 rounded-full h-7 w-7 flex items-center justify-center mr-3 shrink-0">
                      <span className="text-accent">✓</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-primary block text-sm">Environmental Impact</span>
                      <p className="text-xs text-secondary mt-1 break-words">Carbon footprint reduction equivalent to removing 150-200 cars from roads</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Business Impact Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">Business Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <div className="bg-accent/10 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-2xl text-accent">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Cost Savings</h3>
                  <p className="text-secondary">Unlocked approximately £50/MWh in non-commodity cost savings for participating businesses.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-accent/10 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-2xl text-accent">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Revenue Generation</h3>
                  <p className="text-secondary">Generated millions in new revenue streams through this innovative matching service.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-accent/10 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-2xl text-accent">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Sustainability</h3>
                  <p className="text-secondary">Promoted more sustainable, localized energy consumption patterns, reducing transmission losses.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-accent/10 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                  <span className="text-2xl text-accent">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Market Advantage</h3>
                  <p className="text-secondary">Provided significant competitive advantage in the energy supply market with this unique offering.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Future Developments Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">Future Developments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">Platform Scaling</h3>
                <p>Expanding the platform to handle larger volumes of participants and more complex matching scenarios.</p>
              </div>
              
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">Enhanced AI</h3>
                <p>Implementing more advanced machine learning algorithms to improve matching efficiency and forecast accuracy.</p>
              </div>
              
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">Marketplace Expansion</h3>
                <p>Developing a broader marketplace model that supports additional energy services and participant types.</p>
              </div>
            </div>
          </section>
        </div>
      </ProjectDetails>
    </ProjectLayout>
  );
} 