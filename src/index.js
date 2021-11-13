const { Octokit, App } = require("octokit");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

(async() => {
    const listOfPullRequests = await octokit.rest.pulls.list({
        owner: 'mikedidomizio',
        repo: 'github-pr-size-order'
    })

    console.log(listOfPullRequests);
})();