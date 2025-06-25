import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Rocket, 
  Users, 
  Zap, 
  TrendingUp, 
  Handshake, 
  Building,
  Check
} from "lucide-react";

const services = [
  {
    title: "Startup Accelerators",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Intensive programs designed to rapidly scale your startup with mentorship, funding opportunities, and strategic guidance.",
    features: [
      "12-week intensive program",
      "Expert mentor network", 
      "Investor connections"
    ]
  },
  {
    title: "Entrepreneurship Workshops",
    icon: Users,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Interactive workshops covering essential entrepreneurial skills from business planning to pitch development.",
    features: [
      "Hands-on learning approach",
      "Industry expert facilitators",
      "Networking opportunities"
    ]
  },
  {
    title: "Innovation Bootcamps",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Intensive immersive programs that transform ideas into viable business models through rapid prototyping.",
    features: [
      "5-day intensive format",
      "Rapid prototyping methods",
      "Real-world application"
    ]
  },
  {
    title: "Research & Analysis",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Comprehensive market research and business analysis to inform strategic decisions and validate opportunities.",
    features: [
      "Market opportunity analysis",
      "Competitive landscape mapping",
      "Data-driven insights"
    ]
  },
  {
    title: "Strategic Consultancy",
    icon: Handshake,
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Personalized strategic guidance and expert consultancy to navigate complex business challenges and opportunities.",
    features: [
      "Tailored strategic advice",
      "Expert problem-solving",
      "Ongoing support"
    ]
  },
  {
    title: "Corporate Innovation",
    icon: Building,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Help established companies foster innovation culture and develop new business models for competitive advantage.",
    features: [
      "Innovation framework design",
      "Intrapreneurship programs",
      "Culture transformation"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to accelerate your startup journey from ideation to scale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent className="text-primary text-2xl mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="text-sm text-gray-600 mb-6 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-success mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary text-white hover:bg-secondary">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
