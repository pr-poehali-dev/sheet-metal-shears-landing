import { useState } from "react";
import Icon from "@/components/ui/icon";
import { CATEGORIES } from "@/data/index";

type Model = typeof CATEGORIES[0]["models"][0] & { categoryName: string };

export function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedModel, setSelectedModel] = useState<null | Model>(null);

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

        <div className="accent-border-left mb-8">
          <p className="text-gray-400 text-sm">{cat.description}</p>
        </div>

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

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 border border-amber-500/20 bg-amber-500/5">
          <div>
            <div className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>СКАЧАТЬ ПОЛНЫЙ КАТАЛОГ</div>
            <div className="text-gray-500 text-sm">PDF, актуальная редакция 2024 — все технические характеристики</div>
          </div>
          <a href="https://t.me/Stankogid_tg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3.5 transition-all whitespace-nowrap hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] text-sm tracking-wider uppercase">
            <Icon name="Download" size={16} />
            Скачать PDF
          </a>
        </div>
      </div>

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
              <a href="https://t.me/Stankogid_tg" target="_blank" rel="noopener noreferrer"
                 onClick={() => setSelectedModel(null)}
                 className="flex-1 bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 text-center text-sm tracking-wider uppercase transition-all">
                Запросить КП
              </a>
              <a href="https://t.me/Stankogid_tg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-gray-700 hover:border-amber-500/50 text-gray-400 hover:text-amber-400 px-5 py-3 text-sm transition-all">
                <Icon name="Download" size={14} />
                PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
