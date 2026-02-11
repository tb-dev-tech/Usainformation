import React from 'react';
import { PageLayout } from '../components/PageLayout';
import { LargeInfoBox, SmallInfoBox } from '../components/Cards';
import { BurgerIcon } from '../components/Icons';

export function MatkulturPage() {
  return (
    <PageLayout 
      variant="dark"
      backgroundImage="https://images.unsplash.com/photo-1634539453238-564a0273266a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGJ1cmdlciUyMGZvb2QlMjBCQlF8ZW58MXx8fHwxNzcwODA1NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
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
            Amerikansk matkultur
          </h1>
          
          <p 
            className="text-[#F2F2F2] opacity-90 max-w-3xl mx-auto"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.25rem',
              lineHeight: 1.8
            }}
          >
            Amerikansk mat er mangfoldig og påvirket av innvandring fra hele verden. 
            Fra BBQ og burgere til gourmet-retter og regional spesialiteter.
          </p>
        </div>
        
        {/* Main Food Sections */}
        <div className="space-y-8 mb-16">
          <LargeInfoBox
            icon={<BurgerIcon size={48} color="#C9A86A" />}
            title="Ikonisk amerikansk mat"
            content="Amerikanske burgere er kjent over hele verden, fra fast food til gourmet-varianter. Hot dogs er en baseballtradisjon og gatemat-favoritt. Steaks og BBQ representerer amerikanske grilltradisjoner. Fried chicken, spesielt fra Sør-statene, er en nasjonal rett. Mac and cheese, pizza (amerikanisert versjon) og chicken wings er allestedsnærværende. Donuts, bagels og pancakes dominerer frokost. Apple pie symboliserer amerikansk tradisjon – 'As American as apple pie'."
          />
          
          <LargeInfoBox
            title="Regional matkultur"
            content="Hver region har sine unike kulinariske tradisjoner. Sør-statene er kjent for soul food, grits, og sørstats-BBQ. Texas-style BBQ med brisket skiller seg fra Carolina-style med pulled pork. New England tilbyr sjømat som lobster rolls og clam chowder. Louisiana har kreolsk og cajun-mat som gumbo og jambalaya. California-mat fokuserer på friske, lokale ingredienser og fusion-retter. Midwest er kjent for comfort food og casseroles. Southwest blander meksikanske og amerikanske smaker med Tex-Mex."
          />
        </div>
        
        {/* Regional Dishes */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SmallInfoBox
              title="Philly Cheesesteak"
              content="Philadelphias signaturrett med tynnskåret biffkjøtt, smeltet ost og løk på en lang brødrulle."
            />
            
            <SmallInfoBox
              title="Chicago Deep-Dish Pizza"
              content="Tykkbunn-pizza fylt høyt med ost, tomatsaus og toppings. En Chicago-institusjon."
            />
            
            <SmallInfoBox
              title="New York Bagels"
              content="Den perfekte bagelen – kokt og bakt. Ofte servert med lox (røkt laks) og cream cheese."
            />
            
            <SmallInfoBox
              title="Buffalo Wings"
              content="Fra Buffalo, New York. Friterte kyllingvinger dekket i krydret saus, servert med blue cheese."
            />
            
            <SmallInfoBox
              title="Southern Fried Chicken"
              content="Mørt kyllingkjøtt panert og fritert til gyllen perfeksjon. En sørstatsklassiker."
            />
            
            <SmallInfoBox
              title="Tacos og Burritos"
              content="Tex-Mex favoritten med kjøtt, bønner, ost og salsa. Chipotle og Taco Bell har gjort det mainstream."
            />
          </div>
        </div>
        
        {/* Food History */}
        <div className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#C9A86A]/30 rounded-xl p-8 mb-8">
          <h3 
            className="text-[#C9A86A] mb-6"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2rem',
              fontWeight: 600
            }}
          >
            Matkulturhistorie
          </h3>
          
          <p 
            className="text-[#F2F2F2] opacity-90"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.125rem',
              lineHeight: 1.8
            }}
          >
            Amerikansk matkultur er formet av bølger av innvandring. Italienere brakte pizza og pasta. 
            Kinesiske innvandrere skapte Chinese-American-retter som General Tso's chicken. Tyske 
            innvandrere introduserte pølser som ble til hot dogs. Meksikansk innflytelse ga tacos og 
            burritos. Fast food-kjeder som McDonald's, KFC og Subway revolusjonerte matindustrien og 
            spredte amerikansk mat globalt. Food trucks og gourmet-burgere representerer moderne trender. 
            Farm-to-table-bevegelsen fokuserer på lokale, bærekraftige ingredienser.
          </p>
        </div>
        
        {/* Food Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '160K+', label: 'Fast food restauranter' },
            { value: '50M', label: 'Pizza spist/dag' },
            { value: '20B', label: 'Hot dogs/år' },
            { value: '$1.2T', label: 'Matindustri verdi' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#C9A86A]/30 rounded-lg p-6 text-center"
            >
              <p 
                className="text-[#C9A86A] mb-2"
                style={{ 
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '1.75rem',
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
    </PageLayout>
  );
}
