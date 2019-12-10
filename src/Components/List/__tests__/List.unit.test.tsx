import React from "react";
import List from "../List";
import { render } from "@testing-library/react";
import testingTools from "../../../data/testingTools";

describe("<List /> Component", () => {
  test("List renders properly", () => {
    const { getByText } = render(<List items={testingTools} />);
    const testrunner = testingTools.map(tool => {
      const listItem = getByText(tool);
      expect(listItem).toBeInTheDocument();
      return listItem;
    });
  });
});
