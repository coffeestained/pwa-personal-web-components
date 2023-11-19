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
  @Prop({ mutable: true }) tooltipState: boolean = false;

  /**
   * Tooltip target element id
   */
  @Prop({ mutable: true }) tooltipTarget: string = "";

  /**
   * Tooltip content text
   */
  @Prop({ mutable: true }) tooltipText: string = "Tooltip";

  /**
   * Tooltip alignment prop to where the tooltip will appear
   */
  @Prop({ mutable: true }) tooltipAlignment: string = "top";

  /**
   * Tooltip bg
   */
  @Prop({ mutable: true }) backgroundColor: string = "#000";

  /**
   * Registered State
   */
  _isRegistered = false;

  componentWillLoad(){
    // Register Listeners
    this._isRegistered = this._registerListeners();
  }

  componentShouldUpdate(prev, cur, state) {
    console.log(prev,cur, state);
    return true;
  }

  render() {
    const tooltipAlignmentCustomCSS: any = {
      "background-color": `${this.backgroundColor}`
    };

    // Return element if register successful.
    // Otherwise no element.
    console.log(this._isRegistered)
    if (this._isRegistered) {
      console.log('is registered')
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
      console.log('elementfound', element)
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
