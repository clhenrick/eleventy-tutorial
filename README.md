# Eleventy Demo

Learning [Eleventy](https://www.11ty.dev/).

## Pros & Cons

Here I'm comparing my first experience using Eleventy to my existing knowledge of and familiarity with using the Jekyll static site generator (SSG).

### Pros

- Eleventy feels very similar to Jekyll in terms of SSG terminology and how code is organized. The generated site is outputted in a folder called `_site`, there are build directory naming conventions such as `_data`, `_includes`, etc.

- Eleventy supports a lot of features out of the box with no configuration file.

- Writing JavaScript (NodeJS) for configuring things in Eleventy such as data sources, collections, and asset pipelines feels natural as a frontend developer. I don't have to look up Ruby related things or remember how to use `rbenv`.

- You can easily use an HTML templating language other than Liquid without having to write a or modify the Eleventy config file.

- Making a custom collection feels a little more easy than in Jekyll, you just add a `[name].11tydata.js` file in the directory of your collection and have it export an object with a `tags` property.

- Markdown files can literally live anywhere, such as in nested directories, and Eleventy will automatically process them to page URLs for you without any additional configuration.

- Data handling (via Eleventy's Data Cascade) feels a little more advanced / modern than Jekyll, though to be fair I've never incorporated a remote data source into a Jekyll site before. Eleventy also has a way to [cache remote data](https://www.11ty.dev/docs/quicktips/) which is nice.

### Cons

- The folder naming convention is slightly different at times coming from Jekyll. For example, in Eleventy if you have a directory of blog post files and put them in a `_blog` directory like you would with Jekyll, then each post URL would be `/_blog/post-name/`. You can change this by using permalinks, like you can with Jekyll, but it caught me off guard.

- More flexibility can mean more choices and decisions to make. I imagine that this likely means that each starter project you might choose could be structured differently, which is only really an issue if you want to customize things.

- Setting up a blog collection and pagination means you have to configure it manually using a `[name].11tydata.js` file in your blog posts directory, where as with Jekyll you get this out of the box.

- Copying any static assets must be configured manually where as in Jekyll you get this out of the box.

- To use Sass, you must configure it manually where as in Jekyll you get this out of the box.

- Runtime JavaScript must be configured manually if you want to use any build tooling such as Webpack, Rollup, etc. which at first seems a little odd given that Eleventy uses JavaScript heavily. Though to be fair, if you wanted to do this with Jekyll you'd also have to set it up manually. Eleventy's asset pipelines seem fairly straightforward to set up, but I have questions about how compatible they are with things like incorporating JS frameworks. It makes sense in some regard that Eleventy is unopinionated about how you process JS given the plethora of options for doing this in the JS ecosystem. If it chose one option for you it could be convenient but potentially annoying to customize or change later.

## Remaining Questions

Mainly, how painful is it to use a JavaScript framework such as React, Vue, or Svelte with an Eleventy site? Because you can write your own asset pipelines in 11ty this theoretically should be possible. Why would you want to do this? Say you have certain pages that require an app like UI, such as a dashboard, where managing data flow and interactions would benefit from a JS framework. I'm still unsure of how I might structure the code for a site like this, perhaps it would make things too convoluted. In a project I'm currently working on the only requirement for the time being is to have static content. Sometime in the future there may or may not be a need for more dashboard like interactivity, which is why I'm thinking about this.

## Notes

General notes I took while going through setting up a basic Eleventy project.

- Markdown files can live anywhere, they do not have to live in a specific directory, Eleventy will find them and create routes for them.

- By default Markdown files are processed using Liquid templating, but you can change that to something else like [nunjucks](https://mozilla.github.io/nunjucks/) for example.

- Unrecognized file templates will not be copied by Eleventy by default (e.g. CSS, JS, images), but you can add them in the `--formats=` option in the CLI or via the config file

- pages can use `includes` / `layouts` (in Eleventy these mean the same thing but in Jekyll they mean different things), just be aware that the BrowserSync server needs a `<body>` tag somewhere in order for hot reloading to work.

- permalinks can be specified in front matter.

- eleventy has what's called a ["Data Cascade"](https://www.11ty.dev/docs/data-cascade/). [Tutorial on the Data Cascade by Ben Myers](https://benmyers.dev/blog/eleventy-data-cascade/).

- data can come from:
    - global data
    - front matter, in layouts, templates
    - template data files
    - data directory (global data files)
    - computed data

- pagination
    - can be used to show a number of results at a time
    - can iterate over any data to output anything you want
    - multiple output files from a single input file
    - e.g. fetch data from a CMS 

- Eleventy has a lot of other cool, customizable features in it, like [Assett Pipelines](https://mxb.dev/blog/eleventy-asset-pipeline/) for built in processing CSS/Sass, JS, etc.

- JavaScript is parsed as Eleventy Templates [docs](https://www.11ty.dev/docs/languages/javascript/#classes)

## Other Resources:

- [Eleventy Quick Tips](https://www.11ty.dev/docs/quicktips/)

- [Eleventy tutorials](https://www.11ty.dev/docs/tutorials/)

- Tutorial: [Learn Eleventy From Scratch by Andy Bell](https://learneleventyfromscratch.com/)

- [Eleventy Discord](https://www.11ty.dev/blog/discord/)