import React, { Component } from "react";
import styled from "@emotion/styled";
import YouTube from "react-youtube";

const Root = styled.div({ backgroundColor: "#117773", height: "100vh" });
const MainContainer = styled.div({
  maxWidth: 1280,
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: 64,
  paddingBottom: 64,
  backgroundColor: "#36d1cb",
  height: "100%",
  textAlign: "center"
});

class HorsePower extends Component {
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <Root>
        <MainContainer>
          <h1 style={{ marginBottom: 64 }}>HorsePower</h1>

          <YouTube videoId="OWFBqiUgspg" opts={opts} onReady={this._onReady} />
        </MainContainer>
      </Root>
    );
  }
}

export default HorsePower;
