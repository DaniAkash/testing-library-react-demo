import React, { Component } from "react";

export interface TabProps {
  activeTab: string;
  label: string;
  onClick: (a: string) => boolean;
}

class Tab extends Component<TabProps> {
  static propTypes = {};

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  };

  render() {
    const {
      onClick,
      props: { activeTab, label }
    } = this;

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    );
  }
}

export default Tab;
