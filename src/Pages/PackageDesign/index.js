import React from "react";
import {
  LightgalleryProvider,
  LightgalleryItem,
  useLightgallery,
} from "react-lightgallery";
import { packageData } from "../../ImageData/packageData";
import LayerBox from "../../Components/Common/LayerBox";
import {
  Container,
  ListWrap,
  OpenGalleryBtn,
} from "../../Components/Common/LightgalleryGrid";
import styled from "styled-components";

const Image = styled.div`
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
const Package = () => {
  const PhotoItem = ({ image, thumb, group }) => (
    <OpenGalleryBtn>
      <LightgalleryItem group={group} src={image} thumb={thumb}>
        <Image>
          <img src={image} alt="개인작품이미지" />
        </Image>{" "}
        <LayerBox />
      </LightgalleryItem>
    </OpenGalleryBtn>
  );

  return (
    <Container>
      <ListWrap>
        <LightgalleryProvider>
          {packageData.map((p, idx) => (
            <PhotoItem key={idx} image={p} group={"01"} />
          ))}
        </LightgalleryProvider>
      </ListWrap>
    </Container>
  );
};
export default Package;
