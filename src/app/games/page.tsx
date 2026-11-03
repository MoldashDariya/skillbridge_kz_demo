import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GamesSection } from "@/components/sections/GamesSection";

export const metadata = {
  title: "Карьерные игры — SkillBridge KZ",
  description:
    "Короткие карьерные игры помогают лучше понять свои интересы, навыки и готовность к собеседованию.",
};

export default function GamesCataloguePage() {
  return (
    <div>
      <Header />
      <main>
        <GamesSection />
      </main>
      <Footer />
    </div>
  );
}
