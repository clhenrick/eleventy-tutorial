module.exports = (eleventyConfig) => {
  // Copy the "assets" directory to the compiled "_site" folder.
  eleventyConfig.addPassthroughCopy('assets');

  return {
    dir: {
      input: './',
      output: './_site',
      layouts: './_layouts',
    },
    templateFormats: [
      'html',
      'liquid',
      'md',
      'njk',
      '11ty.js' // for JavaScript Templates in 11ty
    ],
    markdownTemplateEngine: 'njk', // default is liquid
    // pathPrefix: '/eleventy-sample/', // omit this line if using custom domain
  };
};