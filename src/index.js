const { Octokit } = require('octokit');

const githubPrSizeOrder = async(githubToken, owner, repo) => {
    const octokit = new Octokit({ auth: githubToken });

    const listOfOpenPullRequests = await octokit.rest.pulls.list({
        owner,
        repo,
        state: 'open'
    })

    const promises = listOfOpenPullRequests.data.map(openPr => octokit.rest.pulls.get({
        owner,
        repo,
        pull_number: openPr.number,
    }));

    const results = await Promise.all(promises);

    return results.map(pr => {
        const {additions, created_at, deletions, html_url, number, requested_reviewers, title, updated_at, user} = pr.data;
        return {
            additions,
            created_at,
            deletions,
            html_url,
            number,
            requested_reviewers,
            title,
            updated_at,
            user,
        }
    }).sort((a, b) => {
        const totalChangesA = a.additions + a.deletions;
        const totalChangesB = b.additions + b.deletions;
        return totalChangesA < totalChangesB;
    });
}

if (process.argv[4] === 'DEBUG') {
    const [,,owner, repo] = process.argv;
    (async() => {const results = await githubPrSizeOrder(process.env.GH_TOKEN, owner, repo); console.log(results);})();
}

module.exports = {
    githubPrSizeOrder
}
