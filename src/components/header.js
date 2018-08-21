import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const sections = [
  'Technology',
  'Design',
  'Culture',
  'Business',
  'Politics',
  'Opinion',
  'Science',
  'Health',
  'Style',
  'Travel',
];

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//   },
// ];

// const posts = [post1, post2, post3];

// const archives = [
//   'March 2020',
//   'February 2020',
//   'January 2020',
//   'December 2019',
//   'November 2019',
//   'October 2019',
//   'September 2019',
//   'August 2019',
//   'July 2019',
//   'June 2019',
//   'May 2019',
//   'April 2019',
// ];

// const social = ['GitHub', 'Twitter', 'Facebook'];

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.layout}>
      <Toolbar className={classes.toolbarMain}>
        <Button size="small">Subscribe</Button>
        <Typography
          variant="headline"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {props.siteTitle}
        </Typography>
        <Button variant="outlined" size="small">
          Contact Me
        </Button>
      </Toolbar>
      <Toolbar variant="dense" style={{
        justifyContent: 'space-between'
      }}>
        {/* {sections.map(section => (
          <Typography color="inherit" noWrap key={section}>
            {section}
          </Typography>
        ))} */}
      </Toolbar>
    </div>
  );
}

Header.propType = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header);
