import DoctorList from "@/components/DoctorList";
import Hero from "@/components/frontend/Hero";
import TabbedSection from "@/components/frontend/tabbed/TabbedSection";


export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl">
      <Hero/>
      <TabbedSection/>
      <DoctorList title="Téléconsultation généraliste"/>
      <DoctorList className="bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16" title="Consultation en présentiel" isInPerson={true}/>
    </main>
  );
}
