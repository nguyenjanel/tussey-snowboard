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
      darkMode: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.currentRoute = "/";
    this.menuOpen = false;
    this.teamOpen = false;
    this.darkMode = false;

    this.navItems = [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Team", path: "/team" },
      { label: "Contact", path: "/contact" },
    ];

    this.teamItems = [
      { label: "Avalanche Riders", path: "/team1" },
      { label: "Frostbite Flyers", path: "/team2" },
      { label: "Snow Serpents", path: "/team3" },
      { label: "Ice Breakers", path: "/team4" },
    ];
  }
  static get styles() {
    return css`
      :host {
        display: block;
        position: sticky;
        top: 0;
        z-index: 1000;
      }

      /* HEADER CONTAINER (Rounded capsule like Brainfish) */
      header {
        background: var(--ddd-theme-primary); /* primary Wendy blue */
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

      /* LOGO */
      .logo {
        font-size: 1.6rem;
        font-weight: 700;
        color: var(--ddd-theme-default-text);
      }

      /* NAVIGATION */
      nav {
        display: flex;
        align-items: center;
        gap: 2rem;
        color: var(--ddd-theme-default-text);
      }

      .nav-link {
        font-size: 1.1rem;
        padding: 0.4rem 1rem;
        border-radius: var(--ddd-borderRadius);
        text-decoration: none;
        cursor: pointer;
        color: var(--ddd-theme-default-text);
        transition: background 0.2s ease;
      }

      .nav-link:hover {
        background: var(--ddd-accent-1-light);
      }

      /* ACTIVE TAB — “Pill” style */
      .nav-link.active {
        background: var(--ddd-accent-1-light);
        border: var(--ddd-border);
        box-shadow: var(--ddd-boxShadow);
      }

      /* DROPDOWN WRAPPER */
      .dropdown {
        position: relative;
      }

      /* FLOATING DROPDOWN PANEL */
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
        visibility: hidden;
        transition: opacity 0.25s ease, transform 0.25s ease,
          visibility 0.25s ease;
      }

      .dropdown-menu.open {
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
        pointer-events: auto;
      }

      .submenu-link {
        font-size: 1rem;
        display: block;
        padding: 0.4rem 0;
        cursor: pointer;
        color: var(--ddd-theme-default-text);
        text-decoration: none;
      }

      .submenu-link:hover {
        color: var(--ddd-theme-default-text-subtle);
      }

      /* TOGGLE SWITCH (Light/Dark Mode) */
      .toggle {
        width: 55px;
        height: 28px;

        background: var(--ddd-accent-1-light);
        border-radius: 30px;
        border: var(--ddd-border);

        display: flex;
        align-items: center;
        justify-content: flex-start;

        padding: 3px;
        cursor: pointer;
        transition: background 0.25s ease;
      }

      :host([darkmode]) .toggle {
        background: var(--ddd-accent-1-dark);
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
        background: var(--wendy-bg-color-light);
      }

      /* DARK MODE EFFECT */
      :host([darkmode]) header {
        background: var(--wendy-bg-color-dark);
        color: var(--wendy-bg-color-light);
      }

      :host([darkmode]) .nav-link {
        color: var(--wendy-bg-color-light);
      }

      :host([darkmode]) .dropdown-menu {
        background: var(--wendy-bg-color-dark);
        color: var(--wendy-bg-color-light);
      }

      /* RESPONSIVE BEHAVIOR */
      @media (max-width: 768px) {
        nav {
          display: none;
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
      })
    );
    this.teamOpen = false;
  }

  toggleTeam() {
    this.teamOpen = !this.teamOpen;
  }

  toggleMode() {
    this.darkMode = !this.darkMode;

    if (this.darkMode) {
      this.setAttribute("darkmode", "");
    } else {
      this.removeAttribute("darkmode");
    }
  }

  render() {
    return html`
      <header>
        <div class="logo">TusseyMountain</div>

        <nav>
          ${this.navItems.map((item) =>
            item.label === "Team"
              ? html`
                  <div class="dropdown">
                    <div
                      class="nav-link ${this.currentRoute.startsWith("/team")
                        ? "active"
                        : ""}"
                      @click="${this.toggleTeam}"
                    >
                      Team
                    </div>

                    <div class="dropdown-menu ${this.teamOpen ? "open" : ""}">
                      ${this.teamItems.map(
                        (team) => html`
                          <div class="dropdown-item">
                            <a
                              class="submenu-link"
                              href="${team.path}"
                              @click="${(e) => this.handleClick(e, team.path)}"
                            >
                              ${team.label}
                            </a>
                          </div>
                        `
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
                    >${item.label}</a
                  >
                `
          )}

          <!-- Light/Dark Toggle -->
          <div class="toggle" @click="${this.toggleMode}">
            <div class="toggle-ball"></div>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define(TusseyHeader.tag, TusseyHeader);
