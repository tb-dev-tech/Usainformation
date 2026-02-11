import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { LargeInfoBox } from '../components/Cards';
import { StarIcon, USAMapIcon, GlobeIcon, FlagBadgeIcon } from '../components/Icons';

export function FaktaPage() {
  return (
    <PageLayout 
      variant="dark"
      backgroundImage="https://images.unsplash.com/photo-1729656231239-2eec3845466a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGZsYWclMjB3YXZpbmclMjBwYXRyaW90aWN8ZW58MXx8fHwxNzcwODA1NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
      backgroundOverlay="rgba(15, 15, 15, 0.85)"
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
            Fakta om USA
          </h1>
          
          <p 
            className="text-[#F2F2F2] opacity-90 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.25rem',
              lineHeight: 1.8
            }}
          >
            De forente stater er verdens tredje største land både i areal og befolkning. 
            Her er nøkkelfakta om denne innflytelsesrike nasjonen.
          </p>
        </div>
        
        {/* Info Boxes */}
        <div className="space-y-8">
          <LargeInfoBox
            icon={<FlagBadgeIcon size={48} color="#C9A86A" />}
            title="Grunnleggende informasjon"
            content="USA består av 50 delstater og ble grunnlagt 4. juli 1776. Hovedstaden er Washington D.C., og landet har over 330 millioner innbyggere. USA er en forbundsrepublikk med en demokratisk styreform basert på konstitusjonell lov. Nasjonen er kjent for sin kulturelle diversitet, med innbyggere fra hele verden."
          />
          
          <LargeInfoBox
            icon={<StarIcon size={48} color="#C9A86A" />}
            title="Politisk system"
            content="Det amerikanske politiske systemet er bygget på maktfordeling mellom tre grener: den lovgivende (Kongressen), den utøvende (Presidenten) og den dømmende (Høyesterett). Kongressen består av Senatet og Representantenes hus. Presidenten velges hvert fjerde år gjennom et valgmannskollegium. Dette systemet av checks and balances sikrer at ingen enkeltgren får for mye makt."
          />
          
          <LargeInfoBox
            icon={<GlobeIcon size={48} color="#C9A86A" />}
            title="Økonomi og handel"
            content="USA har verdens største økonomi målt i BNP. Landet er en global leder innen teknologi, finans, underholdning og innovasjon. Viktige industrier inkluderer bilindustrien, luftfart, medisinske teknologier og IT-sektoren. Silicon Valley er et globalt senter for teknologiutvikling. USAs dollaren er verdens viktigste reservevaluta."
          />
          
          <LargeInfoBox
            icon={<USAMapIcon size={48} color="#C9A86A" />}
            title="Samfunn og utdanning"
            content="USA har et mangfoldig utdanningssystem med både offentlige og private institusjoner. Landet er hjem til mange av verdens beste universiteter, inkludert Harvard, MIT, Stanford og Yale. Det amerikanske samfunnet er preget av individualisme, frihet og muligheten til å forfølge 'den amerikanske drømmen'. Landet har en rik historie med innvandring som har formet nasjonal identitet."
          />
        </div>
        
        {/* Statistics Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Befolkning', value: '330M+' },
            { label: 'Delstater', value: '50' },
            { label: 'Areal', value: '9.8M km²' },
            { label: 'Grunnlagt', value: '1776' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#C9A86A]/30 rounded-lg p-6 text-center hover:border-[#C9A86A] transition-all"
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
                className="text-[#F2F2F2] opacity-80"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
