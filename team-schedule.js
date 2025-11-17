/**
 * Copyright 2025 nguyenjanel
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `team-schedule`
 * 
 * @demo team1.html
 * @element team-schedule
 */
export class teamSchedule extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "team-schedule";
  }

  constructor() {
    super();
    this.scheduleData = []; // initialize empty
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
    return [super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-primary, #333);
          background-color: var(--ddd-theme-accent, #f9f9f9);

          font-family: var(--ddd-font-navigation);
          border-radius: var(--ddd-radius-lg, 16px);

          padding: var(--ddd-spacing-4);
          margin: var(--ddd-spacing-2);

          overflow-x: auto; /* horizontal scroll on small screens */
        }

        table.schedule-table {
          width: 100%;
          border-collapse: collapse;
        }

        table.schedule-table th,
        table.schedule-table td {
          border: 1px solid #ddd;
          padding: 12px 16px;
          text-align: left;
        }

        table.schedule-table th {
          background-color: var(--ddd-theme-primary, #59b5f6);
          color: white;
        }

        table.schedule-table tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        table.schedule-table tr:hover {
          background-color: #e0dede;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.scheduleData.map(team => html`
          <table class="schedule-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Team</th>
                <th>Opponent</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Ice Rink</th>
              </tr>
            </thead>
            <tbody>
              ${team.schedule.map(game => html`
                <tr>
                  <td>${game.date}</td>
                  <td>${team.teamName}</td>
                  <td>${game.opponent}</td>
                  <td>${game.time}</td>
                  <td>${game.endTime || ""}</td>
                  <td>${game.location}</td>
                </tr>
              `)}
            </tbody>
          </table>
        `)}
      </div>
    `;
  }

  

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(teamSchedule.tag, teamSchedule);