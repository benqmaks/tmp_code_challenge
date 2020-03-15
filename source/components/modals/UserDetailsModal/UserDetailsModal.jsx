import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import TextField from '../../ui/TextField/TextField';
import Button from '../../ui/Button/Button';
import { TABS } from '../../../framework/constants';
import styles from './UserDetailsModal.styl';

class UserDetailsModal extends React.Component {
  static propTypes = {
    values: PropTypes.object,
    onSaveClick: PropTypes.func,
  };

  static defaultProps = {
    values: {},
    onSaveClick: () => {},
  };

  constructor(props) {
    super(props);

    this.state = { ...props.values };
  }

  onFieldChange = (value, name) => {
    const newState = { ...this.state };
    newState[name] = value;
    this.setState(() => newState)
  };

  onSaveClick = () => {
    this.props.onSaveClick({ ...this.state });
  };

  renderTabsTitle = () => {
    return (
      <TabList>
        {TABS.map((tab, index) => (
          <Tab key={`${tab.key}_title`}>{tab.title}</Tab>
        ))}
      </TabList>
    )
  };

  renderTabsContent = () => {
    return TABS.map((tab, index) => {
      const fieldValue = this.state[tab.key];

      return (
        <TabPanel key={`${tab.key}_content`}>
          <TextField value={fieldValue} name={tab.key} onChange={this.onFieldChange} />
        </TabPanel>
      )
    });
  };

  render() {
    return (
      <div className={styles.details}>
        <div className={styles.content}>
          <Tabs>
            {this.renderTabsTitle()}
            {this.renderTabsContent()}
          </Tabs>
        </div>

        <div className={styles.controls}>
          <Button onClick={this.onSaveClick}>Save</Button>
        </div>
      </div>
    )
  }
}

export default UserDetailsModal;
