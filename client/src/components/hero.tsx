import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Accelerating <span className="text-accent">Innovation</span> & Entrepreneurship
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              We deliver comprehensive startup-focused solutions: accelerators, workshops, bootcamps, research, and consultancy to transform your entrepreneurial vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-accent text-white hover:bg-yellow-500 text-lg font-semibold px-8 py-4"
                onClick={() => scrollToSection('contact')}
              >
                Start Your Journey
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-semibold px-8 py-4"
                onClick={() => scrollToSection('about')}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Startup workspace collaboration" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
