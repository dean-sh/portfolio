import Image from "next/image";
import { ProjectDetails } from "@/components/ProjectDetails";
export const metadata = {
  title: "Robot Failure Detection | Dean Shabi",
  description:
    "Machine learning models to detect and predict robot failures in automotive manufacturing.",
};

export default function RobotFailurePage() {
  return (
    <ProjectDetails
      title="Robot Failure Detection"
      subtitle="AI-powered predictive maintenance for industrial robotics"
      image="/images/robot-failure.jpg"
      industry="Automotive Manufacturing"
      client="Datamole AI"
      tags={[
        "Computer Vision",
        "Anomaly Detection",
        "PyTorch",
        "Time Series Analysis",
        "Signal Processing",
        "IoT",
        "Edge Computing",
        "Docker",
        "Kafka",
        "InfluxDB",
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
              At Datamole AI, I implemented advanced anomaly detection
              algorithms to identify and predict robot failures in automotive
              manufacturing. This system monitors complex robotic systems in
              real-time, detecting subtle patterns that indicate potential
              failures before they occur.
            </p>

            <p>
              Working closely with industry specialists, our team developed
              custom AI solutions that analyzed multivariate sensor data from
              industrial robots to dramatically reduce downtime and maintenance
              costs.
            </p>
          </div>
        </section>

        {/* Technical Approach Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
            Technical Approach
          </h2>
          <p className="mb-6">
            The robot failure detection system involved several technical
            components:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">
                Real-time Data Processing
              </h3>
              <p>
                Pipeline to handle high-frequency multivariate signals from
                robot sensors in real-time.
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
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">
                Anomaly Detection Models
              </h3>
              <p>
                Advanced algorithms using both supervised and unsupervised
                approaches to detect deviations from normal operation.
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">
                Feature Extraction
              </h3>
              <p>
                Time series feature extraction techniques to identify subtle
                patterns preceding failures in complex sensor data.
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-accent mb-2">
                Alert System
              </h3>
              <p>
                Automated alert system with configurable thresholds for
                different failure types and severity levels.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p>
              The system employed a hybrid approach combining statistical
              methods, deep learning, and domain knowledge to achieve high
              accuracy in industrial environments with complex noise patterns.
            </p>
          </div>
        </section>

        {/* Implementation Challenges Section */}
        <section className="bg-surface-muted/70 rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">
            Implementation Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-muted rounded-lg p-5 shadow-md">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Noisy Data
              </h3>
              <p>
                Working with noisy, high-dimensional sensor data from industrial
                environments required sophisticated filtering techniques.
              </p>
            </div>

            <div className="bg-surface-muted rounded-lg p-5 shadow-md">
              <h3 className="text-lg font-semibold text-accent mb-3">
                False Positives Balance
              </h3>
              <p>
                Balancing false positives (unnecessary maintenance) with false
                negatives (missed failures) to optimize reliability.
              </p>
            </div>

            <div className="bg-surface-muted rounded-lg p-5 shadow-md">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Model Generalization
              </h3>
              <p>
                Developing models that could generalize across different robot
                types and configurations in varied manufacturing environments.
              </p>
            </div>

            <div className="bg-surface-muted rounded-lg p-5 shadow-md">
              <h3 className="text-lg font-semibold text-accent mb-3">
                Interpretable Results
              </h3>
              <p>
                Creating interpretable results that maintenance teams could act
                upon without requiring data science expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Business Impact Section */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">
            Business Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <div className="bg-accent/10 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                <span className="text-2xl text-accent">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Reduced Downtime</h3>
                <p className="text-copy-muted">
                  Unplanned downtime in automotive manufacturing lines was
                  reduced by over 35%.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-accent/10 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                <span className="text-2xl text-accent">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Predictive Maintenance
                </h3>
                <p className="text-copy-muted">
                  Identified maintenance needs before catastrophic failures
                  occurred, preventing costly production stoppages.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-accent/10 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                <span className="text-2xl text-accent">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Cost Reduction</h3>
                <p className="text-copy-muted">
                  Decreased maintenance costs by enabling targeted, preventive
                  interventions instead of major repairs.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-accent/10 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                <span className="text-2xl text-accent">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Equipment Lifespan
                </h3>
                <p className="text-copy-muted">
                  Extended robot equipment lifespan through early intervention
                  and optimized maintenance schedules.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="bg-accent/10 rounded-full h-12 w-12 flex items-center justify-center mr-4 shrink-0">
                <span className="text-2xl text-accent">5</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Production Quality
                </h3>
                <p className="text-copy-muted">
                  Improved production throughput and quality by ensuring
                  consistent robot performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* System Architecture Section */}
        <section className="bg-surface-muted/70 rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">
            System Architecture
          </h2>
          <div className="aspect-video relative rounded-lg overflow-hidden bg-surface/60 flex items-center justify-center">
            <div className="text-center p-8 w-full">
              <div className="bg-surface-muted/85 rounded-xl p-4 mb-6 mx-auto max-w-sm">
                <h3 className="font-medium">Sensor Data Collection</h3>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-6 h-6 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5v14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12l-7 7-7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-surface-muted rounded-lg p-3">
                  <h4 className="text-sm font-medium">Signal Processing</h4>
                </div>
                <div className="bg-surface-muted rounded-lg p-3">
                  <h4 className="text-sm font-medium">Feature Extraction</h4>
                </div>
                <div className="bg-surface-muted rounded-lg p-3">
                  <h4 className="text-sm font-medium">Normalization</h4>
                </div>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-6 h-6 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5v14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12l-7 7-7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="bg-accent/10 rounded-xl p-4 mb-6 mx-auto max-w-sm border border-accent/20">
                <h3 className="font-medium">Anomaly Detection Models</h3>
              </div>

              <div className="flex justify-center">
                <svg
                  className="w-6 h-6 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5v14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 12l-7 7-7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-muted rounded-lg p-3">
                  <h4 className="text-sm font-medium">Alert System</h4>
                </div>
                <div className="bg-surface-muted rounded-lg p-3">
                  <h4 className="text-sm font-medium">Maintenance Interface</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProjectDetails>
  );
}
