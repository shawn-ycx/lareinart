import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'gatsby';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing.unit * 8,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
})

const Footer = (props) => {
    const { classes } = props;
    return (
        <footer>
            <Typography variant="title" align="center">
                Join my mailing list!
            </Typography>
            <Typography variant="subheading" align="center" color="textSecondary" gutterBottom>
                Be the first to get notified with my lastest work!
            </Typography>
            <Typography align="center" color="textSecondary" component="p">
                <Button 
                    onClick={ () => push('/page-2/')}
                    variant="outlined" size="small">Subscribe</Button>
            </Typography>
        </footer>
    )
}


Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);