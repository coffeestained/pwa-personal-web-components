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

  @Prop() icon: null | string = null;
  @Prop() text: string = "Button";

  render() {
    return (
      <button class={this.buttonColoring + " " + this.buttonStyle} onClick={this.callback}>
        {this.icon
          ? "" // TODO Icon Support
          : <span>{this.text}</span>
        }
      </button>
    );
  }

}
