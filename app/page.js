import HeroSection from "./components/hero-section";
import Prince2Banner from "./components/prince2-banner";
import TrainingCourses from "./components/training-courses";
import LearningTypes from "./components/learning-types";
import Outcomes from "./components/outcomes";
import FreeDownload from "./components/free-download";
import Testimonials from "./components/testimonials";
import MegaMenu from "./components/navigation-components/mega-menu";

export default function Home() {
  return (
    <main>
      {/* <MegaMenu /> */}
      <HeroSection />
      <TrainingCourses />
      <Prince2Banner />
      <LearningTypes />
      <Outcomes />
      <Testimonials />
      <FreeDownload />
    </main>
  );
}
