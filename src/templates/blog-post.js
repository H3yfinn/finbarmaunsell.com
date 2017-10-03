import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../pages/components/footer.js';
import classifier_img from '../pages/classifier_test.png';
// import '../css/blog-post.css'; // make it pretty!

export default function Template({
  data // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <div className="blog-post-container">
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>
          {post.frontmatter.title}
        </h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <Footer />
      <img src={classifier_img) />
    </div>
  );
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;
