import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Leading Global Innovation Program Design
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Startup Labs Global, we partner with corporations, governments, and institutions worldwide to design and deliver world-class innovation programs. With over a decade of experience across 25+ countries, we've established ourselves as the premier partner for organizations seeking to build thriving innovation ecosystems.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of seasoned program designers, innovation experts, and ecosystem builders work together to create customized solutions that drive measurable innovation outcomes for our partners.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-gray-600">Programs Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Partner Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>

            <Button className="bg-accent text-white hover:bg-yellow-500 font-semibold px-8 py-3">
              View Our Case Studies
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
