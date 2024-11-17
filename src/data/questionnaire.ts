import { QuestionType, ScenarioType } from '../types';

export const questions: QuestionType[] = [
  {
    id: 1,
    text: "Êtes-vous en CDD ?",
    answers: ["Oui", "Non"]
  },
  {
    id: 2,
    text: "Êtes-vous déjà couvert par une assurance santé ?",
    answers: ["Oui", "Non"]
  },
  {
    id: 3,
    text: "Quelle est la durée de votre CDD ?",
    answers: ["Moins de 12 mois", "Plus de 12 mois"]
  },
  {
    id: 4,
    text: "Êtes-vous bénéficiaire de la Complémentaire Santé Solidaire (CSS, anciennement CMU / ACS) ?",
    answers: ["Oui", "Non"]
  },
  {
    id: 5,
    text: "Êtes-vous bénéficiaire du \"versement santé\" en tant que salarié ou ayant droit ?",
    answers: ["Oui", "Non"]
  },
  {
    id: 6,
    text: "Êtes-vous couvert par un régime spécifique ?",
    answers: [
      "Couverture dans la fonction publique territoriale ou hospitalière",
      "Régime des industries électriques et gazières (CAMIEG)",
      "Couverture collective des militaires",
      "Non"
    ]
  },
  {
    id: 7,
    text: "Êtes-vous déjà couvert par une assurance santé ?",
    answers: ["Oui", "Non"]
  },
  {
    id: 8,
    text: "Êtes-vous déjà couvert en tant qu'assuré principal ou en tant qu'ayant droit (bénéficiaire) ?",
    answers: ["Assuré principal", "Bénéficiaire"]
  },
  {
    id: 9,
    text: "Sur quel type de contrat êtes vous couvert en tant qu'ayant droit (bénéficiaire) ?",
    answers: [
      "Contrat public d'un autre Ministère",
      "Contrat collectif d'entreprise privée",
      "Contrat non collectif (personnel ou travailleur non salarié)"
    ]
  }
];

