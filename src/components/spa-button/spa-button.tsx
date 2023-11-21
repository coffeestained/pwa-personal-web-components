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
  @Prop() coloring: "primaryColor" | "secondaryColor" = "primaryColor";
  @Prop() style: "primaryStyle" | "secondaryStyle" = "primaryStyle";

  render() {
    return (
      <button class={this.coloring + " " + this.style} onClick={this.callback}>

      </button>
    );
  }

}
