import Image from"next/image";
import { ProjectDetails } from"@/components/ProjectDetails";
import { Code, BarChart3, CheckCircle } from "lucide-react";

export const metadata = {
 title:"Exempt supply matching | Dean Shabi",
 description:
"A platform that pairs SMEs with local generators under 5 MW and saves approximately £50/MWh in non-commodity costs.",
};

export default function ExemptSupplyMatchingProject() {
 return (
 <ProjectDetails
 title="Exempt supply matching"
 subtitle="Pairing SMEs with local generators under 5 MW to save approximately £50/MWh in non-commodity costs."
 image="/images/equity-copilot.jpg"
 industry="Energy"
 client="Confidential Utility Partner"
 tags={[
"Neural Networks",
"Optimization",
"Graph Algorithms",
"Python",
"PyTorch",
"Energy Trading",
"Match-making",
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
 I built a platform that pairs SMEs with local generators under 5 MW
 and keeps each pair inside Great Britain&apos;s Supplier Exempt Class A
 limits. The matched power skips approximately £50/MWh in
 non-commodity costs.
 </p>

 <div className="bg-muted border border-border rounded-lg p-5">
 <h3 className="text-lg font-semibold text-foreground mb-3">
 How the rules work
 </h3>
 <ul className="list-disc pl-6 space-y-2 text-base">
 <li>
 Supplier Exempt Class A lets a small generator sell power without a
 full supply licence. It must stay below 5 MW overall and send no more
 than 2.5 MW to homes.
 </li>
 <li>
 BSC Modification P442&apos;s February 2025 reforms record these exempt
 volumes separately. That keeps them out of EMR levies, the government
 charges that drive up bills.
 </li>
 <li>
 An accredited Exempt Supply Notification Agent handles the settlement
 admin, so SMEs get cleaner local power without the paperwork.
 </li>
 <li>
 Each match must be documented and reported to regulators, with
 balancing responsibility clearly assigned.
 </li>
 </ul>
 </div>

 <div className="bg-card/55 border border-border rounded-lg p-5 space-y-3">
 <h3 className="text-lg font-semibold text-foreground">
 Where the £50/MWh comes from
 </h3>
 <p className="text-base">
 The biggest non-commodity items on a UK business power bill are policy
 levies, such as the Contracts for Difference Supplier Obligation and
 Capacity Market charges. Together they can add £40 to £60 per MWh in a
 typical settlement year.
 </p>
 <p className="text-base">
 Every exempt MWh avoids those levies. The matched SME keeps the saving,
 and the local generator still gets its agreed strike price.
 </p>
 </div>
 </div>
 </section>

 {/* Results & Metrics Section */}
 <section className="bg-muted rounded-xl p-6 border border-border">
 <h2 className="text-2xl font-bold text-foreground mb-6">Results</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="bg-muted rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 border border-border">
 <div className="mb-4 flex justify-center">
 <div className="rounded-full bg-muted p-3">
 <svg
 className="w-8 h-8 text-foreground"
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
 </div>
 </div>
 <div className="text-3xl md:text-4xl font-bold text-foreground mb-3">
 £50/MWh
 </div>
 <p className="text-muted-foreground font-medium mb-3">Cost savings</p>
 <div className="mt-3 h-2.5 bg-card/60 rounded-full overflow-hidden">
 <div
 className="h-full bg-accent rounded-full"
 style={{ width:"90%" }}
 ></div>
 </div>
 <p className="text-xs mt-2 text-muted-foreground">
 in non-commodity costs
 </p>
 </div>

 <div className="bg-muted rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 border border-border">
 <div className="mb-4 flex justify-center">
 <div className="rounded-full bg-muted p-3">
 <svg
 className="w-8 h-8 text-foreground"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 xmlns="http://www.w3.org/2000/svg"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={2}
 d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
 />
 </svg>
 </div>
 </div>
 <div className="text-3xl md:text-4xl font-bold text-foreground mb-3">
 £3M+
 </div>
 <p className="text-muted-foreground font-medium mb-3">
 Value generated
 </p>
 <div className="mt-3 h-2.5 bg-card/60 rounded-full overflow-hidden">
 <div
 className="h-full bg-accent rounded-full"
 style={{ width:"75%" }}
 ></div>
 </div>
 <p className="text-xs mt-2 text-muted-foreground">
 Revenue stream for SMEs and utilities
 </p>
 </div>

 <div className="bg-muted rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all duration-300 border border-border">
 <div className="mb-4 flex justify-center">
 <div className="rounded-full bg-muted p-3">
 <svg
 className="w-8 h-8 text-foreground"
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
 </div>
 <div className="text-3xl md:text-4xl font-bold text-foreground mb-3">
 60+
 </div>
 <p className="text-muted-foreground font-medium mb-3">
 Successful pairings
 </p>
 <div className="mt-3 h-2.5 bg-card/60 rounded-full overflow-hidden">
 <div
 className="h-full bg-accent rounded-full"
 style={{ width:"85%" }}
 ></div>
 </div>
 <p className="text-xs mt-2 text-muted-foreground">
 35% match success rate
 </p>
 </div>
 </div>

 <div className="mt-8 bg-card/55 rounded-xl p-6 border border-border">
 <div className="flex items-center mb-4">
 <div className="rounded-full bg-muted p-2 mr-3">
 <svg
 className="w-6 h-6 text-foreground"
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
 <h3 className="text-lg font-semibold text-foreground">
 Annual savings for one pairing
 </h3>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
 <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center text-center">
 <div className="text-2xl font-bold text-foreground mb-1">7 GWh</div>
 <p className="text-sm text-muted-foreground">Annual generation</p>
 </div>

 <div className="flex items-center justify-center">
 <div className="bg-muted rounded-lg p-4 flex items-center justify-center">
 <span className="text-xl font-bold text-foreground">×</span>
 </div>
 </div>

 <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center text-center">
 <div className="text-2xl font-bold text-foreground mb-1">
 £50/MWh
 </div>
 <p className="text-sm text-muted-foreground">Savings</p>
 </div>
 </div>

 <div className="flex justify-center items-center my-4">
 <svg
 className="w-6 h-6 text-foreground"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 xmlns="http://www.w3.org/2000/svg"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={2}
 d="M19 14l-7 7m0 0l-7-7m7 7V3"
 />
 </svg>
 </div>

 <div className="bg-muted rounded-lg p-5 flex flex-col items-center justify-center text-center border border-primary/20">
 <div className="text-3xl font-bold text-foreground mb-2">
 £350,000
 </div>
 <p className="text-muted-foreground">Potential annual benefit</p>
 </div>
 </div>
 </section>

 {/* The Challenge Section */}
 <section className="rounded-xl p-6 border border-border bg-muted mb-8">
 <h2 className="text-2xl font-bold text-foreground mb-4">The challenge</h2>
 <p className="mb-4 text-muted-foreground">
 Exempt supply saves money, but each deal is hard to set up.
 </p>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
 <div className="bg-muted rounded-lg p-5 shadow-md">
 <h3 className="text-lg font-semibold text-foreground mb-3">
 Matching
 </h3>
 <p className="text-muted-foreground">
 A viable pair depends on compatibility criteria, load profiles,
 connection points and technical feasibility.
 </p>
 </div>

 <div className="bg-muted rounded-lg p-5 shadow-md">
 <h3 className="text-lg font-semibold text-foreground mb-3">
 Scale
 </h3>
 <p className="text-muted-foreground">
 Checking matches by hand across thousands of sites takes too long
 and misses good pairs.
 </p>
 </div>

 <div className="bg-muted rounded-lg p-5 shadow-md">
 <h3 className="text-lg font-semibold text-foreground mb-3">
 Scattered data
 </h3>
 <p className="text-muted-foreground">
 Generation profiles, consumption records, grid infrastructure and
 regulatory rules all come from different sources.
 </p>
 </div>
 </div>
 </section>

 {/* Solution Overview Section */}
 <section className="rounded-xl p-6 border border-border bg-muted">
 <h2 className="text-2xl font-bold text-foreground mb-4">What I built</h2>
 <p className="mb-4 text-muted-foreground">
 I built the system that finds viable generator-consumer pairs and
 keeps each deal compliant.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
 <div className="bg-muted rounded-lg p-5 shadow-md">
 <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-3">
 <Code className="h-5 w-5 text-foreground" />
 Matching
 </h3>
 <ul className="space-y-2 text-muted-foreground">
 {[
 "A proprietary scoring algorithm that picks the best generator-consumer pairs",
 "Load profiling that lines up generation with consumption",
 "AI consumption forecasting to get the most value from each exemption",
 ].map((item) => (
 <li key={item} className="flex items-start gap-2">
 <div className="min-w-4 mt-1">
 <CheckCircle className="h-4 w-4 text-foreground" />
 </div>
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="bg-muted rounded-lg p-5 shadow-md">
 <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-3">
 <BarChart3 className="h-5 w-5 text-foreground" />
 Compliance and contracts
 </h3>
 <ul className="space-y-2 text-muted-foreground">
 {[
 "Real-time compliance checks that stay current with regulatory updates",
 "Automated contract generation with legal validation",
 ].map((item) => (
 <li key={item} className="flex items-start gap-2">
 <div className="min-w-4 mt-1">
 <CheckCircle className="h-4 w-4 text-foreground" />
 </div>
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </section>

 {/* System Architecture Section */}
 <section className="bg-muted rounded-xl p-6 border border-border">
 <h2 className="text-2xl font-bold text-foreground mb-4">
 System architecture
 </h2>
 <div className="aspect-video relative rounded-lg overflow-hidden bg-card/60 flex items-center justify-center">
 <div className="text-center p-8 w-full">
 <div className="grid grid-cols-3 gap-4 mb-8 relative">
 <div className="bg-muted rounded-xl p-4">
 <h3 className="font-medium mb-2">Data inputs</h3>
 <div className="space-y-2">
 <div className="bg-card/60 rounded-lg p-2 text-sm">
 Consumer profiles
 </div>
 <div className="bg-card/60 rounded-lg p-2 text-sm">
 Generator output
 </div>
 <div className="bg-card/60 rounded-lg p-2 text-sm">
 Location data
 </div>
 </div>
 </div>

 {/* Arrow pointing right */}
 <div className="absolute left-[31%] top-[40%] w-[5%]">
 <svg
 className="w-full text-foreground"
 viewBox="0 0 24 24"
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 >
 <path
 d="M5 12h14m-7-7l7 7-7 7"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 />
 </svg>
 </div>

 <div className="bg-muted rounded-xl p-4">
 <h3 className="font-medium mb-2">Processing layer</h3>
 <div className="space-y-2">
 <div className="bg-card/60 rounded-lg p-2 text-sm">
 Matching algorithm
 </div>
 <div className="bg-card/60 rounded-lg p-2 text-sm">
 Optimization engine
 </div>
 <div className="bg-card/60 rounded-lg p-2 text-sm">
 Forecast models
 </div>
 </div>
 </div>

 {/* Arrow pointing right */}
 <div className="absolute left-[64%] top-[40%] w-[5%]">
 <svg
 className="w-full text-foreground"
 viewBox="0 0 24 24"
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 >
 <path
 d="M5 12h14m-7-7l7 7-7 7"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 />
 </svg>
 </div>

 <div className="bg-muted rounded-xl p-4">
 <h3 className="font-medium mb-2">Output systems</h3>
 <div className="space-y-2">
 <div className="bg-card/60 rounded-lg p-2 text-sm">
 Match reports
 </div>
 <div className="bg-card/60 rounded-lg p-2 text-sm">
 Regulatory docs
 </div>
 <div className="bg-card/60 rounded-lg p-2 text-sm">
 Billing integration
 </div>
 </div>
 </div>
 </div>

 {/* Arrow pointing up in a loop */}
 <div className="relative w-24 h-12 mx-auto mb-4">
 <svg
 className="w-full text-foreground"
 viewBox="0 0 24 24"
 fill="none"
 xmlns="http://www.w3.org/2000/svg"
 >
 <path
 d="M3 9l4-4 4 4M7 5v14"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 />
 <path
 d="M21 15l-4 4-4-4M17 19V5"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 />
 </svg>
 </div>

 <div className="bg-muted rounded-xl p-4 mb-6 mx-auto max-w-md border border-primary/20">
 <h3 className="font-medium">Continuous optimization loop</h3>
 </div>
 </div>
 </div>
 </section>

 {/* Case Study Section */}
 <section className="bg-muted rounded-xl p-6 border border-border">
 <h2 className="text-2xl font-bold text-foreground mb-4">
 Worked example
 </h2>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
 <div>
 <h3 className="text-lg font-semibold text-foreground mb-3">
 The pair
 </h3>
 <div className="space-y-4">
 <div className="flex items-start">
 <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center mr-3 shrink-0">
 <svg
 className="w-4 h-4 text-foreground"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 xmlns="http://www.w3.org/2000/svg"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={2}
 d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
 />
 </svg>
 </div>
 <div>
 <h4 className="font-medium">Solar farm</h4>
 <p className="text-sm text-muted-foreground">
 ~4.8 MW of capacity, generating 7 GWh a year
 </p>
 </div>
 </div>

 <div className="flex items-start">
 <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center mr-3 shrink-0">
 <svg
 className="w-4 h-4 text-foreground"
 fill="none"
 stroke="currentColor"
 viewBox="0 0 24 24"
 xmlns="http://www.w3.org/2000/svg"
 >
 <path
 strokeLinecap="round"
 strokeLinejoin="round"
 strokeWidth={2}
 d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
 />
 </svg>
 </div>
 <div>
 <h4 className="font-medium">Business complex</h4>
 <p className="text-sm text-muted-foreground">
 20-25 SMEs with different energy needs
 </p>
 </div>
 </div>
 </div>

 </div>

 <div className="bg-card/50 rounded-lg p-5">
 <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
 <svg
 className="w-5 h-5 mr-2 text-foreground"
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
 Other benefits
 </h3>
 <ul className="space-y-3">
 <li className="flex items-start bg-muted rounded-lg p-3 hover:bg-muted transition-colors duration-200">
 <div className="bg-muted rounded-full h-7 w-7 flex items-center justify-center mr-3 shrink-0">
 <span className="text-foreground">✓</span>
 </div>
 <div className="flex-1 min-w-0">
 <span className="font-medium text-foreground block text-sm">
 Local use
 </span>
 <p className="text-xs text-muted-foreground mt-1 break-words">
 Up to 85% of the generated power is used locally
 </p>
 </div>
 </li>
 <li className="flex items-start bg-muted rounded-lg p-3 hover:bg-muted transition-colors duration-200">
 <div className="bg-muted rounded-full h-7 w-7 flex items-center justify-center mr-3 shrink-0">
 <span className="text-foreground">✓</span>
 </div>
 <div className="flex-1 min-w-0">
 <span className="font-medium text-foreground block text-sm">
 Steadier revenue
 </span>
 <p className="text-xs text-muted-foreground mt-1 break-words">
 More stable revenue for renewable generators
 </p>
 </div>
 </li>
 <li className="flex items-start bg-muted rounded-lg p-3 hover:bg-muted transition-colors duration-200">
 <div className="bg-muted rounded-full h-7 w-7 flex items-center justify-center mr-3 shrink-0">
 <span className="text-foreground">✓</span>
 </div>
 <div className="flex-1 min-w-0">
 <span className="font-medium text-foreground block text-sm">
 Lower emissions
 </span>
 <p className="text-xs text-muted-foreground mt-1 break-words">
 A carbon cut equal to taking 150-200 cars off the road
 </p>
 </div>
 </li>
 </ul>
 </div>
 </div>
 </section>
 </div>
 </ProjectDetails>
 );
}
