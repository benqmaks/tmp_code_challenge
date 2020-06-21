const USERS_KEY = 'users';

class UsersAPI {
  getUsers = () => {
    let usersArr = [];
    const users = localStorage.getItem(USERS_KEY);

    if (!users) {
      return usersArr;
    }

    try {
      usersArr = JSON.parse(users);
    } catch (e) {
      console.log(e);
      return usersArr;
    }

    return usersArr;
  };

  saveUsers = (users) => {
    try {
      const json = JSON.stringify(users);
      localStorage.setItem(USERS_KEY, json);
    } catch(e) {
      console.log(e);
      return false;
    }

    return true;
  };
}

export default new UsersAPI();
