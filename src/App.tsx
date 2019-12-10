import React, { useState } from "react";
import "./App.css";
import testingTools from "./data/testingTools";
import List from "./Components/List/List";
import FormField from "./Components/FormField/FormField";
import Tabs from "./Components/Tabs/Tabs";
import tabsData from "./data/tabsData";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const onChangeText = (newInputValue: string) => {
    setInputValue(newInputValue);
    return true;
  };

  return (
    <div>
      <List items={testingTools} />
      <FormField
        value={inputValue}
        placeholder={"First Name"}
        label={"First Name: "}
        onChangeText={onChangeText}
        fieldId={"first-name"}
      />
      <Tabs>
        {Object.keys(tabsData).map((tab, tabIndex) => {
          return (
            <div id={tab} key={tabIndex}>
              {/*
//@ts-ignore */}
              {tabsData[tab]}
            </div>
          );
        })}
      </Tabs>
    </div>
  );
};

export default App;
