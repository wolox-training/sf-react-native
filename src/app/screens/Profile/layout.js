import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { strings } from './strings';

const ProfileView = ({ profile }) => (
  <Fragment>
    <br />
    {strings.email} {profile ? profile.email : ''}
    <br />
    {strings.name} {profile ? profile.name : ''}
    <br />
    {strings.win} {profile ? profile.win : ''}
    <br />
    {strings.loss} {profile ? profile.loss : ''}
    <br />
  </Fragment>
);

ProfileView.propTypes = {
  profile: PropTypes.node.isRequired
};

export default ProfileView;
