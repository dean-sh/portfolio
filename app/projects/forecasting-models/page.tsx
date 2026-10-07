import Image from"next/image";
import { ProjectDetails } from"@/components/ProjectDetails";
export const metadata = {
 title:"Energy forecasting models | Dean Shabi",
 description:
"Load, generation and price forecasting models for UK energy-tech firms. MAPE improved by over 30% across hundreds of sites.",
};

export default function ForecastingModelsPage() {
 return (
 <ProjectDetails
 title="Energy forecasting models"
 subtitle="Load, generation and price forecasts for UK energy-tech firms. MAPE improved by over 30% across hundreds of sites."
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
 <h2 className="text-2xl font-bold text-foreground mb-4 border-b border-border pb-2">
 Overview
 </h2>
 <div className="prose prose-lg max-w-none">
 <p className="lead text-xl text-foreground">
 I led the development of these long-term forecasting models.
 They power product features, inform trading decisions and cut
 balancing costs. MAPE, the mean absolute percentage error,
 improved by{" "}
 <strong className="text-energy-400">over 30%</strong>.
 </p>
 </div>
 </section>

 {/* Challenge Section */}
 <section className="card rounded-xl bg-muted p-6 border-border">
 <h2 className="text-2xl font-bold text-foreground mb-6">The challenge</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 {/* Card 2: Data Integration */}
 <div className="card rounded-lg bg-muted p-4 border-border space-y-2">
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
 <h3 className="font-semibold text-foreground text-base">
 Many data sources
 </h3>
 </div>
 <p className="text-sm text-muted-foreground pl-8">
 Each forecast combines high-dimensional weather, market and asset
 data.
 </p>
 </div>
 {/* Card 3: Scalability */}
 <div className="card rounded-lg bg-muted p-4 border-border space-y-2">
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
 <h3 className="font-semibold text-foreground text-base">
 Scale
 </h3>
 </div>
 <p className="text-sm text-muted-foreground pl-8">
 The models had to cover hundreds to thousands of unique sites
 efficiently.
 </p>
 </div>
 {/* Card 4: Granularity */}
 <div className="card rounded-lg bg-muted p-4 border-border space-y-2">
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
 <h3 className="font-semibold text-foreground text-base">
 Sub-hourly detail
 </h3>
 </div>
 <p className="text-sm text-muted-foreground pl-8">
 Operations needed accurate forecasts below the hour.
 </p>
 </div>
 </div>
 </section>

 {/* Methods Section */}
 <section>
 <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
 How I built them
 </h2>

 {/* Model Types Grid */}
 <h3 className="text-xl font-semibold text-foreground mb-4">
 Model types
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
 {/* Existing cards slightly restyled */}
 <div className="card rounded-lg bg-muted p-5 border-border transition-shadow">
 <h3 className="text-lg font-semibold text-energy-400 mb-2">
 Load forecasting
 </h3>
 <p className="text-sm text-muted-foreground">
 Captures time dependencies and outside drivers across different
 customer segments.
 </p>
 </div>
 <div className="card rounded-lg bg-muted p-5 border-border transition-shadow">
 <h3 className="text-lg font-semibold text-energy-400 mb-2">
 Solar PV generation
 </h3>
 <p className="text-sm text-muted-foreground">
 Combines weather, panel physics and site geometry.
 </p>
 </div>
 <div className="card rounded-lg bg-muted p-5 border-border transition-shadow">
 <h3 className="text-lg font-semibold text-energy-400 mb-2">
 Battery state
 </h3>
 <p className="text-sm text-muted-foreground">
 Predicts degradation and state of charge to get more out of
 storage assets.
 </p>
 </div>
 <div className="card rounded-lg bg-muted p-5 border-border transition-shadow">
 <h3 className="text-lg font-semibold text-energy-400 mb-2">
 Price forecasting
 </h3>
 <p className="text-sm text-muted-foreground">
 Predicts sub-hourly market prices from market data and volatility
 models.
 </p>
 </div>
 </div>

 {/* Methodologies & Innovations Grid */}
 <h3 className="text-xl font-semibold text-foreground mb-4">
 Techniques
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 {/* Innovation 1: Transfer Learning */}
 <div className="card rounded-lg bg-muted p-4 border-border space-y-2">
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
 <h3 className="font-semibold text-foreground text-base">
 Transfer learning
 </h3>
 </div>
 <p className="text-sm text-muted-foreground pl-8">
 Networks reuse what they learn across sites and tasks. That
 raised accuracy and cut training time, most for data-poor sites.
 </p>
 </div>
 {/* Innovation 2: Global Models */}
 <div className="card rounded-lg bg-muted p-4 border-border space-y-2">
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
 <h3 className="font-semibold text-foreground text-base">
 Global models
 </h3>
 </div>
 <p className="text-sm text-muted-foreground pl-8">
 One model learns shared patterns from hundreds of time series at
 once, which helps it generalize.
 </p>
 </div>
 {/* Innovation 3: MLflow */}
 <div className="card rounded-lg bg-muted p-4 border-border space-y-2">
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
 <h3 className="font-semibold text-foreground text-base">
 MLflow
 </h3>
 </div>
 <p className="text-sm text-muted-foreground pl-8">
 Tracks experiments, versions models and stores results, so every
 run can be reproduced.
 </p>
 </div>
 {/* Innovation 4: Hybrid Models */}
 <div className="card rounded-lg bg-muted p-4 border-border space-y-2">
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
 <h3 className="font-semibold text-foreground text-base">
 Hybrid models
 </h3>
 </div>
 <p className="text-sm text-muted-foreground pl-8">
 Combine model classes, such as statistical and ML models, in one
 forecast.
 </p>
 </div>
 {/* Technique 5: Diverse Models Evaluated */}
 <div className="card rounded-lg bg-muted p-4 border-border space-y-2">
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
 <h3 className="font-semibold text-foreground text-base">
 Model comparison
 </h3>
 </div>
 <p className="text-sm text-muted-foreground pl-8">
 I evaluated ARIMA, LGBM ensembles and RNN, LSTM and Transformer
 networks.
 </p>
 </div>
 </div>
 </section>

 {/* Technical Diagram Section */}
 <section className="card rounded-xl bg-muted p-6 border-border">
 <h2 className="text-2xl font-bold text-foreground mb-4">
 Model architecture
 </h2>
 <div className="relative rounded-lg overflow-hidden bg-muted flex items-center justify-center py-8">
 <div className="text-center p-8">
 <div className="inline-block mx-auto mb-6 p-4 border-2 border-energy-600 rounded-xl">
 <h3 className="font-medium">Data processing pipeline</h3>
 </div>
 <div className="flex justify-center items-center gap-4 flex-wrap">
 <div className="flex flex-col items-center">
 <div className="w-32 h-24 border border-border rounded p-2 flex items-center justify-center bg-muted">
 <p className="text-sm text-center">Weather data</p>
 </div>
 <div className="h-8 flex items-center">
 <span className="text-energy-400">▼</span>
 </div>
 </div>

 <div className="flex flex-col items-center">
 <div className="w-32 h-24 border border-border rounded p-2 flex items-center justify-center bg-muted">
 <p className="text-sm text-center">
 Historical energy data
 </p>
 </div>
 <div className="h-8 flex items-center">
 <span className="text-energy-400">▼</span>
 </div>
 </div>

 <div className="flex flex-col items-center">
 <div className="w-32 h-24 border border-border rounded p-2 flex items-center justify-center bg-muted">
 <p className="text-sm text-center">Market signals</p>
 </div>
 <div className="h-8 flex items-center">
 <span className="text-energy-400">▼</span>
 </div>
 </div>
 </div>

 <div className="inline-block mx-auto my-2 p-4 border-2 border-energy-600/70 rounded-xl bg-energy-600/10 w-64">
 <h3 className="font-medium">ML prediction engine</h3>
 </div>

 <div className="h-8 flex items-center justify-center">
 <span className="text-energy-400">▼</span>
 </div>

 <div className="inline-block mx-auto p-4 border-2 border-primary/70 rounded-xl">
 <h3 className="font-medium">API and integration layer</h3>
 </div>
 </div>
 </div>
 </section>

 {/* Results Section */}
 <section>
 <h2 className="text-2xl font-bold text-foreground mb-6 border-b border-border pb-2">
 Results
 </h2>

 {/* Highlight Metric */}
 <div className="card rounded-xl bg-energy-600/10 p-6 border-energy-600/30 mb-8 text-center">
 <h3 className="text-lg font-semibold text-energy-400 mb-2">
 Headline result
 </h3>
 <div className="text-5xl font-bold text-energy-400 mb-2">
 &gt;30%
 </div>
 <p className="text-foreground font-medium">
 MAPE improvement vs. benchmark
 </p>
 <p className="text-sm text-muted-foreground mt-1">
 Load and generation, aggregated across hundreds of production
 sites
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div className="flex items-start">
 <div className="bg-energy-600/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0 mt-1">
 <span className="text-xl font-bold text-energy-400">✓</span>
 </div>
 <div>
 <h3 className="font-semibold text-lg mb-1">
 Product features
 </h3>
 <p className="text-muted-foreground text-sm">
 The forecasts power core features in customer-facing energy
 management platforms with thousands of users.
 </p>
 </div>
 </div>

 <div className="flex items-start">
 <div className="bg-energy-600/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0 mt-1">
 <span className="text-xl font-bold text-energy-400">✓</span>
 </div>
 <div>
 <h3 className="font-semibold text-lg mb-1">
 Lower balancing costs
 </h3>
 <p className="text-muted-foreground text-sm">
 Sub-hourly forecasts cut energy balancing costs and penalties.
 The estimated saving runs to millions annually.
 </p>
 </div>
 </div>
 </div>
 </section>
 </div>
 </ProjectDetails>
 );
}
