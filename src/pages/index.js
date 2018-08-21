import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    flexGrow: 1,
  },
  containerPaper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    const { edges } = this.props.data.allMarkdownRemark;
    this.setState({
      posts: edges
    });
  }

  componentWillUnmount() {
    this.setState({
      posts: []
    });
  }

  Post(edge, index) {
    return (
      <Grid key={index} item xs>
        <Link to={edge.node.fields.slug}>
          <Paper
            styles={{
              padding: 16,
              textAlign: `center`,
              color: `rgba(0, 0, 0, 0.54)`
            }}>
            {edge.node.frontmatter.title}
          </Paper>
        </Link>
      </Grid>
    );
  }

  postRender() {
    return (
      this.state.posts
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge, index) => this.Post(edge, index))
    )
  }

  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <div styles={{
          flexGrow: 1
        }}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            {this.postRender()}
          </Grid>
        </div>
      </Layout>
    )
  }
}

IndexPage.propType = {
  data: PropTypes.object.isRequired
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
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

