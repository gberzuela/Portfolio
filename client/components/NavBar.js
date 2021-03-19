import React, { useState } from 'react';

import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

import CustomDrawer from './CustomDrawer';

const styles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: 'black',
	},
	toolbar: {
		justifyContent: 'flex-end',
	},
}));

const NavBar = () => {
	const classes = styles();
	const [open, setOpen] = useState(false);

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<MenuIcon fontSize="large" onClick={() => setOpen(true)} />
				{open && <CustomDrawer open={open} setOpen={setOpen} />}
			</Toolbar>
		</AppBar>
	);
};

export default withStyles(styles)(NavBar);
