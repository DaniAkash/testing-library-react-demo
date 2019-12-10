import React, { Component } from "react";
import PropTypes from "prop-types";

import Tab from "./Tab";

export interface TabsProps {
  children: any;
}

export interface TabsState {
  activeTab: string;
}

class Tabs extends Component<TabsProps, TabsState> {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props: TabsProps) {
    super(props);

    this.state = {
      activeTab: props.children[0].props.id
    };
  }

  onClickTabItem = (tab: string) => {
    this.setState({ activeTab: tab });
    return true;
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child: any) => {
            const { id } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={id}
                label={id}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child: any) => {
            if (child.props.id !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
