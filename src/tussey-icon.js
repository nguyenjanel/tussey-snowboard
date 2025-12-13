/**
 * Copyright 2025 xiaowen Ju
 */

import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "https://cdn.jsdelivr.net/npm/iconify-icon@2.1.0/dist/iconify-icon.min.js";

export class TusseyIcon extends LitElement {
  static properties = {
    icon: { type: String },
    size: { type: Number },
  };

  constructor() {
    super();
    this.size = 28;
  }

  static styles = css`
    :host {
      display: inline-flex;
    }

    iconify-icon {
      border-radius: 100%;
      background: var(--ddd-accent-1-light);
      padding: 0.3rem;
      border: var(--ddd-border);
      box-shadow: var(--ddd-boxShadow);
      color: var(--ddd-accent-1-dark);
    }
  `;

  render() {
    return html`
      <iconify-icon
        icon="${this.icon}"
        width="${this.size}"
        height="${this.size}"
      ></iconify-icon>
    `;
  }
}

customElements.define("tussey-icon", TusseyIcon);
