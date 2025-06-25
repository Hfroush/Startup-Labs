import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    company: "CEO, TechFlow Solutions",
    initial: "S",
    quote: "The accelerator program was transformative. We went from idea to $2M in funding in just 6 months. The mentorship and network access were invaluable."
  },
  {
    name: "Marcus Rodriguez", 
    company: "Founder, GreenTech Innovations",
    initial: "M",
    quote: "The research and consultancy services helped us validate our market and refine our business model. We couldn't have succeeded without their expertise."
  },
  {
    name: "Aisha Patel",
    company: "Co-founder, HealthStream", 
    initial: "A",
    quote: "The workshop series gave us the foundational knowledge we needed. From business planning to pitch development, everything was covered expertly."
  }
];

const stats = [
  { value: "95%", label: "Success Rate" },
  { value: "6 Months", label: "Average Time to Market" },
  { value: "3x", label: "Growth Acceleration" }
];

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from entrepreneurs who transformed their visions into successful businesses with our support
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Study Highlights */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
