import * as React from 'react';
import { entries } from 'mobx';
import { inject, observer } from 'mobx-react';
import { BaseModal } from '@components/modals';

@inject(({ appStore: { modals, hideModal }}, props) => ({
  modals,
  hideModal
}))
@observer
class ModalsContainer extends React.Component {
  onCloseClick = (type) => {
    const { hideModal} = this.props;

    hideModal(type);
  };

  renderModals = () => {
    const { modals } = this.props;

    return entries(modals).map(([key, value], index) => {
      const { className, overlayClassName, ...props } = value;
      const baseModalProps = { className, overlayClassName };
      return (
        <BaseModal key={`${key}_${index}`} type={key} props={props} {...baseModalProps} onClose={this.onCloseClick} />
      );
    });
  };

  render() {
    return (
      <div className='overlay'>
        {this.renderModals()}
      </div>
    );
  }
}

export default ModalsContainer;
