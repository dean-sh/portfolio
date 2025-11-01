import Image from "next/image";
import { ProjectDetails } from "@/components/ProjectDetails";
export const metadata = {
  title: "High-Accuracy Forecasting Models | Dean Shabi",
  description:
    "Developing advanced forecasting models for energy consumption, generation, and pricing.",
};

export default function ForecastingModelsPage() {
  return (
    <ProjectDetails
      title="High-Accuracy Forecasting Models"
      subtitle="Advanced prediction systems for energy markets"
      image="/images/energy-demand.jpg"
      industry="Energy"
      client="Energy-tech companies"
      tags={[
        "Python",
        "PyTorch",
        "Time Series",
        "Machine Learning",
        "Energy Forecasting",
        "Weather Data",
        "AWS",
        "Docker",
      ]}
    >
      <div className="space-y-8">
        {/* Introduction Section */}
        <section>
          <h2 className="text-2xl font-bold text-highlight dark:text-white mb-4 border-b border-border/20 dark:border-white/10 pb-2">
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-highlight/90 dark:text-white/90">
              Led the development of advanced long-term load, generation, and
              price forecasting models for UK energy-tech firms. These systems
              power core features, support trading decisions, and reduce
              balancing costs via sub-hourly predictions, achieving a{" "}
              <strong className="text-energy-400">
                &gt;30% Mean Absolute Percentage Error (MAPE) improvement
              </strong>{" "}
              across hundreds of sites and significantly boosting accuracy and
              profitability.
            </p>
          </div>
        </section>

        {/* The Challenge Section - REFACTORED with Cards */}
        <section className="card rounded-xl bg-surface-muted/70 p-6 border-border/20 dark:border-white/10">
          <h2 className="text-2xl font-bold text-highlight dark:text-white mb-6">The Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Card 1: Volatility */}
            <div className="card rounded-lg bg-surface-muted/80 p-4 border-border/20 dark:border-white/10 space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-energy-600/10 p-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-energy-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-highlight dark:text-white text-base">
                  Volatility & Seasonality
                </h3>
              </div>
              <p className="text-sm text-copy-muted pl-8">
                Managing inherent fluctuations in energy use and renewable
                generation (solar).
              </p>
            </div>
            {/* Card 2: Data Integration */}
            <div className="card rounded-lg bg-surface-muted/80 p-4 border-border/20 dark:border-white/10 space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-energy-600/10 p-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-energy-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 7v10m16-10v10M8 7h8m-8 10h8M8 4h8a2 2 0 012 2v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-highlight dark:text-white text-base">
                  Diverse Data Sources
                </h3>
              </div>
              <p className="text-sm text-copy-muted pl-8">
                Integrating complex, high-dimensional data (weather, market,
                asset specifics).
              </p>
            </div>
            {/* Card 3: Scalability */}
            <div className="card rounded-lg bg-surface-muted/80 p-4 border-border/20 dark:border-white/10 space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-energy-600/10 p-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-energy-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-highlight dark:text-white text-base">
                  Scalability
                </h3>
              </div>
              <p className="text-sm text-copy-muted pl-8">
                Handling hundreds/thousands of unique sites efficiently.
              </p>
            </div>
            {/* Card 4: Granularity */}
            <div className="card rounded-lg bg-surface-muted/80 p-4 border-border/20 dark:border-white/10 space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-energy-600/10 p-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-energy-400"
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
                <h3 className="font-semibold text-highlight dark:text-white text-base">
                  High Granularity
                </h3>
              </div>
              <p className="text-sm text-copy-muted pl-8">
                Maintaining accuracy at sub-hourly levels for operational needs.
              </p>
            </div>
            {/* Card 5: Robustness */}
            <div className="card rounded-lg bg-surface-muted/80 p-4 border-border/20 dark:border-white/10 space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-energy-600/10 p-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-energy-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-highlight dark:text-white text-base">
                  Robustness & Efficiency
                </h3>
              </div>
              <p className="text-sm text-copy-muted pl-8">
                Developing reliable, computationally efficient, and maintainable
                models.
              </p>
            </div>
          </div>
        </section>

        {/* Methodological Exploration & Innovations Section - REFACTORED */}
        <section>
          <h2 className="text-2xl font-bold text-highlight dark:text-white mb-6 border-b border-border/20 dark:border-white/10 pb-2">
            Methodological Exploration & Innovations
          </h2>

          {/* Model Types Grid */}
          <h3 className="text-xl font-semibold text-highlight dark:text-white mb-4">
            Specialized Model Components
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Existing cards slightly restyled */}
            <div className="card rounded-lg bg-surface-muted/80 p-5 border-border/20 dark:border-white/10 transition-shadow">
              <h3 className="text-lg font-semibold text-energy-400 mb-2">
                Advanced Load Forecasting
              </h3>
              <p className="text-sm text-copy-muted">
                Techniques sensitive to temporal dependencies and exogenous
                factors for diverse customer segments.
              </p>
            </div>
            <div className="card rounded-lg bg-surface-muted/80 p-5 border-border/20 dark:border-white/10 transition-shadow">
              <h3 className="text-lg font-semibold text-energy-400 mb-2">
                Weather-Aware PV Generation
              </h3>
              <p className="text-sm text-copy-muted">
                Models incorporating weather, panel physics, and site geometry
                for precise solar predictions.
              </p>
            </div>
            <div className="card rounded-lg bg-surface-muted/80 p-5 border-border/20 dark:border-white/10 transition-shadow">
              <h3 className="text-lg font-semibold text-energy-400 mb-2">
                Battery State Modeling
              </h3>
              <p className="text-sm text-copy-muted">
                Predicting degradation and state-of-charge for optimizing
                storage assets.
              </p>
            </div>
            <div className="card rounded-lg bg-surface-muted/80 p-5 border-border/20 dark:border-white/10 transition-shadow">
              <h3 className="text-lg font-semibold text-energy-400 mb-2">
                Granular Price Forecasting
              </h3>
              <p className="text-sm text-copy-muted">
                Sub-hourly market price predictions leveraging market data and
                volatility modeling.
              </p>
            </div>
          </div>

          {/* Methodologies & Innovations Grid */}
          <h3 className="text-xl font-semibold text-highlight dark:text-white mb-4">
            Modeling Techniques & Innovations
          </h3>
          <p className="mb-6 text-copy-muted">
            A rigorous evaluation of diverse modeling approaches was key,
            balancing statistical methods, ensemble techniques, and advanced
            neural networks. Innovations focused on scalability and learning
            complex patterns:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Innovation 1: Transfer Learning */}
            <div className="card rounded-lg bg-surface-muted/80 p-4 border-border/20 dark:border-white/10 space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-energy-600/10 p-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-energy-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-highlight dark:text-white text-base">
                  Transfer Learning
                </h3>
              </div>
              <p className="text-sm text-copy-muted pl-8">
                Applied across sites/tasks in NNs, improving performance and
                reducing training time, especially for data-sparse sites.
              </p>
            </div>
            {/* Innovation 2: Global Models */}
            <div className="card rounded-lg bg-surface-muted/80 p-4 border-border/20 dark:border-white/10 space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-energy-600/10 p-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-energy-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.09c1.41 0 2.56 1.15 2.56 2.56V11h2.844m-6.44 8.066H9.5a2.5 2.5 0 00-2.5-2.5h-.09a2.5 2.5 0 01-2.5-2.5v-1a2 2 0 00-2-2H3.055m18.128-2.5A1.5 1.5 0 0021 11.055V9.5a2.5 2.5 0 00-2.5-2.5h-.09C17.06 7 15.91 5.85 15.91 4.44V3.935m0 15.131A1.5 1.5 0 0115.91 18.5v-1.489c0-1.41 1.15-2.56 2.56-2.56h.09a2.5 2.5 0 002.5-2.5v-1.055a1.5 1.5 0 011.872-1.445"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-highlight dark:text-white text-base">
                  Global Modeling
                </h3>
              </div>
              <p className="text-sm text-copy-muted pl-8">
                Developed models learning shared patterns from hundreds of time
                series simultaneously, enhancing generalization.
              </p>
            </div>
            {/* Innovation 3: MLflow */}
            <div className="card rounded-lg bg-surface-muted/80 p-4 border-border/20 dark:border-white/10 space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-energy-600/10 p-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-energy-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-highlight dark:text-white text-base">
                  MLflow Integration
                </h3>
              </div>
              <p className="text-sm text-copy-muted pl-8">
                Used extensively for experiment tracking, model versioning, and
                results management, ensuring reproducibility.
              </p>
            </div>
            {/* Innovation 4: Hybrid Models */}
            <div className="card rounded-lg bg-surface-muted/80 p-4 border-border/20 dark:border-white/10 space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-energy-600/10 p-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-energy-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-highlight dark:text-white text-base">
                  Hybrid Approaches
                </h3>
              </div>
              <p className="text-sm text-copy-muted pl-8">
                Combined strengths of different model classes (e.g., statistical
                + ML) to capture complex patterns.
              </p>
            </div>
            {/* Technique 5: Diverse Models Evaluated */}
            <div className="card rounded-lg bg-surface-muted/80 p-4 border-border/20 dark:border-white/10 space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <div className="bg-energy-600/10 p-1.5 rounded-full">
                  <svg
                    className="w-5 h-5 text-energy-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 17v-2m3 2v-4m3 4v-6m3 6V7m-3 11a8 8 0 110-16 8 8 0 010 16z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-highlight dark:text-white text-base">
                  Diverse Techniques
                </h3>
              </div>
              <p className="text-sm text-copy-muted pl-8">
                Evaluated statistical (ARIMA), ensembles (LGBM), and NNs (RNN,
                LSTM, Transformer).
              </p>
            </div>
          </div>
        </section>

        {/* Technical Diagram Section - REMAINS */}
        <section className="card rounded-xl bg-surface-muted/70 p-6 border-border/20 dark:border-white/10">
          <h2 className="text-2xl font-bold text-highlight dark:text-white mb-4">
            Model Architecture
          </h2>
          <div className="relative rounded-lg overflow-hidden bg-surface-muted/80 flex items-center justify-center py-8">
            <div className="text-center p-8">
              <div className="inline-block mx-auto mb-6 p-4 border-2 border-energy-600 rounded-xl">
                <h3 className="font-medium">Data Processing Pipeline</h3>
              </div>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <div className="flex flex-col items-center">
                  <div className="w-32 h-24 border border-border/20 dark:border-white/10 rounded p-2 flex items-center justify-center bg-surface-muted/80 dark:bg-black/35">
                    <p className="text-sm text-center">Weather Data</p>
                  </div>
                  <div className="h-8 flex items-center">
                    <span className="text-energy-400">▼</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-32 h-24 border border-border/20 dark:border-white/10 rounded p-2 flex items-center justify-center bg-surface-muted/80 dark:bg-black/35">
                    <p className="text-sm text-center">
                      Historical Energy Data
                    </p>
                  </div>
                  <div className="h-8 flex items-center">
                    <span className="text-energy-400">▼</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-32 h-24 border border-border/20 dark:border-white/10 rounded p-2 flex items-center justify-center bg-surface-muted/80 dark:bg-black/35">
                    <p className="text-sm text-center">Market Signals</p>
                  </div>
                  <div className="h-8 flex items-center">
                    <span className="text-energy-400">▼</span>
                  </div>
                </div>
              </div>

              <div className="inline-block mx-auto my-2 p-4 border-2 border-energy-600/70 rounded-xl bg-energy-600/10 w-64">
                <h3 className="font-medium">ML Prediction Engine</h3>
              </div>

              <div className="h-8 flex items-center justify-center">
                <span className="text-energy-400">▼</span>
              </div>

              <div className="inline-block mx-auto p-4 border-2 border-accent/70 rounded-xl">
                <h3 className="font-medium">API & Integration Layer</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact Section - REVISED EMPHASIS + 30% HIGHLIGHT */}
        <section>
          <h2 className="text-2xl font-bold text-highlight dark:text-white mb-6 border-b border-border/20 dark:border-white/10 pb-2">
            Business Impact & Outcomes
          </h2>
          <p className="mb-6 prose prose-lg max-w-none text-copy-muted">
            The deployment of these high-accuracy forecasting models delivered
            significant, measurable value across multiple business areas,
            headlined by a major leap in predictive performance:
          </p>

          {/* Highlight Metric */}
          <div className="card rounded-xl bg-energy-600/10 p-6 border-energy-600/30 mb-8 text-center">
            <h3 className="text-lg font-semibold text-energy-400 mb-2">
              Key Performance Gain
            </h3>
            <div className="text-5xl font-bold text-energy-400 mb-2">
              {" "}
              &gt;30%{" "}
            </div>
            <p className="text-highlight/90 dark:text-white/90 font-medium">
              MAPE Improvement vs. Benchmark
            </p>
            <p className="text-sm text-copy-muted mt-1">
              Aggregated across hundreds of production sites (Load & Generation)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Revised impact points for clarity and consistency */}
            <div className="flex items-start">
              <div className="bg-energy-600/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0 mt-1">
                <span className="text-xl font-bold text-energy-400">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Enhanced Product Value
                </h3>
                <p className="text-copy-muted text-sm">
                  Powered core functionality in customer-facing energy
                  management platforms, improving user experience and product
                  stickiness for thousands of users.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-energy-600/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0 mt-1">
                <span className="text-xl font-bold text-energy-400">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Optimized Trading Decisions
                </h3>
                <p className="text-copy-muted text-sm">
                  Enabled more profitable energy trading strategies through
                  reliable, high-confidence forecasts, directly impacting
                  bottom-line results.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-energy-600/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0 mt-1">
                <span className="text-xl font-bold text-energy-400">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Significant Cost Reduction
                </h3>
                <p className="text-copy-muted text-sm">
                  Substantially reduced energy balancing costs (estimated in
                  millions annually) through precise sub-hourly predictions,
                  minimizing penalties and optimizing grid interactions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-energy-600/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0 mt-1">
                <span className="text-xl font-bold text-energy-400">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Improved Market Competitiveness
                </h3>
                <p className="text-copy-muted text-sm">
                  Provided a distinct competitive advantage for energy suppliers
                  by leveraging superior forecasting technology, achieving over{" "}
                  <strong className="text-highlight/90 dark:text-white/90">
                    30% MAPE improvement
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProjectDetails>
  );
}
