import { Card, CardContent } from "@/components/ui/card";
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Partner Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from organizations that have partnered with us to build successful innovation programs and drive ecosystem growth
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
