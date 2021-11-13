const { Octokit, App } = require("octokit");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

(async() => {
    const response = await octokit.rest.pulls.list({
        owner: 'mikedidomizio',
        repo: 'github-pr-size-order'
    })

    console.log(response);
})();