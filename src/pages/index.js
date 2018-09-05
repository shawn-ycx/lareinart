import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

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

  postRender() {
    return (
      this.state.posts
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge, index) => this.Post(edge, index))
    )
  }



  render() {
    return (
      <Layout>
        <main>
          <ul>
            <li className="gallery-item">
              <img src="https://placeimg.com/300/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/300/150/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/g/200/300/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/300/150/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/640/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/g/300/150/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/640/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/300/150/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/640/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/640/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/300/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/300/150/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/g/200/300/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/300/150/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/640/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/g/300/150/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/640/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/300/150/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/640/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/640/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/300/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/300/150/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/g/200/300/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/300/150/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/640/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/g/300/150/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/640/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://picsum.photos/300/150/?random" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/640/480/any" />
            </li>
            <li className="gallery-item">
              <img src="https://placeimg.com/640/480/any" />
            </li>
          </ul>
        </main>
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

{/* <Layout>
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
      </Layout> */}