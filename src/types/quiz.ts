
export interface QuizItem {
  id: number;
  name: string;
  purpose: string;
  type: 'robot' | 'machine';
  image: string;
}

export interface QuizState {
  score: number;
  currentQuestionIndex: number;
  questions: QuizItem[];
  isFinished: boolean;
  selectedAnswer: 'robot' | 'machine' | null;
  isCorrect: boolean | null;
}
