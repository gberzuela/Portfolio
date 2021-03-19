import React from 'react';

import { useMediaQuery } from '@material-ui/core';
import { Timeline } from '@material-ui/lab';

import Fade from 'react-reveal/Fade';

import data from '../data/timeline';
import CustomContainer from './CustomContainer';
import Title from './Title';
import CustomTimelineItem from './CustomTimelineItem';

const CustomTimeline = () => {
	const mediaQuery = useMediaQuery('(max-width: 767px)');

	return (
		<CustomContainer id="background">
			<Fade left>
				<Title title="Background" />
				<Timeline align={mediaQuery ? 'left' : 'alternate'}>
					{data.map((entry) => (
						<CustomTimelineItem key={entry.key} data={entry} />
					))}
				</Timeline>
			</Fade>
		</CustomContainer>
	);
};

export default CustomTimeline;
