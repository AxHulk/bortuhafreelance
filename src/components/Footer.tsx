import logo from "@/assets/logo-nf.png";

const navItems = [
  { label: "Обо мне", href: "#about" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Услуги и цены", href: "#services" },
  { label: "Этапы работы", href: "#workflow" },
  { label: "Контакты", href: "#contacts" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="Natali Fursa" className="h-10 w-auto brightness-0 invert" />
            <p className="font-body text-xs text-background/50">
              Дизайн интерьеров · Симферополь и Крым
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="font-body text-xs text-background/60 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-center md:text-right">
            <p className="font-body text-xs text-background/60">+7 (978) 123-45-67</p>
            <p className="font-body text-xs text-background/60">info@natalifursa.ru</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 text-center">
          <p className="font-body text-xs text-background/40">
            © {new Date().getFullYear()} Natali Fursa. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
