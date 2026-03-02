import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

// ─── DATA ────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    id: "krivoshipnye",
    label: "Кривошипные листовые",
    short: "Кривошипные",
    icon: "Scissors",
    description: "Ножницы с кривошипным приводом для точной резки листового металла",
    models: [
      { name: "НД3312", thickness: "до 4 мм", width: "1250 мм", strokes: "40 ход/мин", weight: "3 200 кг" },
      { name: "НД3316Г", thickness: "до 6 мм", width: "1600 мм", strokes: "35 ход/мин", weight: "5 100 кг" },
      { name: "НК3416", thickness: "до 6 мм", width: "1600 мм", strokes: "40 ход/мин", weight: "4 800 кг" },
      { name: "НД3316", thickness: "до 6 мм", width: "1600 мм", strokes: "35 ход/мин", weight: "4 900 кг" },
      { name: "НД3318Г", thickness: "до 8 мм", width: "1800 мм", strokes: "30 ход/мин", weight: "6 500 кг" },
      { name: "НК3418", thickness: "до 8 мм", width: "1800 мм", strokes: "35 ход/мин", weight: "6 200 кг" },
      { name: "НК3418А", thickness: "до 8 мм", width: "1800 мм", strokes: "35 ход/мин", weight: "6 300 кг" },
      { name: "НД3314Г", thickness: "до 4 мм", width: "1400 мм", strokes: "40 ход/мин", weight: "3 800 кг" },
      { name: "НК3414", thickness: "до 4 мм", width: "1400 мм", strokes: "40 ход/мин", weight: "3 600 кг" },
      { name: "НД3318Д", thickness: "до 8 мм", width: "1800 мм", strokes: "28 ход/мин", weight: "7 000 кг" },
    ],
  },
  {
    id: "gilotinnye",
    label: "Гильотинные листовые",
    short: "Гильотинные",
    icon: "Zap",
    description: "Гильотинные ножницы для прямолинейной резки листов высокой точности",
    models: [
      { name: "НБ3314", thickness: "до 4 мм", width: "1400 мм", strokes: "20 ход/мин", weight: "4 500 кг" },
      { name: "НБ3312", thickness: "до 4 мм", width: "1250 мм", strokes: "22 ход/мин", weight: "4 000 кг" },
      { name: "НД3416Г", thickness: "до 6 мм", width: "1600 мм", strokes: "18 ход/мин", weight: "6 000 кг" },
      { name: "НД3418Д", thickness: "до 8 мм", width: "1800 мм", strokes: "16 ход/мин", weight: "8 200 кг" },
      { name: "НД3414Г", thickness: "до 4 мм", width: "1400 мм", strokes: "20 ход/мин", weight: "5 200 кг" },
      { name: "НД3418Г", thickness: "до 8 мм", width: "1800 мм", strokes: "16 ход/мин", weight: "7 800 кг" },
      { name: "Н3421", thickness: "до 10 мм", width: "2000 мм", strokes: "14 ход/мин", weight: "9 500 кг" },
      { name: "НД3414", thickness: "до 4 мм", width: "1400 мм", strokes: "20 ход/мин", weight: "5 000 кг" },
      { name: "Н3418А", thickness: "до 8 мм", width: "1800 мм", strokes: "16 ход/мин", weight: "7 500 кг" },
      { name: "Н3418Г", thickness: "до 8 мм", width: "1800 мм", strokes: "16 ход/мин", weight: "7 600 кг" },
      { name: "Н3718Б", thickness: "до 8 мм", width: "1800 мм", strokes: "18 ход/мин", weight: "7 200 кг" },
      { name: "НД3416Д", thickness: "до 6 мм", width: "1600 мм", strokes: "18 ход/мин", weight: "6 400 кг" },
    ],
  },
  {
    id: "gilotinnye2",
    label: "Гильотинные НА/НГ серии",
    short: "НА/НГ серии",
    icon: "Layers",
    description: "Расширенная серия гильотинных ножниц с автоматизированными опциями",
    models: [
      { name: "НА3218", thickness: "до 8 мм", width: "1800 мм", strokes: "12 ход/мин", weight: "9 000 кг" },
      { name: "НА3222", thickness: "до 10 мм", width: "2200 мм", strokes: "10 ход/мин", weight: "11 000 кг" },
      { name: "НА3223", thickness: "до 10 мм", width: "2300 мм", strokes: "10 ход/мин", weight: "11 500 кг" },
      { name: "НА2324", thickness: "до 10 мм", width: "2400 мм", strokes: "10 ход/мин", weight: "12 000 кг" },
      { name: "НА3225", thickness: "до 10 мм", width: "2500 мм", strokes: "8 ход/мин", weight: "12 800 кг" },
      { name: "АКНА3218", thickness: "до 8 мм", width: "1800 мм", strokes: "12 ход/мин", weight: "9 200 кг" },
      { name: "АКНА3222", thickness: "до 10 мм", width: "2200 мм", strokes: "10 ход/мин", weight: "11 200 кг" },
      { name: "АКНА3223", thickness: "до 10 мм", width: "2300 мм", strokes: "10 ход/мин", weight: "11 800 кг" },
      { name: "АКНА3224", thickness: "до 10 мм", width: "2400 мм", strokes: "10 ход/мин", weight: "12 200 кг" },
      { name: "АКНА3225", thickness: "до 10 мм", width: "2500 мм", strokes: "8 ход/мин", weight: "13 000 кг" },
      { name: "СТД9", thickness: "до 6 мм", width: "1600 мм", strokes: "14 ход/мин", weight: "6 800 кг" },
      { name: "СТД9А", thickness: "до 6 мм", width: "1600 мм", strokes: "14 ход/мин", weight: "6 900 кг" },
      { name: "СТД9М", thickness: "до 6 мм", width: "1600 мм", strokes: "14 ход/мин", weight: "7 000 кг" },
      { name: "СТД9АН", thickness: "до 6 мм", width: "1600 мм", strokes: "14 ход/мин", weight: "7 100 кг" },
      { name: "НГ13", thickness: "до 13 мм", width: "2000 мм", strokes: "8 ход/мин", weight: "15 000 кг" },
      { name: "НГ16", thickness: "до 16 мм", width: "2000 мм", strokes: "6 ход/мин", weight: "18 000 кг" },
      { name: "НГ18", thickness: "до 18 мм", width: "2000 мм", strokes: "5 ход/мин", weight: "20 000 кг" },
      { name: "НГ20", thickness: "до 20 мм", width: "2000 мм", strokes: "4 ход/мин", weight: "23 000 кг" },
      { name: "Н478", thickness: "до 8 мм", width: "2500 мм", strokes: "10 ход/мин", weight: "14 000 кг" },
      { name: "Н478М", thickness: "до 8 мм", width: "2500 мм", strokes: "10 ход/мин", weight: "14 200 кг" },
      { name: "Н478.01", thickness: "до 8 мм", width: "2500 мм", strokes: "10 ход/мин", weight: "14 100 кг" },
      { name: "Н3118", thickness: "до 8 мм", width: "1800 мм", strokes: "12 ход/мин", weight: "9 500 кг" },
      { name: "Н3121", thickness: "до 10 мм", width: "2100 мм", strokes: "10 ход/мин", weight: "11 000 кг" },
      { name: "Н3121А", thickness: "до 10 мм", width: "2100 мм", strokes: "10 ход/мин", weight: "11 100 кг" },
      { name: "Н3121.01", thickness: "до 10 мм", width: "2100 мм", strokes: "10 ход/мин", weight: "11 200 кг" },
      { name: "НА3121", thickness: "до 10 мм", width: "2100 мм", strokes: "10 ход/мин", weight: "11 300 кг" },
      { name: "НА3121.01", thickness: "до 10 мм", width: "2100 мм", strokes: "10 ход/мин", weight: "11 400 кг" },
      { name: "НА3221", thickness: "до 10 мм", width: "2200 мм", strokes: "10 ход/мин", weight: "11 600 кг" },
      { name: "НА3221.01", thickness: "до 10 мм", width: "2200 мм", strokes: "10 ход/мин", weight: "11 700 кг" },
    ],
  },
  {
    id: "press-nozhnitsy",
    label: "Пресс-ножницы комбинированные",
    short: "Пресс-ножницы",
    icon: "Settings2",
    description: "Комбинированные пресс-ножницы для резки профилей, уголков и листов",
    models: [
      { name: "НГ5222", thickness: "до 10 мм", width: "до 220 мм", strokes: "20 ход/мин", weight: "2 800 кг" },
      { name: "НГ5222.01", thickness: "до 10 мм", width: "до 220 мм", strokes: "20 ход/мин", weight: "2 850 кг" },
      { name: "НГ5223", thickness: "до 12 мм", width: "до 230 мм", strokes: "18 ход/мин", weight: "3 200 кг" },
      { name: "НГ5223.01", thickness: "до 12 мм", width: "до 230 мм", strokes: "18 ход/мин", weight: "3 250 кг" },
      { name: "НГ5224", thickness: "до 14 мм", width: "до 240 мм", strokes: "16 ход/мин", weight: "3 800 кг" },
      { name: "НГ5224.01", thickness: "до 14 мм", width: "до 240 мм", strokes: "16 ход/мин", weight: "3 850 кг" },
    ],
  },
];

