import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "https://cdn.jsdelivr.net/npm/iconify-icon@2.1.0/dist/iconify-icon.min.js";
export class ContactInfo extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "contact-info";
  }

  static get styles() {
    return [
      super.styles,
      css`
        .contact-info {
          background: var(--ddd-theme-primary);
          border-radius: var(--ddd-borderRadius);
          border: var(--ddd-border);
          box-shadow: var(--ddd-boxShadow);
          color: var(--ddd-theme-default-text);
          padding: 0 2rem;
        }

        @media (max-width: 1024px) {
          .contact-info {
            width: 80%;
            margin: 0 auto;
            padding: 0 auto;
            text-align: center;
          }

          .contact-item {
            width: stretch;
            margin: 0 auto;
            padding: 0 auto;
            text-align: left;
          }
        }

        .contact-info h2 {
          padding-block: 1.5rem;
          margin-top: 0;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding-bottom: 2.5rem;
        }

        .contact-item iconify-icon {
          border-radius: 100%;
          background: var(--ddd-accent-1-light);
          padding: 0.3rem;
          border: var(--ddd-border);
          box-shadow: var(--ddd-boxShadow);
          color: var(--ddd-accent-1-dark);
        }

        p {
          padding: 0;
          margin: 0;
          line-height: 1.4rem;
        }
      `,
    ];
  }

  render() {
    return html`
      <main class="contact-info">
        <h2>Contact Info</h2>

        <div class="contact-item">
          <iconify-icon
            icon="ph:map-pin-area-bold"
            width="26"
            height="26"
          ></iconify-icon>
          <p>
            <strong>Address:</strong><br />301 Bear Meadows Road
            <br />Boalsburg, PA 16827
          </p>
        </div>

        <div class="contact-item">
          <iconify-icon
            icon="ph:phone-call-bold"
            width="28"
            height="28"
          ></iconify-icon>
          <p>
            <strong>Office/Fun Centre:</strong> <br />
            814-466-6266
          </p>
        </div>

        <div class="contact-item">
          <iconify-icon
            icon="ph:call-bell-bold"
            width="28"
            height="28"
          ></iconify-icon>
          <p><strong>Tussey Bär and Kitchen:</strong> <br />814-466-6810</p>
        </div>
      </main>
    `;
  }
}

globalThis.customElements.define(ContactInfo.tag, ContactInfo);
