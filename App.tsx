import React, { useState } from 'react';
import { Card, GameState, CardCategory } from './types';
import { CARD_DECK } from './data';
import { Rules } from './components/Rules';
import { GameCard } from './components/GameCard';
import { Button } from './components/Button';
import { RefreshCw, ArrowRight, Heart } from 'lucide-react';

const shuffleDeck = (deck: Card[]): Card[] => {
  const newDeck = [...deck];
  for (let i = newDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }
  return newDeck;
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [deck, setDeck] = useState<Card[]>([]);
  const [currentCard, setCurrentCard] = useState<Card | null>(null);
  const [drawnCount, setDrawnCount] = useState(0);

  // Initialize game with selected categories
  const startGame = (categories: CardCategory[]) => {
    // Filter deck based on selection
    const filteredDeck = CARD_DECK.filter(card => categories.includes(card.category));
    
    // Shuffle
    const shuffled = shuffleDeck(filteredDeck);
    
    setDeck(shuffled);
    if (shuffled.length > 0) {
      setCurrentCard(shuffled[0]);
      setDrawnCount(1);
      setGameState('playing');
    } else {
      alert("Please select at least one category!");
    }
  };

  const nextCard = () => {
    if (drawnCount >= deck.length) {
      setGameState('finished');
      return;
    }
    
    setCurrentCard(deck[drawnCount]);
    setDrawnCount(prev => prev + 1);
  };

  const restartGame = () => {
    setGameState('intro');
    setDrawnCount(0);
    setDeck([]);
    setCurrentCard(null);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden relative">
      
      {/* Background decoration elements */}
      <div className="fixed top-10 left-10 text-pink-200 animate-wiggle opacity-50 -z-10">
        <Heart size={100} />
      </div>
      <div className="fixed bottom-10 right-10 text-blue-200 animate-bounce-slow opacity-50 -z-10">
        <Heart size={150} />
      </div>

      {gameState === 'intro' && (
        <Rules onStart={startGame} />
      )}

      {gameState === 'playing' && currentCard && (
        <div className="flex flex-col items-center w-full max-w-md animate-fade-in">
          
          <div className="w-full flex justify-between items-center mb-2 px-4">
             <div className="text-rose-600 font-fun font-bold text-xl">
               Card {drawnCount}/{deck.length}
             </div>
             <button 
               onClick={restartGame} 
               className="text-slate-400 hover:text-rose-500 transition-colors"
               aria-label="Quit Game"
             >
               Quit
             </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/50 h-3 rounded-full mb-6 overflow-hidden border border-white/60">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500"
              style={{ width: `${(drawnCount / deck.length) * 100}%` }}
            ></div>
          </div>

          <GameCard 
            card={currentCard} 
            onNext={nextCard} 
            currentNumber={drawnCount}
            totalCards={deck.length}
          />

          <div className="mt-8 flex gap-4">
            <Button onClick={nextCard} size="lg" className="shadow-xl shadow-rose-200/50">
               Next Card <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      )}

      {gameState === 'finished' && (
        <div className="text-center bg-white/90 backdrop-blur rounded-3xl p-10 shadow-2xl border-4 border-white animate-pop-in">
          <Heart size={80} className="text-cupid-red mx-auto mb-6 animate-beat" />
          <h2 className="text-5xl font-hand text-cupid-purple mb-4">Game Over!</h2>
          <p className="font-clean text-xl text-slate-600 mb-8">
            You've finished the deck! <br/> hope you're still standing (and still in love)!
          </p>
          <Button onClick={restartGame} variant="secondary">
            <RefreshCw className="mr-2" /> Play Again
          </Button>
        </div>
      )}

    </div>
  );
};

export default App;