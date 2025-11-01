import Image from "next/image";
import { ProjectDetails } from "@/components/ProjectDetails";
export const metadata = {
  title: "Portfolio Pricing Engine | Dean Shabi",
  description:
    "Developing a portfolio-aware pricing system for risk-optimized energy trading.",
};

// Feather icons (example - replace with actual import if needed or use inline SVGs)
const CheckCircle = () => (
  <svg
    className="w-5 h-5 text-accent"
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
);
const Activity = () => (
  <svg
    className="w-5 h-5 text-accent"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 12h-4l-3 9L9 3l-3 9H2"
    />
  </svg>
);
const DollarSign = () => (
  <svg
    className="w-5 h-5 text-accent"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const Zap = () => (
  <svg
    className="w-5 h-5 text-accent"
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
);
const GitMerge = () => (
  <svg
    className="w-5 h-5 text-accent"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 14v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4m6-4v8m-3-8l3-3 3 3m-6 0v-2a2 2 0 012-2h2a2 2 0 012 2v2"
    ></path>
  </svg>
);
const Layers = () => (
  <svg
    className="w-5 h-5 text-accent"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
    ></path>
  </svg>
);

const LargeDollarSign = () => (
  <svg
    className="w-24 h-24 text-accent/60"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const BarChart2 = () => (
  <svg
    className="w-5 h-5 text-accent"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 20V10M18 20V4M6 20V16"
    ></path>
  </svg>
);

const Cpu = () => (
  <svg
    className="w-5 h-5 text-accent"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <rect x="9" y="9" width="6" height="6"></rect>
    <line x1="9" y1="1" x2="9" y2="4"></line>
    <line x1="15" y1="1" x2="15" y2="4"></line>
    <line x1="9" y1="20" x2="9" y2="23"></line>
    <line x1="15" y1="20" x2="15" y2="23"></line>
    <line x1="20" y1="9" x2="23" y2="9"></line>
    <line x1="20" y1="14" x2="23" y2="14"></line>
    <line x1="1" y1="9" x2="4" y2="9"></line>
    <line x1="1" y1="14" x2="4" y2="14"></line>
  </svg>
);

const AlertTriangle = () => (
  <svg
    className="w-16 h-16 text-copy-muted/50"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    ></path>
  </svg>
);

export default function PortfolioPricingPage() {
  return (
    <ProjectDetails
      title="Portfolio Pricing Engine"
      subtitle="Risk-optimized pricing framework for energy trading portfolios"
      image="/images/financial-analytics.jpg"
      industry="Energy"
      client="Confidential Utility Partner"
      tags={[
        "Python",
        "Streamlit",
        "Statistical Modeling",
        "Financial Risk",
        "Energy Forecasting",
        "Portfolio Optimization",
        "VaR",
        "ES",
        "Simulation",
      ]}
    >
      <div className="space-y-10">
        {" "}
        {/* Increased spacing */}
        {/* Introduction Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-white/90">
              Developed a modular and portfolio-aware pricing engine for a
              leading energy provider. This tool integrates risk-adjusted
              pricing strategies and supports real-time scenario testing for
              energy tenders.
            </p>
          </div>
        </section>
        {/* The Challenge Section */}
        <section className="bg-surface-muted/70 rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                Traditional industrial-scale energy contract pricing often lacks
                portfolio context, is reactive, and manually intensive. Key
                difficulties included:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <span className="text-accent">•</span>
                  </div>
                  <span>
                    Quantifying financial risk across dynamic, interconnected
                    portfolios.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <span className="text-accent">•</span>
                  </div>
                  <span>
                    Balancing competitive pricing with adequate risk-adjusted
                    margins.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-accent/10 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
                    <span className="text-accent">•</span>
                  </div>
                  <span>
                    Modeling complex interdependencies between existing and
                    future contracts.
                  </span>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              {/* Placeholder for a potential graphic or image related to the challenge */}
              <div className="bg-surface-muted rounded-lg p-4 aspect-video flex items-center justify-center">
                <LargeDollarSign />
              </div>
            </div>
          </div>
        </section>
        {/* What I Delivered Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">
            What I Delivered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-muted rounded-lg p-6 shadow-sm border border-white/10 space-y-3">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-accent/10 p-2 rounded-full">
                  <Layers />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Simulation Framework Design
                </h3>
              </div>
              <p className="text-copy-muted text-sm">
                Designed and built a simulation framework to test how pricing
                decisions impact risk across evolving energy portfolios.
              </p>
            </div>
            <div className="bg-surface-muted rounded-lg p-6 shadow-sm border border-white/10 space-y-3">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-accent/10 p-2 rounded-full">
                  <GitMerge />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Risk Metric Integration
                </h3>
              </div>
              <p className="text-copy-muted text-sm">
                Integrated key financial risk metrics (Value at Risk and
                Expected Shortfall) directly into the pricing logic to better
                quantify uncertainty.
              </p>
            </div>
            <div className="bg-surface-muted rounded-lg p-6 shadow-sm border border-white/10 space-y-3">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-accent/10 p-2 rounded-full">
                  <Activity />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Interactive Analysis App
                </h3>
              </div>
              <p className="text-copy-muted text-sm">
                Developed a Streamlit-based application allowing analysts to
                interactively explore, compare, and visualize different pricing
                strategies.
              </p>
            </div>
            <div className="bg-surface-muted rounded-lg p-6 shadow-sm border border-white/10 space-y-3">
              <div className="flex items-center space-x-3 mb-2">
                <div className="bg-accent/10 p-2 rounded-full">
                  <CheckCircle />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Strategic Input
                </h3>
              </div>
              <p className="text-copy-muted text-sm">
                Contributed to the strategic planning for a next-generation
                pricing engine as part of a broader transformation initiative.
              </p>
            </div>
          </div>
        </section>
        {/* Key Innovations Section */}
        <section className="bg-surface-muted/70 rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Key Innovations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="bg-accent/10 p-1.5 rounded-full">
                  <Layers />
                </div>
                <h3 className="font-semibold text-white">
                  Portfolio-Aware Modeling
                </h3>
              </div>
              <p className="text-sm text-copy-muted pl-8">
                New pricing accurately reflects the current and projected risk
                exposure of the entire contract portfolio.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="bg-accent/10 p-1.5 rounded-full">
                  <Zap />
                </div>
                <h3 className="font-semibold text-white">
                  Flexible Strategy Evaluation
                </h3>
              </div>
              <p className="text-sm text-copy-muted pl-8">
                Enabled dynamic switching between various pricing strategies.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="bg-accent/10 p-1.5 rounded-full">
                  <Activity />
                </div>
                <h3 className="font-semibold text-white">
                  Scenario-Based Testing
                </h3>
              </div>
              <p className="text-sm text-copy-muted pl-8">
                Forecasted performance and risk implications across hundreds of
                simulated market conditions.
              </p>
            </div>
          </div>
        </section>
        {/* Methodological Exploration Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">
            Methodological Exploration
          </h2>
          <p className="mb-6 prose prose-lg max-w-none">
            To build a robust pricing engine, we rigorously evaluated different
            modeling techniques, balancing computational speed with analytical
            depth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-muted/70 rounded-xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-accent/10 p-2 rounded-full">
                  <BarChart2 />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Statistical Approaches
                </h3>
              </div>
              <p className="text-copy-muted">
                Leveraged historical data analysis and established statistical
                risk models (like VaR/ES). This provided rapid baseline risk
                profiling and efficient calculation for standard scenarios.
              </p>
            </div>
            <div className="bg-surface-muted/70 rounded-xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-accent/10 p-2 rounded-full">
                  <Cpu />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Monte Carlo Simulations
                </h3>
              </div>
              <p className="text-copy-muted">
                Employed extensive simulations to model complex portfolio
                interactions and forecast outcomes under thousands of potential
                market conditions. This approach excelled at capturing
                non-linear effects and tail risks.
              </p>
            </div>
          </div>
        </section>
        {/* VaR and ES Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
            Key Risk Concepts: VaR & ES (CVaR)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-muted/70 rounded-xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-accent/10 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                  <span className="text-accent font-bold">VaR</span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Value at Risk (VaR)
                </h3>
              </div>
              <p className="text-copy-muted">
                VaR estimates the maximum potential loss for the portfolio over
                a specific time horizon at a given confidence level (e.g., 95%
                or 99%). It answers: "What's the most I can expect to lose under
                normal market conditions?"
              </p>
              <p className="text-copy-muted">
                While useful, VaR doesn't capture the severity of losses beyond
                its threshold.
              </p>
            </div>
            <div className="bg-surface-muted/70 rounded-xl p-6 border border-white/10 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-accent/10 rounded-full h-10 w-10 flex items-center justify-center shrink-0">
                  <span className="text-accent font-bold">ES</span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Expected Shortfall (ES / CVaR)
                </h3>
              </div>
              <p className="text-copy-muted">
                ES, or Conditional Value at Risk (CVaR), measures the average
                loss expected when the VaR threshold is breached. It answers:
                "If things go really bad (beyond the VaR level), what's the
                average loss I can expect?"
              </p>
              <p className="text-copy-muted">
                ES provides a more comprehensive view of tail risk, crucial for
                managing extreme events in volatile energy markets.
              </p>
            </div>
          </div>
          <p className="mt-6 prose prose-lg max-w-none">
            Integrating both VaR and ES into the pricing engine allowed for a
            nuanced understanding of potential downside risks, enabling the
            development of pricing strategies that were both competitive and
            robust against adverse market movements.
          </p>
        </section>
        {/* Business Impact Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
            Business Impact & Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-muted/70 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">
                Key Metrics Achieved
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                {" "}
                {/* Changed to 3 columns */}
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-3">
                    <span className="text-2xl font-bold">95%</span>
                  </div>
                  <p className="text-sm font-medium text-white/90">
                    Speed Increase
                  </p>
                  <p className="text-xs text-copy-muted">in Pricing Time</p>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-3">
                    <span className="text-2xl font-bold">20%</span>{" "}
                    {/* Updated */}
                  </div>
                  <p className="text-sm font-medium text-white/90">
                    Target Reduction
                  </p>
                  <p className="text-xs text-copy-muted">in Portfolio Risk</p>
                </div>
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-3">
                    <span className="text-2xl font-bold">10x</span>{" "}
                    {/* Updated */}
                  </div>
                  <p className="text-sm font-medium text-white/90">Growth</p>
                  <p className="text-xs text-copy-muted">in tested scenarios</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Strategic Value Delivered
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  {" "}
                  {/* Use items-start for alignment */}
                  <div className="rounded-full bg-accent/10 h-10 w-10 flex items-center justify-center mr-4 shrink-0 mt-0.5">
                    <DollarSign />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">
                      Enhanced Risk Visibility
                    </h4>
                    <p className="text-copy-muted text-sm">
                      Provided clearer insights into portfolio risk, supporting
                      strategic hedging and informed tender pricing decisions.
                    </p>{" "}
                    {/* Updated text */}
                  </div>
                </div>
                <div className="flex items-start">
                  {" "}
                  {/* Use items-start for alignment */}
                  <div className="rounded-full bg-accent/10 h-10 w-10 flex items-center justify-center mr-4 shrink-0 mt-0.5">
                    <Zap />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">
                      Improved Decision Agility
                    </h4>
                    <p className="text-copy-muted text-sm">
                      Enabled faster, data-driven pricing adjustments in
                      response to changing market conditions and portfolio
                      structures.
                    </p>{" "}
                    {/* Updated text */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProjectDetails>
  );
}
