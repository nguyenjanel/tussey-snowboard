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

  _navigate(path) {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
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
          display: block;
          width: 100%;
          height: auto; /* let it grow on mobile */
          color: var(--ddd-theme-default-text);
          font-family: var(--ddd-font-navigation);
        }

        .wrapper {
          padding: 20px;
          margin-top:2rem;
          background-color: var(--ddd-theme-primary);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          box-sizing: border-box;
          flex-wrap: wrap; /* allows elements to drop below each other */
        }

        /* RIGHT SIDE */
        .right-side {
          flex: 1;
          min-width: 250px;
          max-width: 45%;
        }

        .right-side img {
          width: 24px;
          height: 24px;
        }

        .social-bar {
          display: flex;
          gap: 10px;
        }

        /* LEFT SIDE */
        .left-side {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-width: 250px;
          max-width: 45%;
          gap: 10px;
        }

        .left-column p,
        .right-column p {
          margin: 6px 0;
          color: var(--ddd-theme-default-text-subtle);
        }
        .social-bar img {
          width: 50px;
          height: 50px;
        }
        .right-side p {
          color: var(--ddd-theme-default-text-subtle);
        }

        /* 📱 MOBILE BREAKPOINT */
        @media (max-width: 768px) {
          .wrapper {
            flex-direction: column;
            align-items: flex-start;
            height: auto;
          }
          .right-side,
          .left-side {
            max-width: 100%;
            width: 100%;
          }

          .left-side {
            grid-template-columns: 1fr; /* stack columns */
          }
          h2 {
            font-size: 1.3rem;
          }
          p {
            font-size: 0.95rem;
          }
          .social-bar img {
            width: 30px;
            height: 30px;
          }
        }
        a {
          color: var(--ddd-theme-default-text-subtle);
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
        .clickable {
          cursor: pointer; /* shows the hand pointer */
        }

        .clickable:hover {
          text-decoration: underline;
          opacity: 0.8; /* subtle fade on hover */
        }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div class="wrapper">
        <div class="right-side">
          <h2>Tussey Snowboard</h2>
          <p>
            We empower aspiring young snowboarders by providing a platform for
            competitive match rankings, skill development, and community
            engagement.
          </p>
          <div class="social-bar">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <tussey-icon icon="ph:linkedin-logo-bold" size="30">
              </tussey-icon>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <tussey-icon icon="ph:instagram-logo-bold" size="30">
              </tussey-icon>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <tussey-icon icon="ph:facebook-logo-bold" size="30">
              </tussey-icon>
            </a>
          </div>
        </div>
        <div class="left-side">
          <div class="left-column">
            <p>Site Map</p>
            <p class="clickable" @click="${() => this._navigate("/")}">
              Homepage
            </p>
            <p class="clickable" @click="${() => this._navigate("/about")}">
              About
            </p>
            <p class="clickable" @click="${() => this._navigate("/team1")}">
              Teams
            </p>
            <p class="clickable" @click="${() => this._navigate("/contact-info")}">
              Contact
            </p>
          </div>
          <div class="right-column">
            <p>Legal</p>
            <p class="clickable">Privacy Policy</p>
            <p class="clickable">Terms of Service</p>
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
