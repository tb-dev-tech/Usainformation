import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { LargeInfoBox, SmallInfoBox } from '../components/Cards';
import { StarIcon, FlagBadgeIcon } from '../components/Icons';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function TradisjonerPage() {
  return (
    <PageLayout 
      variant="dark"
      backgroundImage="https://images.unsplash.com/photo-1595567818311-57a0736507d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJld29ya3MlMjBjZWxlYnJhdGlvbiUyMG5pZ2h0JTIwc2t5fGVufDF8fHx8MTc3MDcxNzI4MXww&ixlib=rb-4.1.0&q=80&w=1080"
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
            Amerikanske tradisjoner
          </h1>
          
          <p 
            className="text-[#F2F2F2] opacity-90 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.25rem',
              lineHeight: 1.8
            }}
          >
            Amerikanske høytider og tradisjoner reflekterer landets historie, verdier og mangfoldige kultur. 
            Fra nasjonale feiringer til hverdagsritualer.
          </p>
        </div>
        
        {/* Major Holidays */}
        <div className="space-y-8 mb-16">
          <LargeInfoBox
            icon={<FlagBadgeIcon size={48} color="#C9A86A" />}
            title="Independence Day (4. juli)"
            content="USAs nasjonaldag feirer frigjøringen fra britisk styre i 1776. Dette er landets viktigste patriotiske høytid med fyrverkeri, parader, grillferier og familesammenkomster. Stjernebanneret vaier fra hvert hus, og amerikanere kledd i rødt, hvitt og blått feirer nasjonal stolthet. Fyrverkeriet symboliserer 'rockets' red glare' fra nasjonalsangen. Macy's fyrverkerishow i New York er et av de største i verden."
          />
          
          <LargeInfoBox
            icon={<StarIcon size={48} color="#C9A86A" />}
            title="Thanksgiving"
            content="Feiret fjerde torsdag i november, er Thanksgiving en av USAs mest elskede høytider. Familien samles til en festmåltid med kalkun, søtpoteter, kremet mais og gresskarspai. Tradisjonen går tilbake til 1621 da pilgrimer og urinnvånere feiret sammen. Macy's Thanksgiving Day Parade i New York med gigantiske ballonger er en TV-tradisjon. Dagen etter er Black Friday – starten på julehandelen."
          />
        </div>
        
        {/* Other Traditions */}
        <div className="mb-16">
          <h2 
            className="text-[#C9A86A] mb-8 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: 700
            }}
          >
            Årlige tradisjoner
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SmallInfoBox
              title="Halloween (31. oktober)"
              content="Barn kler seg ut og går 'trick-or-treating' for godteri. Gresskar skjæres ut til Jack-o'-lanterns. Spøkelseshus og grøsserfilmer."
            />
            
            <SmallInfoBox
              title="Christmas (25. desember)"
              content="Juletre, julenissen, gaver og julesanger. Familietradisjoner inkluderer pepperkakehus, melk til julenissen og strømper over peisen."
            />
            
            <SmallInfoBox
              title="Memorial Day (siste mandag i mai)"
              content="Ærer falne soldater. Markerer uoffisiell sommerstart med grillferier, parader og besøk til militære kirkegårder."
            />
            
            <SmallInfoBox
              title="Labor Day (første mandag i september)"
              content="Feirer arbeidernes bidrag. Markerer slutten på sommeren med piknikker, parader og siste stranddager."
            />
            
            <SmallInfoBox
              title="Super Bowl Sunday"
              content="Uoffisiell nasjonal helligdag. Venner samles til Super Bowl-party med chicken wings, nachos og reklamepauser."
            />
            
            <SmallInfoBox
              title="Graduation ceremonies"
              content="Eksamensfeiringer er store begivenheter med cap and gown, taler og familiefester for high school og college."
            />
          </div>
        </div>
        
        {/* Cultural Rituals */}
        <div className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl p-8 mb-16">
          <h3 
            className="text-[#C9A86A] mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2rem',
              fontWeight: 600
            }}
          >
            Hverdagsritualer og skikker
          </h3>
          
          <p 
            className="text-[#F2F2F2] opacity-90 mb-6"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem',
              lineHeight: 1.8
            }}
          >
            Amerikanske hverdagsritualer inkluderer morgenkaffestopp, high school prom (avslutningsball), 
            college tailgate-fester før football-kamper, og baseball-kamper om sommeren. Tipping er en 
            forventet praksis på restauranter (15-20%). 'Small talk' med fremmede er vanlig og ansees som 
            høflig. Sunday brunch er en sosial tradisjon. Mange amerikanere tar pride i sin 'lawn' (plen) 
            og hagearbeid. Road trips og camping er populære sommeraktiviteter som feirer landets størrelse og skjønnhet.
          </p>
        </div>
        
        {/* Regional Specialties */}
        <div className="mb-16">
          <h2 
            className="text-[#C9A86A] mb-8 text-center"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: 700
            }}
          >
            Regionale spesialiteter
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Philly Cheesesteak */}
            <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760390952092-03cf0a020f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsbHklMjBjaGVlc2VzdGVhayUyMHNhbmR3aWNofGVufDF8fHx8MTc3MDgwMTQ1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Philly Cheesesteak"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 
                  className="text-[#C9A86A] mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}
                >
                  Philly Cheesesteak
                </h3>
                <p 
                  className="text-[#F2F2F2] opacity-90"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.6
                  }}
                >
                  Ikonisk sandwich fra Philadelphia med tynnskåret biff, smeltet ost og løk på italiensk brød.
                </p>
              </div>
            </div>
            
            {/* Buffalo Wings */}
            <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1631897788978-da06ec45adcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWZmYWxvJTIwd2luZ3MlMjBjaGlja2VufGVufDF8fHx8MTc3MDgyNDU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Buffalo Wings"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 
                  className="text-[#C9A86A] mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}
                >
                  Buffalo Wings
                </h3>
                <p 
                  className="text-[#F2F2F2] opacity-90"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.6
                  }}
                >
                  Fra Buffalo, New York – krydrede kyllingvinger servert med blue cheese dressing og selleristenger.
                </p>
              </div>
            </div>
            
            {/* Chicago Deep-Dish Pizza */}
            <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1734730594447-9ae47bcb255f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGljYWdvJTIwZGVlcCUyMGRpc2glMjBwaXp6YXxlbnwxfHx8fDE3NzA4MjQ1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chicago Deep-Dish Pizza"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 
                  className="text-[#C9A86A] mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}
                >
                  Chicago Deep-Dish Pizza
                </h3>
                <p 
                  className="text-[#F2F2F2] opacity-90"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.6
                  }}
                >
                  Tykkbunn pizza fra Chicago med lag på lag av ost, toppings og tomatsaus.
                </p>
              </div>
            </div>
            
            {/* New York Bagels */}
            <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770817985811-51c1e1f3e514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBZb3JrJTIwYmFnZWwlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzcwODI0NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="New York Bagels"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 
                  className="text-[#C9A86A] mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}
                >
                  New York Bagels
                </h3>
                <p 
                  className="text-[#F2F2F2] opacity-90"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.6
                  }}
                >
                  Ferske bagels med cream cheese og laks – en New York-frokostklassiker.
                </p>
              </div>
            </div>
            
            {/* Southern Fried Chicken */}
            <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1597900121060-cf21f1cfa5e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aGVybiUyMGZyaWVkJTIwY2hpY2tlbnxlbnwxfHx8fDE3NzA4MjQ1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Southern Fried Chicken"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 
                  className="text-[#C9A86A] mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}
                >
                  Southern Fried Chicken
                </h3>
                <p 
                  className="text-[#F2F2F2] opacity-90"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.6
                  }}
                >
                  Sørstats-tradisjon med sprø panert kylling, ofte servert med biscuits og gravy.
                </p>
              </div>
            </div>
            
            {/* Tacos and Burritos */}
            <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1680737255417-b0ec1586cb28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNZXhpY2FuJTIwdGFjb3MlMjBidXJyaXRvc3xlbnwxfHx8fDE3NzA4MjQ1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tacos and Burritos"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 
                  className="text-[#C9A86A] mb-3"
                  style={{ 
                    fontFamily: 'Playfair Display, serif',
                    fontSize: '1.5rem',
                    fontWeight: 600
                  }}
                >
                  Tacos og Burritos
                </h3>
                <p 
                  className="text-[#F2F2F2] opacity-90"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    lineHeight: 1.6
                  }}
                >
                  Meksikansk-amerikansk fusjon, spesielt populært i sørvest med Tex-Mex-varianter.
                </p>
              </div>
            </div>
          </div>
          
          {/* Fast Food Logos Section */}
          <div className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl p-8">
            <h3 
              className="text-[#C9A86A] mb-6 text-center"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                fontSize: '2rem',
                fontWeight: 600
              }}
            >
              Amerikanske fastfood-ikoner
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558624153-392091714599?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNY0RvbmFsZHMlMjBsb2dvJTIwc2lnbnxlbnwxfHx8fDE3NzA4MjQ1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fast Food Chain"
                className="h-24 w-auto object-contain rounded-lg"
              />
              <p 
                className="text-[#F2F2F2] opacity-80 max-w-2xl text-center"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  lineHeight: 1.6
                }}
              >
                McDonald's, Burger King, KFC, Taco Bell, Wendy's og Subway – amerikanske fastfood-kjeder 
                har blitt globale symboler på amerikansk kultur og har spisesteder i over 100 land.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}