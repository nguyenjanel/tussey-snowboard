/**
 * Copyright 2025 nguyenjanel
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `tussey-hero`
 * 
 * @demo home.html
 * @element tussey-hero
 */
export class tusseyHero extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "tussey-hero";
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
        margin: 0px;
      }
      .hero {
        position: relative;
        width: 100%;
        height: 70vh; 
        overflow: hidden;
      }

      .hero img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center; /* keep the center of the picture in view */
        filter: brightness(55%); /* darkens so text is readable */
      }

      .hero-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: clamp(1.2rem, 5vw, 3rem);
        font-weight: bold;
        text-align: center;
        white-space: nowrap;
        color: var(--ddd-theme-text);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    
      <div class="hero">
        <img src="https://muralsyourway.vtexassets.com/arquivos/ids/238587/Powder-Ridge-Mural-Wallpaper.jpg" alt="Tussey Mountain" />
        <div class="hero-text">
          Welcome to Tussey Mountain  
          <br />
          Snowboarding League
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

globalThis.customElements.define(tusseyHero.tag, tusseyHero);