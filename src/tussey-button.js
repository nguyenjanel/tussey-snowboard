import { LitElement, html, css } from "lit";

export class TusseyButton extends LitElement {
  static properties = {
    label: { type: String },
    href: { type: String },
  };

  static styles = css`
    a {
      display: inline-block;
      margin-top: 1rem;
      padding: 0.6rem 1.4rem;
      border-radius: 999px;
      background: var(--ddd-accent-1-light);
      color: var(--ddd-theme-default-text);
      text-decoration: none;
      font-weight: 600;
      font-size: 1.2rem;
      border: var(--ddd-border);
      box-shadow: var(--ddd-boxShadow);
    }

    @media (max-width: 768px) {
      a {
        font-size: 16px;
        font-weight: 400;
        font-style: italic;
        line-height: 1.2;
      }
    }
  `;

  render() {
    return html` <a href=${this.href ?? "#"}>${this.label}</a> `;
  }
}

customElements.define("tussey-button", TusseyButton);
