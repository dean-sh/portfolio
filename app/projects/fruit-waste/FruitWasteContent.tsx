import React from "react";
import { ProjectDetails } from "@/components/ProjectDetails";

const FruitWasteContent = () => {
  return (
    <ProjectDetails
      title="Reducing Fruit Waste with Microwave Sensing"
      subtitle="Using non-destructive microwave technology to detect fruit ripeness and reduce supply chain waste"
      image="/images/fruit-waste.jpg"
      industry="Agriculture & Food"
      client="Produce Distribution Company"
      tags={[
        "Microwave Sensing",
        "ML",
        "IoT",
        "Data Analytics",
        "Food Technology",
        "Sustainability",
      ]}
    >
      <div className="space-y-8">
        {/* Introduction Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-white/90">
              This project addresses the critical challenge of food waste in the
              produce industry by implementing Fresco's innovative microwave
              sensing technology that can non-destructively assess internal
              fruit quality and ripeness.
            </p>

            <p>
              Food waste is a significant global issue, with approximately
              30-40% of all produce being discarded before reaching consumers. A
              major contributor to this waste is the inability to accurately
              track and predict fruit ripeness at scale without damaging the
              product.
            </p>
          </div>
        </section>

        {/* Food Waste Context */}
        <section className="bg-surface-muted/70 rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Food Waste Challenge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                The food industry faces enormous waste challenges, with fruits
                being particularly susceptible due to their relatively short
                shelf lives and sensitivity to storage conditions. This waste
                represents not only economic losses but also squandered
                resources and unnecessary environmental impact.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-surface-muted p-4 rounded-lg text-center">
                  <div className="text-accent text-3xl font-bold mb-1">
                    30-40%
                  </div>
                  <div className="text-sm">Produce Wasted</div>
                </div>
                <div className="bg-surface-muted p-4 rounded-lg text-center">
                  <div className="text-accent text-3xl font-bold mb-1">
                    $250B
                  </div>
                  <div className="text-sm">Annual Cost</div>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent flex items-center justify-center">
                <div className="text-center p-6">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">
                    Food Sustainability
                  </h3>
                  <p className="text-sm">Tackling waste through technology</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
            The Challenges of Ripeness Detection
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Determining fruit ripeness accurately and at scale has
              traditionally presented several complex challenges:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-surface-muted/80 rounded-lg p-5 shadow-md border border-white/10 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">
                Internal Quality
              </h3>
              <p>
                Most traditional methods can only assess external appearance,
                missing internal defects and actual ripeness levels.
              </p>
            </div>

            <div className="bg-surface-muted/80 rounded-lg p-5 shadow-md border border-white/10 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">
                Scale Problem
              </h3>
              <p>
                Distribution centers process thousands of fruits daily, making
                invasive testing methods impractical and wasteful.
              </p>
            </div>

            <div className="bg-surface-muted/80 rounded-lg p-5 shadow-md border border-white/10 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">
                Time Sensitivity
              </h3>
              <p>
                The window for optimal ripeness and sale is often brief,
                requiring real-time monitoring and quick decisions.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p>
              These challenges highlight why traditional methods fail to address
              the problem effectively, and why an innovative approach using
              microwave sensing technology is transformational.
            </p>
          </div>
        </section>

        {/* Our Solution Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
            Our Solution: Fresco Microwave Sensing
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <p className="mb-6">
                Our solution leverages Fresco's groundbreaking microwave sensing
                technology developed by Vertigo Technologies. This
                non-destructive technique allows us to look deep inside fruits
                to assess multiple quality attributes simultaneously, including
                ripeness stage, internal defects, and shelf life in a single
                measurement.
              </p>

              <div className="bg-surface-muted rounded-lg p-6 shadow-md border border-white/10 mb-6">
                <h3 className="text-xl font-semibold text-accent mb-4">
                  Key Advantages
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      <span className="text-accent">1</span>
                    </div>
                    <span>
                      Deep penetration: Microwave technology sees ~10x deeper
                      into fruits than NIR methods
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      <span className="text-accent">2</span>
                    </div>
                    <span>
                      All-in-one solution: One sensor measures multiple
                      attributes (Brix, dry matter, firmness, etc.)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      <span className="text-accent">3</span>
                    </div>
                    <span>
                      Versatility: Works with many fruit types including
                      mangoes, avocados, pears, apples, and tomatoes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                      <span className="text-accent">4</span>
                    </div>
                    <span>
                      Speed: Instantaneous results allowing entire batches to be
                      checked in minutes
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-surface-muted/70 rounded-xl p-6 border border-white/10 text-center">
                <h3 className="text-xl font-semibold mb-3">Impact Metrics</h3>
                <div className="text-5xl font-bold text-accent mb-2">94%</div>
                <p className="text-sm text-copy-muted">
                  Accuracy in assessing internal fruit quality
                </p>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Waste Reduction</span>
                    <span className="text-sm">32%</span>
                  </div>
                  <div className="w-full bg-surface/60 rounded-full h-4 relative">
                    <div className="absolute inset-0 flex items-center px-1">
                      <div
                        className="h-2 bg-accent rounded-full"
                        style={{ width: "32%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-2 mt-4">
                    <span className="text-sm">ROI for Clients</span>
                    <span className="text-sm">4.1x</span>
                  </div>
                  <div className="w-full bg-surface/60 rounded-full h-4 relative">
                    <div className="absolute inset-0 flex items-center px-1">
                      <div
                        className="h-2 bg-accent rounded-full"
                        style={{ width: "82%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
            Implementation Across the Value Chain
          </h2>
          <p className="mb-6">
            We deployed Fresco's microwave sensing technology across the entire
            fruit supply chain, creating an integrated system for optimal
            decision-making:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-surface-muted p-5 rounded-lg shadow border border-white/10">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Farming & Breeding
              </h3>
              <p className="text-sm">
                Optimized harvest timing and selective breeding based on
                internal quality metrics
              </p>
            </div>

            <div className="bg-surface-muted p-5 rounded-lg shadow border border-white/10">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Fruit Trading
              </h3>
              <p className="text-sm">
                Quality-based sorting and pricing for fair and transparent
                transactions
              </p>
            </div>

            <div className="bg-surface-muted p-5 rounded-lg shadow border border-white/10">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Distribution & Retail
              </h3>
              <p className="text-sm">
                Intelligent inventory management and shelf rotation based on
                predicted ripeness
              </p>
            </div>

            <div className="bg-surface-muted p-5 rounded-lg shadow border border-white/10">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Processing
              </h3>
              <p className="text-sm">
                Optimal ingredient selection for fruit processing based on
                internal quality
              </p>
            </div>
          </div>
        </section>
      </div>
    </ProjectDetails>
  );
};

export default FruitWasteContent;