const ADVANTAGES = [
  { icon: "Factory", title: "Собственное производство", text: "Полный цикл изготовления на современном оборудовании с ЧПУ" },
  { icon: "ShieldCheck", title: "Гарантия 24 месяца", text: "На все модели ножниц и запасные части собственного производства" },
  { icon: "Truck", title: "Доставка по России", text: "Собственная логистика и партнёрские транспортные компании" },
  { icon: "Headphones", title: "Техподдержка 24/7", text: "Инженеры-технологи помогут подобрать оборудование и наладить работу" },
  { icon: "FileText", title: "Полная документация", text: "Паспорта, сертификаты, схемы и инструкции по эксплуатации" },
  { icon: "Wrench", title: "Шеф-монтаж", text: "Выезд специалистов для монтажа, пуско-наладки и обучения персонала" },
];

const CASES = [
  {
    company: "Металлобаза «СталькомМ»",
    city: "Москва",
    model: "НГ18",
    task: "Требовалась замена устаревшего оборудования для резки листов толщиной 16-18 мм",
    result: "Производительность выросла на 40%, простои сократились до 2% в месяц",
    year: "2023",
  },
  {
    company: "ООО «ПромТехМаш»",
    city: "Екатеринбург",
    model: "НД3316Г",
    task: "Запуск нового участка резки тонколистовой стали для автомобильной промышленности",
    result: "Вышли на проектную мощность через 3 дня после монтажа, брак — 0,1%",
    year: "2023",
  },
  {
    company: "Завод «ТяжМетПрокат»",
    city: "Новосибирск",
    model: "НГ5224",
    task: "Комплексное оснащение участка заготовительного производства пресс-ножницами",
    result: "Поставлены 4 единицы, сроки окупаемости составили 14 месяцев",
    year: "2024",
  },
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function NavBar() {
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

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden tech-grid scanlines">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/7b30ec8d-5902-4dca-9290-03555585c418/bucket/78f8aa04-ea4d-4cba-81b7-74c9ae3b9c43.png"
          alt="Промышленные ножницы Станкогид"
          className="w-full h-full object-contain object-right opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E14] via-[#0B0E14]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent" />
      </div>

      {/* Decorative vertical line */}
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
            <a href="#contacts"
               className="border border-amber-500/50 hover:border-amber-400 text-amber-400 hover:text-amber-300 font-bold px-8 py-4 text-sm tracking-wider uppercase transition-all">
              Запросить КП
            </a>
          </div>

          {/* Stats */}
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0E14] to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in delay-600">
        <span className="text-gray-600 text-xs tracking-widest uppercase">Листать</span>
        <Icon name="ChevronDown" size={16} className="text-amber-500/60 animate-bounce" />
      </div>
    </section>
  );
}