export const scenarios: Record<string, ScenarioType> = {
  "not-eligible": {
    text: "Vous n'êtes pas éligible pour une demande de dispense",
    showConfetti: false,
    buttons: [
      {
        text: "S'inscrire sur Alan",
        action: "onboarding"
      }
    ]
  },
  "dispense-cdd-renouvelable": {
    text: "Vous pouvez si vous le souhaitez faire une demande de dispense, et dans ce cas vous renoncerez au dispositif en place jusqu'à présent de la participation employeur de 15 euros (arrêt du dispositif).\n\nCette dispense est renouvelable annuellement.",
    showConfetti: true,
    buttons: [
      {
        text: "Demander une dispense",
        action: "dispense"
      },
      {
        text: "S'inscrire sur Alan malgré mon éligibilité",
        action: "onboarding"
      }
    ]
  },
  "dispense-cdd-non-renouvelable": {
    text: "Vous pouvez si vous le souhaitez faire une demande de dispense, et dans ce cas vous renoncerez au dispositif en place jusqu'à présent de la participation employeur de 15 euros (arrêt du dispositif).\n\nCette dispense est non renouvelable et prend fin à l'échéance du contrat de CDD. Pensez à bien mettre la date de fin de votre contrat comme date de fin de dispense.",
    showConfetti: true,
    buttons: [
      {
        text: "Demander une dispense",
        action: "dispense"
      },
      {
        text: "S'inscrire sur Alan malgré mon éligibilité",
        action: "onboarding"
      }
    ]
  },
  "dispense-cmu": {
    text: "Vous pouvez si vous le souhaitez faire une demande de dispense, et dans ce cas vous renoncerez au dispositif en place jusqu'à présent de la participation employeur de 15 euros (arrêt du dispositif).\n\nCette dispense est possible jusqu'à la date à laquelle vous cessez de bénéficier de cette couverture. Cette dispense est renouvelable annuellement.",
    showConfetti: true,
    buttons: [
      {
        text: "Demander une dispense",
        action: "dispense"
      },
      {
        text: "S'inscrire sur Alan malgré mon éligibilité",
        action: "onboarding"
      }
    ]
  },
  "dispense-versement-sante": {
    text: "Vous pouvez si vous le souhaitez faire une demande de dispense, et dans ce cas vous renoncerez au dispositif en place jusqu'à présent de la participation employeur de 15 euros (arrêt du dispositif).\n\nLe versement santé est un dispositif légal pouvant être mis en place dans certaines entreprises en application de l'article L. 911-7-1 du Code de la Sécurité sociale. Cette dispense est renouvelable annuellement.",
    showConfetti: true,
    buttons: [
      {
        text: "Demander une dispense",
        action: "dispense"
      },
      {
        text: "S'inscrire sur Alan malgré mon éligibilité",
        action: "onboarding"
      }
    ]
  },
  "dispense-fonction-publique": {
    text: "Vous pouvez si vous le souhaitez faire une demande de dispense, et dans ce cas vous renoncerez au dispositif en place jusqu'à présent de la participation employeur de 15 euros (arrêt du dispositif).\n\nEn application de l'article L. 827-2 du code général de la fonction publique. Cette dispense est renouvelable annuellement.",
    showConfetti: true,
    buttons: [
      {
        text: "Demander une dispense",
        action: "dispense"
      },
      {
        text: "S'inscrire sur Alan malgré mon éligibilité",
        action: "onboarding"
      }
    ]
  },
  "dispense-industries-electriques": {
    text: "Vous pouvez si vous le souhaitez faire une demande de dispense, et dans ce cas vous renoncerez au dispositif en place jusqu'à présent de la participation employeur de 15 euros (arrêt du dispositif).\n\nCette dispense est renouvelable annuellement.",
    showConfetti: true,
    buttons: [
      {
        text: "Demander une dispense",
        action: "dispense"
      },
      {
        text: "S'inscrire sur Alan malgré mon éligibilité",
        action: "onboarding"
      }
    ]
  },
  "dispense-militaire": {
    text: "Vous pouvez si vous le souhaitez faire une demande de dispense, et dans ce cas vous renoncerez au dispositif en place jusqu'à présent de la participation employeur de 15 euros (arrêt du dispositif).\n\nEn application de l'article L. 4123-3 du Code de la défense. Cette dispense est renouvelable annuellement.",
    showConfetti: true,
    buttons: [
      {
        text: "Demander une dispense",
        action: "dispense"
      },
      {
        text: "S'inscrire sur Alan malgré mon éligibilité",
        action: "onboarding"
      }
    ]
  },
  "dispense-individuelle": {
    text: "Vous pouvez si vous le souhaitez faire une demande de dispense, et dans ce cas vous renoncerez au dispositif en place jusqu'à présent de la participation employeur de 15 euros (arrêt du dispositif).\n\nCette dispense temporaire est possible jusqu'à la date d'échéance du contrat individuel, dans la limite de douze mois. Cette dispense est non renouvelable.",
    showConfetti: true,
    buttons: [
      {
        text: "Demander une dispense",
        action: "dispense"
      },
      {
        text: "S'inscrire sur Alan malgré mon éligibilité",
        action: "onboarding"
      }
    ]
  },
  "dispense-collective-prive": {
    text: "Vous pouvez si vous le souhaitez faire une demande de dispense, et dans ce cas vous renoncerez au dispositif en place jusqu'à présent de la participation employeur de 15 euros (arrêt du dispositif).\n\nCette dispense est possible, en tant que salarié ou bénéficiaire d'un salarié et est renouvelable annuellement.\n\nLe contrat doit être mis en place dans le cadre d'un régime définit par DUE, accord collectif ou référendaire. Ainsi le contrat d'un dirigeant ou d'un travailleur non salarié par exemple, ne remplit pas ces conditions.",
    showConfetti: true,
    buttons: [
      {
        text: "Demander une dispense",
        action: "dispense"
      },
      {
        text: "S'inscrire sur Alan malgré mon éligibilité",
        action: "onboarding"
      }
    ]
  }
};

export function getNextQuestion(currentId: number, answer: string): number | string {
  switch (currentId) {
    case 1:
      return answer === "Oui" ? 2 : 4;
    case 2:
      return answer === "Oui" ? 3 : "not-eligible";
    case 3:
      return answer === "Moins de 12 mois" ? "dispense-cdd-non-renouvelable" : "dispense-cdd-renouvelable";
    case 4:
      return answer === "Oui" ? "dispense-cmu" : 5;
    case 5:
      return answer === "Oui" ? "dispense-versement-sante" : 6;
    case 6:
      switch (answer) {
        case "Couverture dans la fonction publique territoriale ou hospitalière":
          return "dispense-fonction-publique";
        case "Régime des industries électriques et gazières (CAMIEG)":
          return "dispense-industries-electriques";
        case "Couverture collective des militaires":
          return "dispense-militaire";
        default:
          return 7;
      }
    case 7:
      return answer === "Oui" ? 8 : "not-eligible";
    case 8:
      return answer === "Assuré principal" ? "dispense-individuelle" : 9;
    case 9:
      switch (answer) {
        case "Contrat collectif d'entreprise privée":
          return "dispense-collective-prive";
        default:
          return "not-eligible";
      }
    default:
      return "not-eligible";
  }
}
