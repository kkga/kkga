const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginToc = require("eleventy-plugin-toc");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItImplicitFigures = require("markdown-it-implicit-figures");
const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginToc, {
    tags: ["h2"],
  });

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy",
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Filters
  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });
  eleventyConfig.addFilter("min", (...numbers) => {
    return Math.min.apply(null, numbers);
  });

  // Collections
  // eleventyConfig.addCollection("notes", function (collectionApi) {
  //   return collectionApi.getFilteredByGlob("notes/*.md");
  // });
  eleventyConfig.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function (item) {
      if ("tags" in item.data) {
        let tags = item.data.tags;

        tags = tags.filter(function (item) {
          switch (item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  });

  // external link shortcode
  eleventyConfig.addShortcode("extlink", function (text, url) {
    return `<div class="extlink">${text}: <a href="${url}">${url}</a></div>`;
  });

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPassthroughCopy({
    "./_includes/assets/prism.css": "./prism.css",
  });
  eleventyConfig.addPassthroughCopy({
    "./_includes/assets/fonts/*": "./",
  });
  eleventyConfig.addPassthroughCopy("img");

  /* Markdown Overrides */
  let markdownLibrary = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
    typographer: true,
  })
    .use(markdownItAnchor, {
      permalink: false,
      permalinkClass: "direct-link",
      permalinkSymbol: "#",
    })
    .use(markdownItImplicitFigures, {
      figcaption: true,
    })
    .use(markdownItAnchor);
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
