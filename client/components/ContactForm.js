import 'regenerator-runtime/runtime';

import React, { useEffect, useState } from 'react';

import { Button, Container, makeStyles } from '@material-ui/core';

import TextField from './TextField';
import { Alert } from '@material-ui/lab';

const styles = makeStyles((theme) => ({
	alert: {
		marginTop: '20px',
	},
	button: {
		backgroundColor: theme.palette.blue,
		'&:hover': {
			backgroundColor: '#05a3ff',
		},
		color: 'white',
		fontWeight: 'bold',
	},
	buttonContainer: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: 0,
	},
	email: {
		marginLeft: '5px',
	},
	message: {
		margin: '20px 0',
	},
	name: {
		marginRight: '5px',
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		padding: 0,
	},
}));

const ContactForm = () => {
	const classes = styles();

	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [message, setMessage] = useState('');
	const [messageError, setMessageError] = useState(false);
	const [submitted, setSubmitted] = useState(0);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const validateName = () => {
		if (!name) {
			setError('Please let me know who you are!');
			setNameError(true);
		} else {
			setNameError(false);
		}
	};

	const validateEmail = () => {
		const atPosition = email.indexOf('@');
		const dotPosition = email.lastIndexOf('.');

		if (
			atPosition < 1 ||
			dotPosition < atPosition + 2 ||
			dotPosition + 2 >= email.length
		) {
			setError('Please provide a valid email!');
			setEmailError(true);
		} else {
			setEmailError(false);
		}
	};

	const validateMessage = () => {
		if (!message) {
			setError('Please leave a message!');
			setMessageError(true);
		} else {
			setMessageError(false);
		}
	};

	const validateForm = () => {
		setSuccess('');
		validateName();
		validateEmail();
		validateMessage();
		setSubmitted(submitted + 1);
	};

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&');
	};

	const submitForm = async () => {
		try {
			const result = await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({ 'form-name': 'contact-form', name, email, message }),
			});
			setSuccess(
				`Thank you, ${name}! Your message has been sent. Feel free to leave another!`
			);
		} catch (error) {
			setError('Something went wrong! Try hard refreshing.');
		}
	};

	useEffect(() => {
		if (submitted) {
			if (!nameError && !emailError && !messageError) {
				submitForm();
				setName('');
				setEmail('');
				setMessage('');
			}
		}
	}, [submitted]);

	return (
		<Container>
			<input type="hidden" name="form-name" value="contact-form" />
			<Container className={classes.container}>
				<TextField
					label="Name"
					value={name}
					callback={(e) => setName(e.target.value)}
					className={classes.name}
					multi={false}
					error={nameError}
				/>
				<TextField
					label="Email"
					value={email}
					callback={(e) => setEmail(e.target.value)}
					className={classes.email}
					multi={false}
					error={emailError}
				/>
			</Container>
			<TextField
				label="Message"
				value={message}
				callback={(e) => setMessage(e.target.value)}
				className={classes.message}
				multi={true}
				error={messageError}
			/>
			<Container className={classes.buttonContainer}>
				<Button
					variant="contained"
					className={classes.button}
					onClick={validateForm}
				>
					Send Message
				</Button>
				{(nameError || emailError || messageError) && (
					<Alert severity="error">{error}</Alert>
				)}
			</Container>
			{success && (
				<Alert severity="success" className={classes.alert}>
					{success}
				</Alert>
			)}
		</Container>
	);
};

export default ContactForm;
