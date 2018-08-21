import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Header2 = (props) => {
	return (
		<div>
			<Toolbar>
				<Button size="small">Subscribe</Button>
				<Typography
					variant="headline"
					color="inherit"
					align="center"
					noWrap
				>
					{props.siteTitle}
				</Typography>
				<Button variant="outlined" size="small">
					Contact Me
                </Button>
			</Toolbar>
			<Toolbar variant="dense">
				{/* {sections.map(section => (
					<Typography color="inherit" noWrap key={section}>
						{section}
					</Typography>
				))} */}
			</Toolbar>
		</div>
	)
}

export default Header2;