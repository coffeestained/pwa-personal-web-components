import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'spa-text-logo',
  styleUrl: 'spa-text-logo.css',
  shadow: true,
})
export class SpaTextLogo {
  /**
   * The logo style
   */
  @Prop() logostyle: "short" | "full" = "short";
  @Prop() container: "" | "square" = "";

  render() {
    const text = this.logostyle === "short" ? "ts" : "tillie studios";
    return <span class={this.container}>{text}</span>;
  }
}
