import viditia1 from "../../public/images/viditia-home.png";
import viditia2 from "../../public/images/viditia-all-view.png";
import viditia3 from "../../public/images/viditia-vidit.png";
import viditia4 from "../../public/images/viditia-filter.png";
import viditia5 from "../../public/images/viditia-create.png";

import gs1 from "../../public/images/gs-home.png";
import gs3 from "../../public/images/gs-all-pins.png";
import gs2 from "../../public/images/gs-single-pin.png";
import gs4 from "../../public/images/gs-cart.png";
import gs5 from "../../public/images/gs-checkout.png";

import pep1 from "../../public/images/pep1.png";
import pep2 from "../../public/images/pep2.png";
import pep3 from "../../public/images/pep3.png";

export default [
  {
    key: 1,
    name: "Viditia",
    details:
      "Data visualziation web application where users can participate, visualize and interact with data from polls in a fun and clever way.",
    github: "https://github.com/2011-capricorn/Viditia",
    deploy: "https://viditia-cf976.web.app/home",
    youtube: "https://www.youtube.com/watch?v=zXWWoYZqnwo",
    images: [viditia1, viditia2, viditia3, viditia4, viditia5],
    stack: ["JavaScript", "React", "Redux", "Firebase", "D3"],
  },
  {
    key: 2,
    name: "Stick & Pin",
    details:
      "E-commerce web application that demonstrates full CRUD and partial cart functionality.",
    github: "https://github.com/Grace-Shopper-Gamma/Grace-Shopper-Gamma",
    deploy: "https://sticknpin.herokuapp.com/",
    images: [gs1, gs2, gs3, gs4, gs5],
    stack: ["JavaScript", "React", "Redux", "Postgres", "Sequelize"],
  },
  {
    key: 3,
    name: "Breaking Down Radix Sort",
    details:
      "Medium article that discusses sorting algorithms and analyzes Radix Sort in detail.",
    github: "https://github.com/gberzuela/PEP",
    article:
      "https://gberzuela.medium.com/breaking-down-radix-sort-2b5cf65a2ab8",
    images: [pep1, pep2, pep3],
  },
];
