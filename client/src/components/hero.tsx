import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/Reveal";
import { motion } from "framer-motion";

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
            <Reveal delay={0} y={40} duration={0.8}>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Partner with Global <span className="text-accent">Innovation</span> Leaders
              </h1>
            </Reveal>
            <Reveal delay={0.2} y={30} duration={0.8}>
              <p className="text-xl mb-8 text-blue-100">
                We design and deliver world-class accelerators, workshops, bootcamps, research, and consultancy programs for organizations seeking to drive innovation and entrepreneurship.
              </p>
            </Reveal>
            <Reveal delay={0.4} y={20} duration={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    size="lg"
                    className="bg-accent text-white hover:bg-yellow-500 text-lg font-semibold px-8 py-4"
                    onClick={() => scrollToSection('contact')}
                  >
                    Partner With Us
                  </Button>
                </motion.div>
                
              </div>
            </Reveal>
          </div>
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Startup workspace collaboration" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
