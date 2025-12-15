/**
 * Copyright 2025 xiaowen Ju
 */
import { LitElement, html, css } from "lit";

export class ImgGallery extends LitElement {
  static properties = {
    src: { type: String },
    alt: { type: String },
  };

  static styles = css`
    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: var(--ddd-borderRadius);
      object-fit: cover;
    }
  `;

  render() {
    return html` <img src=${this.src} alt=${this.alt ?? ""} /> `;
  }
}

customElements.define("img-gallery", ImgGallery);
