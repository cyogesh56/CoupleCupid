import React from 'react';
import { Button } from './Button';
import { Heart, AlertCircle, Sparkles } from 'lucide-react';

interface RulesProps {
  onStart: () => void;
}

export const Rules: React.FC<RulesProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 text-center border-4 border-white mx-4 animate-fade-in-up">
      <div className="flex justify-center mb-6">
        <div className="relative">
          <Heart size={80} className="text-cupid-pink fill-cupid-pink animate-bounce-slow" />
          <Sparkles size={40} className="text-cupid-yellow absolute -top-4 -right-4 animate-spin-slow" />
        </div>
      </div>
      
      <h1 className="font-hand text-5xl md:text-7xl text-cupid-pink mb-4 drop-shadow-sm rotate-[-2deg]">
        Cupid's Couple Chaos
      </h1>
      <p className="font-clean text-xl text-slate-600 mb-8 max-w-md mx-auto">
        The ultimate card game for couples to drink, laugh, and get closer. 
      </p>

      <div className="text-left bg-rose-50 rounded-2xl p-6 mb-8 border-2 border-rose-100">
        <h3 className="font-fun text-xl text-rose-600 mb-4 flex items-center">
          <AlertCircle className="mr-2" size={24}/> 
          How to Play
        </h3>
        <ul className="space-y-3 font-clean text-slate-700">
          <li className="flex items-start">
            <span className="font-bold text-rose-500 mr-2">1.</span>
            Sit close to your partner with your favorite drinks ready.
          </li>
          <li className="flex items-start">
            <span className="font-bold text-rose-500 mr-2">2.</span>
            Take turns drawing a card from the deck of 99.
          </li>
          <li className="flex items-start">
            <span className="font-bold text-rose-500 mr-2">3.</span>
            Read the card out loud and follow the instructions:
            <ul className="ml-6 mt-1 space-y-1 text-sm text-slate-500 list-disc">
               <li><strong className="text-blue-500">Drink:</strong> Drink if it applies to you.</li>
               <li><strong className="text-purple-500">Truth:</strong> Answer honestly or drink.</li>
               <li><strong className="text-emerald-500">Dare:</strong> Do the action or drink.</li>
               <li><strong className="text-orange-500">Challenge:</strong> Compete! Loser drinks.</li>
            </ul>
          </li>
          <li className="flex items-start">
            <span className="font-bold text-rose-500 mr-2">4.</span>
            The game ends when you finish the deck or pass out (kidding, please drink responsibly!).
          </li>
        </ul>
      </div>

      <Button onClick={onStart} size="lg" className="w-full md:w-auto animate-pulse-fast">
        Start The Game
      </Button>
    </div>
  );
};