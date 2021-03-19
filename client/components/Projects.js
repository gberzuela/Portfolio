import React from 'react';

import Fade from 'react-reveal/Fade';

import data from '../data/projects';
import Container from './Container';
import Title from './Title';
import ProjectCard from './ProjectCard';

const ProjectsPage = () => {
	return (
		<Container id="projects">
			<Fade right>
				<Title title="Projects" />
				{data.map((entry, index) => (
					<ProjectCard key={entry.key} data={entry} alternate={index % 2} />
				))}
			</Fade>
		</Container>
	);
};

export default ProjectsPage;
