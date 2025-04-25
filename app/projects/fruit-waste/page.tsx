import FruitWasteContent from './FruitWasteContent';
import ProjectLayout from '@/components/ProjectLayout';

export const metadata = {
  title: "Reducing Fruit Waste with ML | Dean Shabi",
  description: "Computer vision models to detect fruit ripeness and reduce waste in the food supply chain."
};

export default function FruitWastePage() {
  return (
    <ProjectLayout>
      <FruitWasteContent />
    </ProjectLayout>
  );
} 