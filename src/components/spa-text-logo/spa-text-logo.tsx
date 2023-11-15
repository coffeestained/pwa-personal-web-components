import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'spa-text-logo',
  styleUrl: 'spa-text-logo.css',
  styles: [
    'spa-text-logo.css',
    'web-components.css'
  ],
  shadow: true,
})
export class SpaTextLogo {
  /**
   * The logo style
   */
  @Prop() logoStyle: "short" | "full" = "short";
  @Prop() container: "" | "square" = "";

  render() {
    const text = this.logoStyle === "short" ? "ts" : "tillie studios";
    return <span class={this.container}>{text}</span>;
  }
}
