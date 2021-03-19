import React from 'react';

import {
	Avatar,
	Button,
	Container,
	makeStyles,
	Typography,
} from '@material-ui/core';

import Fade from 'react-reveal/Fade';

import { Link } from 'react-scroll';

import headshot from '../../public/images/Headshot.jpg';
import Title from './Title';

const styles = makeStyles((theme) => ({
	contact: {
		color: theme.palette.blue,
		cursor: 'pointer',
		borderColor: theme.palette.blue,
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down(767)]: {
			flexDirection: 'column',
		},
		[theme.breakpoints.up(1025)]: {
			width: '80%',
		},
		[theme.breakpoints.up(1441)]: {
			width: '50%',
		},
		paddingTop: '100px',
		paddingBottom: '100px',
	},
	image: {
		height: '250px',
		width: '250px',
		[theme.breakpoints.down(767)]: {
			marginBottom: '100px',
		},
	},
	textContainer: {
		[theme.breakpoints.up(767)]: {
			paddingLeft: '60px',
		},
	},
	text: {
		marginBottom: '10px',
	},
}));

const About = () => {
	const classes = styles();

	return (
		<Container className={classes.container}>
			<Fade right>
				<Avatar src={headshot} alt="Headshot" className={classes.image} />
				<Container className={classes.textContainer}>
					<Title title="About" />
					<Typography variant="h6" className={classes.text}>
						Hello! My name is Gerald Lou Berzuela, a software engineer looking
						for work in California.
					</Typography>
					<Typography variant="h6" className={classes.text}>
						Proficient in the PERN stack and I'm currently learning TypeScript
						and Python.
					</Typography>
					<Typography variant="h6" className={classes.text}>
						I enjoy learning and implementing new tech. If I'm not coding, I'm
						either bugging my cats or at the gym.
					</Typography>
					<Typography variant="h6" className={classes.text}>
						My background includes studying and graduating from Fullstack
						Academy with some college experience at the University of
						California, Irvine studying Computer Science.
					</Typography>
					<Link to="contact" smooth={true}>
						<Button variant="outlined" className={classes.contact}>
							Feel free to reach out to me!
						</Button>
					</Link>
				</Container>
			</Fade>
		</Container>
	);
};

export default About;
