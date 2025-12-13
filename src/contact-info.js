/**
 * Copyright 2025 xiaowen Ju
 */

import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

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
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
        }

        @media (max-width: 800px) {
          .contact-info {
            width: 80%;
            margin: 0 auto;
            padding: 0 auto;
            text-align: center;
            flex-wrap: nowrap;
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
          width: fit-content;
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
          <tussey-icon icon="ph:map-pin-area-bold" size="26"></tussey-icon>
          <p>
            <strong>Address:</strong><br />301 Bear Meadows Road
            <br />Boalsburg, PA 16827
          </p>
        </div>

        <div class="contact-item">
          <tussey-icon icon="ph:phone-call-bold"></tussey-icon>

          <p>
            <strong>Office/Fun Centre:</strong> <br />
            814-466-6266
          </p>
        </div>

        <div class="contact-item">
          <tussey-icon icon="ph:call-bell-bold"></tussey-icon>
          <p><strong>Tussey Bär and Kitchen:</strong> <br />814-466-6810</p>
        </div>

        <div class="contact-item">
          <tussey-icon icon="ph:clock-countdown-bold"></tussey-icon>
          <p>
            <strong>Ski & Snowboard:</strong> <br />9am-4pm Sat & Sun<br />Closed
            Mon-Fri <br /><strong>Office Hours:</strong> <br />9am-4pm Mon-Fri
            <strong>Fun Centre Activities:</strong> <br />Closed for the season
          </p>
        </div>
      </main>
    `;
  }
}

globalThis.customElements.define(ContactInfo.tag, ContactInfo);
