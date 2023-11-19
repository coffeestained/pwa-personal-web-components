import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'spa-text-logo',
  styleUrl: 'spa-text-logo.scss',
  shadow: true,
})
export class SpaTextLogo {
  /**
   * The logo style
   */
  @Prop() logostyle: "short" | "full" = "short";
  @Prop() container: "" | "square" = "";
  @Prop() animation: false | "border1" | "border2";

  render() {
    return <span class={`${this.container} ${this.animation ? this.animation : ""}`}>{this.logostyle === "short" ? "ts" : "tillie studios"}</span>;
  }
}
