import React from 'react';
import { QuestionType } from '../types';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (answer: string) => void;
  onBack?: () => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer, onBack }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">{question.text}</h2>
      
      <div className="space-y-4">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(answer)}
            className="w-full py-3 px-6 text-left bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
          >
            {answer}
          </button>
        ))}
      </div>

      {onBack && (
        <button
          onClick={onBack}
          className="mt-6 text-blue-600 hover:text-blue-800 flex items-center"
        >
          ← Retour
        </button>
      )}
    </div>
  );
}

export default Question;
