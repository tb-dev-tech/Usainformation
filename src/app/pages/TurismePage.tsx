import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { InfoCard } from '../components/Cards';
import { Route66Icon, StatueIcon, USAMapIcon } from '../components/Icons';

export function TurismePage() {
  const destinations = [
    {
      title: 'New York City',
      description: 'Byen som aldri sover. Opplev Times Square, Frihetsgudinnen, Central Park og Broadway.',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600'
    },
    {
      title: 'Grand Canyon',
      description: 'Et av verdens syv naturlige underverk. Spektakulære utsikter og vandreruter.',
      image: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=600'
    },
    {
      title: 'San Francisco',
      description: 'Golden Gate Bridge, Alcatraz, kabelbaner og Silicon Valley i nærheten.',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600'
    },
    {
      title: 'Las Vegas',
      description: 'Underholdningshovedstaden med kasinoer, show og spektakulær nattliv.',
      image: 'https://images.unsplash.com/photo-1670132898415-926edddb82d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYXMlMjBWZWdhcyUyMHN0cmlwJTIwbmlnaHR8ZW58MXx8fHwxNzcwODI0NTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Yellowstone',
      description: 'USAs første nasjonalpark med geysirer, varme kilder og villmarksopplevelser.',
      image: 'https://images.unsplash.com/photo-1574977622609-5b102b7e9541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxZZWxsb3dzdG9uZSUyMG5hdGlvbmFsJTIwcGFyayUyMGdleXNlcnxlbnwxfHx8fDE3NzA4MjQ1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Miami Beach',
      description: 'Tropisk paradis med strender, art deco-arkitektur og livlig kultur.',
      image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=600'
    }
  ];
  
  return (
    <PageLayout 
      variant="dark"
      backgroundImage="https://images.unsplash.com/photo-1693711943126-52903b3a6b95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3V0ZSUyMDY2JTIwaGlnaHdheSUyMGRlc2VydHxlbnwxfHx8fDE3NzA4MDU2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
      backgroundOverlay="rgba(15, 15, 15, 0.88)"
    >
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="mb-6 text-[#F2F2F2]"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 700
            }}
          >
            Turisme i USA
          </h1>
          
          <p 
            className="text-[#F2F2F2] opacity-90 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.25rem',
              lineHeight: 1.8
            }}
          >
            Fra ikoniske byer til naturlige underverk – USA tilbyr uforglemmelige opplevelser 
            for enhver reisende. Utforsk mangfoldet av destinasjoner.
          </p>
        </div>
        
        {/* Feature Icons */}
        <div className="flex justify-center gap-12 mb-16">
          <div className="text-center">
            <StatueIcon size={64} color="#C9A86A" className="mx-auto mb-3" />
            <p className="text-[#F2F2F2] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Ikoniske landemerker
            </p>
          </div>
          <div className="text-center">
            <Route66Icon size={64} color="#C9A86A" className="mx-auto mb-3" />
            <p className="text-[#F2F2F2] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Legendariske ruter
            </p>
          </div>
          <div className="text-center">
            <USAMapIcon size={64} color="#C9A86A" className="mx-auto mb-3" />
            <p className="text-[#F2F2F2] text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              50 unike delstater
            </p>
          </div>
        </div>
        
        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {destinations.map((dest, index) => (
            <InfoCard
              key={index}
              title={dest.title}
              description={dest.description}
              variant="dark"
              withImage={true}
              imageSrc={dest.image}
            />
          ))}
        </div>
        
        {/* Route 66 Section */}
        <div className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl p-12">
          <div className="flex items-start gap-6">
            <Route66Icon size={80} color="#C9A86A" className="flex-shrink-0" />
            <div>
              <h2 
                className="mb-4 text-[#C9A86A]"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '2.5rem',
                  fontWeight: 700
                }}
              >
                Route 66
              </h2>
              <p 
                className="text-[#F2F2F2] opacity-90"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1.125rem',
                  lineHeight: 1.8
                }}
              >
                Den legendariske "Mother Road" strekker seg 3.940 km fra Chicago til Los Angeles. 
                Route 66 representerer den amerikanske roadtrip-drømmen og er fylt med nostalgiske 
                diners, vintage moteller og ikonisk americana. Kjør gjennom åtte delstater og opplev 
                hjertet av det klassiske Amerika.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}