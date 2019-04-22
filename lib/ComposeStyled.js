import React from "react";
import { composeEmotionStyled } from "./composeEmotionStyled";

export default class ComposeStyled extends React.Component {
  component = null;

  constructor(props) {
    super(props);
    const { components, base } = props;
    this.component = composeEmotionStyled(components, {
      base
    });
  }

  render() {
    const { component: ComposedComponent } = this;
    return <ComposedComponent>{this.props.children}</ComposedComponent>;
  }
}
