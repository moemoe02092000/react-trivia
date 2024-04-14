/*import { shufflArray } from "./utils";

export type Question = {
  category: string;
  correct_answers: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}
export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint =//'https://opentdb.com/api.php?amount=10'
  //"https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty&type=multipule";
  //'https://opentdb.com/api.php?amount=10';
  //'https: //opentdb.com/api.php?amount=20&category=18&type=multiple';
  "https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multipule";
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answer: shufflArray([
      ...question.incorrect_answers,
      question.correct_answers,
    ]),
  }));
  
};*/


import { shuffleArray } from './utils';

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type QuestionsState = Question & { answers: string[] };

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionsState[]> => {
  const endpoint =`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;//'https://opentdb.com/api.php?amount=20&category=11'//'https://opentdb.com/api.php?amount=20&category=19'//'https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple'//`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`; // using api
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
};
