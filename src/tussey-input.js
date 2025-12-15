/**
 * Copyright 2025 xiaowen Ju
 */
import { LitElement, html, css } from "lit";

export class TusseyInput extends LitElement {
  static properties = {
    label: { type: String },
    name: { type: String },
    type: { type: String },
    value: { type: String },
    required: { type: Boolean },
  };

  constructor() {
    super();
    this.type = "text";
    this.value = "";
    this.required = false;
  }

  static styles = css`
    .field {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    label {
      font-size: 0.9rem;
      color: var(--ddd-theme-default-text-subtle);
    }

    input {
      padding: 0.8rem 1rem;
      border: var(--ddd-border);
      border-radius: var(--ddd-borderRadius);
      box-shadow: var(--ddd-boxShadow);
      background-color: var(--ddd-accent-1-light);
      font-size: 1rem;
      color: var(--ddd-theme-default-text);
    }

    input:focus {
      outline: none;
      opacity: 0.95;
    }
  `;

  render() {
    return html`
      <div class="field">
        ${this.label
          ? html`<label for=${this.name}
              >${this.label}${this.required ? "*" : ""}</label
            >`
          : null}
        <input
          id=${this.name}
          name=${this.name}
          .type=${this.type}
          .value=${this.value}
          ?required=${this.required}
        />
      </div>
    `;
  }
}

customElements.define("tussey-input", TusseyInput);
