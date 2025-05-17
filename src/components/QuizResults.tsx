
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  let message = '';
  let emoji = '';
  
  if (percentage >= 90) {
    message = "Amazing! You're a robotics expert!";
    emoji = '🏆';
  } else if (percentage >= 70) {
    message = "Great job! You know your tech!";
    emoji = '🌟';
  } else if (percentage >= 50) {
    message = "Not bad! You're learning!";
    emoji = '👍';
  } else {
    message = "Keep learning about machines and robots!";
    emoji = '📚';
  }
  
  return (
    <div className="max-w-md mx-auto bg-quiz-card rounded-xl shadow-lg p-8 border-2 border-slate-700">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="text-6xl animate-float">{emoji}</div>
        
        <h2 className="text-3xl font-bold text-white">Quiz Complete!</h2>
        
        <div className="w-full bg-slate-700 rounded-full h-4 my-4">
          <div 
            className={cn(
              "h-4 rounded-full",
              percentage >= 70 ? "bg-quiz-correct" : percentage >= 50 ? "bg-yellow-500" : "bg-quiz-wrong"
            )}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        <p className="text-2xl font-bold text-white">
          You got <span className="text-primary">{score}</span> out of <span>{totalQuestions}</span> correct!
        </p>
        
        <p className="text-gray-300">{message}</p>
        
        <Button onClick={onRestart} className="w-full mt-6 bg-primary hover:bg-primary/80">
          Play Again
        </Button>
        
        <div className="mt-8 text-xs text-gray-500">
          <p>© 2025 Vizuara AI Lab</p>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
