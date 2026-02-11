import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { LargeInfoBox, SmallInfoBox } from '../components/Cards';
import { GlobeIcon } from '../components/Icons';

export function BaerekraftigPage() {
  return (
    <PageLayout 
      variant="dark"
      backgroundImage="https://images.unsplash.com/photo-1705869339668-898c649d0dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMG5hdHVyZSUyMGxhbmRzY2FwZSUyMGZvcmVzdHxlbnwxfHx8fDE3NzA4MDU2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
      backgroundOverlay="rgba(15, 15, 15, 0.88)"
    >
      <div className="max-w-6xl mx-auto px-8 py-24">
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
            Bærekraftig utvikling
          </h1>
          
          <p 
            className="text-[#F2F2F2] opacity-90 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.25rem',
              lineHeight: 1.8
            }}
          >
            USA står overfor betydelige miljøutfordringer, men jobber også med innovative løsninger 
            for en mer bærekraftig fremtid.
          </p>
        </div>
        
        {/* Main Sections */}
        <div className="space-y-8 mb-16">
          <LargeInfoBox
            icon={<GlobeIcon size={48} color="#C9A86A" />}
            title="Miljøutfordringer"
            content="USA er en av verdens største utslippere av klimagasser, hovedsakelig fra transport, industri og energiproduksjon. Landet står overfor økende utfordringer med ekstremvær, inkludert orkaner, skogbranner, tørke og oversvømmelser. Luftforurensing i storbyområder påvirker folkehelsen. Tap av biologisk mangfold og habitatødeleggelse truer mange arter. Plastforurensning i hav og vassdrag er et voksende problem. Klimaendringer påvirker landbruk, vannressurser og kystsamfunn."
          />
          
          <LargeInfoBox
            title="Fornybar energi"
            content="USA investerer tungt i fornybar energi. Sol- og vindenergi vokser raskt, spesielt i stater som California, Texas og Iowa. Landet har verdens nest største vindenergikapasitet. Solcellepaneler blir stadig billigere og mer effektive. Mange stater har mål om 100% ren energi innen 2040-2050. Elbiler blir stadig mer populære med Tesla som global industrileder. Batteriteknologi og energilagring utvikles raskt. Nye jobber i grønn sektor vokser betydelig."
          />
        </div>
        
        {/* Initiatives */}
        <div className="mb-16">
          <h2 
            className="text-[#C9A86A] mb-8 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: 700
            }}
          >
            Bærekraftstiltak
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SmallInfoBox
              title="Nasjonalparker"
              content="58 nasjonalparker beskytter amerikanske naturskatter. National Park Service forvalter over 340.000 km² villmark."
            />
            
            <SmallInfoBox
              title="Gjenvinning"
              content="Økende fokus på resirkulering og avfallsreduksjon. Mange byer har omfattende gjenvinningsprogrammer."
            />
            
            <SmallInfoBox
              title="Ren transport"
              content="Investeringer i elbiler, kollektivtransport og sykkelvennlige byer. California leder an med strenge utslippskrav."
            />
            
            <SmallInfoBox
              title="Grønne bygninger"
              content="LEED-sertifisering for miljøvennlige bygninger. Fokus på energieffektivitet og bærekraftige materialer."
            />
            
            <SmallInfoBox
              title="Bærekraftig landbruk"
              content="Økologisk jordbruk vokser. Regenerativt landbruk og lokal matproduksjon får mer oppmerksomhet."
            />
            
            <SmallInfoBox
              title="Teknologiske løsninger"
              content="Silicon Valley utvikler cleantech-løsninger. AI og big data brukes til å optimalisere ressursbruk."
            />
          </div>
        </div>
        
        {/* Future Outlook */}
        <div className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl p-8 mb-8">
          <h3 
            className="text-[#C9A86A] mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2rem',
              fontWeight: 600
            }}
          >
            Fremtidens bærekraft
          </h3>
          
          <p 
            className="text-[#F2F2F2] opacity-90"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem',
              lineHeight: 1.8
            }}
          >
            USA har forpliktet seg til betydelige kutt i klimagassutslipp innen 2030. Infrastrukturinvesteringer 
            fokuserer på grønn energi og klimatilpasning. Delstater som California, New York og Washington 
            leder an med ambisiøse klimamål. Private selskaper investerer milliarder i bærekraftige 
            teknologier. Unge amerikanere krever sterkere klimatiltak. Overgangen til en grønn økonomi 
            skaper både utfordringer og muligheter for fremtidens USA.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { value: '20%', label: 'Fornybar energi' },
            { value: '58', label: 'Nasjonalparker' },
            { value: '3M', label: 'Grønne jobber' },
            { value: '50%', label: 'Utslippsmål 2030' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#C9A86A]/30 rounded-lg p-6 text-center"
            >
              <p 
                className="text-[#C9A86A] mb-2"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '2rem',
                  fontWeight: 700
                }}
              >
                {stat.value}
              </p>
              <p 
                className="text-[#F2F2F2] opacity-80 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        {/* Poster Placeholder */}
        <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border-2 border-dashed border-[#C9A86A]/50 rounded-xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="aspect-[3/4] max-h-96 bg-[#0F0F0F]/40 rounded-lg border border-[#C9A86A]/30 flex items-center justify-center mb-4"></div>
            
          </div>
        </div>
      </div>
    </PageLayout>
  );
}