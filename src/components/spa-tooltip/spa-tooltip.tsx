import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'spa-tooltip',
  styleUrl: 'spa-tooltip.css',
  shadow: true,
})
export class SpaTooltip {
  /**
   * Tooltip displayed state
   */
  @Prop() tooltipState: boolean = false;

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

  /**
   * Watch for state  / text changes
   */
  @Watch('tooltipState')
  @Watch('tooltipText')

  render() {
    const tooltipAlignmentCustomCSS: any = {
      "background-color": `${this.backgroundColor}`
    };

    // Register Listeners
    const registered = this._registerListeners();

    // Return element if register successful.
    // Otherwise no element.
    if (registered) {
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
    return ("");
  }

  _hide() {
    console.log('doing the thing')
    this.tooltipState = false;
  }

  _show() {
    console.log('doing the thing')
    this.tooltipState = true;
  }

  _registerListeners() {
    console.log(this.tooltipTarget)
    if (this.tooltipTarget) {
      const element = document.getElementById(this.tooltipTarget);
      console.log(element)
      if (element) {
        element.addEventListener('focus', this._show);
        element.addEventListener('blur', this._hide);
        element.addEventListener('mouseenter', this._show);
        element.addEventListener('mouseleave', this._hide);
        console.log(element)
        return true;
      }
      return false;
    }
  }
}
