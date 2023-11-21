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
  @Prop() buttoncoloring: "primaryColor" | "secondaryColor" = "primaryColor";
  @Prop() buttonstyle: "primaryStyle" | "secondaryStyle" = "primaryStyle";

  @Prop() icon: null | string = null;
  @Prop() text: string = "Button";

  render() {
    return (
      <button class={this.buttoncoloring + " " + this.buttonstyle} onClick={this.callback}>
        {this.icon
          ? "" // TODO Icon Support
          : <span>{this.text}</span>
        }
      </button>
    );
  }

}
