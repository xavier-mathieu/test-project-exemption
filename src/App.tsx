import React, { useState } from 'react';
import Question from './components/Question';
import Scenario from './components/Scenario';
import { questions, getNextQuestion, scenarios } from './data/questionnaire';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [scenario, setScenario] = useState<string | null>(null);
  const [history, setHistory] = useState<number[]>([]);

  const handleAnswer = (answer: string) => {
    const result = getNextQuestion(currentQuestion.id, answer);
    
    if (typeof result === 'string') {
      // It's a scenario
      setScenario(result);
    } else {
      // It's the next question
      setHistory([...history, currentQuestion.id]);
      setCurrentQuestion(questions[result - 1]);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const newHistory = [...history];
      const previousQuestionId = newHistory.pop();
      setHistory(newHistory);
      setCurrentQuestion(questions[previousQuestionId! - 1]);
      setScenario(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {scenario ? (
          <Scenario 
            scenario={scenarios[scenario]} 
          />
        ) : (
          <Question
            question={currentQuestion}
            onAnswer={handleAnswer}
            onBack={history.length > 0 ? handleBack : undefined}
          />
        )}
      </div>
    </div>
  );
}

export default App;
