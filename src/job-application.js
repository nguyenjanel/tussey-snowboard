/**
 * Copyright 2025 xiaowen Ju
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class JobApplication extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "job-application";
  }

  static get styles() {
    return [
      super.styles,
      css`
        .job-application {
          background: var(--ddd-theme-primary);
          padding: 1.5rem;
          border-radius: var(--ddd-borderRadius);
          border: var(--ddd-border);
          box-shadow: var(--ddd-boxShadow);
          color: var(--ddd-theme-default-text);
        }

        .job-application h3 {
          margin-top: 0;
          margin-bottom: 1.5rem;
          font-weight: 500;
          font-size: 1.2rem;
        }
        form {
          display: grid;
          gap: 1.2rem;
          grid-template-columns: 1fr 1fr;
        }

        tussey-textarea,
        tussey-button {
          grid-column: 1 / -1;
        }

        @media (max-width: 768px) {
          form {
            display: flex;
            flex-direction: column;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <main class="job-application">
        <h3>Job Application</h3>
        <form @submit=${this._submitForm}>
          <tussey-input
            label="First Name"
            name="first-name"
            required
          ></tussey-input>
          <tussey-input
            label="Last Name"
            name="last-name"
            required
          ></tussey-input>

          <tussey-input
            label="Phone"
            name="phone"
            type="tel"
            required
          ></tussey-input>
          <tussey-input
            label="Email"
            name="email"
            type="email"
            required
          ></tussey-input>

          <tussey-input
            label="Birthday"
            name="birthday"
            type="date"
            required
          ></tussey-input>
          <tussey-input label="Address" name="address" required></tussey-input>

          <tussey-textarea
            label="List Any Relevant Skills"
            name="skills"
          ></tussey-textarea>

          <tussey-button label="Send" href="job-application"></tussey-button>
        </form>
      </main>
    `;
  }

  _submitForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    console.log("Submitted:", Object.fromEntries(formData.entries()));
    alert("Message submitted (demo only)");
  }
}

globalThis.customElements.define(JobApplication.tag, JobApplication);
