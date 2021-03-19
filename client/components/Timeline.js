import React from 'react';

import { useMediaQuery } from '@material-ui/core';
import { Timeline } from '@material-ui/lab';

import Fade from 'react-reveal/Fade';

import data from '../data/timeline';
import Container from './Container';
import Title from './Title';
import TimelineItem from './TimelineItem';

const CustomTimeline = () => {
	const mediaQuery = useMediaQuery('(max-width: 767px)');

	return (
		<Container id="background">
			<Fade left>
				<Title title="Background" />
				<Timeline align={mediaQuery ? 'left' : 'alternate'}>
					{data.map((entry) => (
						<TimelineItem key={entry.key} data={entry} />
					))}
				</Timeline>
			</Fade>
		</Container>
	);
};

export default CustomTimeline;
