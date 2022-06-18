import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 80px;
`;
export const AppContainerTop = styled.div`
  height: 170px;
  background-color: #e5f0da;
  margin-bottom: 0;
  position: relative;
`;

export const AppContainerMid = styled.div`
  height: 80px;
  background-color: #475d4b;
  position: relative;
`;

export const AppContainerMidText = styled.p`
  font-size: 45px;
  font-weight: 700;
  color: #e5f0da;
  margin: auto;
  margin-left: 750px;
  padding: 10px;
`;
export const AppContainerBottom = styled.div`
  height: 280px;
  background-color: #e5f0da;
  margin: 0;
  position: relative;
`;
export const StoreAppDiv = styled.div`
  display: flex;
  margin: auto;
  margin-left: 650px;
  padding: 30px;
  gap: 0px;
`;

export const PlayStoreImg = styled.img`
  width: 200px;
  height: 80%;
  cursor: pointer;
`;
export const AppleStoreImg = styled.img`
  width: 200px;
  cursor: pointer;
  height: 80%;
  margin-right: 330px;
`;
export const AppMobileDiv = styled.div`
  position: absolute;
  margin-top: -490px;
  margin-left: 150px;
`;
export const AppMobileImg = styled.img`
  z-index: 1;
  height: 80%;
  transition: all 0.4s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;
