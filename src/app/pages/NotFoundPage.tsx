import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';
import { PrimaryButton } from '../components/Buttons';

export function NotFoundPage() {
  const navigate = useNavigate();
  
  return (
    <PageLayout variant="dark">
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-8">
        <div className="text-center max-w-2xl">
          <h1 
            className="mb-6 text-[#C9A86A]"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(4rem, 15vw, 10rem)',
              fontWeight: 700,
              lineHeight: 1
            }}
          >
            404
          </h1>
          
          <h2 
            className="mb-6 text-[#F2F2F2]"
            style={{ 
              fontFamily: 'Playfair Display, serif',
              fontSize: '2.5rem',
              fontWeight: 700
            }}
          >
            Siden ble ikke funnet
          </h2>
          
          <p 
            className="mb-12 text-[#F2F2F2] opacity-80"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontSize: '1.25rem',
              lineHeight: 1.8
            }}
          >
            Beklager, siden du leter etter eksisterer ikke. 
            La oss ta deg tilbake til hjemmesiden.
          </p>
          
          <PrimaryButton 
            variant="dark"
            onClick={() => navigate('/')}
          >
            Tilbake til hjemmesiden
          </PrimaryButton>
        </div>
      </div>
    </PageLayout>
  );
}
