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
    this.scheduleType = "games"; // optional default
  }
  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      scheduleData: { type: Array },
      scheduleType: { type: String }, // "games" or "practice"
    };
  }

  // Lit reactive properties

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          color: var(--ddd-theme-default-text);

          font-family: var(--ddd-font-navigation);
          border-radius: var(--ddd-borderRadius);
          box-shadow: var(--ddd-boxShadow);
          padding: var(--ddd-spacing-4);
          border: var(--ddd-border);
          margin: var(--ddd-spacing-2);

          overflow-x: auto; /* horizontal scroll on small screens */
        }

        table.schedule-table {
          width: 100%;
          border-collapse: collapse;
        }

        table.schedule-table th,
        table.schedule-table td {
          border: var(--ddd-border);
          padding: 12px 16px;
          text-align: left;
        }

        table.schedule-table th {
          background-color: var(--ddd-theme-primary);
          color: var(--ddd-theme-default-text-subtle);
        }

        table.schedule-table tr:nth-child(even) {
          background-color: var(--ddd-accent-1-light);
        }

        table.schedule-table tr:hover {
          background-color: var(--ddd-theme-secondary);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="wrapper">
        ${this.scheduleData?.length > 0
          ? html`
              <table class="schedule-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Location</th>
                    <th>
                      ${this.scheduleType === "games" ? "Opponent" : "Notes"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  ${this.scheduleData.map(
                    (item) => html`
                      <tr>
                        <td>${item.date}</td>
                        <td>${item.time}</td>
                        <td>${item.endTime || ""}</td>
                        <td>${item.location}</td>
                        <td>${item.opponent || item.notes || ""}</td>
                      </tr>
                    `
                  )}
                </tbody>
              </table>
            `
          : html`<p>No schedule available.</p>`}
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
