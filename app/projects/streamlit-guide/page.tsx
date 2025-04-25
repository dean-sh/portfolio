import Image from 'next/image';
import { ProjectDetails } from '@/components/ProjectDetails';
import ProjectLayout from '@/components/ProjectLayout';

export const metadata = {
  title: "Streamlit Guide | Dean Shabi",
  description: "Complete guide to developing data apps with Streamlit."
};

export default function StreamlitGuideProject() {
  return (
    <ProjectLayout>
      <ProjectDetails
        title="Streamlit Guide"
        subtitle="Complete guide to developing data apps with Streamlit"
        image="/images/streamlit-guide.jpg"
        industry="Data Science"
        client="Personal Project"
        tags={['Streamlit', 'Python', 'Data Visualization', 'Technical Writing', 'Open Source']}
      >
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4 border-b border-border pb-2">Project Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-primary/90">
                Created a comprehensive guide for developing data applications with Streamlit, showcasing best practices and implementation techniques.
              </p>
              <p>
                The guide covers everything from basic setup to advanced deployment, helping data scientists and developers create professional data apps efficiently.
              </p>
            </div>
          </section>
        </div>
      </ProjectDetails>
    </ProjectLayout>
  );
} 