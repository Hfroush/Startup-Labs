import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    "Startup Accelerators",
    "Workshops", 
    "Bootcamps",
    "Research",
    "Consultancy"
  ],
  company: [
    "About Us",
    "Our Team",
    "Careers",
    "News", 
    "Partners"
  ],
  resources: [
    "Blog",
    "Case Studies",
    "Whitepapers",
    "Events",
    "Contact"
  ]
};

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Startup Labs Global</h3>
            <p className="text-gray-400 mb-6">
              Accelerating innovation and entrepreneurship worldwide through comprehensive startup support services.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Startup Labs Global. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
