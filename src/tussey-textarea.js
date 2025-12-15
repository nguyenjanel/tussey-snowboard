import { LitElement, html, css } from "lit";

export class TusseyTextarea extends LitElement {
  static properties = {
    label: { type: String },
    name: { type: String },
    rows: { type: Number },
    required: { type: Boolean },
  };

  constructor() {
    super();
    this.rows = 5;
    this.required = false;
  }

  static styles = css`
    .field {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      grid-column: span 2;
    }

    label {
      font-size: 0.9rem;
      color: var(--ddd-theme-default-text-subtle);
    }

    textarea {
      padding: 0.8rem 1rem;
      border: var(--ddd-border);
      border-radius: var(--ddd-borderRadius);
      box-shadow: var(--ddd-boxShadow);
      background-color: var(--ddd-accent-1-light);
      font-size: 1rem;
      resize: vertical;
      color: var(--ddd-theme-default-text);
    }

    textarea:focus {
      outline: none;
      opacity: 0.95;
    }
  `;

  render() {
    return html`
      <div class="field">
        ${this.label ? html`<label for=${this.name}>${this.label}${this.required ? "*" : ""}</label>` : null}
        <textarea
          id=${this.name}
          name=${this.name}
          rows=${this.rows}
          ?required=${this.required}
        ></textarea>
      </div>
    `;
  }
}

customElements.define("tussey-textarea", TusseyTextarea);
