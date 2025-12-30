import React, { useState } from 'react';
import { Button } from './Button';
import { Heart, AlertCircle, Sparkles, Check } from 'lucide-react';
import { CardCategory } from '../types';

interface RulesProps {
  onStart: (selectedCategories: CardCategory[]) => void;
}

export const Rules: React.FC<RulesProps> = ({ onStart }) => {
  const [selectedCats, setSelectedCats] = useState<CardCategory[]>(['drink', 'truth', 'dare', 'challenge', 'wild']);

  const toggleCategory = (cat: CardCategory) => {
    if (selectedCats.includes(cat)) {
      if (selectedCats.length > 1) {
        setSelectedCats(selectedCats.filter(c => c !== cat));
      }
    } else {
      setSelectedCats([...selectedCats, cat]);
    }
  };

  const categories: {id: CardCategory, label: string, color: string}[] = [
    { id: 'drink', label: 'Drink', color: 'bg-blue-400' },
    { id: 'truth', label: 'Truth', color: 'bg-purple-400' },
    { id: 'dare', label: 'Dare', color: 'bg-emerald-400' },
    { id: 'challenge', label: 'Challenge', color: 'bg-orange-400' },
    { id: 'wild', label: 'Spicy / Wild', color: 'bg-pink-500' },
  ];

  return (
    <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-6 md:p-10 text-center border-4 border-white mx-4 animate-fade-in-up max-h-[90vh] overflow-y-auto">
      <div className="flex justify-center mb-4">
        <div className="relative">
          <Heart size={60} className="text-cupid-pink fill-cupid-pink animate-bounce-slow" />
          <Sparkles size={30} className="text-cupid-yellow absolute -top-2 -right-2 animate-spin-slow" />
        </div>
      </div>
      
      <h1 className="font-hand text-4xl md:text-6xl text-cupid-pink mb-2 drop-shadow-sm rotate-[-2deg]">
        Cupid's Couple Chaos
      </h1>
      <p className="font-clean text-lg text-slate-600 mb-6 max-w-md mx-auto">
        Customize your deck and get closer!
      </p>

      {/* Category Selection */}
      <div className="mb-8">
        <h3 className="font-fun text-xl text-slate-700 mb-4 font-bold">Select Categories:</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const isSelected = selectedCats.includes(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => toggleCategory(cat.id)}
                className={`px-4 py-2 rounded-xl font-bold transition-all transform hover:scale-105 border-2 flex items-center ${
                  isSelected 
                    ? `${cat.color} text-white border-transparent shadow-md` 
                    : 'bg-gray-100 text-gray-400 border-gray-200'
                }`}
              >
                {isSelected && <Check size={16} className="mr-1" />}
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="text-left bg-rose-50 rounded-2xl p-5 mb-8 border-2 border-rose-100">
        <h3 className="font-fun text-lg text-rose-600 mb-3 flex items-center">
          <AlertCircle className="mr-2" size={20}/> 
          Quick Rules
        </h3>
        <ul className="space-y-2 font-clean text-slate-700 text-sm md:text-base">
          <li className="flex items-start">
            <span className="font-bold text-rose-500 mr-2">1.</span>
            Sit close with drinks ready.
          </li>
          <li className="flex items-start">
            <span className="font-bold text-rose-500 mr-2">2.</span>
            Take turns drawing cards.
          </li>
          <li className="flex items-start">
            <span className="font-bold text-rose-500 mr-2">3.</span>
            <span className="italic">Drink</span>, <span className="italic">Truth</span>, or <span className="italic">Dare</span> based on the card!
          </li>
        </ul>
      </div>

      <Button onClick={() => onStart(selectedCats)} size="lg" className="w-full md:w-auto animate-pulse-fast">
        Start The Game
      </Button>
    </div>
  );
};