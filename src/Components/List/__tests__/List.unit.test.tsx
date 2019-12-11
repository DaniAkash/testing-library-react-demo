import React from 'react';
import { render } from '@testing-library/react';
import List from "../List";
import testingTools from '../../../data/testingTools';

describe("List Component", () => {
  test("List Renders Properly", () => {
    const { getByText } = render(<List items={testingTools}/>)

    testingTools.map((item, itemIndex) => {
      const listItem = getByText(testingTools[itemIndex]);
      expect(listItem).toBeInTheDocument()
    })
  });
});
