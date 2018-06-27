export default class Form {
  constructor(group, items, id) {
    this.group = group;
    this.items = items || [];
    this.id = id;
  }

  isValid(keyInputs) {
    if (!Array.isArray(keyInputs) || keyInputs.length === 0) {
      return this.group.status === 'DISABLED' ? true : this.group.valid;
    } else {
      let keyError = keyInputs.find((key) => {
        return !this.getItem(key).isValid;
      });
      return keyError === undefined;
    }
  }

  getItem(name) {
    return this.checkItemExist(name) ? this.items[name] : undefined;
  }

  checkItemExist(name) {
    if (!this.items[name]) {
      // Throw error identifying the name
    }
    return true;
  }

}