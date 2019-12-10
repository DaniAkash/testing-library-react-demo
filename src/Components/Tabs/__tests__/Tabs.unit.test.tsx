import React from "react";
import { render, fireEvent } from "@testing-library/react";
import tabsData from "../../../data/tabsData";
import Tabs from "../Tabs";

describe("<Tabs/> Component", () => {
  test("Tabs working properly", () => {
    const tabsArray = Object.keys(tabsData);

    const { getByText } = render(
      <Tabs>
        {tabsArray.map((tab, tabIndex) => {
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

    const firstTabName = tabsArray[0];
    const firstActiveTab = getByText(firstTabName);
    // @ts-ignore
    const firstVisibleSection = getByText(tabsData[firstTabName]);
    expect(firstActiveTab).toBeInTheDocument();
    expect(firstVisibleSection).toBeInTheDocument();

    const secondTabName = tabsArray[1];
    const secondTab = getByText(secondTabName);
    expect(secondTab).toBeInTheDocument();
    fireEvent.click(secondTab);
    // @ts-ignore
    const visibleSection = getByText(tabsData[secondTabName]);
    expect(visibleSection).toBeInTheDocument();
  });
});
