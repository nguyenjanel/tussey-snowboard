/**
 * Copyright 2025 xiaowen Ju
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class LostFound extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "lost-found";
  }

  static get styles() {
    return [
      super.styles,
      css`
        .lost-found {
          background: var(--ddd-theme-primary);
          padding: 1.5rem;
          border-radius: var(--ddd-borderRadius);
          border: var(--ddd-border);
          box-shadow: var(--ddd-boxShadow);
          color: var(--ddd-theme-default-text);
        }

        .lost-found h3 {
          margin-top: 0;
          margin-bottom: 1.5rem;
          font-weight: 500;
          font-size: 1.2rem;
        }

        form {
          display: grid;
          gap: 1.2rem;
          grid-template-columns: 1fr 1fr;
        }

        tussey-textarea,
        tussey-button {
          grid-column: 1 / -1;
        }

        @media (max-width: 768px) {
          form {
            display: flex;
            flex-direction: column;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <main class="lost-found">
        <h3>Lost and Found</h3>
        <form @submit=${this._submitForm}>
          <tussey-input
            label="First Name"
            name="first-name"
            required
          ></tussey-input>
          <tussey-input
            label="Last Name"
            name="last-name"
            required
          ></tussey-input>
          <tussey-input
            label="Phone"
            name="phone"
            type="tel"
            required
          ></tussey-input>
          <tussey-input
            label="Email"
            name="email"
            type="email"
            required
          ></tussey-input>

          <tussey-textarea
            label="Description of Item"
            name="description"
            required
          ></tussey-textarea>

          <tussey-textarea
            label="Last Known Location of Item"
            name="location"
            required
          ></tussey-textarea>
          <tussey-button label="Send" href="lost-found"></tussey-button>
        </form>
      </main>
    `;
  }

  _submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    console.log("Submitted:", Object.fromEntries(formData.entries()));
    alert("Message submitted (demo only)");
  }
}

globalThis.customElements.define(LostFound.tag, LostFound);
