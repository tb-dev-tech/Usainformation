import React from 'react';
import { PageLayout } from '../components/PageLayout';

export function KilderPage() {
  return (
    <PageLayout 
      variant="light"
      backgroundImage="https://images.unsplash.com/photo-1754828393891-e51c186832a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwcGFwZXIlMjB0ZXh0dXJlJTIwYmVpZ2V8ZW58MXx8fHwxNzcwNzI4ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
      backgroundOverlay="linear-gradient(to bottom, rgba(232, 220, 194, 0.95), rgba(247, 247, 247, 0.98))"
    >
      <div className="max-w-4xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="mb-6 text-[#1A1A1A]"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 700
            }}
          >
            Kilder
          </h1>
          
          <p 
            className="text-[#1A1A1A] opacity-80 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem',
              lineHeight: 1.8
            }}
          >
            Dette prosjektet er basert på informasjon fra pålitelige kilder om De forente stater.
          </p>
        </div>
        
        {/* Sources Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl p-12 border-2 border-[#B33A3A]/20">
          <div className="space-y-6">
            <div>
              <h3 
                className="mb-3 text-[#B33A3A]"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Offisielle kilder
              </h3>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}>
                  • <strong>U.S. Census Bureau</strong> – Befolkningsstatistikk og demografisk data
                  <br />
                  <span className="text-sm opacity-70">https://www.census.gov</span>
                </li>
                <li className="text-[#1A1A1A]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}>
                  • <strong>National Park Service</strong> – Informasjon om nasjonalparker og naturvern
                  <br />
                  <span className="text-sm opacity-70">https://www.nps.gov</span>
                </li>
                <li className="text-[#1A1A1A]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}>
                  • <strong>U.S. Department of State</strong> – Utenrikspolitikk og internasjonale forhold
                  <br />
                  <span className="text-sm opacity-70">https://www.state.gov</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-6 border-t-2 border-[#E8DCC2]">
              <h3 
                className="mb-3 text-[#B33A3A]"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Akademiske og informasjonskilder
              </h3>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}>
                  • <strong>Library of Congress</strong> – Historisk dokumentasjon og arkiver
                  <br />
                  <span className="text-sm opacity-70">https://www.loc.gov</span>
                </li>
                <li className="text-[#1A1A1A]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}>
                  • <strong>Smithsonian Institution</strong> – Kultur, historie og vitenskap
                  <br />
                  <span className="text-sm opacity-70">https://www.si.edu</span>
                </li>
                <li className="text-[#1A1A1A]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}>
                  • <strong>CIA World Factbook</strong> – Geografisk og statistisk informasjon
                  <br />
                  <span className="text-sm opacity-70">https://www.cia.gov/the-world-factbook</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-6 border-t-2 border-[#E8DCC2]">
              <h3 
                className="mb-3 text-[#B33A3A]"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Media og kulturkilder
              </h3>
              <ul className="space-y-3 ml-6">
                <li className="text-[#1A1A1A]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}>
                  • <strong>National Geographic</strong> – Geografi, natur og kulturreportasjer
                </li>
                <li className="text-[#1A1A1A]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}>
                  • <strong>PBS (Public Broadcasting Service)</strong> – Dokumentarer om amerikansk historie og kultur
                </li>
                <li className="text-[#1A1A1A]" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}>
                  • <strong>Britannica Encyclopedia</strong> – Generell fakta og historisk kontekst
                </li>
              </ul>
            </div>
            
            <div className="pt-6 border-t-2 border-[#E8DCC2]">
              <h3 
                className="mb-3 text-[#B33A3A]"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.5rem',
                  fontWeight: 600
                }}
              >
                Bilder
              </h3>
              <p className="text-[#1A1A1A] ml-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7 }}>
                • <strong>Unsplash</strong> – Frie høykvalitets bilder brukt gjennom hele nettstedet
                <br />
                <span className="text-sm opacity-70">https://unsplash.com</span>
              </p>
            </div>
          </div>
          
          {/* Footer Note */}
          <div className="mt-12 pt-8 border-t-2 border-[#E8DCC2]">
            <p 
              className="text-[#1A1A1A] opacity-70 text-center italic"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9375rem',
                lineHeight: 1.6
              }}
            >Dette er et utdanningsprosjekt laget av Trym, Simon, Birk & Greger i 2026. All informasjon er hentet fra offentlig tilgjengelige kilder og er kun ment for&nbsp;&nbsp;utdanningsformål.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
