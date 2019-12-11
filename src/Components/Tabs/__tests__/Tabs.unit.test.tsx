import React from "react";
import { fireEvent, render } from "@testing-library/react";
import tabsData from "../../../data/tabsData";
import Tabs from "../Tabs";

describe("Tabs", () => {
  test("Tabs Rendering properly", () => {
    const tabsLabels = Object.keys(tabsData);
    const { getByText } = render(
      <Tabs>
        {tabsLabels.map((tab, tabIndex) => {
          return (
            <div id={tab} key={tabIndex}>
              {/*
//@ts-ignore */}
              {tabsData[tab]}
            </div>
          );
        })}
      </Tabs>
    );

    const firstActiveTabLabel = tabsLabels[0];
    // @ts-ignore
    const firstActiveText = tabsData[firstActiveTabLabel];
    const firstActiveTab = getByText(firstActiveTabLabel);
    const firstActiveSection = getByText(firstActiveText);
    expect(firstActiveTab).toBeInTheDocument();
    expect(firstActiveTab).toHaveClass("tab-list-active");
    expect(firstActiveSection).toBeInTheDocument();

    tabsLabels.map((label) => {
      const activeText = tabsData[label];

      const activeTab = getByText(label);
      fireEvent.click(activeTab);
      const activeSection = getByText(activeText);
      expect(activeTab).toHaveClass("tab-list-active");
      expect(activeSection).toBeInTheDocument();
    });
  });
});
