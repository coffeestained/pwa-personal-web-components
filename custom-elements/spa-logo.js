import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const spaLogoCss = ":host{display:block}";

const SpaLogo$1 = /*@__PURE__*/ proxyCustomElement(class SpaLogo extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.src = "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";
  }
  render() {
    return h("img", { src: "{src}" });
  }
  static get style() { return spaLogoCss; }
}, [1, "spa-logo", {
    "src": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["spa-logo"];
  components.forEach(tagName => { switch (tagName) {
    case "spa-logo":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SpaLogo$1);
      }
      break;
  } });
}
defineCustomElement$1();

const SpaLogo = SpaLogo$1;
const defineCustomElement = defineCustomElement$1;

export { SpaLogo, defineCustomElement };

//# sourceMappingURL=spa-logo.js.map