import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealItem } from "@/components/animations/Reveal";
import CountUp from "@/components/animations/CountUp";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. James Mitchell",
    company: "Innovation Director, Global Manufacturing Corp",
    initial: "J",
    quote: "Startup Labs Global designed and delivered our corporate accelerator program flawlessly. We've seen a 300% increase in internal innovation projects and secured 5 strategic partnerships with emerging startups."
  },
  {
    name: "Maria Santos", 
    company: "VP Strategy, European Development Bank",
    initial: "M",
    quote: "Their expertise in ecosystem development was invaluable. The innovation bootcamp series they delivered exceeded our expectations and generated 15 new venture opportunities across our portfolio."
  },
  {
    name: "David Park",
    company: "Chief Innovation Officer, City of Singapore", 
    initial: "D",
    quote: "Working with Startup Labs Global transformed our approach to public sector innovation. Their research and program design helped us launch the most successful government innovation initiative in the region."
  }
];

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "3 Months", label: "Average Program Launch" },
  { value: "5x", label: "Innovation ROI Increase" }
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal y={30} duration={0.7}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partner Success Stories</h2>
          </Reveal>
          <Reveal delay={0.2} y={20} duration={0.6}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from organizations that have partnered with us to build successful innovation programs and drive ecosystem growth
            </p>
          </Reveal>
        </div>

        <Reveal 
          delay={0.4} 
          staggerChildren={0.15} 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <RevealItem key={index}>
              <motion.div
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="h-full"
              >
                <Card className="bg-white shadow-lg p-8 h-full">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {testimonial.initial}
                      </motion.div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.company}</div>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">
                      "{testimonial.quote}"
                    </p>
                    <motion.div 
                      className="flex text-accent"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.1 * i, duration: 0.2 }}
                        >
                          <Star className="w-4 h-4 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </RevealItem>
          ))}
        </Reveal>

        {/* Case Study Highlights */}
        <Reveal delay={0.6} y={30} duration={0.8}>
          <motion.div 
            className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Reveal 
              delay={0.3} 
              staggerChildren={0.2} 
              className="grid lg:grid-cols-3 gap-8 items-center"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">
                  <CountUp to={98} suffix="%" duration={1500} delay={0} />
                </div>
                <div className="text-blue-100">Client Satisfaction</div>
              </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">
                  <CountUp to={3} suffix=" Months" duration={1500} delay={200} preserveAspectRatio={true} />
                </div>
                <div className="text-blue-100">Average Program Launch</div>
              </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">
                  <CountUp to={5} suffix="x" duration={1500} delay={400} preserveAspectRatio={true} />
                </div>
                <div className="text-blue-100">Innovation ROI Increase</div>
              </motion.div>
            </Reveal>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
