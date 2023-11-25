import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'spa-tooltip',
  styleUrl: 'spa-tooltip.css',
  shadow: true,
})
export class SpaTooltip {
  /**
   * Tooltip state
   */
  @Prop({ mutable: true }) tooltipState: boolean = false;

  /**
   * Tooltip target
   */
  @Prop({ mutable: true }) tooltipTarget: string = "";

  /**
   * Tooltip content
   */
  @Prop({ mutable: true }) tooltipText: string = "Tooltip";

  /**
   * Tooltip alignment
   */
  @Prop({ mutable: true }) tooltipAlignment: string = "top";

  /**
   * Tooltip background
   */
  @Prop({ mutable: true }) backgroundColor: string = "var(--theme-gradient, #000)";

/**
 * Tooltip position
 */
  @Prop({ mutable: true }) tooltipPosition?: { top: string, left: string };

  /**
   * Registered State
   */
  _isRegistered = false;

  componentWillLoad(){
    // Register Listeners
    this._isRegistered = this._registerListeners();
  }

  // componentShouldUpdate(prev, cur, prop) {
  //   // This method triggers on a prop or state changing.
  //   // It provides the previousVal, currentVal and prop name that are
  //   // being changed. And so we can validate re-renders here if needed.
  //   // For now returning true;
  //   prev; cur; prop;
  //   return true;
  // }

  render() {
    const tooltipAlignmentCustomCSS: any = {
      "background": `${this.backgroundColor}`,
      position: "fixed",
      ...this.tooltipPosition
    };
    // Return element if register successful.
    // Otherwise no element.
    if (this._isRegistered) {
      return (
        <div class={`tooltip`}>
          <div
            class={`${this.tooltipAlignment} ${this.tooltipState ? "" : "hide"}`}
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

  _registerListeners() {
    if (this.tooltipTarget) {
      const element = document.getElementById(this.tooltipTarget);
      if (element) {
        element.addEventListener('focus', () => this.tooltipState = true);
        element.addEventListener('blur', () => this.tooltipState = false);
        element.addEventListener('mouseenter', () => this.tooltipState = true);
        element.addEventListener('mouseleave', () => this.tooltipState = false);

        // Initial Position
        this._updatePosition(element);

        // Resize Listener
        window.addEventListener('resize', () => {
          this._updatePosition(element);
        }, true);

        // Scroll Listener
        window.addEventListener('scroll', () => {
          this._updatePosition(element);
        }, true);

        return true;
      }
      return false;
    }
  }

  _updatePosition(element) {
    var top = 0,
    left = 0;
    let bound = element.getBoundingClientRect();
    do {
      bound = element.getBoundingClientRect();
      top += bound.top;
      left += bound.left;
      element = element.offsetParent;
      if (element !== null) {
        bound = element.getBoundingClientRect();
        top -= bound.top - window.scrollY;
        left -= bound.left - window.scrollX;
      }
    } while (element);

    this.tooltipPosition = {
      top: top.toString(),
      left: left.toString(),
    };
  }
};


