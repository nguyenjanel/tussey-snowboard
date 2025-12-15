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
      console.log("loadMenu() called — about to fetch JSON");
      const res = await fetch("/menu/menu.json");
      const data = await res.json();

      console.log("Fetch completed:", res);
      console.log("Fetch status:", res.status, res.statusText);
      console.log("Content-Type:", res.headers.get("content-type"));

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
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

    document.documentElement.toggleAttribute("darkmode", this.darkMode);
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
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

      .nav-link,
      .dropdown-trigger {
        display: inline-flex;
        align-items: bottom;
        gap: 0.4rem;
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

      .menu-btn {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
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
        .dropdown {
          position: relative;
          text-align: center;
        }

        .menu-btn {
          display: flex;
          align-items: center;
        }

        nav.main-nav {
          position: fixed;
          inset: 0;
          top: 90px;
          background: var(--ddd-theme-primary);

          display: none;
          flex-direction: column;
          padding: 2rem 1.5rem;
          gap: 1.2rem;
          border-radius: var(--ddd-borderRadius);
          box-shadow: var(--ddd-boxShadow);
          border: var(--ddd-border);
          margin: 0 1rem;

          overflow-y: auto;
        }

        nav.main-nav.open {
          display: flex;
        }

        .nav-link {
          font-size: 1.3rem;
          padding: 1rem 0;
          border-bottom: 1px solid #999;
          border-radius: 0;
          justify-content: space-between;
        }

        .dropdown-menu {
          position: static;
          opacity: 1;
          transform: none;
          pointer-events: auto;
          box-shadow: none;
          border: none;
          padding-left: 1rem;
          display: none;
        }

        .dropdown-menu.open {
          display: block;
        }

        .caret {
          transition: transform 0.25s ease;
        }

        .dropdown-trigger.open .caret {
          transform: rotate(180deg);
        }

        .nav-link.open {
          background: none;
        }
      }
    `;
  }
  renderDropdown(item, children, open, toggleFn) {
    return html`
      <div class="dropdown mobile-dropdown">
        <div
          class="nav-link dropdown-trigger ${open ? "open" : ""}"
          @click=${(e) => {
            e.preventDefault();
            toggleFn.call(this);
          }}
        >
          <span>${item.title}</span>
          <iconify-icon
            icon="ph:caret-down-bold"
            width="24"
            height="24"
          ></iconify-icon>
        </div>

        <div class="dropdown-menu ${open ? "open" : ""}">
          ${children.map(
            (child) => html`
              <a
                class="submenu-link"
                href=${child.slug}
                @click=${(e) => {
                  this.handleClick(e, child.slug);
                  this.menuOpen = false;
                }}
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

        <!-- Hamburg Menu -->
        <button
          class="menu-btn"
          @click=${this.toggleMenu}
          aria-label="Toggle menu"
        >
          ${this.menuOpen
            ? html`<span class="close">✕</span>`
            : html`<tussey-icon icon="mingcute:menu-fill"></tussey-icon>`}
        </button>

        <nav class="main-nav ${this.menuOpen ? "open" : ""}">
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
                    class="nav-link"
                    href=${item.slug}
                    @click=${(e) => {
                      this.handleClick(e, item.slug);
                      this.menuOpen = false;
                    }}
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
