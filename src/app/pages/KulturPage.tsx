import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { LargeInfoBox, SmallInfoBox } from '../components/Cards';
import { FilmIcon, MicrophoneIcon } from '../components/Icons';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function KulturPage() {
  return (
    <PageLayout 
      variant="dark"
      backgroundImage="https://images.unsplash.com/photo-1762235634044-ac18d682a0d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY2luZW1hJTIwbW92aWUlMjB0aGVhdGVyfGVufDF8fHx8MTc3MDc0NTM0NXww&ixlib=rb-4.1.0&q=80&w=1080"
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
            Amerikansk kultur
          </h1>
          
          <p 
            className="text-[#F2F2F2] opacity-90 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.25rem',
              lineHeight: 1.8
            }}
          >
            Amerikansk kultur har formet verden gjennom musikk, film, sport og innovasjon. 
            Fra Hollywood til Broadway, fra jazz til hip-hop.
          </p>
        </div>
        
        {/* Main Cultural Sections */}
        <div className="space-y-8 mb-16">
          <LargeInfoBox
            icon={<MicrophoneIcon size={48} color="#C9A86A" />}
            title="Musikk"
            content="USA er fødestedet for mange av verdens mest innflytelsesrike musikksjangre. Jazz ble født i New Orleans på begynnelsen av 1900-tallet. Blues fra det dype sør la grunnlaget for rock'n'roll. Country-musikk fra Nashville representerer amerikanske landsbygdtradisjoner. Hip-hop og rap revolusjonerte global musikk fra 1970-tallet. Moderne amerikansk musikk inkluderer pop, R&B, elektronisk musikk og indie. Ikoner som Elvis Presley, Michael Jackson, Madonna og Beyoncé har definert populærmusikk."
          />
          
          <LargeInfoBox
            icon={<FilmIcon size={48} color="#C9A86A" />}
            title="Film og underholdning"
            content="Hollywood er verdens underholdningshovedstad og hjemmet til den globale filmindustrien. USA produserer flest filmer i verden og har skapt ikoniske filmsjangre som westerns, action, og superhelt-filmer. Oscar-utdelingen er filmverdenens mest prestisjefylte arrangement. Netflix, Disney og andre amerikanske selskaper dominerer streaming. Broadway i New York er sentrum for teaterkunst med verdenskjente musikaler som Hamilton og The Lion King."
          />
        </div>
        
        {/* Sports Section */}
        <div className="mb-16">
          <h2 
            className="text-[#C9A86A] mb-8 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: 700
            }}
          >
            Amerikansk sport
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* NFL */}
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659092375775-4e72014d7818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbWVyaWNhbiUyMGZvb3RiYWxsJTIwTkZMJTIwc3RhZGl1bXxlbnwxfHx8fDE3NzA4MjQ1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="NFL Football"
                className="w-full h-48 object-cover rounded-lg mb-4 border border-[#C9A86A]/30"
              />
              <SmallInfoBox
                title="Amerikansk fotball (NFL)"
                content="Den mest populære sporten i USA. Super Bowl er årets største sportsbegivenhet med over 100 millioner seere."
              />
            </div>
            
            {/* NBA */}
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1612151387840-62fb3b521841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNrZXRiYWxsJTIwTkJBJTIwZ2FtZSUyMGNvdXJ0fGVufDF8fHx8MTc3MDgyNDU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="NBA Basketball"
                className="w-full h-48 object-cover rounded-lg mb-4 border border-[#C9A86A]/30"
              />
              <SmallInfoBox
                title="Basketball (NBA)"
                content="Oppfunnet i USA i 1891. NBA er verdens premier basketballiga med globale stjerner som LeBron James og Stephen Curry."
              />
            </div>
            
            {/* MLB */}
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1651179853369-c20d476891f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXNlYmFsbCUyME1MQiUyMHN0YWRpdW0lMjBnYW1lfGVufDF8fHx8MTc3MDgyNDU3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="MLB Baseball"
                className="w-full h-48 object-cover rounded-lg mb-4 border border-[#C9A86A]/30"
              />
              <SmallInfoBox
                title="Baseball (MLB)"
                content="Kalt 'America's pastime'. Major League Baseball er den eldste profesjonelle sportligaen i USA, grunnlagt i 1869."
              />
            </div>
            
            {/* NHL */}
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681771701629-328d03c4ddf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY2UlMjBob2NrZXklMjBOSEwlMjByaW5rfGVufDF8fHx8MTc3MDgyNDU4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="NHL Hockey"
                className="w-full h-48 object-cover rounded-lg mb-4 border border-[#C9A86A]/30"
              />
              <SmallInfoBox
                title="Ishockey (NHL)"
                content="Populært spesielt i nordlige delstater og Canada. Stanley Cup er en av sportens eldste og mest prestisjetunge trofeer."
              />
            </div>
            
            {/* MLS */}
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681313171433-f92cf1eaccae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyME1MUyUyMHN0YWRpdW18ZW58MXx8fHwxNzcwODI0NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="MLS Soccer"
                className="w-full h-48 object-cover rounded-lg mb-4 border border-[#C9A86A]/30"
              />
              <SmallInfoBox
                title="Fotball (MLS)"
                content="Vokser raskt i popularitet med Major League Soccer. USA arrangerte VM i 1994 og skal være vertskap igjen i 2026."
              />
            </div>
            
            {/* College Sports */}
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1557174963-364e92b8dbc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3BvcnRzJTIwc3RhZGl1bSUyMGNyb3dkfGVufDF8fHx8MTc3MDgyNDU4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="College Sports"
                className="w-full h-48 object-cover rounded-lg mb-4 border border-[#C9A86A]/30"
              />
              <SmallInfoBox
                title="College sport"
                content="Universitet-sport er enormt populært, spesielt college football og basketball, med massive arenaer og dedikerte fans."
              />
            </div>
          </div>
        </div>
        
        {/* Pop Culture */}
        <div className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl p-8">
          <h3 
            className="text-[#C9A86A] mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2rem',
              fontWeight: 600
            }}
          >
            Populærkultur og medier
          </h3>
          
          <p 
            className="text-[#F2F2F2] opacity-90"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem',
              lineHeight: 1.8
            }}
          >
            Amerikansk populærkultur påvirker hele verden gjennom TV-serier, sosiale medier, mote og 
            livsstilstrender. Fra Friends og Breaking Bad til TikTok og Instagram – amerikanske medier 
            setter globale trender. Silicon Valley-selskaper som Apple, Google og Facebook har transformert 
            hvordan verden kommuniserer. Amerikansk mote fra New York og Los Angeles inspirerer designere 
            verden over. Fast food-kjeder som McDonald's og Starbucks har blitt globale ikoner.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}