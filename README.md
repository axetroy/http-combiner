# http-combiner

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/http-combiner.svg)](https://greenkeeper.io/)

combine the many http request in one http reques with NodeJs implement.

## Installation

```bash
npm install http-combiner --save
```

## Usage

```javascript
const httpCombiner = require('http-combiner');

// combine http and request the url one by one
combine([
  {
    url: 'https://api.github.com',
    method: 'GET'
  },
  {
    url: 'https://api.github.com',
    method: 'GET'
  }
])
  .then(function(res) {
    console.log(res);
    /*
    [
      {
        "data": {
          "current_user_url": "https://api.github.com/user",
          "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
          "authorizations_url": "https://api.github.com/authorizations",
          "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
          "commit_search_url": "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}",
          "emails_url": "https://api.github.com/user/emails",
          "emojis_url": "https://api.github.com/emojis",
          "events_url": "https://api.github.com/events",
          "feeds_url": "https://api.github.com/feeds",
          "followers_url": "https://api.github.com/user/followers",
          "following_url": "https://api.github.com/user/following{/target}",
          "gists_url": "https://api.github.com/gists{/gist_id}",
          "hub_url": "https://api.github.com/hub",
          "issue_search_url": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
          "issues_url": "https://api.github.com/issues",
          "keys_url": "https://api.github.com/user/keys",
          "notifications_url": "https://api.github.com/notifications",
          "organization_repositories_url": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}",
          "organization_url": "https://api.github.com/orgs/{org}",
          "public_gists_url": "https://api.github.com/gists/public",
          "rate_limit_url": "https://api.github.com/rate_limit",
          "repository_url": "https://api.github.com/repos/{owner}/{repo}",
          "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
          "current_user_repositories_url": "https://api.github.com/user/repos{?type,page,per_page,sort}",
          "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
          "starred_gists_url": "https://api.github.com/gists/starred",
          "team_url": "https://api.github.com/teams",
          "user_url": "https://api.github.com/users/{user}",
          "user_organizations_url": "https://api.github.com/user/orgs",
          "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
          "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
        },
        "status": 200,
        "statusText": "OK",
        "config": {
          "url": "https://api.github.com",
          "method": "GET",
          "data": null,
          "headers": {}
        },
        "error": null
      },
      {
        "data": {
          "current_user_url": "https://api.github.com/user",
          "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
          "authorizations_url": "https://api.github.com/authorizations",
          "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
          "commit_search_url": "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}",
          "emails_url": "https://api.github.com/user/emails",
          "emojis_url": "https://api.github.com/emojis",
          "events_url": "https://api.github.com/events",
          "feeds_url": "https://api.github.com/feeds",
          "followers_url": "https://api.github.com/user/followers",
          "following_url": "https://api.github.com/user/following{/target}",
          "gists_url": "https://api.github.com/gists{/gist_id}",
          "hub_url": "https://api.github.com/hub",
          "issue_search_url": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
          "issues_url": "https://api.github.com/issues",
          "keys_url": "https://api.github.com/user/keys",
          "notifications_url": "https://api.github.com/notifications",
          "organization_repositories_url": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}",
          "organization_url": "https://api.github.com/orgs/{org}",
          "public_gists_url": "https://api.github.com/gists/public",
          "rate_limit_url": "https://api.github.com/rate_limit",
          "repository_url": "https://api.github.com/repos/{owner}/{repo}",
          "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
          "current_user_repositories_url": "https://api.github.com/user/repos{?type,page,per_page,sort}",
          "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
          "starred_gists_url": "https://api.github.com/gists/starred",
          "team_url": "https://api.github.com/teams",
          "user_url": "https://api.github.com/users/{user}",
          "user_organizations_url": "https://api.github.com/user/orgs",
          "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
          "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
        },
        "status": 200,
        "statusText": "OK",
        "config": {
          "url": "https://api.github.com",
          "method": "GET",
          "data": null,
          "headers": {}
        },
        "error": null
      }
    ]
    */
  })
  .catch(function(err) {
    console.error(err);
  });

// or simple request, default GET method
combine(['https://api.github.com', 'https://api.github.com'])
    .then(function(){
      
    })
    .catch(function() {
      
    });
```

## Quick start

```bash
git clone https://github.com/axetroy/http-combiner.js.git
cd ./http-combiner
npm start

# now you can post request array to http://localhost:3000/combine
```

## Contributing

```bash
git clone https://github.com/axetroy/http-combiner.js.git
cd ./http-combiner
npm start
```
