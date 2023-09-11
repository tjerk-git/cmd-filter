
function sortByName(values) {
  return values.slice().sort((a, b) => a.data.name.localeCompare(b.data.name))
}

module.exports = (config) => {
  config.addFilter('sortByName', sortByName)
}

module.exports = function (eleventyConfig) {




  eleventyConfig.addFilter('sortByName', sortByName)

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


  // eleventyConfig.addCollection("byName", function (collectionApi) {
  //   return collectionApi.getFilteredByTag("teachers").sort(function (a, b) {
  //     return b.name - a.name;
  //   });
  // });

  // eleventyConfig.addCollection("teachers", function (collection) {

  //   const coll = collection
  //     .getFilteredByTag("teachers");

  //   for (let i = 0; i < coll.length; i++) {
  //     const prevPost = coll[i - 1];
  //     const nextPost = coll[i + 1];

  //     coll[i].data["prevPost"] = prevPost;
  //     coll[i].data["nextPost"] = nextPost;
  //   }

  //   return coll;
  // });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
