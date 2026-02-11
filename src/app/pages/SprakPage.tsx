import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { LargeInfoBox, SmallInfoBox } from '../components/Cards';
import { GlobeIcon, MicrophoneIcon } from '../components/Icons';

export function SprakPage() {
  return (
    <PageLayout 
      variant="dark"
      backgroundImage="https://images.unsplash.com/photo-1759352641978-f05389711f5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbmVvbiUyMHNpZ25zJTIwYW1lcmljYXxlbnwxfHx8fDE3NzA4MDU2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
      backgroundOverlay="rgba(15, 15, 15, 0.90)"
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
            Språk i USA
          </h1>
          
          <p 
            className="text-[#F2F2F2] opacity-90 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.25rem',
              lineHeight: 1.8
            }}
          >
            USA har ingen offisiell nasjonal språk, men engelsk er det dominerende språket. 
            Landet er rikt på språklig mangfold.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="space-y-8 mb-16">
          <LargeInfoBox
            icon={<GlobeIcon size={48} color="#C9A86A" />}
            title="Amerikansk engelsk"
            content="Amerikansk engelsk skiller seg fra britisk engelsk både i uttale, stavemåte og vokabular. Eksempler inkluderer 'color' vs 'colour', 'elevator' vs 'lift', og 'apartment' vs 'flat'. Amerikansk engelsk har også påvirket globalt språk gjennom populærkultur, teknologi og forretningsverdenen. Det finnes også distinkte regionale dialekter på tvers av landet."
          />
          
          <LargeInfoBox
            icon={<MicrophoneIcon size={48} color="#C9A86A" />}
            title="Minoritetsspråk"
            content="Over 350 språk snakkes i USA, noe som gjør det til et av verdens mest språklig mangfoldige land. Spansk er det nest mest snakkede språket med over 40 millioner spansktalende. Andre viktige språk inkluderer kinesisk, tagalog, vietnamesisk, fransk, koreansk og arabisk. Mange områder tilbyr tospråklige tjenester, spesielt i skoler og offentlige kontorer."
          />
        </div>
        
        {/* Regional Dialects */}
        <div className="mb-16">
          <h2 
            className="text-[#C9A86A] mb-8 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: 700
            }}
          >
            Amerikanske dialekter
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SmallInfoBox
              title="Southern Accent"
              content="Sørstatsakksenten er kjent for sin langsomme, melodiske tale med utvided vokaler. Vanlig i Texas, Georgia og Louisiana."
            />
            
            <SmallInfoBox
              title="New York Accent"
              content="Den ikoniske New York-aksenten med karakteristiske 'r'-dropp og distinkt intonasjon. Kjent fra film og TV."
            />
            
            <SmallInfoBox
              title="Boston Accent"
              content="Boston-aksenten er kjent for å droppe 'r' på slutten av ord og har britiske påvirkninger fra tidlig kolonitid."
            />
            
            <SmallInfoBox
              title="California Accent"
              content="Ofte sett på som 'standard' amerikansk, med avslappet intonasjon og moderne slangord som 'dude' og 'like'."
            />
            
            <SmallInfoBox
              title="Midwestern Accent"
              content="Den 'nøytrale' amerikanske aksenten som ofte brukes i nyheter og medieproduksjon. Tydelig uttale."
            />
            
            <SmallInfoBox
              title="Chicano English"
              content="Et unikt språkfenomen som blander spansk og engelsk, spesielt utbredt i sørvestlige delstater."
            />
          </div>
        </div>
        
        {/* Language Stats */}
        <div className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl p-8">
          <h3 
            className="text-[#C9A86A] mb-6 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2rem',
              fontWeight: 600
            }}
          >
            Språkstatistikk
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '350+', label: 'Språk i bruk' },
              { value: '78%', label: 'Snakker engelsk' },
              { value: '13%', label: 'Snakker spansk' },
              { value: '21%', label: 'Flerspråklige' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p 
                  className="text-[#C9A86A] mb-2"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '2.5rem',
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
        </div>
      </div>
    </PageLayout>
  );
}
