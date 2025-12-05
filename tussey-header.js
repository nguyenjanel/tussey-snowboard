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
    };
  }

  constructor() {
    super();
    this.currentRoute = "/";
    this.menuOpen = false;
    this.teamOpen = false;


    this.navItems = [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Team", path: "/team" }, 
      { label: "Contact", path: "/contact" },
    ];

    this.teamItems = [
      { label: "Team 1", path: "/team1" },
      { label: "Team 2", path: "/team2" },
      { label: "Team 3", path: "/team3" },
      { label: "Team 4", path: "/team4" },
    ];
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.75rem 1.5rem;
        background: var(--ddd-theme-primary);
        color: var(--ddd-accent-1-light);
      }

      .logo {
        font-size: 1.4rem;
        font-weight: 700;
        letter-spacing: 0.03em;
      }

      .nav-bar {
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }

      .nav-link,
      .dropdown-toggle,
      .submenu-link {
        color: var(--ddd-accent-1-light);
        text-decoration: none;
        font-size: 1rem;
        cursor: pointer;
        position: relative;
        border: none;
        background: transparent;
        padding: 0;
        font: inherit;
      }

      .nav-link.active::after,
      .dropdown-toggle.active::after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100%;
        height: 3px;
        background: var(--ddd-accent-1-dark);
        border-radius: 3px;
      }

  
      .dropdown {
        position: relative;
      }

      .dropdown-menu {
        position: absolute;
        top: calc(100% + 0.5rem);
        left: 0;
        min-width: 150px;
        background: var(--ddd-accent-1-light);
        color: var(--ddd-theme-primary);
        border-radius: 0.5rem;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
        padding: 0.5rem 0;
        display: none;
        z-index: 20;
      }

      .dropdown-menu.open {
        display: block;
      }

      .dropdown-item {
        padding: 0.4rem 1rem;
      }

      .dropdown-item .submenu-link {
        color: #111827;
        font-size: 0.95rem;
      }

      .dropdown-item .submenu-link:hover {
        color: var(--ddd-theme-primary);
      }

      .dropdown-toggle-icon {
        margin-left: 0.25rem;
        font-size: 0.8rem;
      }

      /* HAMBURGER (mobile only) */
      .hamburger {
        display: none;
        width: 24px;
        height: 24px;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
      }

      .hamburger span {
        display: block;
        height: 3px;
        background: var(--ddd-accent-1-light);
        border-radius: 2px;
        transition: transform 0.2s ease, opacity 0.2s ease;
      }

      /* MOBILE NAV */
      .mobile-nav {
        display: none;
        flex-direction: column;
        gap: 0.75rem;
        padding: 0.75rem 1.5rem 1.25rem;
        background: var(--ddd-theme-primary);
      }

      .mobile-nav.open {
        display: flex;
      }

      .mobile-nav .dropdown-menu {
        position: static;
        background: transparent;
        box-shadow: none;
        padding: 0.25rem 0 0 1rem;
      }

      .mobile-nav .dropdown-item {
        padding: 0.25rem 0;
      }

      .mobile-nav .submenu-link {
        color: var(--ddd-accent-1-light);
        font-size: 0.95rem;
      }

      /* RESPONSIVE BREAKPOINTS */
      @media (max-width: 768px) {
        .nav-bar {
          display: none;
        }

        .hamburger {
          display: flex;
        }
      }

      @media (min-width: 769px) {
        .mobile-nav {
          display: none !important;
        }

        .dropdown:hover .dropdown-menu {
          display: block;
        }
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
      }),
    );

    // Close mobile menu after navigation
    this.menuOpen = false;
    this.teamOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) {
      this.teamOpen = false;
    }
  }

  toggleTeam(e) {
    // prevent the click from triggering parent nav
    e.preventDefault();
    e.stopPropagation();
    this.teamOpen = !this.teamOpen;
  }

  renderDesktopNav() {
    return html`
      <nav class="nav-bar">
        ${this.navItems.map((item) =>
          item.label === "Team"
            ? html`
                <div class="dropdown">
                  <button
                    class="dropdown-toggle ${this.currentRoute.startsWith("/team")
                      ? "active"
                      : ""}"
                    @click="${this.toggleTeam}"
                  >
                    Team
                    <span class="dropdown-toggle-icon">▾</span>
                  </button>
                  <div class="dropdown-menu">
                    ${this.teamItems.map(
                      (team) => html`
                        <div class="dropdown-item">
                          <a
                            href="${team.path}"
                            class="submenu-link ${this.currentRoute === team.path
                              ? "active"
                              : ""}"
                            @click="${(e) => this.handleClick(e, team.path)}"
                          >
                            ${team.label}
                          </a>
                        </div>
                      `,
                    )}
                  </div>
                </div>
              `
            : html`
                <a
                  href="${item.path}"
                  class="nav-link ${this.currentRoute === item.path
                    ? "active"
                    : ""}"
                  @click="${(e) => this.handleClick(e, item.path)}"
                >
                  ${item.label}
                </a>
              `,
        )}
      </nav>
    `;
  }

  renderMobileNav() {
    return html`
      <nav class="mobile-nav ${this.menuOpen ? "open" : ""}">
        ${this.navItems.map((item) =>
          item.label === "Team"
            ? html`
                <div>
                  <button
                    class="dropdown-toggle ${this.currentRoute.startsWith("/team")
                      ? "active"
                      : ""}"
                    @click="${this.toggleTeam}"
                  >
                    Team
                    <span class="dropdown-toggle-icon">▾</span>
                  </button>
                  <div
                    class="dropdown-menu ${this.teamOpen ? "open" : ""}"
                  >
                    ${this.teamItems.map(
                      (team) => html`
                        <div class="dropdown-item">
                          <a
                            href="${team.path}"
                            class="submenu-link ${this.currentRoute === team.path
                              ? "active"
                              : ""}"
                            @click="${(e) => this.handleClick(e, team.path)}"
                          >
                            ${team.label}
                          </a>
                        </div>
                      `,
                    )}
                  </div>
                </div>
              `
            : html`
                <a
                  href="${item.path}"
                  class="nav-link ${this.currentRoute === item.path
                    ? "active"
                    : ""}"
                  @click="${(e) => this.handleClick(e, item.path)}"
                >
                  ${item.label}
                </a>
              `,
        )}
      </nav>
    `;
  }

  render() {
    return html`
      <header class="header-wrapper">
        <div class="logo">Tussey Mountain</div>

        ${this.renderDesktopNav()}

        <div class="hamburger" @click="${this.toggleMenu}">
          <span
            style="${this.menuOpen
              ? "transform: translateY(9px) rotate(45deg);"
              : ""}"
          ></span>
          <span style="${this.menuOpen ? "opacity: 0;" : ""}"></span>
          <span
            style="${this.menuOpen
              ? "transform: translateY(-9px) rotate(-45deg);"
              : ""}"
          ></span>
        </div>
      </header>

      ${this.renderMobileNav()}
    `;
  }
}

customElements.define(TusseyHeader.tag, TusseyHeader);
