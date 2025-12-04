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
 * @element footer-tag
 */
export class footerTag extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "footer-tag";
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
        display: block;
        width: 100%;
        height: 300px;
        color: var(--ddd-theme-default-text);
        font-family: var(--ddd-font-navigation);
      }

      .wrapper {
        padding-top: 25px;
        padding:20px;
        background-color: var( --ddd-theme-primary);
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
      }

      /* RIGHT SIDE */
      .right-side {
        flex: 1;
        max-width: 40%;
      }

      .right-side img {
        width: 30px;
      }

      .social-bar {
        display: flex;
        gap: 10px;
      }

      /* LEFT SIDE */
      .left-side {
        flex: 1;
        display: grid;
        grid-template-columns: 1fr 1fr; /* two columns */
        max-width: 40%;
      }

      .left-column p,
      .right-column p {
        margin: 6px 0;
        color: var(--ddd-theme-default-text-subtle);
      }  
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class ="right-side">
            <h2>Tussey Snowboard</h2>
            <p>We empower apsiring young snowboarders with competitive match ranking...</p>
            <div class="social-bar">
              <img src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg">
              <img src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg">
              <img src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg">
              <img src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg">
            </div>
        </div>
        <div class="left-side">
          <div class ="left-column">
            <p>Site Map</p>
            <p>Homepage</p>
            <p>About</p>
            <p>Sponsors</p>
            <p>Schedule</p>
            <p>Teams</p>
            <p>Contact</p>
          </div>
          <div class = "right-column">
            <p>Legal</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
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

globalThis.customElements.define(footerTag.tag, footerTag);