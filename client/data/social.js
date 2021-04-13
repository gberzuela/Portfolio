import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";

import resume from "../../public/GeraldLouBerzuela_Resume.pdf";

export default [
  {
    key: 1,
    name: "GitHub",
    link: "https://github.com/gberzuela",
    image: <GitHubIcon />,
  },
  {
    key: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gerald-lou-berzuela/",
    image: <LinkedInIcon />,
  },
  { key: 3, name: "Resume", link: resume, image: <DescriptionIcon /> },
];
