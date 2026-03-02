import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { href: "#about", label: "О компании" },
    { href: "#catalog", label: "Каталог" },
    { href: "#advantages", label: "Преимущества" },
    { href: "#cases", label: "Кейсы" },
    { href: "#delivery", label: "Доставка" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B0E14]/95 backdrop-blur-md border-b border-amber-500/20 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img src="https://cdn.poehali.dev/projects/7b30ec8d-5902-4dca-9290-03555585c418/bucket/4607f76c-d87d-44d3-917f-b72784471b8e.png" alt="Станкогид" className="h-10 w-auto" />
          <div>
            <span className="font-oswald font-bold text-white text-lg tracking-widest" style={{ fontFamily: 'Oswald, sans-serif' }}>СТАНКОГИД</span>
            <div className="text-amber-500/60 text-[9px] tracking-[0.25em] font-mono -mt-1">ПРОМЫШЛЕННОЕ ОБОРУДОВАНИЕ</div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className="text-sm text-gray-400 hover:text-amber-400 transition-colors tracking-wide uppercase font-medium">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:+79198598935"
             className="hidden md:flex items-center gap-2 text-amber-400 font-mono text-sm font-medium">
            <Icon name="Phone" size={14} />
            +7 919 859-89-35
          </a>
          <a href="https://t.me/Stankogid_tg" target="_blank" rel="noopener noreferrer"
             className="hidden md:block bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold px-5 py-2 transition-colors tracking-wide">
            Запрос КП
          </a>
          <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#0B0E14] border-t border-amber-500/20 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
               className="text-gray-300 hover:text-amber-400 uppercase text-sm tracking-wider">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden tech-grid scanlines">
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/7b30ec8d-5902-4dca-9290-03555585c418/bucket/78f8aa04-ea4d-4cba-81b7-74c9ae3b9c43.png"
          alt="Промышленные ножницы Станкогид"
          className="w-full h-full object-contain object-right opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E14] via-[#0B0E14]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-500 to-transparent opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up delay-100">
            <div className="h-px w-10 bg-amber-500" />
            <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-mono">ООО Станкогид</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-none mb-6 animate-fade-in-up delay-200"
              style={{ fontFamily: 'Oswald, sans-serif' }}>
            ПРОМЫШЛЕННЫЕ<br />
            <span className="text-amber-400">НОЖНИЦЫ</span><br />
            И ПРЕСС-НОЖНИЦЫ
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed animate-fade-in-up delay-300">
            Производство листовых ножниц кривошипных, гильотинных и комбинированных пресс-ножниц. Более <strong className="text-white">60 моделей</strong> для любых задач металлообработки.
          </p>

          <div className="flex flex-wrap gap-4 mb-14 animate-fade-in-up delay-400">
            <a href="#catalog"
               className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 text-sm tracking-wider uppercase transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              Смотреть каталог
            </a>
            <a href="https://t.me/Stankogid_tg" target="_blank" rel="noopener noreferrer"
               className="border border-amber-500/50 hover:border-amber-400 text-amber-400 hover:text-amber-300 font-bold px-8 py-4 text-sm tracking-wider uppercase transition-all">
              Запросить КП
            </a>
          </div>

          <div className="flex flex-wrap gap-8 animate-fade-in-up delay-500">
            {[
              { n: "60+", label: "Моделей" },
              { n: "20", label: "Лет на рынке" },
              { n: "98+", label: "Регионов поставок" },
              { n: "12", label: "Мес. гарантия" },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-amber-400 stat-number">{s.n}</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0E14] to-transparent" />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in delay-600">
        <span className="text-gray-600 text-xs tracking-widest uppercase">Листать</span>
        <Icon name="ChevronDown" size={16} className="text-amber-500/60 animate-bounce" />
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-mono">О компании</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
              НАДЁЖНОСТЬ,<br /><span className="text-amber-400">ПРОВЕРЕННАЯ</span><br />ВРЕМЕНЕМ
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">ООО «Станкогид» — российский производитель промышленных ножниц для листового металла. Мы создаем оборудование, которое установлено на заводах, металлобазах и в заготовительных цехах по всей стране.</p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Наши ножницы установлены на предприятиях машиностроения, судостроения, автомобилестроения и строительной индустрии. Мы обеспечиваем полный цикл — от разработки до пуско-наладки и сервисного обслуживания.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "Award", text: "Сертифицировано по ГОСТ" },
                { icon: "Globe", text: "Поставки в 98+ регионов РФ и СНГ" },
                { icon: "Users", text: "180+ клиентов" },
                { icon: "Settings", text: "За чертежами — 30 лет практики" },
              ].map(i => (
                <div key={i.text} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={i.icon} size={14} className="text-amber-400" />
                  </div>
                  <span className="text-gray-300 text-sm leading-tight">{i.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/7b30ec8d-5902-4dca-9290-03555585c418/bucket/1cc24e9d-cafe-4e85-9755-9e9940cbcbc2.jpeg"
              alt="Производство Станкогид"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 border border-amber-500/20" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-amber-500/10 -z-10" />

            <div className="absolute top-6 left-6 bg-[#0B0E14]/90 backdrop-blur border border-amber-500/30 px-4 py-3">
              <div className="text-amber-400 font-mono text-2xl font-bold">2006</div>
              <div className="text-gray-400 text-xs uppercase tracking-widest">опыт работы с</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
