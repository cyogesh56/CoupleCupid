import React, { useState, useEffect } from 'react';
import { Card } from '../types';
import { Heart, Beer, Flame, Zap, HelpCircle } from 'lucide-react';

interface GameCardProps {
  card: Card;
  onNext: () => void;
  currentNumber: number;
  totalCards: number;
}

export const GameCard: React.FC<GameCardProps> = ({ card, onNext, currentNumber, totalCards }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  // Reset flip state when card changes
  useEffect(() => {
    setIsFlipped(false);
    // Auto flip after a tiny delay for effect
    const timer = setTimeout(() => setIsFlipped(true), 300);
    return () => clearTimeout(timer);
  }, [card]);

  const getCardStyle = (category: string) => {
    switch (category) {
      case 'drink': return 'bg-gradient-to-br from-blue-400 to-cyan-300 text-blue-900';
      case 'truth': return 'bg-gradient-to-br from-purple-400 to-fuchsia-300 text-purple-900';
      case 'dare': return 'bg-gradient-to-br from-emerald-400 to-lime-300 text-emerald-900';
      case 'challenge': return 'bg-gradient-to-br from-orange-400 to-amber-300 text-orange-900';
      case 'wild': return 'bg-gradient-to-br from-rose-500 to-pink-400 text-white';
      default: return 'bg-white text-gray-800';
    }
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'drink': return <Beer size={48} className="mb-4 animate-bounce" />;
      case 'truth': return <HelpCircle size={48} className="mb-4" />;
      case 'dare': return <Zap size={48} className="mb-4" />;
      case 'challenge': return <Flame size={48} className="mb-4" />;
      case 'wild': return <Heart size={48} className="mb-4 animate-pulse-fast" />;
      default: return <Heart size={48} />;
    }
  };

  const getTitle = (category: string) => {
    switch (category) {
      case 'drink': return 'DRINK!';
      case 'truth': return 'TRUTH';
      case 'dare': return 'DARE';
      case 'challenge': return 'CHALLENGE';
      case 'wild': return 'WILD CARD';
      default: return 'CARD';
    }
  };

  return (
    <div className="relative w-full max-w-sm aspect-[3/4] perspective-1000 mx-auto my-8">
      <div 
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d card-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* CARD BACK (Cover) */}
        <div className="absolute w-full h-full backface-hidden card-backface-hidden rounded-3xl shadow-2xl border-4 border-white overflow-hidden bg-cupid-pink">
          {/* CSS Pattern instead of external image for offline support */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_2px,transparent_2px)] [background-size:20px_20px]"></div>
          
          <div className="relative w-full h-full flex flex-col items-center justify-center">
             <Heart size={80} className="text-white drop-shadow-md animate-pulse" />
             <h2 className="text-4xl font-hand text-white mt-4 rotate-[-10deg]">Cupid's</h2>
             <h2 className="text-5xl font-hand text-white rotate-[-5deg] ml-8">Chaos</h2>
          </div>
        </div>

        {/* CARD FRONT (Content) */}
        <div 
          className={`absolute w-full h-full backface-hidden card-backface-hidden rotate-y-180 rounded-3xl shadow-2xl border-4 border-white p-6 flex flex-col items-center justify-between text-center ${getCardStyle(card.category)}`}
        >
          {/* Top Decoration */}
          <div className="w-full flex justify-between opacity-50">
             <Heart size={20} fill="currentColor" />
             <Heart size={20} fill="currentColor" />
          </div>

          <div className="flex-1 flex flex-col items-center justify-center w-full">
            {getIcon(card.category)}
            
            <h3 className="font-fun font-bold text-2xl uppercase tracking-widest mb-4 opacity-80 border-b-2 border-current pb-1">
              {getTitle(card.category)}
            </h3>
            
            <p className="font-clean font-bold text-2xl md:text-3xl leading-snug drop-shadow-sm">
              {card.content}
            </p>
            
            {card.instruction && (
              <div className="mt-6 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <p className="font-fun text-sm md:text-base font-semibold uppercase tracking-wide">
                  Instructions: {card.instruction}
                </p>
              </div>
            )}
          </div>

          {/* Bottom Number */}
          <div className="w-full flex justify-between items-end mt-4 opacity-60 font-mono text-sm">
             <span>#{card.id}</span>
             <span>{currentNumber} / {totalCards}</span>
          </div>
        </div>
      </div>
    </div>
  );
};