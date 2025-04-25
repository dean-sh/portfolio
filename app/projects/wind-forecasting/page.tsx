import Image from 'next/image';
import { ProjectDetails } from '@/components/ProjectDetails';
import ProjectLayout from '@/components/ProjectLayout';

export const metadata = {
  title: "UK's Wind Energy Generation | Dean Shabi",
  description: "Forecasting UK's offshore and onshore wind power generation with advanced machine learning models."
};

export default function WindForecastingProject() {
  return (
    <ProjectLayout>
      <ProjectDetails
        title="Wind Power: Predicting UK's Energy Generation"
        subtitle="Forecasting UK's offshore and onshore wind power"
        image="/images/wind-energy.jpg"
        industry="Energy"
        client="Energy tech company"
        tags={['Forecasting', 'ML', 'Energy', 'Python', 'PyTorch', 'Time Series Analysis', 'Weather Data']}
      >
        <div className="space-y-8">
          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-primary/90">
                This project tackles the challenge of forecasting wind power generation in the UK, encompassing both offshore and onshore wind farms to support the country's clean energy transition.
              </p>
              
              <p>
                Wind energy plays a critical role in this transition by offering a clean and abundant alternative to fossil fuels, with the UK emerging as a leader in wind energy adoption.
              </p>
            </div>
          </section>
          
          {/* UK Wind Energy Context */}
          <section className="bg-card/30 rounded-xl p-6 border border-border/50">
            <h2 className="text-2xl font-bold text-primary mb-4">UK Wind Energy Landscape</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="mb-4">
                  The UK has emerged as a leader in wind energy adoption, boasting over 14GW of installed capacity and a staggering 23GW planned for the future. However, one key hurdle remains: accurately predicting wind power output.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-card p-4 rounded-lg text-center">
                    <div className="text-accent text-3xl font-bold mb-1">14+ GW</div>
                    <div className="text-sm">Current Capacity</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg text-center">
                    <div className="text-accent text-3xl font-bold mb-1">23 GW</div>
                    <div className="text-sm">Planned Capacity</div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg className="w-16 h-16 mx-auto mb-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.071 4.929a10 10 0 10-14.142 14.142M7.757 7.757a6 6 0 109.9 6.728M12 2v10m0 0l-3-3m3 3l3-3" />
                    </svg>
                    <h3 className="text-xl font-semibold mb-2">Wind Energy</h3>
                    <p className="text-sm">Sustainable power source with variable output</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* The Challenge Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">The Challenge of Wind Power Prediction</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                The very nature of wind makes it notoriously difficult to predict. Wind power generation fluctuates constantly due to a complex interplay of factors:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">Weather Patterns</h3>
                <p>Complex and rapidly changing weather systems affect wind speed and direction across the region.</p>
              </div>
              
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">Geographical Location</h3>
                <p>Different coastal and inland locations experience distinct wind patterns requiring local modeling.</p>
              </div>
              
              <div className="bg-card/50 rounded-lg p-5 shadow-md border border-border/50 hover:shadow-lg transition-shadow">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-accent mb-2">Temporal Factors</h3>
                <p>Time of day, season, and longer-term climate patterns all influence wind generation capability.</p>
              </div>
            </div>
            
            <div className="mt-6">
              <p>
                This unpredictability poses a significant challenge for grid management and ensuring a stable and reliable energy supply, making accurate forecasting critical for the energy sector.
              </p>
            </div>
          </section>
          
          {/* Our Solution Section */}
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">Our Solution</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <p className="mb-6">
                  Our project addresses this challenge by developing an advanced machine learning model specifically designed for day-ahead wind power forecasting. This innovative model goes beyond existing solutions, like those used by Elexon, by incorporating a bias-correcting linear model.
                </p>
                
                <div className="bg-card rounded-lg p-6 shadow-md border border-border/50 mb-6">
                  <h3 className="text-xl font-semibold text-accent mb-4">Technical Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <span className="text-accent">1</span>
                      </div>
                      <span>Multi-variable data integration from weather and historical generation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <span className="text-accent">2</span>
                      </div>
                      <span>Advanced time series modeling with specialized neural networks</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <span className="text-accent">3</span>
                      </div>
                      <span>Bias-correcting linear model to improve accuracy</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                        <span className="text-accent">4</span>
                      </div>
                      <span>Regional models for onshore and offshore wind farms</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-card/30 rounded-xl p-6 border border-border/50 text-center">
                  <h3 className="text-xl font-semibold mb-3">Performance Improvement</h3>
                  <div className="text-5xl font-bold text-accent mb-2">57%</div>
                  <p className="text-sm text-secondary">Accuracy improvement over Elexon's forecasting system</p>
                  
                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Standard Forecasting</span>
                      <span className="text-sm">Our Solution</span>
                    </div>
                    <div className="w-full bg-background/50 rounded-full h-4 relative">
                      <div className="absolute inset-0 flex items-center px-1">
                        <div className="h-2 bg-secondary/30 rounded-full" style={{ width: '43%' }}></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-end px-1">
                        <div className="h-2 bg-accent rounded-full" style={{ width: '57%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </ProjectDetails>
    </ProjectLayout>
  );
} 