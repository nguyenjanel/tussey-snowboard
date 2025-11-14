import { html, fixture, expect } from '@open-wc/testing';
import "../tussey-snowboard.js";

describe("TusseySnowboard test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <tussey-snowboard
        title="title"
      ></tussey-snowboard>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
