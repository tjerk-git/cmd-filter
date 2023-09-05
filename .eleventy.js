module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    "css",
  ]);
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("public/images");

  eleventyConfig.addPassthroughCopy("bundle.js");

  // eleventyConfig.addNunjucksFilter("excludeFromCollection", function (collection = [], pageUrl = this.ctx.page.url) {
  //   return collection.filter(post => post.url !== pageUrl);
  // });

  eleventyConfig.addFilter("filterByTags", function (collection = [], ...requiredTags) {
    return collection.filter(post => {
      return requiredTags.flat().every(tag => post.data.tags?.includes(tag));
    });
  });

  // eleventyConfig.addNunjucksFilter("related", function (collection = []) {
  //   const { tags: requiredTags, page } = this.ctx;
  //   return collection.filter(post => {
  //     return post.url !== page.url && requiredTags?.every(tag => post.data.tags?.includes(tag));
  //   });
  // });

  eleventyConfig.addCollection("teachers", function (collection) {

    const coll = collection
      .getFilteredByTag("teachers");

    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];

      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }

    return coll;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build"
    }
  };
};
