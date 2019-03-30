import React, { Component } from "react";
import styled from "@emotion/styled";

const Root = styled.div({ backgroundColor: "red", height: "100vh" });
const MainContainer = styled.div({
  maxWidth: 1280,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: 64,
  paddingBottom: 64,
  backgroundColor: "yellow",
  height: "100%",
  textAlign: "center"
});

class HorsePower extends Component {
  render() {
    return (
      <Root>
        <MainContainer>
          <h1>HorsePower</h1>
        </MainContainer>
      </Root>
    );
  }
}

export default HorsePower;
