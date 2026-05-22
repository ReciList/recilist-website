import { useLanguage } from "@/contexts/LanguageContext";
import logoImg from "@/assets/logo-white.svg";

const Footer = () => {
  const { lang, t } = useLanguage();

  const scrollToHero = () => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#5FD38D] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <button onClick={scrollToHero} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img src={logoImg} alt="ReciList" className="h-16 w-auto translate-y-1" />
            <span className="text-white font-bold text-xl tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              ReciList
            </span>
          </button>
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} ReciList. {t.footer.rights[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

