import PropTypes from 'prop-types';
import { Fragment, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles]);

    return (
        <>
            <Navbar />
            <section className='container-fluid mt-5 pt-5'>
                {loading ? (
                    <Spinner />
                ) : (
                    <Fragment>
                        <div className='row g-4'>
                            <div className='col-lg-3'>
                                <Sidebar />
                            </div>
                            <div className='col-md-8 col-lg-6 vstack gap-4'>
                                <h1 className='profile__title text-center mt-4'>
                                    <FormattedMessage
                                        id='developers'
                                        defaultMessage='Developers'
                                    />
                                </h1>
                                <div>
                                    {profiles.length > 0 ? (
                                        profiles.map((profile) => (
                                            <ProfileItem key={profile._id} profile={profile} />
                                        ))
                                    ) : (
                                        <h4>
                                            <FormattedMessage
                                                id='profile.not'
                                                defaultMessage='Profiles not found...'
                                            />
                                        </h4>
                                    )}
                                </div>
                            </div>
                            <div className='col-lg-3'>
                            </div>
                        </div>
                    </Fragment>
                )}
            </section>
        </>
    );
};

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
