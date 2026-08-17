import Header from "./components/Header";
import Hero from "./components/Hero";
import Guide from "./components/Guide";
import HurricanePrep from "./components/HurricanePrep";
import CostCalculator from "./components/CostCalculator";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Guide />
      <HurricanePrep />
      <CostCalculator />
      <Footer />
    </main>
  );
}
