import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'spa-tooltip',
  styleUrl: 'spa-tooltip.css',
  shadow: true,
})
export class SpaTooltip {
  /**
   * Tooltip displayed state
   */
  @Prop() tooltipState: boolean = true;

  /**
   * Tooltip target element id
   */
  @Prop() tooltipTarget: string = "";

  /**
   * Tooltip content text
   */
  @Prop() tooltipText: string = "Tooltip";

  /**
   * Tooltip alignment prop to where the tooltip will appear
   */
  @Prop() tooltipAlignment: string = "top";

  /**
   * Tooltip bg
   */
  @Prop() backgroundColor: string = "#000";

  render() {
    const tooltipAlignmentCustomCSS: any = {
      "background-color": `${this.backgroundColor}`
    };


    return (
      <div class={`tooltip ${this.tooltipState ? "" : "hide"}`}>
        <div
          class={`${this.tooltipAlignment}`}
          style={tooltipAlignmentCustomCSS}
        >
          <h3>{this.tooltipText}</h3>
          <i></i> {/* ! CREATES THE TOOLTIP POINTER ! */}
          <slot />
        </div>
      </div>
    );
  }

  _hide() {
    this.tooltipState = false;
  }

  _show() {
    this.tooltipState = true;
  }

  _registerListeners() {
    if (this.tooltipTarget) {
      const element = document.getElementById(this.tooltipTarget);
      if (element) {
        element.addEventListener('focus', this._show);
        element.addEventListener('blur', this._hide);
        element.addEventListener('mouseenter', this._show);
        element.addEventListener('mouseleave', this._hide);
      }
    }
  }
}
