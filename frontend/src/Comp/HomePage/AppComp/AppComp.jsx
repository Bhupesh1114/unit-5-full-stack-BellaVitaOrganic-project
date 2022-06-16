import React from "react";
import {
  AppContainer,
  AppContainerBottom,
  AppContainerMid,
  AppContainerMidText,
  AppContainerTop,
  AppleStoreImg,
  AppMobileDiv,
  AppMobileImg,
  PlayStoreImg,
  StoreAppDiv,
} from "./AppComp.element";

import Playstore from "../Images/Playstore.webp";

import Applestore from "../Images/Applestore.webp";

import Appdownload from "../Images/Appdownload.webp";

const AppComp = () => {
  return (
    <AppContainer>
      <AppContainerTop></AppContainerTop>
      <AppContainerMid>
        <AppContainerMidText>DOWNLOAD OUR APP</AppContainerMidText>
      </AppContainerMid>
      <AppContainerBottom>
        <StoreAppDiv>
          <PlayStoreImg src={Playstore} />
          <AppleStoreImg src={Applestore} />
        </StoreAppDiv>
      </AppContainerBottom>

      <AppMobileDiv>
        <AppMobileImg src={Appdownload}/>
      </AppMobileDiv>
    </AppContainer>
  );
};

export default AppComp;
