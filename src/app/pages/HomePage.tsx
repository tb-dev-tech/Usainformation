import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { PrimaryButton } from '../components/Buttons';
import { InfoCard } from '../components/Cards';
import { StarIcon, GlobeIcon, USAMapIcon } from '../components/Icons';

export function HomePage() {
  const navigate = useNavigate();
  
  return (
    <PageLayout 
      variant="light"
      backgroundImage="https://images.unsplash.com/photo-1759265472418-c35151ec912e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVU0ElMjBza3lsaW5lJTIwZmxhZyUyMHN1bnNldHxlbnwxfHx8fDE3NzA4MDU2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
      backgroundOverlay="linear-gradient(to bottom, rgba(247, 247, 247, 0.85), rgba(247, 247, 247, 0.95))"
    >
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-200px)] flex items-center justify-center px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="mb-8 text-[#1A1A1A]"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            Velkommen til USA
          </h1>
          
          <p 
            className="mb-12 text-[#1A1A1A] max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.25rem',
              lineHeight: 1.8,
              opacity: 0.9
            }}
          >
            Utforsk De forente stater – et land med rik historie, mangfoldig kultur, 
            storslått natur og uendelige muligheter. Fra kyst til kyst, opplev det amerikanske eventyret.
          </p>
          
          <PrimaryButton 
            variant="light"
            onClick={() => navigate('/fakta-om-usa')}
          >
            Utforsk mer
          </PrimaryButton>
        </div>
      </section>
      
      {/* Info Cards Section */}
      <section className="px-8 py-24 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-center mb-16 text-[#1A1A1A]"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '3rem',
              fontWeight: 700
            }}
          >
            Oppdag USA
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard
              icon={<StarIcon size={40} color="#B33A3A" />}
              title="Fakta om USA"
              description="Lær om USAs historie, politikk, økonomi og samfunnsstruktur. Fra grunnleggelsen til moderne tid."
              variant="light"
            />
            
            <InfoCard
              icon={<GlobeIcon size={40} color="#B33A3A" />}
              title="Kultur & Tradisjoner"
              description="Oppdag den amerikanske kulturen – fra musikk og film til høytider og tradisjoner som former nasjonen."
              variant="light"
            />
            
            <InfoCard
              icon={<USAMapIcon size={40} color="#B33A3A" />}
              title="Geografi & Natur"
              description="Utforsk USAs mangfoldige landskap, fra Grand Canyon til Yellowstone, og alt imellom."
              variant="light"
            />
          </div>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="px-8 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Turisme', path: '/turisme' },
              { title: 'Språk', path: '/sprak' },
              { title: 'Matkultur', path: '/matkultur' },
              { title: 'Bærekraft', path: '/baerekraftig-utvikling' }
            ].map((link) => (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 hover:scale-105"
              >
                <p 
                  className="text-[#B33A3A]"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '1.125rem',
                    fontWeight: 700
                  }}
                >
                  {link.title}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
