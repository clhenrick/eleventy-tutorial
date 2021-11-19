// you can also do things like remote data fetching in here
// but is probably better to do in the _data/ directory
// this file will be invoked once per file in the blog directory
module.exports = async () => {
    // e.g.
    // const image = await fetch('https://cat.gif');
    return {
        layout: 'blog',
        tags: 'blog'
    }
}