function AboutSection() {
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
              src="https://cdn.poehali.dev/projects/7b30ec8d-5902-4dca-9290-03555585c418/files/554984f4-fcd2-43f0-9016-2a2f81836a47.jpg"
              alt="Производство Станкогид"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 border border-amber-500/20" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-amber-500/10 -z-10" />

            {/* Badge */}
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

function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedModel, setSelectedModel] = useState<null | typeof CATEGORIES[0]["models"][0] & { categoryName: string }>(null);

  const cat = CATEGORIES[activeCategory];

  return (
    <section id="catalog" className="py-24 bg-[#080B10] relative">
      <div className="absolute inset-0 tech-grid opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-500" />
          <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-mono">Продукция</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
            КАТАЛОГ<br /><span className="text-amber-400">ОБОРУДОВАНИЯ</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xs">
            Выберите категорию и модель для просмотра технических характеристик
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium border transition-all tracking-wide uppercase ${
                activeCategory === i
                  ? "bg-amber-500/15 border-amber-500 text-amber-400"
                  : "border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300"
              }`}
            >
              <Icon name={c.icon} size={14} />
              {c.short}
            </button>
          ))}
        </div>

        {/* Category description */}
        <div className="accent-border-left mb-8">
          <p className="text-gray-400 text-sm">{cat.description}</p>
        </div>

        {/* Models grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {cat.models.map(m => (
            <button
              key={m.name}
              onClick={() => setSelectedModel({ ...m, categoryName: cat.label })}
              className="card-hover bg-[#0F1318] border border-gray-800 p-5 text-left group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="font-mono text-amber-400 font-bold text-lg tracking-wider">{m.name}</div>
                <Icon name="ChevronRight" size={14} className="text-gray-600 group-hover:text-amber-400 transition-colors mt-1" />
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Толщина:</span>
                  <span className="text-gray-300">{m.thickness}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Ширина:</span>
                  <span className="text-gray-300">{m.width}</span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-800 flex items-center gap-1 text-xs text-amber-500/60 group-hover:text-amber-400 transition-colors">
                <Icon name="Info" size={11} />
                <span>Подробнее</span>
              </div>
            </button>
          ))}
        </div>

        {/* Download catalog button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 border border-amber-500/20 bg-amber-500/5">
          <div>
            <div className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>СКАЧАТЬ ПОЛНЫЙ КАТАЛОГ</div>
            <div className="text-gray-500 text-sm">PDF, актуальная редакция 2024 — все технические характеристики</div>
          </div>
          <button className="flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3.5 transition-all whitespace-nowrap hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] text-sm tracking-wider uppercase">
            <Icon name="Download" size={16} />
            Скачать PDF
          </button>
        </div>
      </div>

      {/* Model modal */}
      {selectedModel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedModel(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative bg-[#0F1318] border border-amber-500/30 max-w-lg w-full p-8 shadow-[0_0_60px_rgba(245,158,11,0.15)]"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedModel(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              <Icon name="X" size={18} />
            </button>

            <div className="text-xs text-amber-500/60 font-mono tracking-wider mb-1 uppercase">{selectedModel.categoryName}</div>
            <div className="font-mono text-3xl text-amber-400 font-bold mb-6">{selectedModel.name}</div>

            <div className="space-y-4">
              {[
                { label: "Максимальная толщина листа", value: selectedModel.thickness },
                { label: "Ширина реза", value: selectedModel.width },
                { label: "Число ходов ножа", value: selectedModel.strokes },
                { label: "Масса станка", value: selectedModel.weight },
              ].map(r => (
                <div key={r.label} className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-gray-500 text-sm">{r.label}</span>
                  <span className="text-white font-medium font-mono">{r.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <a href="#contacts"
                 onClick={() => setSelectedModel(null)}
                 className="flex-1 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 text-center text-sm tracking-wider uppercase transition-all">
                Запросить КП
              </a>
              <button className="flex items-center gap-2 border border-gray-700 hover:border-amber-500/50 text-gray-400 hover:text-amber-400 px-5 py-3 text-sm transition-all">
                <Icon name="Download" size={14} />
                PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function AdvantagesSection() {
  return (
    <section id="advantages" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-500" />
          <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-mono">Почему мы</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-14" style={{ fontFamily: 'Oswald, sans-serif' }}>
          ПРЕИМУЩЕСТВА<br /><span className="text-amber-400">СТАНКОГИД</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((a, i) => (
            <div key={a.title}
                 className="card-hover bg-[#0F1318] border border-gray-800 p-7 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500/0 via-amber-500/60 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:bg-amber-500/20 transition-colors">
                <Icon name={a.icon} size={22} className="text-amber-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>{a.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasesSection() {
  return (
    <section id="cases" className="py-24 bg-[#080B10]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-500" />
          <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-mono">Опыт</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-14" style={{ fontFamily: 'Oswald, sans-serif' }}>
          РЕАЛИЗОВАННЫЕ<br /><span className="text-amber-400">ПРОЕКТЫ</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASES.map((c, i) => (
            <div key={c.company} className="card-hover bg-[#0F1318] border border-gray-800 p-7 relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div className="font-mono text-amber-400/60 text-xs tracking-widest">{c.year}</div>
                <div className="bg-amber-500/10 border border-amber-500/30 px-3 py-1 font-mono text-amber-400 text-sm font-bold">
                  {c.model}
                </div>
              </div>
              <h3 className="text-white font-bold text-base mb-1">{c.company}</h3>
              <div className="text-gray-600 text-xs mb-5 flex items-center gap-1">
                <Icon name="MapPin" size={10} />
                {c.city}
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-gray-600 text-xs uppercase tracking-wider mb-1.5">Задача</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.task}</p>
                </div>
                <div className="pt-4 border-t border-gray-800">
                  <div className="text-amber-500/80 text-xs uppercase tracking-wider mb-1.5">Результат</div>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium">{c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverySection() {
  return (
    <section id="delivery" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 diagonal-stripe opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-500" />
          <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-mono">Условия</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-14" style={{ fontFamily: 'Oswald, sans-serif' }}>
          ДОСТАВКА<br /><span className="text-amber-400">И ГАРАНТИЯ</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Delivery */}
          <div className="bg-[#0F1318] border border-gray-800 p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <Icon name="Truck" size={26} className="text-amber-400" />
              </div>
              <h3 className="text-white text-2xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>ДОСТАВКА</h3>
            </div>
            <div className="space-y-5">
              {[
                { icon: "MapPin", title: "По всей России", text: "Доставляем в любой регион — Москва, Урал, Сибирь, Дальний Восток" },
                { icon: "Package", title: "Транспортные компании", text: "Работаем с ПЭК, Деловые Линии, Энергия и другими партнёрами" },
                { icon: "Clock", title: "Сроки поставки", text: "Со склада — 5–10 рабочих дней. Под заказ — по согласованию" },
                { icon: "ShieldCheck", title: "Страхование груза", text: "Обязательное страхование при стоимости оборудования от 500 000 ₽" },
              ].map(i => (
                <div key={i.title} className="flex gap-4 pb-5 border-b border-gray-800 last:border-0 last:pb-0">
                  <Icon name={i.icon} size={16} className="text-amber-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-white font-medium text-sm mb-0.5">{i.title}</div>
                    <div className="text-gray-500 text-sm">{i.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee */}
          <div className="bg-[#0F1318] border border-gray-800 p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <Icon name="ShieldCheck" size={26} className="text-amber-400" />
              </div>
              <h3 className="text-white text-2xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>ГАРАНТИЯ</h3>
            </div>

            {/* Big number */}
            <div className="mb-8 p-6 border border-amber-500/20 bg-amber-500/5 text-center">
              <div className="text-7xl font-bold text-amber-400 stat-number">24</div>
              <div className="text-gray-400 text-sm uppercase tracking-widest mt-2">месяца гарантии</div>
            </div>

            <div className="space-y-4">
              {[
                { icon: "Wrench", text: "Бесплатный ремонт или замена в течение гарантийного срока" },
                { icon: "Phone", text: "Горячая линия технической поддержки 24/7" },
                { icon: "FileCheck", text: "Сертификаты соответствия и паспорта качества на всё оборудование" },
                { icon: "RefreshCw", text: "Наличие запасных частей на складе сроком до 10 лет после покупки" },
              ].map(i => (
                <div key={i.text} className="flex gap-3">
                  <Icon name={i.icon} size={15} className="text-amber-400 mt-0.5 shrink-0" />
                  <span className="text-gray-400 text-sm">{i.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", model: "", comment: "" });

  return (
    <section id="contacts" className="py-24 bg-[#080B10] relative">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-amber-500" />
          <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-mono">Связь</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-14" style={{ fontFamily: 'Oswald, sans-serif' }}>
          ПОЛУЧИТЬ<br /><span className="text-amber-400">КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-[#0F1318] border border-gray-800 p-8">
            <h3 className="text-white text-xl font-bold mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>ЗАПРОС КП</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Имя *</label>
                  <input
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Петров"
                    className="w-full bg-[#080B10] border border-gray-700 focus:border-amber-500/50 text-white px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Компания</label>
                  <input
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    placeholder="ООО Пример"
                    className="w-full bg-[#080B10] border border-gray-700 focus:border-amber-500/50 text-white px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Телефон *</label>
                <input
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-[#080B10] border border-gray-700 focus:border-amber-500/50 text-white px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Интересующая модель</label>
                <input
                  value={form.model}
                  onChange={e => setForm({ ...form, model: e.target.value })}
                  placeholder="НГ18, НД3316Г или другая"
                  className="w-full bg-[#080B10] border border-gray-700 focus:border-amber-500/50 text-white px-4 py-3 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs uppercase tracking-wider mb-2">Комментарий</label>
                <textarea
                  value={form.comment}
                  onChange={e => setForm({ ...form, comment: e.target.value })}
                  rows={3}
                  placeholder="Опишите задачу или дополнительные требования"
                  className="w-full bg-[#080B10] border border-gray-700 focus:border-amber-500/50 text-white px-4 py-3 text-sm outline-none transition-colors resize-none"
                />
              </div>
              <button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 text-sm tracking-wider uppercase transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                Отправить запрос
              </button>
              <p className="text-gray-600 text-xs text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </div>

          {/* Contacts info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0F1318] border border-gray-800 p-6">
              <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-4">Контакты</h4>
              <div className="space-y-4">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 919 859-89-35", sub: "" },
                  { icon: "Mail", label: "E-mail", value: "info@stankogid.ru", sub: "Ответ в течение часа" },
                  { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Промышленная, 12", sub: "Офис и производство" },
                ].map(c => (
                  <div key={c.label} className="flex gap-4 pb-4 border-b border-gray-800 last:border-0 last:pb-0">
                    <div className="w-9 h-9 bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                      <Icon name={c.icon} size={15} className="text-amber-400" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs mb-0.5">{c.label}</div>
                      <div className="text-white text-sm font-medium">{c.value}</div>
                      <div className="text-gray-600 text-xs">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0F1318] border border-gray-800 p-6">
              <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-4">Режим работы</h4>
              <div className="space-y-2">
                {[
                  { day: "Пн — Пт", hours: "08:00 — 18:00" },
                  { day: "Суббота", hours: "09:00 — 14:00" },
                  { day: "Воскресенье", hours: "Выходной" },
                ].map(r => (
                  <div key={r.day} className="flex justify-between text-sm">
                    <span className="text-gray-500">{r.day}</span>
                    <span className="text-white font-mono">{r.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/30 p-6">
              <div className="flex items-start gap-3">
                <Icon name="Zap" size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-amber-400 font-bold text-sm mb-1">Быстрый расчёт</div>
                  <p className="text-gray-400 text-sm">Оставьте заявку — перезвоним в течение 15 минут и подберём оптимальную модель</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-amber-500 flex items-center justify-center">
            <Icon name="Scissors" size={13} className="text-black" />
          </div>
          <span className="text-white font-bold tracking-widest text-sm" style={{ fontFamily: 'Oswald, sans-serif' }}>СТАНКОГИД</span>
        </div>
        <div className="text-gray-600 text-xs text-center">
          © 2024 ООО «Станкогид». Все права защищены.
        </div>
        <div className="flex gap-5">
          {[
            { href: "#catalog", label: "Каталог" },
            { href: "#contacts", label: "Контакты" },
          ].map(l => (
            <a key={l.href} href={l.href} className="text-gray-600 hover:text-amber-400 text-xs uppercase tracking-wider transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-white">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <AdvantagesSection />
      <CasesSection />
      <DeliverySection />
      <ContactsSection />
      <Footer />
    </div>
  );
}