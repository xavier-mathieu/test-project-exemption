import React from 'react';
import Confetti from 'react-confetti';
import { ScenarioType } from '../types';

interface ScenarioProps {
  scenario: ScenarioType;
}

const Scenario: React.FC<ScenarioProps> = ({ scenario }) => {
  const handleAction = (action: string) => {
    if (action === 'dispense') {
      window.location.href = 'LINK TO DISPENSE FLOW';
    } else if (action === 'onboarding') {
      window.location.href = 'LINK TO ONBOARDING FLOW';
    } else if (action === 'support') {
      window.location.href = 'LINK TO SUPPORT';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {scenario.showConfetti && <Confetti />}
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">{scenario.text}</p>
      </div>

      <div className="space-y-4 mt-8">
        {scenario.buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleAction(button.action)}
            className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {button.text}
          </button>
        ))}
      </div>

      <button
        onClick={() => handleAction('support')}
        className="mt-6 text-blue-600 hover:text-blue-800"
      >
        Contact
      </button>
    </div>
  );
}

export default Scenario;
