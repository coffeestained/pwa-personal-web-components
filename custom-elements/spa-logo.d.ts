import type { Components, JSX } from "../dist/types/components";

interface SpaLogo extends Components.SpaLogo, HTMLElement {}
export const SpaLogo: {
  prototype: SpaLogo;
  new (): SpaLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
