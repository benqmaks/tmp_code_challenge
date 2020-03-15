import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper';
import { observable, action } from 'mobx';

// Class that contains specific app state,
// e.g opened modals, etc...
class AppStore extends BaseStore {
  @observable modals = new Map();

  /**
   * Show some modal from modals factory.
   * Base usage `appStore.showModal(<MODAL_NAME>)`.
   *
   * @param id - unique modal name
   * @param props - props list that you want to pass to modal
   */
  @action showModal = (id, props = {}) => {
    this.modals.set(id, props);
  };


  /**
   * Hide some/last modals from user.
   * Base usage `appStore.hideModal()`.
   *
   * If you want to hide particular modal,
   * you need to pass it's unique name `appStore.hideModal(<MODAL_NAME>)`
   *
   * @param id
   */
  @action hideModal = (id) => {
    if (id && id.length) {
      this.modals.delete(id);
    } else {
      const iterator = this.modals.entries();
      let lastModalKey = '';

      for (let i = 0; i < this.modals.size; i = i + 1) {
        const modal = iterator.next();

        if (!modal.done) {
          lastModalKey = modal.value[0];
        } else {
          this.modals.delete(lastModalKey);
        }
      }
    }
  };
}

// Make sure the store’s unique name
// AND must be same formula
// Example: getUserStore => userStore
// Example: getProductStore => productStore
export const getAppStore = getOrCreateStore('appStore', AppStore);
