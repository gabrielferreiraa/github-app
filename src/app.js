'use strict';

import React from 'react';
import axios from 'axios';
import AppContent from './components/app-content';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : '';
    const internalType = type ? `/${type}` : '';
    return `https://api.github.com/users${internalUser}${internalType}`;
  }

  handleSearch (e) {
    const keyCode = e.witch || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      const value = e.target.value;
      this.setState({
        isFetching: true
      });

      return axios.get(this.getGitHubApiUrl(value))
            .then(result => {
              result = result.data;
              this.setState({
                userinfo: {
                  username: result.name,
                  photo: result.avatar_url,
                  login: result.login,
                  repos: result.public_repos,
                  followers: result.followers,
                  following: result.following
                },
                repos: [],
                starred: []
              });
              this.setState({
                isFetching: false
              });
            });
    }
  }

  /* Utilizando High Order Functions */
  getRepos (type) {
    return (e) => {
      const username = this.state.userinfo.login;
      axios.get(this.getGitHubApiUrl(username, type))
        .then((result) => {
          var data = result.data;
          this.setState({
            [type]: data.map((repo) => ({
              name: repo.name,
              link: repo.html_url
            }))
          });
        });
    };
  }

  render () {
    return (
      <AppContent
        {...this.state}
        handleSearch={this.handleSearch}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}
      />
    );
  }
}

export default App;
