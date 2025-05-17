
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { QuizItem } from '@/types/quiz';
import { cn } from '@/lib/utils';

interface QuizCardProps {
  quizItem: QuizItem;
  onAnswer: (answer: 'robot' | 'machine') => void;
  selectedAnswer: 'robot' | 'machine' | null;
  isCorrect: boolean | null;
  showFeedback: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  quizItem, 
  onAnswer, 
  selectedAnswer, 
  isCorrect, 
  showFeedback 
}) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="quiz-card w-full max-w-md mx-auto">
      <div className={cn(
        "quiz-card-inner rounded-xl bg-quiz-card shadow-lg p-6 border-2 border-slate-700",
        showFeedback && isCorrect && "border-quiz-correct",
        showFeedback && isCorrect === false && "border-quiz-wrong"
      )}>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold text-white mb-2">{quizItem.name}</h2>
          
          {/* Placeholder image with fallback */}
          <div className="w-full aspect-square bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center relative">
            {imageError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-700">
                <span className="text-5xl">{quizItem.name.charAt(0)}</span>
              </div>
            ) : (
              <img 
                src={quizItem.image || `/placeholder.svg`} 
                alt={quizItem.name}
                className="w-full h-full object-contain p-4" 
                onError={handleImageError}
              />
            )}
            
            {showFeedback && (
              <div className={cn(
                "absolute top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center",
                isCorrect ? "bg-quiz-correct" : "bg-quiz-wrong"
              )}>
                {isCorrect ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            )}
          </div>
          
          <p className="text-gray-300 text-center">{quizItem.purpose}</p>
          
          <div className="flex space-x-4 mt-6 w-full">
            <Button 
              className={cn(
                "flex-1 bg-quiz-robot hover:bg-quiz-robot/80",
                selectedAnswer === 'robot' && showFeedback && "opacity-50",
                selectedAnswer === 'robot' && quizItem.type === 'robot' && "ring-2 ring-quiz-correct",
                selectedAnswer === 'robot' && quizItem.type !== 'robot' && "ring-2 ring-quiz-wrong"
              )}
              onClick={() => onAnswer('robot')}
              disabled={!!selectedAnswer}
            >
              Robot
            </Button>
            <Button 
              className={cn(
                "flex-1 bg-quiz-machine hover:bg-quiz-machine/80",
                selectedAnswer === 'machine' && showFeedback && "opacity-50",
                selectedAnswer === 'machine' && quizItem.type === 'machine' && "ring-2 ring-quiz-correct",
                selectedAnswer === 'machine' && quizItem.type !== 'machine' && "ring-2 ring-quiz-wrong"
              )}
              onClick={() => onAnswer('machine')}
              disabled={!!selectedAnswer}
            >
              Machine
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
