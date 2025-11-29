import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class MessageBox extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "message-box";
  }

  static get styles() {
    return [
      super.styles,
      css`
        .message-box {
          flex: 1 1 60%;
          background: var(--ddd-accent-1-light, #fafafa);
          padding: 1.5rem;
          border-radius: 16px;
          box-shadow: var(--ddd-boxShadow);
        }

        .message-box h3 {
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

        @media (max-width: 1024px) {
          .message-box {
            width: 80%;
            margin: 0 auto;
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          form {
            display: flex;
            flex-direction: column;
          }
        }
        .message-input {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-field {
          padding: 0.8rem 1rem;
          border: 1.5px solid var(--ddd-borderColor, #ccc);
          border-radius: 8px;
          font-size: 1rem;
        }

        .message-area {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          grid-column: span 2;
        }

        button {
          border-radius: 12px;
          border: none;
          padding: 0.8rem;
          background: var(--ddd-theme-primary, #333);
          color: white;
          cursor: pointer;
          font-weight: 600;
          grid-column: span 2;
        }

        button:hover {
          opacity: 0.85;
        }
      `,
    ];
  }

  render() {
    return html`
      <main class="message-box">
        <h3>Get in touch with Tussey Mountain.</h3>
        <form @submit="${this._submitForm}">
          <div class="message-input">
            <label for="first-name">First Name*</label>
            <input
              class="form-field"
              type="text"
              id="first-name"
              name="first-name"
              required
            />
          </div>

          <div class="message-input">
            <label for="last-name">Last Name*</label>
            <input
              class="form-field"
              type="text"
              id="last-name"
              name="last-name"
              required
            />
          </div>

          <div class="message-input">
            <label for="phone">Phone*</label>
            <input
              class="form-field"
              type="tel"
              id="phone"
              name="phone"
              required
            />
          </div>

          <div class="message-input">
            <label for="email">Email Address*</label>
            <input
              class="form-field"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div class="message-area">
            <label for="message">Message</label>
            <textarea
              class="form-field"
              id="message"
              name="message"
              rows="5"
              cols="36"
            ></textarea>
          </div>

          <button class="form-field" type="submit">Send</button>
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

globalThis.customElements.define(MessageBox.tag, MessageBox);
