import React from 'react';

import Fade from 'react-reveal/Fade';

import data from '../data/projects';
import CustomContainer from './CustomContainer';
import Title from './Title';
import ProjectCard from './ProjectCard';

const ProjectsPage = () => {
	return (
		<CustomContainer id="projects">
			<Fade right>
				<Title title="Projects" />
				{data.map((entry, index) => (
					<ProjectCard key={entry.key} data={entry} alternate={index % 2} />
				))}
			</Fade>
		</CustomContainer>
	);
};

export default ProjectsPage;
