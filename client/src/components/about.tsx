import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/Reveal";
import CountUp from "@/components/animations/CountUp";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal y={30} duration={0.7}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading Global Innovation Program Design
              </h2>
            </Reveal>
            <Reveal delay={0.2} y={20} duration={0.6}>
              <p className="text-lg text-gray-600 mb-6">
                At Startup Labs Global, we partner with corporations, governments, and institutions worldwide to design and deliver world-class innovation programs. With over a decade of experience across 25+ countries, we've established ourselves as the premier partner for organizations seeking to build thriving innovation ecosystems.
              </p>
            </Reveal>
            <Reveal delay={0.3} y={20} duration={0.6}>
              <p className="text-lg text-gray-600 mb-8">
                Our team of seasoned program designers, innovation experts, and ecosystem builders work together to create customized solutions that drive measurable innovation outcomes for our partners.
              </p>
            </Reveal>
            
            <Reveal delay={0.4} staggerChildren={0.1} className="grid grid-cols-2 gap-8 mb-8">
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  <CountUp to={20} suffix="+" duration={1200} delay={0} />
                </div>
                <div className="text-gray-600">Programs Delivered</div>
              </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  <CountUp to={50} suffix="+" duration={1200} delay={100} />
                </div>
                <div className="text-gray-600">Partner Organizations</div>
              </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  <CountUp to={30} suffix="+" duration={1200} delay={200} />
                </div>
                <div className="text-gray-600">Countries Served</div>
              </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  <CountUp to={750} suffix="+" duration={1200} delay={300} />
                </div>
                <div className="text-gray-600">Startups Supported</div>
              </motion.div>
            </Reveal>

            <Reveal delay={0.6} y={20}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button className="bg-accent text-white hover:bg-yellow-500 font-semibold px-8 py-3">
                  View Our Case Studies
                </Button>
              </motion.div>
            </Reveal>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional team collaboration" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
