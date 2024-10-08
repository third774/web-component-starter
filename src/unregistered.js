import { LitElement, html } from "lit";

export default class MyElement extends LitElement {
  static properties = {
    count: { type: Number },
  };

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.count = 0;
  }
  render() {
    return html`
      <p><button @click="${this._increment}">Click Me!</button></p>
      <p>Click count: ${this.count}</p>
    `;
  }
  _increment(e) {
    this.count++;
  }
}
