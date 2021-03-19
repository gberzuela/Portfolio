import React from 'react';

import { makeStyles } from '@material-ui/core';

import Fade from 'react-reveal/Fade';

import CustomContainer from './CustomContainer';
import Title from './Title';
import ContactForm from './ContactForm';
import SocialButtons from './SocialButtons';

const styles = makeStyles((theme) => ({
	container: {
		[theme.breakpoints.down(1023)]: {
			padding: '100px 10%',
		},
	},
	social: {
		marginTop: '20px',
	},
}));

const Contact = () => {
	const classes = styles();
	return (
		<CustomContainer id="contact" className={classes.container}>
			<Fade right>
				<Title title="Contact me!" />
				<ContactForm />
			</Fade>
			<Fade bottom>
				<Title title="Check these out too" className={classes.social} />
				<SocialButtons />
			</Fade>
		</CustomContainer>
	);
};

export default Contact;
