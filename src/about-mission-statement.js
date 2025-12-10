/**
 * Copyright 2025 nguyenjanel
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `about-mission-statement`
 * 
 * @demo about.html
 * @element about-mission-statement
 */
export class aboutMissionStatement extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "about-mission-statement";
  }

  constructor() {
    super();
    this.title = "title";
    this.description = "description";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: inline-block; /* <- important so blocks sit next to each other */
        color: var(--ddd-theme-default-text);
        background-color: var( --ddd-theme-primary);
        font-family: var(--ddd-font-navigation);
        border-radius: var(--ddd-borderRadius); 

        padding: var(--ddd-spacing-4);
        margin: var(--ddd-spacing-2);

        box-shadow: var( --ddd-boxShadow); /* optional but looks good */
        width: 250px; 
        vertical-align: top; /* ensures top-alignment if heights differ */
      }

      .wrapper {
        margin: 0; /* no need for extra margin now */  
      }
      p{
        color: var( --ddd-theme-default-text-subtle);
      }
      
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <h2>${this.title}</h2>
        <p>${this.description}</p>
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

globalThis.customElements.define(aboutMissionStatement.tag, aboutMissionStatement);