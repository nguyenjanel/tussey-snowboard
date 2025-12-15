/**
 * Copyright 2025 nguyenjanel
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./about-mission-statement.js"
import "./about-profile.js";
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
        color: var(--ddd-theme-default-text);
      }
      .mission-container {
        display: flex;
        gap: 64px; /* space between blocks */
        flex-wrap: wrap; /* lets them move to next line on small screens */
    }
    .about-blurb{
      height: 200px; 
      background-color: lightblue;
      color: black;
    }
    `];
  }

  render() {
    return html`
      <div id="about-page">
        <div class="about-blurb" >
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
              name="John Smith"
              photo="https://static.vecteezy.com/system/resources/previews/055/277/083/non_2x/professional-man-portrait-illustration-for-business-and-design-projects-free-vector.jpg">
            </about-profile>
            <about-profile
              name="Sandy Miller"
              photo="https://static.vecteezy.com/system/resources/thumbnails/000/241/161/small/girl-with-wavy-hair-and-glasses-vector.jpg">
            </about-profile>
            <about-profile
              name="Brian Goodman"
              photo="https://static.vecteezy.com/system/resources/thumbnails/000/142/008/small/stylish-man-s-headshot-vector.jpg">
            </about-profile>
            <about-profile
              name="Amy White"
              photo="https://static.vecteezy.com/system/resources/thumbnails/000/241/163/small/girl-with-wavy-hair-and-glasses-vector.jpg">
            </about-profile>
          </div>
        </div>
        <div class="blurb">
          <h1>Coaches</h1>
          <div class="profile-container">
            <about-profile
              name="Rebecca Shall"
              photo="https://static.vecteezy.com/system/resources/thumbnails/000/242/373/small/girl-with-wavy-hair-and-glasses-vector.jpg">
            </about-profile>
            <about-profile
              name="John Box"
              photo="https://static.vecteezy.com/system/resources/thumbnails/000/225/335/small/old-man-pop-art-vector.jpg">
            </about-profile>
            <about-profile
              name="Jane Mary"
              photo="https://static.vecteezy.com/system/resources/thumbnails/000/242/794/small/girl-with-wavy-hair-and-glasses.jpg">
            </about-profile>
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

globalThis.customElements.define(aboutPage.tag, aboutPage);