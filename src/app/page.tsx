import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[600px] space-y-4 pb-16">
      <NavBar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </main>
  );
}
