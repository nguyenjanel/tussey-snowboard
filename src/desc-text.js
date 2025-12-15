import { LitElement, html, css } from "lit";

export class DescText extends LitElement {
  static properties = {
    text: { type: String },
  };

  static styles = css`
    p {
      margin: 0;
      font-size: 1.5rem;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 800;
      font-style: italic;
      line-height: 1.4;
      color: var(--ddd-theme-default-text);
    }

    @media (max-width: 768px) {
      p {
         font-size: 16px;
        font-weight: 400;
        font-style: italic;
        line-height: 1.2;
      }
    }
  `;

  render() {
    return html`<p>${this.text}</p>`;
  }
}

customElements.define("desc-text", DescText);
