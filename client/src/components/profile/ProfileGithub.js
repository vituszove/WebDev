import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { getGithubRepos } from "../../actions/profile";

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);

  return (
    <div className="container">
      <h5>
        <i className="fab fa-github"></i> Github Repos
      </h5>{" "}
      <div className="repo white">
        <div className="row">
          {repos === null ? (
            <Spinner />
          ) : (
            repos.map(repo => (
              <div className="col s12 m6" key={repo.id}>
                <div className="z-depth-1 github-card">
                  <h5 className="teal accent-4 repo-title">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="white-text teal accent-4 btn z-depth-0"
                    >
                      {repo.name}{" "}
                      <i className="material-icons right white-text ">
                        double_arrow
                      </i>
                    </a>
                  </h5>

                  <p className="grey-text text-darken-2">{repo.description}</p>

                  <ul>
                    <li className="chip white-text teal accent-4">
                      Star {repo.stargazers_count}
                    </li>
                    <li className="chip white-text grey darken-4">
                      Watch {repo.watchers_count}
                    </li>
                    <li className="chip grey lighten-3">
                      Fork {repo.forks_count}
                    </li>
                  </ul>
                </div>
              </div>
            ))
          )}{" "}
        </div>
      </div>
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
};
const mapStateToProps = state => ({
  repos: state.profile.repos
});
export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
