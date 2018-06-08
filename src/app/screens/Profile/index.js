import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../../../redux/profile/actions';

import { strings } from './strings';
import ProfileView from './layout.js';
import './styles.css';

class Profile extends Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.getUserProfile());
  }
  render() {
    const profile = this.props.userProfile;
    const error = this.props.error;
    return (
      <div className="profile-div">
        <h2>{!error && strings.profileTitle}</h2>
        {!error && <ProfileView profile={profile} />}
        {error && <span className="profile-error">{strings.error}</span>}
      </div>
    );
  }
}

Profile.propTypes = {
  userProfile: PropTypes.node,
  error: PropTypes.string
};

const mapStateToProps = state => ({
  error: state.profile.err,
  userProfile: state.profile.userProfile
});

export default connect(mapStateToProps)(Profile);
