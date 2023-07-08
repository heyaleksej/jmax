import HeadSection from "../components/HeadSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import ClientsSection from "../components/ClientsSection";
import PlanSection from "../components/PlanSection";
import GuaranteeSection from "../components/GuaranteeSection";
import FaqSection from "../components/FaqSection";
import TeamSection from "../components/TeamSection";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeadSection />
      <SecondSection />
      <ThirdSection />
      <ClientsSection />
      <PlanSection />
      <GuaranteeSection />
      <FaqSection />
      <TeamSection />
    </main>
  );
}
