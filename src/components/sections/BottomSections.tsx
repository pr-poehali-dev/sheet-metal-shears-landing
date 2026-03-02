import { useState } from "react";
import Icon from "@/components/ui/icon";
import { ADVANTAGES, CASES } from "@/data/index";

export function AdvantagesSection() {
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
          {ADVANTAGES.map((a) => (
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

export function CasesSection() {
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
          {CASES.map((c) => (
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

export function DeliverySection() {
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
                { icon: "Package", title: "Транспортные компании", text: "Работаем с 10+ транспортными компаниями и другими партнёрами" },
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

          <div className="bg-[#0F1318] border border-gray-800 p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                <Icon name="ShieldCheck" size={26} className="text-amber-400" />
              </div>
              <h3 className="text-white text-2xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>ГАРАНТИЯ</h3>
            </div>

            <div className="mb-4 p-6 border border-amber-500/20 bg-amber-500/5 text-center">
              <div className="text-7xl font-bold text-amber-400 stat-number">24</div>
              <div className="text-gray-400 text-sm uppercase tracking-widest mt-2">месяца гарантии</div>
              <div className="text-gray-500 text-xs mt-2">*при условии приобретения пакета расширенной гарантии</div>
            </div>

            <div className="space-y-4">
              {[
                { icon: "Wrench", text: "Бесплатный ремонт или замена в течение гарантийного срока" },
                { icon: "Phone", text: "Горячая линия технической поддержки" },
                { icon: "FileCheck", text: "Сертификаты соответствия и паспорта качества на всё оборудование" },
                { icon: "RefreshCw", text: "Наличие запасных частей на складе" },
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

export function ContactsSection() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", model: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Запрос КП — Станкогид");
    const body = encodeURIComponent(
      `Имя: ${form.name}\nКомпания: ${form.company}\nТелефон: ${form.phone}\nМодель: ${form.model}\nКомментарий: ${form.comment}`
    );
    window.location.href = `mailto:info@stankogid.ru?subject=${subject}&body=${body}`;
  };

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
          <div className="lg:col-span-3 bg-[#0F1318] border border-gray-800 p-8">
            <h3 className="text-white text-xl font-bold mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>ЗАПРОС КП</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
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
              <button type="submit" className="block w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 text-sm tracking-wider uppercase transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] text-center">
                Отправить запрос
              </button>
              <p className="text-gray-600 text-xs text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0F1318] border border-gray-800 p-6">
              <h4 className="text-gray-400 text-xs uppercase tracking-wider mb-4">Контакты</h4>
              <div className="space-y-4">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 919 859-89-35", sub: "" },
                  { icon: "Mail", label: "E-mail", value: "info@stankogid.ru", sub: "Ответ в течение часа" },
                  { icon: "MapPin", label: "Адрес", value: "г. Оренбург, ул. Донгузская 3-й проезд, 64", sub: "Офис и производство" },
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

export function Footer() {
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
