'use strict';

var path = require('path');

exports.createPages = function (_ref) {
  var boundActionCreators = _ref.boundActionCreators,
      graphql = _ref.graphql;
  var createPage = boundActionCreators.createPage;


  var blogPostTemplate = path.resolve('src/templates/blog-post.js');

  return graphql('{\n    allMarkdownRemark(\n      sort: { order: DESC, fields: [frontmatter___date] }\n      limit: 1000\n    ) {\n      edges {\n        node {\n          excerpt(pruneLength: 250)\n          html\n          id\n          frontmatter {\n            date\n            path\n            title\n          }\n        }\n      }\n    }\n  }').then(function (result) {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(function (_ref2) {
      var node = _ref2.node;

      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {} // additional data can be passed via context
      });
    });
  });
};
