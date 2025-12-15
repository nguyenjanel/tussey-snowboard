/**
 * Copyright 2025 nguyenjanel
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./home-slope-type.js";
import "./tussey-hero.js";
import "./about-blurb.js";

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
    return [
      super.styles,
      css`
        :host {
          color: var(--ddd-theme-primary);
          font-family: var(--ddd-font-navigation);
        }
        .placer {
          width: 100%;
          height: auto;
        }

        .slopes {
          display: flex;
          justify-content: center; /* horizontal alignment */
          gap: 10%;
          flex-wrap: wrap;
        }
        home-slope-type {
          margin-top: 5%;
          margin-bottom: 5%;
        }
        tussey-hero {
          display: block;
          width: 100%;
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <tussey-hero> </tussey-hero>

        <div class="placer">
          <about-blurb></about-blurb>
        </div>

        <div class="slopes">
          <home-slope-type
            number="2"
            slope="Black Diamond"
            description="Black slopes are for experts only."
          >
          </home-slope-type>
          <home-slope-type
            number="4"
            slope="Blue Squares"
            description="To successfully ski a blue slope, you’ll need to be comfortable making turns and want to handle slightly steeper sections."
          >
          </home-slope-type>
          <home-slope-type
            number="3"
            slope="Green Circles"
            description="Green slopes generally have gentle gradients and minimal obstacles. Most are specifically designated for beginners."
          >
          </home-slope-type>
        </div>
        <div class="placer">
          <p>SOCIAL MEDIA</p>
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

globalThis.customElements.define(tusseyHome.tag, tusseyHome);
