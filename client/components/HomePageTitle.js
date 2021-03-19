import React from 'react';

import { Container, makeStyles, Typography } from '@material-ui/core';

import Fade from 'react-reveal/Fade';
import Typewriter from 'typewriter-effect';

const styles = makeStyles((theme) => ({
	smallScreen: {
		alignItems: 'flexStart',
	},
	text: {
		fontFamily: 'Roboto Mono, monospace',
	},
	textContainer: {
		display: 'flex',
		[theme.breakpoints.up(768)]: {
			alignItems: 'center',
		},
		[theme.breakpoints.down(767)]: {
			paddingLeft: '60px',
			height: '500px',
		},
		flexDirection: 'column',
		paddingTop: '150px',
		paddingBottom: '50px',
		height: '400px',
	},
	typewriterText: {
		color: 'white',
		fontSize: '32px',
	},
}));

const HomePageTitle = () => {
	const classes = styles();

	return (
		<Fade down>
			<Container id="about me" className={classes.textContainer}>
				<Typography variant="h2" className={classes.text}>
					Hi, I'm Gerald
				</Typography>
				<Typography variant="h4" className={classes.text}>
					I am a..
				</Typography>
				<Typewriter
					options={{
						strings: ['Student.', 'Software Engineer.', 'Fitness enthusiast.'],
						autoStart: true,
						loop: true,
						pauseFor: 2000,
						wrapperClassName: `${classes.text} ${classes.typewriterText}`,
					}}
				/>
			</Container>
		</Fade>
	);
};

export default HomePageTitle;
