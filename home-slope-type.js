/**
 * Copyright 2025 nguyenjanel
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `home-slope-type`
 * 
 * @demo home.html
 * @element home-slope-type
 */
export class homeSlopeType extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "home-slope-type";
  }

  constructor() {
    super();
    this.number = "1";
    this.description = "description";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      number: { type: String },
      description: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: inline-block; /* <- important so blocks sit next to each other */
      }
      .card {
        position: relative;
        color: black;
        background-color: #b8eef5;
        border-radius: 16px;
        padding: 16px;
        width: 250px;

        box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        overflow: hidden;
    }

      /* WORKS 100%: hover on the .card div */
      .card:hover {
        transform: translateY(-6px);
        box-shadow: 0 10px 18px rgba(0,0,0,0.28);
      }
      .wrapper {
        margin: 0; /* no need for extra margin now */
        text-align: center;
      }
      h1{
        font-size: 80px;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="card">
      <div class="wrapper">
        <h1>${this.number}</h1>
        <p>${this.description}</p>
      </div>
    </div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(homeSlopeType.tag, homeSlopeType);