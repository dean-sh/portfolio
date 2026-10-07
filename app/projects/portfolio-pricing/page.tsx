import Image from"next/image";
import { ProjectDetails } from"@/components/ProjectDetails";
export const metadata = {
 title:"Portfolio pricing engine | Dean Shabi",
 description:
"A pricing engine that prices energy tenders against the current and projected risk of the whole contract portfolio.",
};

// Inline Feather icons
const CheckCircle = () => (
 <svg
 className="w-5 h-5 text-foreground"
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
 className="w-5 h-5 text-foreground"
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
const GitMerge = () => (
 <svg
 className="w-5 h-5 text-foreground"
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
 className="w-5 h-5 text-foreground"
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
 className="w-24 h-24 text-foreground/60"
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
 className="w-5 h-5 text-foreground"
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
 className="w-5 h-5 text-foreground"
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
 className="w-16 h-16 text-muted-foreground/50"
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
 title="Portfolio pricing engine"
 subtitle="Prices energy tenders against the current and projected risk of the whole contract portfolio."
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
 {""}
 {/* Increased spacing */}
 {/* Introduction Section */}
 <section>
 <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
 Overview
 </h2>
 <div className="prose prose-lg max-w-none">
 <p className="lead text-xl text-foreground">
 I built a modular pricing engine for an energy provider.
 Analysts can swap pricing strategies and test them against
 hundreds of simulated market conditions in real time.
 </p>
 </div>
 </section>
 {/* The Challenge Section */}
 <section className="bg-muted rounded-xl p-6 border border-border">
 <h2 className="text-2xl font-bold text-foreground mb-4">The challenge</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
 <div>
 <p className="mb-4">
 Large industrial energy contracts are often priced by hand, in
 reaction to the market, with no view of the rest of the
 portfolio. The hard parts:
 </p>
 <ul className="space-y-3">
 <li className="flex items-start">
 <div className="bg-muted rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
 <span className="text-foreground">•</span>
 </div>
 <span>
 Measuring financial risk across a portfolio whose contracts
 change and interact.
 </span>
 </li>
 <li className="flex items-start">
 <div className="bg-muted rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
 <span className="text-foreground">•</span>
 </div>
 <span>
 Pricing competitively while keeping risk-adjusted margins.
 </span>
 </li>
 <li className="flex items-start">
 <div className="bg-muted rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 shrink-0">
 <span className="text-foreground">•</span>
 </div>
 <span>
 Modeling how existing and future contracts depend on each
 other.
 </span>
 </li>
 </ul>
 </div>
 <div className="hidden md:block">
 {/* Placeholder for a potential graphic or image related to the challenge */}
 <div className="bg-muted rounded-lg p-4 aspect-video flex items-center justify-center">
 <LargeDollarSign />
 </div>
 </div>
 </div>
 </section>
 {/* What I Delivered Section */}
 <section>
 <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
 What I delivered
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="bg-muted rounded-lg p-6 shadow-sm border border-border space-y-3">
 <div className="flex items-center space-x-3 mb-2">
 <div className="bg-muted p-2 rounded-full">
 <Layers />
 </div>
 <h3 className="text-lg font-semibold text-foreground">
 Simulation framework
 </h3>
 </div>
 <p className="text-muted-foreground text-sm">
 I designed and built a framework that tests how each pricing
 decision changes risk as the portfolio evolves.
 </p>
 </div>
 <div className="bg-muted rounded-lg p-6 shadow-sm border border-border space-y-3">
 <div className="flex items-center space-x-3 mb-2">
 <div className="bg-muted p-2 rounded-full">
 <GitMerge />
 </div>
 <h3 className="text-lg font-semibold text-foreground">
 Risk metrics in the price
 </h3>
 </div>
 <p className="text-muted-foreground text-sm">
 Value at Risk and Expected Shortfall feed straight into the
 pricing logic.
 </p>
 </div>
 <div className="bg-muted rounded-lg p-6 shadow-sm border border-border space-y-3">
 <div className="flex items-center space-x-3 mb-2">
 <div className="bg-muted p-2 rounded-full">
 <Activity />
 </div>
 <h3 className="text-lg font-semibold text-foreground">
 Analyst app
 </h3>
 </div>
 <p className="text-muted-foreground text-sm">
 A Streamlit app where analysts explore, compare and visualize
 pricing strategies.
 </p>
 </div>
 <div className="bg-muted rounded-lg p-6 shadow-sm border border-border space-y-3">
 <div className="flex items-center space-x-3 mb-2">
 <div className="bg-muted p-2 rounded-full">
 <CheckCircle />
 </div>
 <h3 className="text-lg font-semibold text-foreground">
 Next-generation planning
 </h3>
 </div>
 <p className="text-muted-foreground text-sm">
 I helped plan the next-generation pricing engine, part of a
 wider transformation program.
 </p>
 </div>
 </div>
 </section>
 {/* Methodological Exploration Section */}
 <section>
 <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
 Two ways to model risk
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="bg-muted rounded-xl p-6 border border-border space-y-4">
 <div className="flex items-center space-x-3">
 <div className="bg-muted p-2 rounded-full">
 <BarChart2 />
 </div>
 <h3 className="text-xl font-semibold text-foreground">
 Statistical models
 </h3>
 </div>
 <p className="text-muted-foreground">
 Historical data and standard VaR and ES models. Fast baseline
 risk profiles for standard scenarios.
 </p>
 </div>
 <div className="bg-muted rounded-xl p-6 border border-border space-y-4">
 <div className="flex items-center space-x-3">
 <div className="bg-muted p-2 rounded-full">
 <Cpu />
 </div>
 <h3 className="text-xl font-semibold text-foreground">
 Monte Carlo simulation
 </h3>
 </div>
 <p className="text-muted-foreground">
 Thousands of simulated market conditions show how contracts in
 the portfolio interact. Better at non-linear effects and tail
 risk.
 </p>
 </div>
 </div>
 </section>
 {/* VaR and ES Section */}
 <section>
 <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
 VaR and ES in plain terms
 </h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="bg-muted rounded-xl p-6 border border-border space-y-4">
 <div className="flex items-center space-x-3">
 <div className="bg-muted rounded-full h-10 w-10 flex items-center justify-center shrink-0">
 <span className="text-foreground font-bold">VaR</span>
 </div>
 <h3 className="text-xl font-semibold text-foreground">
 Value at Risk
 </h3>
 </div>
 <p className="text-muted-foreground">
 The largest expected loss over a set period at a confidence
 level such as 95% or 99%. It ignores losses past that line.
 </p>
 </div>
 <div className="bg-muted rounded-xl p-6 border border-border space-y-4">
 <div className="flex items-center space-x-3">
 <div className="bg-muted rounded-full h-10 w-10 flex items-center justify-center shrink-0">
 <span className="text-foreground font-bold">ES</span>
 </div>
 <h3 className="text-xl font-semibold text-foreground">
 Expected Shortfall
 </h3>
 </div>
 <p className="text-muted-foreground">
 The average loss beyond the VaR line, also called CVaR. It
 shows the tail risk that volatile energy markets carry.
 </p>
 </div>
 </div>
 <p className="mt-6 prose prose-lg max-w-none">
 Pricing with both keeps a quote competitive without ignoring
 the tail.
 </p>
 </section>
 {/* Business Impact Section */}
 <section>
 <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
 Results
 </h2>
 <div className="bg-muted rounded-xl p-6 border border-border">
 <div className="grid grid-cols-3 gap-4 text-center">
 <div>
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted text-foreground mb-3">
 <span className="text-2xl font-bold">95%</span>
 </div>
 <p className="text-sm font-medium text-foreground">
 Speed increase
 </p>
 <p className="text-xs text-muted-foreground">in pricing time</p>
 </div>
 <div>
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted text-foreground mb-3">
 <span className="text-2xl font-bold">20%</span>
 </div>
 <p className="text-sm font-medium text-foreground">
 Target reduction
 </p>
 <p className="text-xs text-muted-foreground">in portfolio risk</p>
 </div>
 <div>
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted text-foreground mb-3">
 <span className="text-2xl font-bold">10x</span>
 </div>
 <p className="text-sm font-medium text-foreground">Growth</p>
 <p className="text-xs text-muted-foreground">in tested scenarios</p>
 </div>
 </div>
 </div>
 </section>
 </div>
 </ProjectDetails>
 );
}
