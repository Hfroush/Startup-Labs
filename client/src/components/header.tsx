import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoPath from "@assets/STARTUP LABS LOGO 2024_1750864096095.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src={logoPath} 
                alt="Startup Labs Global" 
                className="h-10 w-auto"
              />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('success-stories')}
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                Success Stories
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-white hover:bg-secondary"
              >
                Partner With Us
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('success-stories')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                Success Stories
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-2 bg-primary text-white hover:bg-secondary"
              >
                Partner With Us
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
