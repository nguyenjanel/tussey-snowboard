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

          padding: 2rem;

          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-areas:
            "title title"
            "item1 item4"
            "item2 item4"
            "item3 item4";
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .contact-info h2 {
          grid-area: title;
          margin: 0;
        }

        .item-1 {
          grid-area: item1;
        }

        .item-2 {
          grid-area: item2;
        }

        .item-3 {
          grid-area: item3;
        }

        .item-4 {
          grid-area: item4;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }

        p {
          margin: 0;
          line-height: 1.4rem;
        }

        @media (max-width: 800px) {
          .contact-info {
            grid-template-columns: 1fr;
            grid-template-areas:
              "title"
              "item1"
              "item2"
              "item3"
              "item4";
            width: fit-content;
            margin: 0 auto;
            padding: 2.5rem 5rem;
          }
        }

        @media (max-width: 480px) {
          .contact-info {
            grid-template-columns: 1fr;
            grid-template-areas:
              "title"
              "item1"
              "item2"
              "item3"
              "item4";
            width: stretch;
            margin: 0 auto;
            padding: 2rem;
            font-size: 1rem;
          }

          tussey-icon {
            display: none;
          }
          h2{
            font-size: 1.4rem;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <main class="contact-info">
        <h2>Contact Info</h2>

        <div class="contact-item item-1">
          <tussey-icon icon="ph:map-pin-area-bold" size="26"></tussey-icon>
          <p>
            <strong>Address:</strong><br />301 Bear Meadows Road
            <br />Boalsburg, PA 16827
          </p>
        </div>

        <div class="contact-item item-2">
          <tussey-icon icon="ph:phone-call-bold"></tussey-icon>
          <p>
            <strong>Office/Fun Centre:</strong> <br />
            814-466-6266
          </p>
        </div>

        <div class="contact-item item-3">
          <tussey-icon icon="ph:call-bell-bold"></tussey-icon>
          <p><strong>Tussey Bär and Kitchen:</strong> <br />814-466-6810</p>
        </div>

        <div class="contact-item item-4">
          <tussey-icon icon="ph:clock-countdown-bold"></tussey-icon>
          <p>
            <strong>Ski & Snowboard:</strong> <br />9am-4pm Sat & Sun<br />Closed
            Mon-Fri <br /><br />
            <strong>Office Hours:</strong> <br />9am-4pm Mon-Fri <br /><br />
            <strong>Fun Centre Activities:</strong> <br />Closed for the season
          </p>
        </div>
      </main>
    `;
  }
}

globalThis.customElements.define(ContactInfo.tag, ContactInfo);
