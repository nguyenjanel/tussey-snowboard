/**
 * Copyright 2025 nguyenjanel
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `tussey-snowboard`
 *
 * @demo index.html
 * @element tussey-snowboard
 */
// import header and page components
import "./tussey-header.js";
import "./tussey-home.js";
import "./home-slope-type.js";
import "./about-page.js";
import "./team1.js"
import "./team2.js"
import "./team3.js"
import "./team4.js"
import "./contact-main.js";

export class TusseySnowboard extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "tussey-snowboard";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      currentRoute: { type: String }
    };
  }

  constructor() {
    super();
    this.title = "Tussey Mountain";
    this.currentRoute = window.location.pathname;

    // back/forward button support
    window.addEventListener("popstate", () => {
      this.currentRoute = window.location.pathname;
    });
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background: var(--ddd-theme-accent-light);
          min-height: 100vh;
          color: var(--ddd-theme-primary);
        }

        .page-wrapper {
          padding: 2rem;
        }
      `,
    ];
  }

  navigate(path) {
    window.history.pushState({}, "", path);
    this.currentRoute = path;
  }

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener("nav-route-changed", (e) => {
      this.navigate(e.detail.path);
    });
  }

  renderRoute() {
    switch (this.currentRoute) {
      case "/":
        return html`<tussey-home></tussey-home>`;
      case "/about":
        return html`<about-page></about-page>`;
      case "/team1":
        return html`<team-1></team-1>`;
      case "/team2":
        return html`<team-2></team-2>`;
      case "/team3":
        return html`<team-3></team-3>`;
      case "/team4":
        return html`<team-4></team-4>`;
      case "/contact":
        return html`<contact-main></contact-main>`;
      default:
        return html`<h2>404 - Page Not Found</h2>`;
    }
  }

  render() {
    return html`
      <tussey-header .currentRoute=${this.currentRoute}></tussey-header>

      <div class="page-wrapper">
        ${this.renderRoute()}
      </div>
    `;
  }
}

customElements.define(TusseySnowboard.tag, TusseySnowboard);
