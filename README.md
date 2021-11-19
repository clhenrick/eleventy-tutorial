# Eleventy Demo
Learning [Eleventy](https://www.11ty.dev/)

## Notes

- Markdown files can live anywhere, they do not have to live in a specific directory, Eleventy will find them and create routes for them.

- By default Markdown files are processed using Liquid templating, but you can change that to something else like [nunjucks](https://mozilla.github.io/nunjucks/) for example.

- Unrecognized file templates will not be copied by Eleventy by default (e.g. CSS, JS, images), but you can add them in the `--formats=` option in the CLI or via the config file

- pages can use includes / layouts, just be careful that the BrowserSync server needs a `<body>` tag in order for hot reloading to work

- permalinks can be specified in front matter

- eleventy has what's called a ["Data Cascade"](https://www.11ty.dev/docs/data-cascade/)

- data can come from:
    - front matter, in layouts, templates
    - template data files
    - data directory (global data files)

- pagination
    - can be used to show a number of results at a time
    - can iterate over any data to output anything you want
    - multiple output files from a single input file
    - e.g. fetch data from a CMS 

- Eleventy has a lot of other cool, customizable features in it, like [Assett Pipelines](https://mxb.dev/blog/eleventy-asset-pipeline/) for built in processing CSS/Sass, JS, etc.

- JavaScript is parsed as Eleventy Templates [docs](https://www.11ty.dev/docs/languages/javascript/#classes)