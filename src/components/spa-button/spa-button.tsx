import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'spa-button',
  styleUrl: 'spa-button.css',
  shadow: true,
})
export class SpaButton {
  /**
   * The button callback
   */
  @Prop() callback: () => void;
  @Prop() buttonColoring: "primaryColor" | "secondaryColor" = "primaryColor";
  @Prop() buttonStyle: "primaryStyle" | "secondaryStyle" = "primaryStyle";

  render() {
    return (
      <button class={this.buttonColoring + " " + this.buttonStyle} onClick={this.callback}>

      </button>
    );
  }

}
