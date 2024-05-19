import DoctorList from "@/components/DoctorList";
import Hero from "@/components/frontend/Hero";
import TabbedSection from "@/components/frontend/tabbed/TabbedSection";


export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl">
      <Hero/>
      <TabbedSection/>
      <DoctorList/>
    </main>
  );
}
