import { createGlobalStyle, keyframes } from "styled-components";
import reset from "styled-reset";

export const FadeInTopToBottom = keyframes`
  from {
    top: -60px;
    opacity:0;
  }
  to {
    top: 0px;
    opacity:1;
  }
`;

export const TopToBottom = keyframes`
  from {
    top: -30px;
  }
  to {
    top: 0px;
  }
`;

export const FadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

export const lightTheme = {
  keyBlue: "#4a99c3",
  keyDeepBlue: "#0b547a",
  accentColor: "#0b547a",
};

export const darkTheme = {
  fontColor: "#fff",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
  ${reset};

  #wrapper{
    padding-bottom: 10px;
  }

  body {
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 16px;
  color: #333;
}

body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-thumb {
  background-color: #d9cbba;
  height: 20px;
}

body::-webkit-scrollbar-track {
  background-color: #fafafa;
}

.font_box {
  text-align: center;
  padding: 3px;
  border: 1px solid #0b547a;
  font-weight: 600;
  transition: all 0.5s;
}

.font_box:hover {
  background-color: #0b547a;
  color: #fff;
}

.hidden {
  display: block;
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  color: #fff;
}

main {
  margin-top: 130px;
  width: auto;
    transition: all .5s;
}

section {
  width: 100%;
  overflow: hidden;
}


  .lg-img-wrap > .lg-image {
    max-width: 80% !important;
    width: auto !important;
  }

  .cursor {
      width: 40px;
      height: 40px;
      border: 1px solid #333;
      border-radius: 100%;
      position: fixed;
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode:difference;
      transition: all .5s ease;
      transition-property:  opacity, background-color, transform, mix-blend-mode;
    }

    .cursor--clicked {
      transform: translate(-50%, -50%) scale(2);
      background-color: #fefefe;
    }

    .cursor--link-hovered {
      transform: translate(-50%, -50%) scale(2);
      background-color: #fff;
      border-width: 1;
    }


`;
