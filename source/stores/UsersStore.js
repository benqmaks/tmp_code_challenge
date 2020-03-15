import { BaseStore, getOrCreateStore } from 'next-mobx-wrapper';
import { observable, action } from 'mobx';

import UsersAPI from '../services/UsersAPI';
import { autoSave} from '../framework/utils';
import { IS_SERVER } from '../framework/constants';

class UsersStore extends BaseStore {
  @observable users = [];

  // We load users data on first load and put in into state
  // if it is available. Also we run this.save() every time
  // we have changes in our state object to save the data.
  constructor() {
    super();

    if (!IS_SERVER) {
      this.load();
      autoSave(this, this.save);
    }
  }

  load = () => {
    // get data from localstorage
    const data = UsersAPI.getUsers();

    // replace existing default observable values
    // by data from localstorage
    this.users.replace(data.users);
  };

  save = (data) => {
    UsersAPI.saveUsers(data);
  };

  // Adds user to users state
  @action addUser = (user) => {
    this.users.push(user);

  };

  // Removes user from users state
  @action deleteUser = (index) => {
    this.users.splice(index, 1);
  };

  // Updates user by index
  @action updateUser = (user, index) => {
    this.users[index] = user;
  };

  // Cleans the users state
  @action clear = () => {
    this.users.clear();
  }
}

// Make sure the store’s unique name
// AND must be same formula
// Example: getUserStore => userStore
// Example: getProductStore => productStore
export const getUsersStore = getOrCreateStore('userStore', UsersStore);
