/**
 * Copyright 2025 nguyenjanel
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./home-slope-type.js";
import "./footer-tag.js"

/**
 * `tussey-home`
 * 
 * @demo index.html
 * @element tussey-home
 */
export class tusseyHome extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "tussey-home";
  }

  constructor() {
    super();
    
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        color: var(--ddd-theme-primary);
        font-family: var(--ddd-font-navigation);
      }
      .placer{
        width: 100%;
        height: 200px;
        background-color: grey;
      }

      .slopes{
        display: flex;
        justify-content: center; /* horizontal alignment */
        gap: 5%;
      }
      
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class="placer">
          <p>Placer for the display of tussey league</p>
        </div>
        <div class="placer">
          <p>join team buttons</p>
        </div>
        <div class="placer">
          <p>ABOUT BLURB</p>
        </div>

        <div class="slopes">
          <home-slope-type
            number = "2"
            description = "Black Diamonds">
          </home-slope-type>
          <home-slope-type
            number = "4"
            description = "Blue">
          </home-slope-type>
          <home-slope-type
            number = "3"
            description = "Green">
          </home-slope-type>
        </div>
        <div class="placer">
          <p>SOCIAL MEDIA</p>
        </div>
        <footer-tag></footer-tag>
      </div>
      `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(tusseyHome.tag, tusseyHome);