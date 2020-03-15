import React from 'react';
import UserDetailsModal from '@components/modals/UserDetailsModal/UserDetailsModal';
import ConfirmModal from '@components/modals/ConfirmModal/ConfirmModal';

const ModalsFactory = {
  USER_DETAILS_MODAL: (props) => {
    return (<UserDetailsModal {...props} />);
  },
  USER_DELETE_CONFIRM: (props) => {
    return (<ConfirmModal {...props} />);
  },
};

export default ModalsFactory;
