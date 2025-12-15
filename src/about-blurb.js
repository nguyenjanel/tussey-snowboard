import { LitElement, html, css } from "lit";
import "./img-gallery.js";
import "./desc-text.js";
import "./tussey-button.js";

export class AboutBlurb extends LitElement {
  static properties = {
    index: { type: Number },
  };

  constructor() {
    super();
    this.index = 0;

    this.items = [
      {
        img: "https://tusseymountain.com/app/cms/assets/images/94dfaf1d32cea888265e332fad88e51d.jpg?v=1765559975",
        text: "Whether you're planning a weekend adventure or a weekday escape, Tussey Mountain offers a variety of lift tickets, lesson packages, and rental options to make your experience unforgettable.",
        label: "View More",
      },
      {
        img: "https://tusseymountain.com/app/cms/assets/images/46ef4f6b1ee7c5238ffa41dffcac2b31.jpg?v=1765560591",
        text: "Season Passes can be purchased online or in person at the Tussey Mountain Ticket Office. A Season Pass grants you access to the lifts and slopes any time we are open.",
        label: "Join Now",
      },
      {
        img: "https://tusseymountain.com/app/cms/assets/images/9380a6bee6e19ab82abff206ad39bb68.jpg?v=1765560591",
        text: "Explore Tussey Mountain with a range of lift ticket options to suit your schedule, from full-day adventures to quick two-hour sessions.",
        label: "Buy Now",
      },
    ];
  }

  prev() {
    this.index = (this.index - 1 + this.items.length) % this.items.length;
  }

  next() {
    this.index = (this.index + 1) % this.items.length;
  }

  static styles = css`
    .carousel {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: 1.5rem;
      background: var(--ddd-theme-primary);
      padding: 1.5rem;
      border-radius: var(--ddd-borderRadius);
      border: var(--ddd-border);
      box-shadow: var(--ddd-boxShadow);
      color: var(--ddd-theme-default-text);
      margin: 1rem auto;
    }

    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: center;
    }

    .blurb-right {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .controls {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 1.5rem;
    }

    tussey-button {
      width: fit-content;
    }
    button {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--ddd-theme-default-text);
    }

    @media (max-width: 768px) {
      .content {
        grid-template-columns: 1fr;
      }
      .carousel {
        gap: 1.5rem;
        padding: 1rem 0;
        text-align: center;
      }
    }
  `;

  render() {
    const item = this.items[this.index];

    return html`
      <section class="carousel">
        <button @click=${this.prev} aria-label="Previous">
          <tussey-icon icon="ph:caret-left-bold"></tussey-icon>
        </button>

        <div class="content">
          <img-gallery
            src=${item.img}
            alt="Tussey Mountain activity"
          ></img-gallery>

          <div class="blurb-right">
            <desc-text text=${item.text}></desc-text>
            <tussey-button
              label=${item.label}
              href=${item.link}
            ></tussey-button>
          </div>
        </div>

        <button @click=${this.next} aria-label="Next">
          <tussey-icon icon="ph:caret-right-bold"></tussey-icon>
        </button>
      </section>
    `;
  }
}

customElements.define("about-blurb", AboutBlurb);
