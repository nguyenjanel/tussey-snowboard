/**
 * Copyright 2025 nguyenjanel
 * Copyright 2025 Xiaowen Ju
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
import "./tussey-icon.js";
import "./tussey-header.js";
import "./tussey-home.js";
import "./home-slope-type.js";
import "./about-page.js";
import "./team1.js";
import "./team2.js";
import "./team3.js";
import "./team4.js";
import "./contact-info.js";
import "./message-box.js"
import "./lost-found.js";
import "./job-application.js";

export class TusseySnowboard extends LitElement {
  static get tag() {
    return "tussey-snowboard";
  }

  static get properties() {
    return {
      title: { type: String },
      currentRoute: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "Tussey Mountain";
    this.currentRoute = window.location.pathname;

    window.addEventListener("popstate", () => {
      this.currentRoute = window.location.pathname;
    });
  }

  static get styles() {
    return css`
      :host {
        display: block;
        min-height: 100vh;
      }

      .page-wrapper {
        padding: 1rem;
      }
    `;
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
      case "/contact-info":
        return html`<contact-info></contact-info>`;
      case "/get-in-touch":
        return html`<message-box></message-box>`;
      case "/lost-found":
        return html`<lost-found></lost-found>`;
      case "/job-application":
        return html`<job-application></job-application>`;
      default:
        return html`<h2>404 – Page Not Found</h2>`;
    }
  }

  render() {
    return html`
      <tussey-header .currentRoute=${this.currentRoute}></tussey-header>

      <div class="page-wrapper">${this.renderRoute()}</div>
    `;
  }
}

customElements.define(TusseySnowboard.tag, TusseySnowboard);
