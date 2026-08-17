import Header from "./components/Header";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import Guide from "./components/Guide";
import HurricanePrep from "./components/HurricanePrep";
import CostCalculator from "./components/CostCalculator";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <Guide />
      <HurricanePrep />
      <CostCalculator />
      <Footer />
    </main>
  );
}
