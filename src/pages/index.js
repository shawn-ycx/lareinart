import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const IndexPage = (props) => {
  const { classes, data } = props;
  const { edges } = data.allMarkdownRemark;

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <div key={edge.node.id}>{edge.node.frontmatter.title}</div>)

  return (
    <Layout>
      
      <div className={classes.root}>
        <Grid container spacing={24}>
          {Posts}
        </Grid>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default withStyles(styles)(IndexPage);

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

