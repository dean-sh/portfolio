import Image from "next/image";
import { ProjectDetails } from "@/components/ProjectDetails";
export const metadata = {
  title: "EV Driver Behaviour Simulator | Dean Shabi",
  description:
    "Agent-based modelling for EV charging patterns and flexibility insights.",
};

export default function EVSimulatorPage() {
  return (
    <ProjectDetails
      title="EV Driver Behaviour Simulator 🚗⚡️"
      subtitle="Agent-based modelling for EV charging patterns and flexibility insights"
      image="/images/ev-simulator.jpg"
      industry="Energy / Simulation / Data Science"
      client="Energy Company (Technical Exercise)"
      tags={[
        "Python",
        "Streamlit",
        "Pandas",
        "Plotly",
        "Agent-Based Modeling",
        "Simulation",
        "Time Series Analysis",
        "Data Visualization",
      ]}
      liveUrl="https://ev-sim.streamlit.app/"
      githubUrl="https://github.com/dean-sh/ev-sim"
    >
      <div className="space-y-12">
        {/* Project Overview Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-white/90 mb-4">
              Developed a modular, agent-based simulator to model heterogeneous
              electric vehicle (EV) charging behaviours across diverse driver
              populations.
            </p>
            <p>
              This system generates detailed individual agent traces and
              aggregate population statistics, culminating in an interactive
              Streamlit dashboard for real-time simulation execution and results
              exploration. The project delivers a flexible, reproducible
              environment focused on both individual-level traces (plug-in
              times, state-of-charge) and population-level insights (load
              flexibility, SoC distributions) – providing valuable data for
              energy companies and grid operators planning for EV integration.
            </p>
          </div>
        </section>

        {/* Interactive Dashboard Section */}
        <section className="bg-surface-muted/70 rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Interactive Dashboard & Demo
          </h2>

          {/* Links and Setup Instructions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-accent mb-3">
                Try it Live
              </h3>
              <p className="mb-4 text-sm">
                Run simulations and explore results instantly in the web-based
                dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://ev-sim.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-accent/90 hover:bg-accent text-white px-4 py-2 rounded-md transition-colors whitespace-nowrap"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                  Launch Live Demo
                </a>
                <a
                  href="https://github.com/dean-sh/ev-sim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-surface hover:bg-surface/80 text-white px-4 py-2 rounded-md transition-colors whitespace-nowrap"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-accent mb-3">
                Run Locally
              </h3>
              <div className="bg-surface/70 p-4 rounded-md font-mono text-xs overflow-x-auto">
                <code>
                  # Install dependencies
                  <br />
                  brew install uv && uv venv && source .venv/bin/activate && uv
                  sync
                  <br />
                  <br />
                  # Launch the UI
                  <br />
                  streamlit run dashboard.py
                </code>
              </div>
            </div>
          </div>

          {/* Dashboard Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-muted rounded-lg p-5 shadow-md">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Configurable Parameters
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Adjust population size (10–1000 agents)</li>
                <li>Set simulation duration (1–30 days)</li>
                <li>Control random seed for reproducibility</li>
                <li>Select specific agent traces to inspect</li>
                <li>Override default configuration settings</li>
              </ul>
            </div>
            <div className="bg-surface-muted rounded-lg p-5 shadow-md">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Real-time Visualizations
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Population-level metrics and KPIs</li>
                <li>Individual agent state traces (SoC, plug status)</li>
                <li>Flexibility potential analysis</li>
                <li>Aggregate charging load patterns (Plotly)</li>
                <li>Event distributions (plug times, durations)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
            The Challenge
          </h2>
          <p className="mb-6 text-lg">
            Modeling the complexity of EV charging behavior requires addressing
            several key challenges:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-muted/80 rounded-lg p-5 shadow-md border border-white/10 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Driver Heterogeneity
              </h3>
              <p className="text-sm">
                Modeling diverse driver needs based on archetypes (commuters,
                high mileage, etc.) with varying schedules, driving patterns,
                battery sizes, and charger types.
              </p>
            </div>
            <div className="bg-surface-muted/80 rounded-lg p-5 shadow-md border border-white/10 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Behavioural Stochasticity
              </h3>
              <p className="text-sm">
                Incorporating realistic randomness in daily driving distances,
                plug-in timing, and the probability of skipping charging
                sessions.
              </p>
            </div>
            <div className="bg-surface-muted/80 rounded-lg p-5 shadow-md border border-white/10 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Realism vs. Simplicity
              </h3>
              <p className="text-sm">
                Balancing detailed behavioural modeling (like charging taper,
                target SoC variance) with a computationally efficient and
                understandable simulation core.
              </p>
            </div>
            <div className="bg-surface-muted/80 rounded-lg p-5 shadow-md border border-white/10 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Insight Accessibility
              </h3>
              <p className="text-sm">
                Providing a non-technical, interactive way to run scenarios,
                visualize emergent population behaviour, and inspect individual
                agent states without needing to code.
              </p>
            </div>
          </div>
        </section>

        {/* Simulation Approach Section */}
        <section className="bg-surface-muted/70 rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Simulation Approach
          </h2>

          {/* Simulation Flow Sub-section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-accent mb-4">
              Simulation Workflow
            </h3>
            <p className="mb-4 text-sm">
              The simulation progresses step-by-step, updating each agent based
              on its models:
            </p>

            <ol className="list-decimal pl-5 space-y-2 text-sm mb-6">
              <li>
                <strong>Configuration & Initialization:</strong> Load
                parameters, create agents based on archetypes.
              </li>
              <li>
                <strong>Time-Stepped Processing:</strong> Advance simulation
                time incrementally.
              </li>
              <li>
                <strong>Agent Behavior Updates:</strong> Process scheduling,
                driving, charging models per agent.
              </li>
              <li>
                <strong>Event & Data Logging:</strong> Record state changes,
                events, stats for analysis.
              </li>
              <li>
                <strong>Results Generation:</strong> Compile outputs (load
                profiles, flexibility metrics).
              </li>
            </ol>

            <div className="aspect-auto relative rounded-lg overflow-hidden bg-surface-muted p-4 text-center mt-6">
              <div className="bg-surface/60 p-5 rounded-lg shadow-inner border border-white/10">
                <h3 className="font-medium text-base mb-3 text-white">
                  Process Flow Diagram
                </h3>
                <Image
                  src="/images/ev-sim-chart.jpg"
                  alt="EV Simulator Process Flow"
                  width={900}
                  height={600}
                  className="rounded-md shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Design Decisions Sub-section */}
          <div>
            <h3 className="text-xl font-semibold text-accent mb-4">
              Key Design Decisions
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-muted/80 rounded-lg p-4 shadow-md border border-white/10">
                <h4 className="text-base font-semibold text-white mb-2">
                  Daily Driving Energy Model
                </h4>
                <p className="text-sm">
                  Calculates total daily energy need per agent (based on
                  archetype, scaled, randomized) instead of individual trips,
                  simplifying the model while retaining variability.
                </p>
              </div>
              <div className="bg-surface-muted/80 rounded-lg p-4 shadow-md border border-white/10">
                <h4 className="text-base font-semibold text-white mb-2">
                  Stochastic Charging Behavior
                </h4>
                <p className="text-sm">
                  Agents follow schedules but may skip charging
                  probabilistically. SoC tapering and target SoC variance add
                  realism.
                </p>
              </div>
              <div className="bg-surface-muted/80 rounded-lg p-4 shadow-md border border-white/10">
                <h4 className="text-base font-semibold text-white mb-2">
                  Modularity Focus
                </h4>
                <p className="text-sm">
                  Prioritized separation of concerns (scheduling, driving,
                  charging) for clarity, testability, and easier modification.
                </p>
              </div>
              <div className="bg-surface-muted/80 rounded-lg p-4 shadow-md border border-white/10">
                <h4 className="text-base font-semibold text-white mb-2">
                  Scope Prioritization
                </h4>
                <p className="text-sm">
                  Focused on behavioral richness over grid physics (no network
                  constraints/tariffs) for a pure Python implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Outcomes Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
            Key Outcomes
          </h2>
          <p className="mb-6 text-lg">
            This project delivered several valuable outcomes for understanding
            EV charging behavior:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Interactive Scenario Testing",
                text: "Enabled rapid exploration of how different population mixes and behavioural parameters impact aggregate charging load and flexibility via the web dashboard.",
              },
              {
                title: "Granular Behavioural Insights",
                text: "Generated detailed datasets for plug events, population statistics, and individual agent states, allowing deep dives into behaviours and model validation.",
              },
              {
                title: "Quantified Flexibility Potential",
                text: "Provided metrics on the average flexibility window per session and the percentage of sessions offering potential for demand shifting.",
              },
              {
                title: "Balanced Realism & Usability",
                text: "Achieved a balance between behavior realism, computational efficiency, and user-friendly operation valuable for diverse stakeholders.",
              },
              {
                title: "Open Source Contribution",
                text: "Released the codebase as open-source, allowing others to build upon the framework for research and applications.",
              },
              {
                title: "Extensible Framework",
                text: "Delivered a modular Python codebase suitable for further development (e.g., adding price responsivity, grid interactions).",
              },
            ].map((outcome, index) => (
              <div key={index} className="flex">
                <div className="bg-accent/10 rounded-full h-10 w-10 flex items-center justify-center mr-4 shrink-0 mt-1">
                  <span className="text-xl text-accent">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {outcome.title}
                  </h3>
                  <p className="text-copy-muted text-sm">{outcome.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Extensibility Section */}
        <section className="bg-surface-muted/70 rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">
            Future Directions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-muted rounded-lg p-5 shadow-md">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Current Extensibility Points
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Add new driver archetypes via CSV data</li>
                <li>Integrate tariff optimization logic</li>
                <li>Scale simulation using Dask/Ray</li>
                <li>Modify behavioral models independently</li>
                <li>
                  Adjust core parameters in <code>config.py</code>
                </li>
              </ul>
            </div>
            <div className="bg-surface-muted rounded-lg p-5 shadow-md">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Potential Enhancements
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>More sophisticated driving models (traffic, routing)</li>
                <li>
                  Advanced charging physics (degradation, thermal effects)
                </li>
                <li>Grid interaction modeling (constraints, V2G)</li>
                <li>Dynamic price responsivity / Range anxiety logic</li>
                <li>Integration with real-world travel survey data</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </ProjectDetails>
  );
}
