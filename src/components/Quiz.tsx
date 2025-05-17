
import React, { useState, useEffect } from 'react';
import { quizData } from '@/data/quizData';
import { shuffleQuizItems, playSound } from '@/utils/quizUtils';
import { QuizState } from '@/types/quiz';
import QuizCard from './QuizCard';
import QuizResults from './QuizResults';
import { useToast } from "@/hooks/use-toast";
import { Button } from './ui/button';

const Quiz: React.FC = () => {
  const { toast } = useToast();
  const [state, setState] = useState<QuizState>({
    score: 0,
    currentQuestionIndex: 0,
    questions: [],
    isFinished: false,
    selectedAnswer: null,
    isCorrect: null,
  });
  
  const [gameStarted, setGameStarted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  
  // Initialize the quiz
  useEffect(() => {
    initQuiz();
  }, []);
  
  const initQuiz = () => {
    const shuffledQuestions = shuffleQuizItems(quizData);
    setState({
      score: 0,
      currentQuestionIndex: 0,
      questions: shuffledQuestions,
      isFinished: false,
      selectedAnswer: null,
      isCorrect: null,
    });
    setShowFeedback(false);
  };

  const getExplanation = (item: any, answer: 'robot' | 'machine') => {
    if (item.type === 'robot' && answer === 'machine') {
      return `It's automated and can make decisions on its own.`;
    } else if (item.type === 'machine' && answer === 'robot') {
      return `It follows fixed operations and needs human control.`;
    }
    return '';
  };
  
  const handleAnswer = (answer: 'robot' | 'machine') => {
    const currentQuestion = state.questions[state.currentQuestionIndex];
    const isCorrect = currentQuestion.type === answer;
    
    // Update state with the new answer
    setState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      selectedAnswer: answer,
      isCorrect,
    }));
    
    // Play appropriate sound
    playSound(isCorrect ? 'correct' : 'wrong');
    
    // Show feedback
    setShowFeedback(true);
    
    // Show toast message
    toast({
      title: isCorrect ? "Correct!" : "Wrong!",
      description: isCorrect 
        ? `${currentQuestion.name} is indeed a ${currentQuestion.type}!` 
        : `${currentQuestion.name} is actually a ${currentQuestion.type}! ${getExplanation(currentQuestion, answer)}`,
      variant: isCorrect ? "default" : "destructive",
    });
    
    // After a delay, move to the next question
    setTimeout(() => {
      const nextIndex = state.currentQuestionIndex + 1;
      if (nextIndex < state.questions.length) {
        setState(prev => ({
          ...prev,
          currentQuestionIndex: nextIndex,
          selectedAnswer: null,
          isCorrect: null,
        }));
        setShowFeedback(false);
      } else {
        // Quiz is finished
        setState(prev => ({
          ...prev,
          isFinished: true,
        }));
        playSound('finish');
      }
    }, 1500);
  };
  
  const handleRestartQuiz = () => {
    initQuiz();
    setGameStarted(true);
  };
  
  const startGame = () => {
    setGameStarted(true);
  };
  
  // Show welcome screen if game hasn't started
  if (!gameStarted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-quiz-dark bg-tech-pattern">
        <div className="max-w-md w-full bg-quiz-card rounded-xl shadow-lg p-8 border-2 border-slate-700">
          <div className="flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl font-bold text-white">Robo or Machino?</h1>
            <p className="text-xl text-gray-300">Can you tell the difference between robots and machines?</p>
            
            <div className="flex space-x-4 my-6">
              <div className="flex-1 p-3 bg-quiz-robot/20 rounded-lg flex items-center justify-center">
                <span className="text-5xl">🤖</span>
              </div>
              <div className="flex-1 p-3 bg-quiz-machine/20 rounded-lg flex items-center justify-center">
                <span className="text-5xl">⚙️</span>
              </div>
            </div>
            
            <p className="text-gray-300">
              Test your knowledge with 20 cards featuring different robots and machines.
              Can you identify them correctly?
            </p>
            
            <Button onClick={startGame} className="w-full mt-4 bg-primary hover:bg-primary/80">
              Start Quiz
            </Button>
            
            <div className="mt-8 text-xs text-gray-500">
              <p>© 2025 Vizuara AI Lab</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Show results if quiz is finished
  if (state.isFinished) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 bg-quiz-dark bg-tech-pattern">
        <QuizResults 
          score={state.score} 
          totalQuestions={state.questions.length} 
          onRestart={handleRestartQuiz} 
        />
      </div>
    );
  }
  
  // Otherwise show the current question
  const currentQuestion = state.questions[state.currentQuestionIndex];
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-quiz-dark bg-tech-pattern">
      <div className="w-full max-w-md mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Question</span>
          <span className="bg-slate-700 text-white px-2 py-1 rounded-md text-sm font-medium">
            {state.currentQuestionIndex + 1}/{state.questions.length}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Score</span>
          <span className="bg-slate-700 text-white px-2 py-1 rounded-md text-sm font-medium">
            {state.score}/{state.currentQuestionIndex}
          </span>
        </div>
      </div>
      
      {currentQuestion && (
        <QuizCard 
          quizItem={currentQuestion}
          onAnswer={handleAnswer}
          selectedAnswer={state.selectedAnswer}
          isCorrect={state.isCorrect}
          showFeedback={showFeedback}
        />
      )}
      
      <div className="w-full max-w-md mt-8 text-xs text-center text-gray-500">
        <p>© 2025 Vizuara AI Lab</p>
      </div>
    </div>
  );
};

export default Quiz;
