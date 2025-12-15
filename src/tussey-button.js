import { LitElement, html, css } from "lit";

export class TusseyButton extends LitElement {
  static properties = {
    label: { type: String },
    href: { type: String },
  };

  static styles = css`
    a,
    button {
      display: block;
      /* width: 100%; */
      padding: 0.6rem;
      text-align: center;
      border-radius: var(--ddd-borderRadius);
      border: var(--ddd-border);
      box-shadow: var(--ddd-boxShadow);
      background: var(--ddd-accent-1-light);
      color: var(--ddd-theme-default-text);
      cursor: pointer;
      font-family: Arial, sans-serif;
      font-weight: 600;
      text-decoration: none;
      font-size: 1.2rem;
    }

    a:hover,
    button:hover {
      background-color: var(--ddd-accent-1-dark);
      color: var(--ddd-accent-1-light);
      opacity: 0.85;
      border: var(--ddd-border);
    }

    @media (max-width: 768px) {
      a {
        font-size: 16px;
        font-weight: 400;
      }
    }
  `;

  render() {
    return html` <a href=${this.href ?? "#"}>${this.label}</a> `;
  }
}

customElements.define("tussey-button", TusseyButton);
