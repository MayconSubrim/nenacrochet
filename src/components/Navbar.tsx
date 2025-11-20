import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Scissors } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY;

    window.requestAnimationFrame(() => {
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    });

    setIsOpen(false);
  };

  const menuItems = [
    { label: "Produtos", id: "products" },
    { label: "Benefícios", id: "benefits" },
    { label: "Sobre a Artesã", id: "about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E8D5C4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group transition-transform hover:scale-105"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A88A] to-[#D4A574] flex items-center justify-center shadow-md">
              <Scissors className="w-4 h-4 text-white" />
            </div>
            <span className="text-[#5D4E3C] tracking-wide">NenaCrochet</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#8B7355] hover:text-[#5D4E3C] transition-colors duration-300 relative group"
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9A88A] 
        group-hover:w-full transition-[width] duration-500 ease-out"
                />
              </button>
            ))}
            <Button
              className="bg-[#C9A88A] hover:bg-[#B8977A] text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all duration-300"
              asChild
            >
              <a
                href={`https://wa.me/11933647274?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20tapete%20personalizado.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#8B7355] hover:bg-[#F5EDE5] transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#E8D5C4] shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-[#8B7355] hover:bg-[#F5EDE5] hover:text-[#5D4E3C] rounded-xl transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full bg-[#C9A88A] hover:bg-[#B8977A] text-white rounded-full shadow-md"
              asChild
            >
              <a
                href={`https://wa.me/11933647274?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20tapete%20personalizado.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
