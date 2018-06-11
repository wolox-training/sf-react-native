import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../../../redux/profile/actions';
import { withLoading } from '../../components/Loading/loading';

import { strings } from './strings';
import ProfileView from './layout.js';
import './styles.css';

const ProfileViewWithLoading = withLoading(ProfileView);

class Profile extends Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.getUserProfile());
  }
  render() {
    const profile = this.props.userProfile;
    const error = this.props.error;
    return (
      <div className="profile-div">
        {!error && <ProfileViewWithLoading isLoading={this.props.loading} profile={profile} />}
        {error && <span className="profile-error">{strings.error}</span>}
      </div>
    );
  }
}

Profile.propTypes = {
  userProfile: PropTypes.node,
  error: PropTypes.string,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  error: state.profile.err,
  userProfile: state.profile.userProfile,
  loading: state.profile.loading
});

export default connect(mapStateToProps)(Profile);
