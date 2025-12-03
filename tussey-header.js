import { LitElement, html, css } from "lit";

export class TusseyHeader extends LitElement {
  static get tag() {
    return "tussey-header";
  }

  static get properties() {
    return {
      currentRoute: { type: String },
    };
  }

  constructor() {
    super();
    this.currentRoute = "/";
    this.navItems = [
      { label: "Home", path: "/" },
      { label: "Contact", path: "/contact" },
    ];
  }

  static get styles() {
    return css`
      .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background: var(--ddd-theme-primary, #003366);
        color: white;
      }

      .logo {
        font-size: 1.5rem;
        font-weight: bold;
      }

      .nav-bar {
        display: flex;
        gap: 2rem;
      }

      .nav-link {
        color: white;
        text-decoration: none;
        font-size: 1.1rem;
        cursor: pointer;
        position: relative;
      }

      .nav-link.active::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 3px;
        background: var(--ddd-accent-1-dark, #66ccff);
        border-radius: 3px;
      }
    `;
  }

  handleClick(e, path) {
    e.preventDefault();

    this.dispatchEvent(
      new CustomEvent("nav-route-changed", {
        detail: { path },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <div class="header-wrapper">
        <div class="logo">Tussey Mountain</div>

        <nav class="nav-bar">
          ${this.navItems.map(
            (item) => html`
              <a
                href="${item.path}"
                class="nav-link ${this.currentRoute === item.path
                  ? "active"
                  : ""}"
                @click="${(e) => this.handleClick(e, item.path)}"
              >
                ${item.label}
              </a>
            `
          )}
        </nav>
      </div>
    `;
  }
}

customElements.define(TusseyHeader.tag, TusseyHeader);
