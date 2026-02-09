
import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS, NICHES, DETAILED_FEATURES, GROWTH_LEVERS } from './constants';
import { Niche } from './types';
import AIConsultant from './components/AIConsultant';
import InstallButton from './components/InstallButton';

const ScrollReveal: React.FC<{ children: React.ReactNode; delay?: string; className?: string }> = ({ children, delay = "0ms", className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ transitionDelay: delay }} className={`reveal-on-scroll ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const NeuroInsight: React.FC<{ text: string; subtext?: string }> = ({ text, subtext }) => (
  <ScrollReveal>
    <div className="py-16 sm:py-24 px-6 text-center max-w-4xl mx-auto">
      <h4 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-indigo-300 mb-4">
        "{text}"
      </h4>
      {subtext && <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-slate-500 font-black">{subtext}</p>}
    </div>
  </ScrollReveal>
);

const FeatureCard: React.FC<{ feature: any; isFullWidth?: boolean }> = ({ feature, isFullWidth }) => (
  <div className="glass-panel rounded-[2.5rem] p-8 sm:p-10 border border-white/5 hover:border-white/10 transition-all duration-500 group h-full flex flex-col">
    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-sky-500/10 group-hover:scale-110 transition-transform duration-500`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {feature.icon}
      </svg>
    </div>
    
    <div className="space-y-2 mb-6">
      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{feature.title}</h3>
      <p className="text-indigo-400 text-xs sm:text-sm font-bold uppercase tracking-widest">{feature.subtitle}</p>
    </div>
    
    <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 flex-grow">
      {feature.description}
    </p>
    
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${isFullWidth ? 'lg:grid-cols-4' : 'lg:grid-cols-2'} gap-y-4 gap-x-6 pt-6 border-t border-white/5`}>
      {feature.features.map((f: string) => (
        <div key={f} className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${feature.color} shrink-0`}></div>
          <span className="text-xs sm:text-sm text-slate-300 font-medium">{f}</span>
        </div>
      ))}
    </div>
  </div>
);

