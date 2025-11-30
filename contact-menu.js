import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class ContactMenu extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "contact-menu";
  }

  static get properties() {
    return {
      active: { type: String },
    };
  }

  constructor() {
    super();
    this.active = "information";
  }

  static get styles() {
    return [
      super.styles,
      css`
        .contact-menu {
          flex: 1 1 30%;
          background: var(--ddd-theme-primary);
          padding: 0 2rem;
          border-radius: var(--ddd-borderRadius);
          border: var(--ddd-border);
          box-shadow: var(--ddd-boxShadow);
          height: stretch;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .menu-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .menu-item {
          font-size: 1rem;
          font-weight: 500;
          padding-left: 0.5rem;
          cursor: pointer;
          position: relative;
          transition: padding-left 0.25s ease;
        }

        /* ACTIVE STATE */
        .menu-item.active {
          font-weight: 500;
          color: var(--ddd-accent-1-dark);
          padding-left: 0.8rem;
        }

        .menu-item.active::before {
          content: "";
          position: absolute;
          left: -8px;
          top: 0;
          width: 3px;
          height: 100%;
          background: var(--ddd-accent-1-dark);
          border-radius: 4px;
        }

        @media (max-width: 1024px) {
          .contact-menu {
            width: 80%;
            margin: 0 auto;
            padding: 0 2rem;
            gap: 1rem;
          }
          .menu-items {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
          }

          .menu-item {
            font-size: 1rem;
            padding-left: 0;
            margin-bottom: 1rem;
            transition: padding-top 0.25s ease;
          }

          /* ACTIVE STATE */
          .menu-item.active {
            font-weight: 500;
            color: var(--ddd-accent-1-dark);
            padding-left: 0;
            padding-bottom: 0.3rem;
          }

          .menu-item.active::before {
            content: "";
            position: absolute;
            left: 0;
            top: 1.2rem;
            width: 100%;
            height: 3px;
            background: var(--ddd-accent-1-dark);
            border-radius: 4px;
          }
        }
        @media (max-width: 840px) {
          .menu-item {
            font-size: 0.9rem;
            font-weight: 500;
          }
        }
        @media (max-width: 800px) {
          .contact-menu {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .menu-items {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin: 0 auto;
          }
        }
      `,
    ];
  }

  _select(section) {
    this.active = section;

    this.dispatchEvent(
      new CustomEvent("menu-selected", {
        detail: { section },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <main class="contact-menu">
        <h2>Menu</h2>
        <nav class="menu-items">
          <div
            class="menu-item ${this.active === "contact-info" ? "active" : ""}"
            @click="${() => this._select("contact-info")}"
          >
            Information
          </div>

          <div
            class="menu-item ${this.active === "get-in-touch" ? "active" : ""}"
            @click="${() => this._select("get-in-touch")}"
          >
            Get in Touch
          </div>

          <div
            class="menu-item ${this.active === "lost-found" ? "active" : ""}"
            @click="${() => this._select("lost-found")}"
          >
            Lost and Found
          </div>

          <div
            class="menu-item ${this.active === "job-application"
              ? "active"
              : ""}"
            @click="${() => this._select("job-application")}"
          >
            Job Application
          </div>

          <div
            class="menu-item ${this.active === "faqs" ? "active" : ""}"
            @click="${() => this._select("faqs")}"
          >
            FAQs
          </div>
        </nav>
      </main>
    `;
  }
}

customElements.define(ContactMenu.tag, ContactMenu);
