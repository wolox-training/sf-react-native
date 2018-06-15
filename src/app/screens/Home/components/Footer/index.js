import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../../../../components/CustomButton';
import { strings } from '../strings';

import { footerStyle as styles } from './styles';

export default function Footer(props) {
  return (
    <CustomButton
      onPress={props.onRemoveCompleted}
      style={styles.footer}
      title={strings.footerText}
      textStyle={styles.remove}
      medium
      center
    />
  );
}

Footer.propTypes = {
  onRemoveCompleted: PropTypes.func.isRequired
};
