import { UilCodeBranch, UilEye, UilStar } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
    useEffect(() => {
        getGithubRepos(username);
    }, [getGithubRepos, username]);

    return (
        <div className='ms-4'>
            <h4 className='profile__information'>
                <FormattedMessage
                    id='repos'
                    defaultMessage='Github repositories'
                />
            </h4>
            {repos.map(repo => (
                <div key={repo.id}>
                    <div>
                        <span className='profile__information'>
                            <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                                {repo.name}
                            </a>
                        </span>
                        <p className='text-muted'>{repo.description}</p>
                    </div>
                    <div className='text-muted'>
                        <ul>
                            <li className='d-flex align-items-center'>
                                <UilStar className='me-1' />
                                <FormattedMessage
                                    id='stars'
                                    defaultMessage='Stars:'
                                />
                                {repo.stargazers_count}
                            </li>
                            <li className='d-flex align-items-center'>
                                <UilEye className='me-1' />
                                <FormattedMessage
                                    id='views'
                                    defaultMessage='Views:'
                                />
                                {repo.watchers_count}
                            </li>
                            <li className='d-flex align-items-center'>
                                <UilCodeBranch className='me-1' />Forks: {repo.forks_count}
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
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
