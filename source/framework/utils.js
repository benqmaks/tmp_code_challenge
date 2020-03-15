import { autorun, toJS } from 'mobx';

export function autoSave(store, save) {
  let firstRun = true;

  autorun(() => {
    const data = toJS(store);

    if (!firstRun) {
      save(data);
    }

    firstRun = false;
  });
}
