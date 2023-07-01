import todo1m1 from "../assets/img/1-To Do List/1_mobile1.png";
import todo1m2 from "../assets/img/1-To Do List/1_mobile2.png";
import todo1m3 from "../assets/img/1-To Do List/1_mobile3.png";
import todo1m4 from "../assets/img/1-To Do List/1_mobile4.png";
import todo1d1 from "../assets/img/1-To Do List/1_desktop1.png";
import todo1d2 from "../assets/img/1-To Do List/1_desktop2.png";
import todo1d3 from "../assets/img/1-To Do List/1_desktop3.png";
import star2m1 from "../assets/img/2-Star Treker/2_mobile1.png";
import star2m2 from "../assets/img/2-Star Treker/2_mobile2.png";
import star2m3 from "../assets/img/2-Star Treker/2_mobile3.png";
import star2m4 from "../assets/img/2-Star Treker/2_mobile4.png";
import star2d1 from "../assets/img/2-Star Treker/2_desktop1.png";
import star2d2 from "../assets/img/2-Star Treker/2_desktop2.png";
import star2d3 from "../assets/img/2-Star Treker/2_desktop3.png";
import star2d4 from "../assets/img/2-Star Treker/2_desktop4.png";
import star2d5 from "../assets/img/2-Star Treker/2_desktop5.png";
import jol3m1 from "../assets/img/3-Jollydays/3_mobile1.png";
import jol3m2 from "../assets/img/3-Jollydays/3_mobile2.png";
import jol3m3 from "../assets/img/3-Jollydays/3_mobile3.png";
import jol3m4 from "../assets/img/3-Jollydays/3_mobile4.png";
import jol3d1 from "../assets/img/3-Jollydays/3_desktop1.png";
import jol3d2 from "../assets/img/3-Jollydays/3_desktop2.png";
import jol3d3 from "../assets/img/3-Jollydays/3_desktop3.png";
import jol3d4 from "../assets/img/3-Jollydays/3_desktop4.png";

const dataProjects = [
  {
    id: 0,
    title: "To Do List",
    pitch:
      "Premier projet en groupe dans le cadre de ma formation à la Wild Code School, nous avons travaillé à 4 sur une appli To Do List en JavaScript vanilla. À partir d'une maquette Figma réalisée ensemble et d'un brainstorming, nous avons développé les fonctionnalités qui nous paraissaient intéressantes dans une to do list : création d'une tâche, suivi de son évolution, date butoir, possibilité de supprimer la tâche à tout moment. Ce projet s'est déroulé sur 3 semaines.",
    link: "https://github.com/MarionbDev/Projet-1-TodoList",
    screenshots: [
      {
        id: 1,
        url: todo1m1,
        device: "mobile",
      },
      {
        id: 2,
        url: todo1m2,
        device: "mobile",
      },
      {
        id: 3,
        url: todo1m3,
        device: "mobile",
      },
      {
        id: 4,
        url: todo1m4,
        device: "mobile",
      },
      {
        id: 5,
        url: todo1d1,
        device: "desktop",
      },
      {
        id: 6,
        url: todo1d2,
        device: "desktop",
      },
      {
        id: 7,
        url: todo1d3,
        device: "desktop",
      },
    ],
  },
  {
    id: 1,
    title: "Star Treker",
    pitch:
      "Projet permettant de mettre en application les apprentissages autour de React et de l'appel à une API. En groupe de 4, et pedant 5 semaines, nous avons mis en place une application web de déplacement interstellaire. Visualisation de la Voie Lactée, affichage de toutes les planètes visitables avec leurs caractéristiques techniques. Ici, un mélange d'informations fictives (visuels et positionnement des planètes) et réelles (appel d'une API de la Nasa pour les descriptions scientifiques)",
    link: "https://github.com/WildCodeSchool/2023-02-JS-LaLoupe-StarTreker",
    screenshots: [
      {
        id: 8,
        url: star2m1,
        device: "mobile",
      },
      {
        id: 9,
        url: star2m2,
        device: "mobile",
      },
      {
        id: 10,
        url: star2m3,
        device: "mobile",
      },
      {
        id: 11,
        url: star2m4,
        device: "mobile",
      },
      {
        id: 12,
        url: star2d1,
        device: "desktop",
      },
      {
        id: 13,
        url: star2d2,
        device: "desktop",
      },
      {
        id: 14,
        url: star2d3,
        device: "desktop",
      },
      {
        id: 15,
        url: star2d4,
        device: "desktop",
      },
      {
        id: 16,
        url: star2d5,
        device: "desktop",
      },
    ],
  },
  {
    id: 2,
    title: "Jollydays",
    pitch:
      "Lors de ce hackaton interne à la Wild Code School sur le thème du voyage, en groupe de 5, nous avons élaboré un blog de voyage destiné à un client baroudeur. Le défi ici était de réaliser une application front-end, avec appel à une API, en moins de 48h !",
    link: "https://github.com/aliciacqt/hackathon1",
    screenshots: [
      {
        id: 17,
        url: jol3m1,
        device: "mobile",
      },
      {
        id: 18,
        url: jol3m2,
        device: "mobile",
      },
      {
        id: 19,
        url: jol3m3,
        device: "mobile",
      },
      {
        id: 20,
        url: jol3m4,
        device: "mobile",
      },
      {
        id: 21,
        url: jol3d1,
        device: "desktop",
      },
      {
        id: 22,
        url: jol3d2,
        device: "desktop",
      },
      {
        id: 23,
        url: jol3d3,
        device: "desktop",
      },
      {
        id: 24,
        url: jol3d4,
        device: "desktop",
      },
    ],
  },
];

export default dataProjects;
