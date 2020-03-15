import React from 'react';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

import UsersTable from '../../ui/UsersTable/UsersTable';
import Button from '../../ui/Button/Button';
import styles from './HomeContainer.styl';

@inject(({ usersStore, appStore, searchStore }, props) => ({
  usersStore, appStore, searchStore
}))
@observer
class HomeContainer extends React.Component {
  componentWillUnmount() {
    const { usersStore } = this.props;
    usersStore.clear();
  }

  addUser = (user) => {
    const { usersStore, appStore } = this.props;
    usersStore.addUser(user);
    appStore.hideModal('USER_DETAILS_MODAL');
  };

  updateUser = (user, index) => {
    const { usersStore, appStore } = this.props;
    usersStore.updateUser(user, index);
    appStore.hideModal('USER_DETAILS_MODAL');
  };

  deleteUser = (index) => {
    const { usersStore, appStore } = this.props;
    usersStore.deleteUser(index);
    appStore.hideModal('USER_DELETE_CONFIRM');
  };

  onAddRecordClick = () => {
    const { appStore } = this.props;
    appStore.showModal('USER_DETAILS_MODAL', { onSaveClick: this.addUser });
  };

  onUserChangeClick = (index, user) => {
    const { appStore } = this.props;
    appStore.showModal('USER_DETAILS_MODAL', { onSaveClick: (newUser) => this.updateUser(newUser, index), values: { ...user }});
  };

  onUserDeleteClick = (index) => {
    const { appStore } = this.props;
    appStore.showModal('USER_DELETE_CONFIRM', { onConfirm: () => this.deleteUser(index), onDecline: this.onUserDeleteDecline });
  };

  onUserDeleteDecline = () => {
    const { appStore } = this.props;
    appStore.hideModal('USER_DELETE_CONFIRM');
  };

  render() {
    const { usersStore } = this.props;

    const tableProps = {
      users: toJS(usersStore.users),
      onRowEditClick: this.onUserChangeClick,
      onRowDeleteClick: this.onUserDeleteClick,
    };

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <UsersTable {...tableProps} />
        </div>

        <div className={styles.controls}>
          <Button onClick={this.onAddRecordClick}>Add Record</Button>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
