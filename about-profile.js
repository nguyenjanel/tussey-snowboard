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
 * @element about-profile
 */
export class aboutProfile extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "about-profile";
  }

  constructor() {
    super();
    this.name = "Your Name";         // will display under the photo
    this.photo = "https://as1.ftcdn.net/jpg/03/46/83/96/220_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"; // default photo
  }
  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      name: { type: String },
      photoLink: { type: String },
    };
  }

  // Lit reactive properties
   static get styles() {
    return [super.styles,
    css`
      :host {
        display: inline-block;
        color: var(--ddd-theme-default-text);
        background-color: var(--ddd-theme-primary);
        font-family: var(--ddd-font-navigation);
        border-radius: var(--ddd-border);
        padding: var(--ddd-spacing-4);
        margin: var(--ddd-spacing-2);
        box-shadow: var(--ddd-boxShadow);
        width: 200px; 
        text-align: center; 
        vertical-align: top;
      }
      .profile-img {
        width: 200px;
        height: 200px;
        border-radius: 50%; /* makes it circular */
        object-fit: cover;
        display: block;
        border: 2px solid var(--ddd-theme-primary); /* optional border */
      }
      h2 {
        margin: 8px 0 0 0;
        font-size: 1.2rem;
        color: var(--ddd-theme-default-text-subtle);
      }
      p {
        font-size: 0.9rem;
        color: var(--ddd-theme-primary);
      }
    `];
  }

  render() {
    return html`
      <div class="wrapper">
        <img class="profile-img" src="${this.photo}" alt="${this.name}">
        <h2>${this.name}</h2>
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

globalThis.customElements.define(aboutProfile.tag, aboutProfile);