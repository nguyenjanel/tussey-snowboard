import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./contact-menu.js";
import "./contact-info.js";
import "./message-box.js";
import "./lost-found.js";
import "./job-application.js";
import "./faq-list.js";

export class ContactMain extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "contact-main";
  }

  static get properties() {
    return {
      activeSection: { type: String },
    };
  }

  constructor() {
    super();
    this.activeSection = "contact-info";
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("menu-selected", (e) => {
      this.activeSection = e.detail.section;
    });
  }

  static get styles() {
    return css`
      .contact-container {
        display: grid;
        grid-template-columns: 2fr 5fr;
        gap: 2rem;
        justify-content: center;
        margin: 0 auto;
        max-width: 900px;
      }

      @media (max-width: 1024px) {
        .contact-container {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          text-align: center;
          gap: 1.5rem;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="contact-container">
        <contact-menu></contact-menu>

        <div class="contact-card">
          ${this.activeSection === "contact-info"
            ? html`<contact-info></contact-info>`
            : ""}
          ${this.activeSection === "message-box"
            ? html`<message-box></message-box>`
            : ""}
          ${this.activeSection === "lost-found"
            ? html`<lost-found></lost-found>`
            : ""}
          ${this.activeSection === "job-application"
            ? html`<job-application></job-application>`
            : ""}
          ${this.activeSection === "faq-list"
            ? html`<faq-list></faq-list>`
            : ""}
        </div>
      </div>
    `;
  }
}

customElements.define(ContactMain.tag, ContactMain);
