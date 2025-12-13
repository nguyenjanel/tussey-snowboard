/**
 * Copyright 2025 xiaowen Ju
 */

import { LitElement, html, css } from "lit";

export class TusseyHeader extends LitElement {
  static get tag() {
    return "tussey-header";
  }

  static get properties() {
    return {
      currentRoute: { type: String },
      menuOpen: { type: Boolean },
      teamOpen: { type: Boolean },
      contactOpen: { type: Boolean },
      darkMode: { type: Boolean },
      menu: { type: Array },
    };
  }

  constructor() {
    super();
    this.currentRoute = "/";
    this.menuOpen = false;
    this.teamOpen = false;
    this.contactOpen = false;
    this.darkMode = false;
    this.menu = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadMenu();
  }

  async loadMenu() {
    try {
      const res = await fetch("/api/menu.json");
      const data = await res.json();
      this.menu = data.items;
    } catch (e) {
      console.error("Menu load failed", e);
    }
  }

  get topLevelItems() {
    return this.menu
      .filter((i) => i.indent === "1")
      .sort((a, b) => a.order - b.order);
  }

  get teamItems() {
    return this.menu
      .filter((i) => i.parent === "team")
      .sort((a, b) => a.order - b.order);
  }

  get contactItems() {
    return this.menu
      .filter((i) => i.parent === "contact")
      .sort((a, b) => a.order - b.order);
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
    this.teamOpen = false;
    this.contactOpen = false;
  }

  toggleTeam() {
    this.teamOpen = !this.teamOpen;
    this.contactOpen = false;
  }

  toggleContact() {
    this.contactOpen = !this.contactOpen;
    this.teamOpen = false;
  }

  toggleMode() {
    this.darkMode = !this.darkMode;
    this.darkMode
      ? this.setAttribute("darkmode", "")
      : this.removeAttribute("darkmode");
  }

  static get styles() {
    return css`
      :host {
        display: block;
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      header {
        background: var(--ddd-theme-primary);
        color: var(--ddd-theme-default-text);
        padding: 0.6rem 1.2rem;
        margin: 0.7rem auto;
        max-width: 95%;
        border-radius: 40px;
        box-shadow: var(--ddd-boxShadow);
        border: var(--ddd-border);
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        font-size: 1.6rem;
        font-weight: 700;
      }

      nav {
        display: flex;
        align-items: center;
        gap: 2rem;
      }

      .nav-link {
        font-size: 1.1rem;
        padding: 0.4rem 1rem;
        border-radius: var(--ddd-borderRadius);
        cursor: pointer;
        text-decoration: none;
        color: inherit;
      }

      .nav-link:hover,
      .nav-link.active {
        background: var(--ddd-accent-1-light);
      }

      .dropdown {
        position: relative;
      }

      .dropdown-menu {
        position: absolute;
        top: 2.6rem;
        left: 0;
        background: var(--ddd-theme-primary);
        border: var(--ddd-border);
        box-shadow: var(--ddd-boxShadow);
        border-radius: var(--ddd-borderRadius);
        padding: 1rem;
        min-width: 220px;
        opacity: 0;
        transform: translateY(10px);
        pointer-events: none;
        transition: 0.25s ease;
      }

      .dropdown-menu.open {
        opacity: 1;
        transform: translateY(0);
        pointer-events: auto;
      }

      .submenu-link {
        display: block;
        padding: 0.4rem 0;
        text-decoration: none;
        color: inherit;
      }

      .toggle {
        width: 55px;
        height: 28px;
        background: var(--ddd-accent-1-light);
        border-radius: 30px;
        border: var(--ddd-border);
        display: flex;
        align-items: center;
        padding: 3px;
        cursor: pointer;
      }

      .toggle-ball {
        width: 22px;
        height: 22px;
        background: var(--ddd-accent-1-dark);
        border-radius: 50%;
        transition: transform 0.25s ease;
      }

      :host([darkmode]) .toggle-ball {
        transform: translateX(27px);
      }

      @media (max-width: 768px) {
        nav {
          display: none;
        }
      }
    `;
  }
  renderDropdown(item, children, open, toggleFn) {
    return html`
      <div class="dropdown">
        <div
          class="nav-link ${this.currentRoute.startsWith(item.slug)
            ? "active"
            : ""}"
          @click=${(e) => {
            e.preventDefault();
            toggleFn.call(this);
          }}
        >
          ${item.title}
        </div>

        <div class="dropdown-menu ${open ? "open" : ""}">
          ${children.map(
            (child) => html`
              <a
                class="submenu-link"
                href=${child.slug}
                @click=${(e) => this.handleClick(e, child.slug)}
              >
                ${child.title}
              </a>
            `
          )}
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <header>
        <div class="logo">TusseyMountain</div>

        <nav>
          ${this.topLevelItems.map((item) =>
            item.metadata?.dropdown && item.id === "team"
              ? this.renderDropdown(
                  item,
                  this.teamItems,
                  this.teamOpen,
                  this.toggleTeam
                )
              : item.metadata?.dropdown && item.id === "contact"
              ? this.renderDropdown(
                  item,
                  this.contactItems,
                  this.contactOpen,
                  this.toggleContact
                )
              : html`
                  <a
                    class="nav-link ${this.currentRoute === item.slug
                      ? "active"
                      : ""}"
                    href=${item.slug}
                    @click=${(e) => this.handleClick(e, item.slug)}
                  >
                    ${item.title}
                  </a>
                `
          )}

          <div class="toggle" @click=${this.toggleMode}>
            <div class="toggle-ball"></div>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define(TusseyHeader.tag, TusseyHeader);
