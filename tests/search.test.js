import { usePropertySearch } from "../src/libs/usePropertySearch";

test("Check that queries work", () => {
  expect(usePropertySearch({ query: "Barking" })[0].id).toBe(
    "de1df90a-177c-44fb-8ec3-6702892f1ff2",
  );

  expect(usePropertySearch({ maximumPrice: "£653" }).length).toBe(1);
});

test("Check that search by multiple choice is possible", () => {
  expect(usePropertySearch({ tenure: ["FREEHOLD"] }).length).toBe(3);

  expect(usePropertySearch({ type: ["HOUSE BOAT"] }).length).toBe(1);
});

test("Check that search by before listed date works", () => {
  expect(
    usePropertySearch({ listedBefore: new Date("2025-12-31") }).length,
  ).toBe(6);
});

test("Check that search in range of dates works", () => {
  expect(
    usePropertySearch({
      listedBefore: new Date("2025-12-31"),
      listedAfter: new Date("2025-12-01"),
    }).length,
  ).toBe(4);
});

test("Check that multiple choice field can be searched with multiple values", () => {
  expect(
    usePropertySearch({
      type: ["HOUSE", "APARTMENT"],
    }).length,
  ).toBe(6);
});
