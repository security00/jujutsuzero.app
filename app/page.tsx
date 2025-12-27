import Hero from "../components/Hero";
import CodeList from "../components/CodeList";
import FeatureGrid from "../components/FeatureGrid";
import SeoContent from "../components/SeoContent";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <CodeList />
      <FeatureGrid />
      <SeoContent />
    </div>
  );
}
