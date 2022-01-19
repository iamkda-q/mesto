export default class Section {
  constructor(/* {items, */ renderer/* } */, containerSelector) {
    // this._items = items;
    this.renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._containerSelector.prepend(item);
  }

  renderItems() {
    this._items.forEach(item => this.renderer(item));
  }
}
