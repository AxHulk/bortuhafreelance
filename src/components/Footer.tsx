import { Link } from "react-router-dom";
import logo from "@/assets/logo-nf.png";
import socialVk from "@/assets/social-vk.png";
import socialBehance from "@/assets/social-behance.png";

const navItems = [
  { label: "Обо мне", href: "/about" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Услуги и цены", href: "/services" },
  { label: "Нейровизуализация", href: "/ai-viz" },
  { label: "Этапы работы", href: "/process" },
  { label: "Контакты", href: "/contacts" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/">
              <img src={logo} alt="Natali Fursa" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="font-body text-xs text-background/50">
              Дизайн интерьеров · Симферополь и Крым
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://vk.ru/visfursa" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={socialVk} alt="ВКонтакте" className="w-7 h-7 object-contain" />
              </a>
              <a href="https://www.behance.net/bd28e124" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={socialBehance} alt="Behance" className="w-7 h-7 object-contain" />
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="font-body text-xs text-background/60 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="text-center md:text-right">
            <a href="tel:+79785400981" className="font-body text-xs text-background/60 hover:text-primary transition-colors block">
              +7 (978) 540-09-81
            </a>
            <a href="mailto:bortnik.n.n@yandex.ru" className="font-body text-xs text-background/60 hover:text-primary transition-colors block mt-1">
              bortnik.n.n@yandex.ru
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 text-center">
          <p className="font-body text-xs text-background/40">
            © {new Date().getFullYear()} ИП Фурса Наталия Николаевна. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
