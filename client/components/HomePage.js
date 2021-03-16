import React from 'react';

import HomePageTitle from './HomePageTitle';
import About from './About';
import CustomTimeline from './CustomTimeline';
import { Divider, makeStyles } from '@material-ui/core';

const styles = makeStyles({
	divider: {
		margin: '0 20% 0 20%',
	},
});

const HomePage = () => {
	const classes = styles();

	return (
		<>
			<HomePageTitle />
			<Divider className={classes.divider} />
			<About />
			<Divider className={classes.divider} />
			<CustomTimeline />
		</>
	);
};

export default HomePage;
