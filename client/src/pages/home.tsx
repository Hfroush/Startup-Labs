import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import SuccessStories from "@/components/success-stories";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <SuccessStories />
      <Contact />
      <Footer />
    </div>
  );
}
