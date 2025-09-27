import { Card, CardContent } from "@/components/ui/card";
import { Reveal, RevealItem } from "@/components/animations/Reveal";
import CountUp from "@/components/animations/CountUp";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Andrea De Giorgio",
    company: "CEO & Co-founder, eWorking",
    initial: "AD",
    quote: "After a few workshops things are beginning to fall into place. We've had a few good team sessions over the last few days and have made progress with stakeholder mapping and logic modelling for product, marketing & sales"
  },
  {
    name: "Dan Rosenberg", 
    company: "Founder, LinkyThinks",
    initial: "DR",
    quote: "We received HUGE value - we had a full team/board meeting yesterday to see how we can implement changes to our product and marketing strategy using the stakeholder mapping and research questioning"
  },
  {
    name: "Arum Tufan",
    company: "Founder, Happy Student", 
    initial: "AT",
    quote: "UCL EdTech Labs is the bridge between UCL and the EdTech ecosystem in London, Europe and beyond. The accelerator has helped us reach many key individuals, and it has been the root reason for our growth for the past year."
  },
  {
    name: "Arthur Vincent",
    company: "Founder/Director, Planet Citizens",
    initial: "AV",
    quote: "I learned the value of feedback, and the importance of compiling and using research data to guide decision-making."
  },
  {
    name: "Clare Daly",
    company: "Developer of Potential, Dynamigo",
    initial: "CD",
    quote: "The programme taught me how to apply research methods, use the innovation spiral effectively, and structure a compelling value proposition."
  },
  {
    name: "Kate Bodrova",
    company: "Co-Founder and CEO, Amazy.uk",
    initial: "KB",
    quote: "I now approach product development with a research-backed, data-driven mindset—using evidence to reinforce value and inform the development of new features."
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
