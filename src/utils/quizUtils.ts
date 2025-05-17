
import { QuizItem } from "../types/quiz";

// Fisher-Yates shuffle algorithm to randomize quiz items
export function shuffleQuizItems(items: QuizItem[]): QuizItem[] {
  // Create a copy of the array to avoid mutating the original
  const shuffledItems = [...items];
  
  // Shuffle the items
  for (let i = shuffledItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
  }
  
  return shuffledItems;
}

// Function to play sound effects
export function playSound(type: 'correct' | 'wrong' | 'finish'): void {
  try {
    // In a real implementation, you'd have actual sound files
    const audio = new Audio(type === 'correct' 
      ? '/sounds/correct.mp3' 
      : type === 'wrong' 
        ? '/sounds/wrong.mp3' 
        : '/sounds/finish.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Audio play failed:', e));
  } catch (error) {
    console.log('Sound effect not available');
  }
}
