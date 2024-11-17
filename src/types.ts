export interface QuestionType {
  id: number;
  text: string;
  answers: string[];
}

export interface ScenarioType {
  text: string;
  showConfetti: boolean;
  buttons: {
    text: string;
    action: string;
  }[];
}
