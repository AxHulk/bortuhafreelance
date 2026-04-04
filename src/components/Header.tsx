import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-nf.png";

const navItems = [
  { label: "Обо мне", href: "/about", isPage: true },
  { label: "Портфолио", href: "/portfolio", isPage: true },
  { label: "Услуги и цены", href: "/services", isPage: true },
  { label: "Этапы работы", href: "/process", isPage: true },
  { label: "Контакты", href: "#contacts" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (item: typeof navItems[0]) => {
    setIsOpen(false);
    if (item.isPage) {
      navigate(item.href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (location.pathname !== "/") {
      navigate("/" + item.href);
      return;
    }
    const el = document.querySelector(item.href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCta = () => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/#contacts");
      return;
    }
    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <img src={logo} alt="Natali Fursa" className="h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item)}
              className="text-sm font-body font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={handleCta}
          className="hidden lg:inline-flex h-10 px-6 items-center rounded-sm border border-primary bg-transparent text-sm font-body font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Обсудить проект
        </button>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Меню"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background border-b border-border">
          <nav className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item)}
                className="text-base font-body font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleCta}
              className="mt-2 h-10 px-6 rounded-sm border border-primary text-sm font-body font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Обсудить проект
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
