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
    title: "Accelerator Program Design",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "We design and deliver custom accelerator programs for corporations, governments, and institutions seeking to foster innovation ecosystems.",
    features: [
      "Custom program architecture",
      "Mentor network development", 
      "End-to-end program management"
    ]
  },
  {
    title: "Workshop Development",
    icon: Users,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Bespoke entrepreneurship workshop series designed for your organization's specific goals and target audience.",
    features: [
      "Customized curriculum design",
      "Expert facilitator training",
      "Scalable delivery models"
    ]
  },
  {
    title: "Innovation Bootcamp Delivery",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Intensive innovation programs designed to drive rapid ideation and prototype development within your organization.",
    features: [
      "Rapid innovation methodologies",
      "Cross-functional team building",
      "Measurable innovation outcomes"
    ]
  },
  {
    title: "Market Research Services",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Comprehensive research and analysis services to inform your innovation strategy and market entry decisions.",
    features: [
      "Startup ecosystem mapping",
      "Innovation trend analysis",
      "Investment landscape research"
    ]
  },
  {
    title: "Strategic Advisory",
    icon: Handshake,
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "Expert consultancy for organizations launching innovation initiatives, venture capital funds, or startup support programs.",
    features: [
      "Innovation strategy development",
      "Program optimization",
      "Partnership facilitation"
    ]
  },
  {
    title: "Corporate Innovation Programs",
    icon: Building,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    description: "End-to-end corporate innovation program development to drive internal entrepreneurship and external partnerships.",
    features: [
      "Corporate venture building",
      "Startup partnership programs",
      "Innovation culture development"
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
            Comprehensive innovation program design and delivery for organizations worldwide
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
