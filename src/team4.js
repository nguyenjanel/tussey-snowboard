/**
 * Copyright 2025 nguyenjanel
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./team-schedule.js";
import "./footer-tag.js";
/**
 * `team-schedule`
 *
 * @demo index.html
 * @element team-4
 */
export class team4 extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "team-4";
  }

  constructor() {
    super();
  }
  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      scheduleData: { type: Array },
    };
  }

  // Lit reactive properties

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          margin: var(--ddd-spacing-0);
          padding: var(--ddd-spacing-0);
        }
        #team4-page {
          margin: var(--ddd-spacing-2);
        }
        #team4-page h1 {
          padding-left: 12px;
        }
        #team4-page h2 {
          padding-left: 12px;
        }
        h1,
        h2 {
          color: var(--ddd-theme-default-text);
        }
        .footer {
          padding-top: 10px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div id="team4-page">
        <div>
          <h1 id="team-name">Team #4</h1>
        </div>
        <div>
          <h2>Upcoming Games</h2>
          <team-schedule id="games-schedule"></team-schedule>
        </div>
        <div>
          <h2>Upcoming Practices</h2>
          <team-schedule id="practices-schedule"></team-schedule>
        </div>

        <div class="footer">
          <footer-tag></footer-tag>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    const gamesScheduleEl = this.renderRoot.querySelector("#games-schedule");
    const practicesScheduleEl = this.renderRoot.querySelector(
      "#practices-schedule"
    );
    const teamNameEl = this.renderRoot.querySelector("#team-name");

    fetch("/api/schedule.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("RAW DATA:", data);

        const league = data[0];
        const team = league.teams.find((t) => t.id === "team-4");

        if (!team) {
          throw new Error("team-4 not found");
        }

        console.log("TEAM 4:", team);

        teamNameEl.textContent = team.teamName;

        gamesScheduleEl.scheduleData = team.schedule;
        gamesScheduleEl.scheduleType = "games";

        practicesScheduleEl.scheduleData = team.practice;
        practicesScheduleEl.scheduleType = "practice";
      })
      .catch((err) => {
        console.error("Failed to load schedule:", err);
      });
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(team4.tag, team4);
