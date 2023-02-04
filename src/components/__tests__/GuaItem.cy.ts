import GuaItem from "../GuaItem.vue";

describe("GuaItem", () => {
  it("playground", () => {
    cy.mount(GuaItem, { props: { msg: "Hello Cypress" } });
  });

  it("renders properly", () => {
    cy.mount(GuaItem, { props: { msg: "Hello Cypress" } });
    cy.get("h1").should("contain", "Hello Cypress");
  });
});