const NicheCard: React.FC<{ niche: Niche }> = ({ niche }) => (
  <div className="relative h-[220px] md:h-[280px] w-full rounded-[2rem] overflow-hidden group border border-white/10 shadow-lg transition-all duration-700 hover:scale-[1.03] hover:border-white/20">
    <img 
      src={niche.image} 
      alt={niche.name} 
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
    
    <div className={`absolute top-4 left-4 p-2 rounded-xl ${niche.iconColor} text-white shadow-lg border border-white/20 backdrop-blur-md`}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        {niche.icon}
      </svg>
    </div>
    
    <div className="absolute bottom-6 left-6 right-6">
      <h4 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
        {niche.name}
      </h4>
    </div>
  </div>
);

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRequestNow = () => {
    window.open('https://wa.link/k90a0j', '_blank', 'noopener,noreferrer');
  };

  const handleOpenDemo = () => {
    window.open('https://nyc-barberia.com/', '_blank', 'noopener,noreferrer');
  };

  const handleOpenSportsDemo = () => {
    window.open('https://complejo-antupiren.com/', '_blank', 'noopener,noreferrer');
  };

  const aiLogoUrl = "https://files.oaiusercontent.com/file-h5Wst2uCAnFByOqf6Sj6kL?se=2025-02-21T16%3A58%3A18Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0355f30e-562a-442a-9289-5360c7f39441.webp&sig=6Y4v8r5/N7R1W8p03K5y%2BT7O1zD0O1K8qL0P8m1o%3D"; 

  return (
    <div className="min-h-screen bg-transparent flex flex-col text-slate-200 selection:bg-indigo-500/30">
      <header className={`sticky top-0 z-50 transition-all duration-700 ease-in-out ${scrollY > 20 ? 'py-3' : 'py-8'}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-8 transition-all duration-500`}>
          <div className={`flex items-center justify-between p-3 sm:p-4 rounded-[1.5rem] sm:rounded-[2rem] transition-all duration-500 ${scrollY > 20 ? 'glass-panel shadow-2xl' : ''}`}>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-sky-500/10 rounded-full flex items-center justify-center shadow-sky-500/20 shadow-lg border border-sky-500/30 overflow-hidden group">
                <img 
                  src={aiLogoUrl} 
                  alt="VentaFlow IA Logo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="hidden xs:block">
                <h1 className="text-base sm:text-2xl font-black text-white tracking-tighter">VentaFlow IA</h1>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse"></div>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Premium Service</span>
                </div>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              {['Servicios', 'Ecosistema', 'Demos'].map(item => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">{item}</a>
              ))}
            </nav>

            <button onClick={handleRequestNow} className="premium-button px-6 py-2.5 sm:px-8 sm:py-3.5 bg-indigo-600/10 border border-indigo-500/30 rounded-xl sm:rounded-2xl text-indigo-400 hover:bg-indigo-600 hover:text-white transition-all font-bold text-xs sm:text-sm uppercase tracking-widest">
              Consultoría Gratis
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 pb-32">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-24 text-center py-16 sm:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-radial-gradient from-indigo-500/5 to-transparent -z-10"></div>
          
          <ScrollReveal>
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-indigo-400">Impulsado por Inteligencia Artificial</span>
            </div>
            <h2 className="text-4xl sm:text-7xl md:text-8xl font-black text-gradient tracking-tighter mb-6 leading-[0.9] max-w-5xl mx-auto">
              Digitalización de <br className="hidden md:block" /> <span className="text-sky-400">Clase Mundial</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
              Elevamos la autoridad de tu negocio con tecnología de vanguardia y diseño exclusivo que genera resultados medibles.
            </p>
            
            <div 
              onClick={handleRequestNow}
              className="group cursor-pointer relative mx-auto max-w-md p-[1px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x shadow-[0_20px_50px_rgba(99,102,241,0.3)] transition-all hover:scale-[1.02] active:scale-95"
            >
              <div className="bg-slate-950 rounded-[2rem] sm:rounded-[2.5rem] py-6 px-6 sm:py-8 sm:px-10 backdrop-blur-2xl flex flex-col items-center gap-3">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-indigo-400 animate-pulse">Cupos Limitados para Marzo</span>
                <h3 className="text-lg sm:text-2xl font-bold text-white leading-tight">
                  PRUEBA <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-emerald-300">10 DÍAS GRATIS</span> NUESTRO SISTEMA INTEGRAL
                </h3>
                <div className="flex items-center gap-3 mt-2">
                   <div className="flex -space-x-2">
                     {[1,2,3,4].map(i => (
                       <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[8px] sm:text-[10px] font-bold">
                         {String.fromCharCode(64 + i)}
                       </div>
                     ))}
                   </div>
                   <span className="text-[10px] sm:text-xs text-slate-500 font-bold tracking-tight">+124 negocios escalando hoy</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* INSIGHT 1 */}
        <NeuroInsight text="La velocidad es la nueva moneda del éxito digital. Automatiza o queda atrás." subtext="Neuro-fricción zero" />

        {/* Grid de Productos Adaptable */}
        <section id="servicios" className="space-y-32 sm:space-y-48">
          {PRODUCTS.map((product, index) => {
            const nicheStartIndex = index * 2;
            const nicheBatch = NICHES.slice(nicheStartIndex, nicheStartIndex + 2);

            return (
              <React.Fragment key={product.id}>
                <ScrollReveal>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 sm:gap-20 items-center`}>
                    <div className="w-full lg:w-1/2 aspect-video lg:aspect-square rounded-[3rem] overflow-hidden group relative border border-white/10 shadow-2xl">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                        <div className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20">
                          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300">{product.category}</span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-8 px-2 sm:px-6 text-center lg:text-left">
                      <div className="space-y-4">
                        <div className="flex items-center justify-center lg:justify-start gap-4">
                          <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-tight">{product.name}</h3>
                          {product.name.toLowerCase().includes('página web') && (
                            <div className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-black tracking-[0.2em] uppercase">Gratis</div>
                          )}
                        </div>
                        <p className="text-slate-400 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        {product.features.map(f => (
                          <span key={f} className="text-xs sm:text-sm font-bold text-slate-300 bg-white/5 px-4 py-2 rounded-xl border border-white/10 hover:border-indigo-500/30 transition-colors">
                            {f}
                          </span>
                        ))}
                      </div>

                      <button 
                        onClick={handleRequestNow} 
                        className="premium-button w-full sm:w-auto px-12 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl shadow-2xl shadow-indigo-600/30 active:scale-[0.98] transition-all text-sm uppercase tracking-[0.2em]"
                      >
                        Comenzar Ahora
                      </button>
                    </div>
                  </div>
                </ScrollReveal>

                {/* INSIGHT 2/3 dinámicos */}
                {index === 0 && <NeuroInsight text="Imagina tu negocio facturando mientras descansas. La libertad real comienza con la automatización." subtext="PNL Visualización" />}
                {index === 1 && <NeuroInsight text="No compitas por precio, domina por autoridad. Tu presencia digital habla por ti." subtext="Autoridad de Marca" />}

                {nicheBatch.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-2">
                    {nicheBatch.map((niche) => (
                      <ScrollReveal key={niche.id}>
                        <NicheCard niche={niche} />
                      </ScrollReveal>
                    ))}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </section>

        {/* Ecosistema Section */}
        <section id="ecosistema" className="mt-48 sm:mt-64">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="inline-block mb-6 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-indigo-400">Ecosistema VentaFlow</span>
              </div>
              <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                Infraestructura para <br /> <span className="text-sky-400">Dominar el Mercado</span>
              </h2>
              <p className="text-slate-400 text-lg sm:text-2xl leading-relaxed font-medium">
                Cada herramienta ha sido diseñada quirúrgicamente para resolver los cuellos de botella reales de negocios en crecimiento.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {DETAILED_FEATURES.map((feature, idx) => {
              const isFullWidth = feature.id === 'df6';
              return (
                <ScrollReveal 
                  key={feature.id} 
                  delay={`${idx * 150}ms`}
                  className={isFullWidth ? 'md:col-span-2 lg:col-span-3' : ''}
                >
                  <FeatureCard feature={feature} isFullWidth={isFullWidth} />
                </ScrollReveal>
              );
            })}
          </div>
          
          <ScrollReveal>
            <div className="relative overflow-hidden p-8 sm:p-16 rounded-[3rem] border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent flex flex-col items-center justify-center gap-6 text-center group">
               <div className="space-y-4">
                 <div className="flex items-center justify-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center border border-orange-500/30 group-hover:scale-110 transition-transform">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2-2v14a2 2 0 002 2z" />
                     </svg>
                   </div>
                   <h4 className="text-2xl font-black text-white tracking-tight uppercase">Movilidad Sin Barreras</h4>
                 </div>
                 <p className="text-slate-200 text-lg font-bold tracking-tight max-w-2xl mx-auto">
                   Gestiona tu imperio desde cualquier lugar del mundo. Sin descargas, <span className="text-orange-400">sin instalaciones</span>, solo resultados inmediatos directamente en tu navegador.
                 </p>
               </div>
            </div>
          </ScrollReveal>
        </section>

        {/* INSIGHT 5 */}
        <NeuroInsight text="La simplicidad es el máximo nivel de sofisticación. Menos gestión, más rentabilidad." subtext="Estado de Flujo" />

        {/* Metodología Section - GRID DE BOTONES INDIVIDUALES */}
        <section className="mb-48">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="px-5 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 inline-flex items-center gap-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-[10px] font-black uppercase tracking-widest text-sky-300">Metodología VentaFlow</span>
              </div>
              <h2 className="text-4xl sm:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                Las <span className="text-sky-400">4 Palancas</span> <br /> del Crecimiento
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 px-4 py-8">
              {GROWTH_LEVERS.map((lever) => (
                <div key={lever.id} className="w-full">
                  <button 
                    onClick={handleRequestNow}
                    className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-[3rem] overflow-hidden group border border-white/10 shadow-2xl transition-all duration-700 active:scale-95 text-left"
                  >
                    <img 
                      src={lever.image} 
                      alt={lever.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-95`}></div>
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-6xl sm:text-8xl font-black text-white/5 select-none group-hover:text-white/10 transition-all">
                          {lever.number}
                        </span>
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${lever.color} flex items-center justify-center shadow-lg border border-white/20`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight leading-tight">
                        {lever.title}
                      </h3>
                      <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                        {lever.description}
                      </p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Final CTA Section */}
        <section id="demos">
          <ScrollReveal>
            <div className="relative group overflow-hidden p-10 sm:p-24 rounded-[3.5rem] glass-panel border-indigo-500/20 bg-indigo-500/5 text-center max-w-6xl mx-auto">
              <div className="relative z-10 flex flex-col items-center">
                <div className="inline-block mb-8 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-indigo-300">Transformación Digital Premium</span>
                </div>
                
                <div className="mb-12 space-y-6 max-w-4xl">
                  <h2 className="text-3xl sm:text-6xl font-black text-gradient tracking-tighter leading-tight px-4">
                    Tu visión merece una <br /> plataforma a su altura.
                  </h2>
                  <p className="text-lg sm:text-2xl font-medium text-slate-400 leading-relaxed max-w-2xl mx-auto">
                    No construimos simples sitios web; arquitectamos ecosistemas que capturan la atención y aceleran el flujo de caja de tu empresa.
                  </p>
                </div>

                <div className="mb-12 px-6">
                  <p className="text-sky-400 text-xl sm:text-2xl md:text-3xl font-black tracking-tight animate-pulse max-w-2xl mx-auto leading-tight">
                    ¿Quieres ver esto en acción? Explora nuestros demos interactivos y vive la experiencia VentaFlow IA hoy mismo.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-12">
                  <button onClick={handleOpenDemo} className="group/btn relative h-48 sm:h-64 rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 transition-all flex flex-col items-center justify-center gap-4 shadow-2xl p-6">
                    <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 group-hover/btn:scale-110 transition-transform overflow-hidden flex items-center justify-center shadow-inner">
                      <img src={aiLogoUrl} alt="VentaFlow" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center">
                      <span className="block text-sm font-black uppercase tracking-[0.2em] text-slate-200 mb-1">Demo Barbería</span>
                      <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Ver Sistema de Reservas</span>
                    </div>
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-sky-500 animate-ping"></div>
                  </button>

                  <button onClick={handleOpenSportsDemo} className="group/btn relative h-48 sm:h-64 rounded-3xl overflow-hidden border border-indigo-500/30 bg-indigo-500/5 hover:bg-indigo-500/10 transition-all flex flex-col items-center justify-center gap-4 shadow-2xl p-6">
                    <div className="w-20 h-20 rounded-full bg-indigo-500/10 border border-indigo-500/20 group-hover/btn:scale-110 transition-transform overflow-hidden flex items-center justify-center shadow-inner">
                      <img src={aiLogoUrl} alt="VentaFlow Sports" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center">
                      <span className="block text-sm font-black uppercase tracking-[0.2em] text-indigo-100 mb-1">Demo Centro Deportivo</span>
                      <span className="text-[10px] text-sky-400 font-bold uppercase tracking-widest">Ver Gestión de Complejos</span>
                    </div>
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-indigo-500 animate-ping"></div>
                  </button>
                </div>

                <button 
                  onClick={handleRequestNow} 
                  className="premium-button px-16 py-6 bg-indigo-600 hover:bg-indigo-500 rounded-2xl sm:rounded-3xl text-base sm:text-lg font-black uppercase tracking-[0.3em] text-white transition-all shadow-2xl shadow-indigo-600/40 active:scale-95 group flex items-center gap-4"
                >
                  Agendar Consultoría Senior
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/10 blur-[120px] rounded-full -z-10"></div>
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/5 blur-[120px] rounded-full -z-10"></div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/50 backdrop-blur-3xl py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex items-center gap-4">
            <img src={aiLogoUrl} alt="Logo" className="w-10 h-10 rounded-full border border-white/10" />
            <span className="text-xl font-black text-white tracking-tighter">VentaFlow IA</span>
          </div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">© 2025 VentaFlow IA - All Rights Reserved</p>
        </div>
      </footer>

      <AIConsultant />
      <InstallButton />
    </div>
  );
};

export default App;
