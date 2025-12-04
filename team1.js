/**
 * Copyright 2025 nguyenjanel
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

import "./team-schedule.js";
import "./footer-tag.js"
/**
 * `team-schedule`
 * 
 * @demo index.html
 * @element team-1
 */
export class team1 extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "team-1";
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
    return [super.styles,
      css`
        :host {
          margin: var(--ddd-spacing-0);
          padding: var(--ddd-spacing-0);
        }
        #team1-page{
          margin: var(--ddd-spacing-2);
        }
          #team1-page h1 {
          padding-left: 12px;
        }
          #team1-page h2 {
          padding-left: 12px;
        }
      `
    ];
  }
  

  render() {
    return html`
      <div id="team1-page">
    <div class="nav-bar">
      <p>navigation bar placer</p>
    </div>
    <div>
      <h1 id="team-name">Team #1</h1>
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
  const gamesScheduleEl = this.renderRoot.querySelector('#games-schedule');
  const practicesScheduleEl = this.renderRoot.querySelector('#practices-schedule');
  const teamNameEl = this.renderRoot.querySelector('#team-name');

  fetch('./public/data.json')
    .then(res => res.json())
    .then(data => {
      const team = data.teams[0];

      // Update heading
      teamNameEl.textContent = team.teamName;

      // Pass schedule separately
      gamesScheduleEl.scheduleData = [team];
      practicesScheduleEl.scheduleData = [team];
    })
    .catch(err => console.error("Failed to load schedule:", err));
}

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(team1.tag, team1);