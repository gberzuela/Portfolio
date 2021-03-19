import React from 'react';

import { makeStyles } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import {
	TimelineItem,
	TimelineSeparator,
	TimelineDot,
	TimelineConnector,
	TimelineContent,
} from '@material-ui/lab';

import TimelineCard from './TimelineCard';

const styles = makeStyles({
	icon: {
		color: 'white',
	},
});

const CustomTimelineItem = ({ data }) => {
	const classes = styles();

	return (
		<TimelineItem>
			<TimelineSeparator>
				<TimelineDot variant="outlined">
					{data.type === 'work' ? (
						<WorkIcon className={classes.icon} />
					) : (
						<SchoolIcon className={classes.icon} />
					)}
				</TimelineDot>
				<TimelineConnector />
			</TimelineSeparator>
			<TimelineContent>
				<TimelineCard data={data} />
			</TimelineContent>
		</TimelineItem>
	);
};

export default CustomTimelineItem;
