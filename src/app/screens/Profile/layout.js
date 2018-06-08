import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import defaultImage from './defaultImage.jpg';
import { strings } from './strings';

const ProfileView = ({ profile }) => (
  <Fragment>
    <div className="field-div">
      <img
        className="profile-image"
        src={profile ? (profile.image !== '' ? profile.image : defaultImage) : ''}
        alt="profile"
      />
    </div>
    <div className="field-div">
      {strings.name} {profile ? profile.name : ''}
    </div>
    <div className="field-div">
      {strings.email} {profile ? profile.email : ''}
    </div>
    <div className="field-div">
      {strings.win} {profile ? profile.win : ''}
    </div>
    <div className="field-div">
      {strings.loss} {profile ? profile.loss : ''}
    </div>
  </Fragment>
);

ProfileView.propTypes = {
  profile: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    win: PropTypes.number,
    loss: PropTypes.number
  }).isRequired
};

export default ProfileView;
