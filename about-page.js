/**
 * Copyright 2025 nguyenjanel
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./about-mission-statement.js"
import "./about-profile.js";
import "./footer-tag.js";

/**
 * `about-page`
 * 
 * @demo index.html
 * @element about-page
 */
export class aboutPage extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "about-page";
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

  // Lit reactive properties
   static get styles() {
    return [super.styles,
    css`
      :host {
        margin: var(--ddd-spacing-0);
        padding: var(--ddd-spacing-0);
      }
      #about-page {
      margin: 0px;
      }

      .blurb {
        display: flex;
        flex-direction: column; 
      }
      h1{
        padding-left: var(--ddd-spacing-4);
      }
      .mission-container {
      display: flex;
      gap: 64px; /* space between blocks */
      flex-wrap: wrap; /* lets them move to next line on small screens */
    }
    `];
  }

  render() {
    return html`
      <div class="nav-bar">
        <p>navbar</p>
      </div>
      <div id="about-page">
        <div class="about-blurb">
          <p>about blurb</p>
        </div>
        <div class="blurb">
          <h1>Mission</h1>
          <div class="mission-container">
          <about-mission-statement
            title="Promote"
            description="We champion young leaders, empowering them to step into their potential and make a real impact in the community.">
          </about-mission-statement>
          <about-mission-statement
            title="Develop"
            description="We cultivate skills, resilience, and creativity, helping individuals grow into confident and capable leaders.">
          </about-mission-statement>
          <about-mission-statement
            title="Lead"
            description="We inspire others through example, guiding with integrity, vision, and a commitment to excellence.">
          </about-mission-statement>
          </div>
        </div>
        <div class="blurb">
          <h1>Board of Directors</h1>
          <div class="profile-container">
            <about-profile
              name="John Doe"
              photo="">
            </about-profile>
            <about-profile
              name="John Doe"
              photo="">
            </about-profile>
            <about-profile
              name="John Doe"
              photo="">
            </about-profile>
            <about-profile
              name="John Doe"
              photo="">
            </about-profile>
          </div>
        </div>
        <div class="blurb">
          <h1>Coaches</h1>
          <div class="profile-container">
            <about-profile
              name="John Doe"
              photo="">
            </about-profile>
            <about-profile
              name="John Doe"
              photo="">
            </about-profile>
            <about-profile
              name="John Doe"
              photo="">
            </about-profile>
          </div>
        </div>
        <div class="footer">
          <p>footer</p>
          <footer-tag></footer-tag>
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

globalThis.customElements.define(aboutPage.tag, aboutPage);