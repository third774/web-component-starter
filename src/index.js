import MyElement from "./unregistered.js";

export { MyElement };

customElements.define("my-element", MyElement);
