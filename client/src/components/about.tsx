import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering the Next Generation of Entrepreneurs
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Startup Labs Global, we've dedicated ourselves to building the entrepreneurial ecosystem of tomorrow. With over a decade of experience and hundreds of successful ventures launched, we understand what it takes to transform innovative ideas into thriving businesses.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of seasoned entrepreneurs, industry experts, and innovation catalysts work together to provide comprehensive support at every stage of the startup journey.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Startups Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">$100M+</div>
                <div className="text-gray-600">Funding Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>

            <Button className="bg-accent text-white hover:bg-yellow-500 font-semibold px-8 py-3">
              Learn About Our Team
            </Button>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team collaboration" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
