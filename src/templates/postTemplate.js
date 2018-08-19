import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Template({ data }) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout>
            <div className="post-container">
                <div className="post">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div className="post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields:{ slug: { eq: $slug} }) {
            html 
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
            }
        }
    }
`
