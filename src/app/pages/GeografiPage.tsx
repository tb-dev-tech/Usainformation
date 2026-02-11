import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { LargeInfoBox, SmallInfoBox } from '../components/Cards';
import { USAMapIcon } from '../components/Icons';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function GeografiPage() {
  return (
    <PageLayout 
      variant="dark"
      backgroundImage="https://images.unsplash.com/photo-1678653091742-e3c0e8ea3657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3BvZ3JhcGhpYyUyMG1hcCUyMG1vdW50YWlucyUyMHRlcnJhaW58ZW58MXx8fHwxNzcwODA1NjU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
      backgroundOverlay="rgba(15, 15, 15, 0.87)"
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
            Geografi
          </h1>
          
          <p 
            className="text-[#F2F2F2] opacity-90 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.25rem',
              lineHeight: 1.8
            }}
          >
            USA strekker seg fra Atlanterhavet til Stillehavet og omfatter enorme geografiske variasjoner 
            – fra tørre ørkener til frodige skoger og høye fjellkjeder.
          </p>
        </div>
        
        {/* USA Map Image */}
        <div className="mb-16">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1606933987885-1834b4d326bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVU0ElMjBtYXAlMjBhbWVyaWNhJTIwZ2VvZ3JhcGh5fGVufDF8fHx8MTc3MDgyNDU4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="USA Map"
            className="w-full max-w-4xl mx-auto rounded-xl border border-[#C9A86A]/30 shadow-2xl"
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
        
        {/* Main Geographic Info */}
        <div className="space-y-8 mb-16">
          <LargeInfoBox
            icon={<USAMapIcon size={48} color="#C9A86A" />}
            title="Grunnleggende geografi"
            content="USA er verdens tredje største land med et totalareal på 9,8 millioner kvadratkilometer. Landet grenser til Canada i nord og Mexico i sør. Det har kystlinjer langs både Atlanterhavet, Stillehavet og Mexicogolfen. De 48 sammenhengende delstatene ligger mellom 25° og 49° nordlig bredde. Alaska ligger nordvest for Canada, mens Hawaii ligger i Stillehavet."
          />
          
          <LargeInfoBox
            title="Fjellkjeder og landskap"
            content="Rocky Mountains strekker seg fra Canada til New Mexico og er USAs viktigste fjellkjede. Appalachene løper langs østkysten og er betydelig eldre og lavere. Sierra Nevada i California huser Mount Whitney, det høyeste fjellet i de 48 sammenhengende statene på 4.421 meter. Great Plains er et enormt prerielandskap i sentrale USA. Landskapet varierer fra Alaskas tundra til Floridas våtmarker."
          />
        </div>
        
        {/* Landscape Types */}
        <div className="mb-16">
          <h2 
            className="text-[#C9A86A] mb-8 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: 700
            }}
          >
            Landskapstyper
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SmallInfoBox
              title="Fjell og høyland"
              content="Rocky Mountains, Sierra Nevada, Cascade Range og Appalachene tilbyr spektakulær natur og friluftsliv."
            />
            
            <SmallInfoBox
              title="Prerie og sletter"
              content="Great Plains strekker seg gjennom midtvesten med endeløse åpne landskap og kornproduksjon."
            />
            
            <SmallInfoBox
              title="Ørkener"
              content="Mojave, Sonoran og Chihuahuan-ørknene i sørvest med unike økosystemer og ekstreme temperaturer."
            />
            
            <SmallInfoBox
              title="Skoger og regnskoger"
              content="Fra Pacific Northwest's tempererte regnskoger til østkystens løvskoger og Alaska's boreale skoger."
            />
            
            <SmallInfoBox
              title="Kystområder"
              content="Over 19.000 km kystlinje med varierte landskap fra klippekyst i Maine til sandstrender i California."
            />
            
            <SmallInfoBox
              title="Vann og elver"
              content="Mississippi River, Great Lakes, Colorado River og tusenvis av innsjøer former landskapet."
            />
          </div>
        </div>
        
        {/* Climate Section */}
        <div className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl p-8 mb-16">
          <h3 
            className="text-[#C9A86A] mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2rem',
              fontWeight: 600
            }}
          >
            Klima og værmønstre
          </h3>
          
          <p 
            className="text-[#F2F2F2] opacity-90 mb-6"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem',
              lineHeight: 1.8
            }}
          >
            USA opplever nesten alle klimasoner på grunn av sin enorme størrelse og varierte topografi. 
            Fra arktisk klima i Alaska til tropisk klima i Hawaii og Florida. Midtvesten opplever 
            ekstreme temperaturvariasjoner med kalde vintre og varme somre. Vestkysten har mildt 
            middelhavklima, mens sørvest er preget av tørre ørkenforhold. Landet opplever også 
            dramatisk vær som orkaner, tornadoer og snøstormer.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '6', label: 'Klimasoner' },
              { value: '58', label: 'Nasjonalparker' },
              { value: '9.8M', label: 'km² areal' },
              { value: '19.000', label: 'km kystlinje' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
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
        </div>
        
        {/* Poster Placeholder */}
        <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border-2 border-dashed border-[#C9A86A]/50 rounded-xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="aspect-[3/4] max-h-96 bg-[#0F0F0F]/40 rounded-lg border border-[#C9A86A]/30 flex items-center justify-center mb-4">
              
            </div>
            <p 
              className="text-[#F2F2F2] opacity-70 text-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            ></p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}