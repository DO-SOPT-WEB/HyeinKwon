const colors = {
  main: "#FA6EE3",
  subColor: "#FFEBFC",
  textColor: "#242729",
  subTextColor: "#B8BFC2",
  white: "#FFFFFF",
};

function FONT({ weight, size, lineHeight, letterSpacing }) {
  return `
      font-family: "Pretendard";
      font-weight : ${weight};
      font-size : ${size}rem;
      line-height : ${lineHeight}rem;
      letter-spacing : ${letterSpacing}rem;
      `;
}

const fonts = {
  title01: FONT({ weight: 700, size: 2.0, lineHeight: 2.6, letterSpacing: 0 }),
  title02: FONT({ weight: 500, size: 1.6, lineHeight: 2.0, letterSpacing: 0 }),
  body01: FONT({ weight: 500, size: 1.4, lineHeight: 2.0, letterSpacing: 0 }),
  body02: FONT({ weight: 500, size: 0.8, lineHeight: 1.0, letterSpacing: 0 }),
};

export const theme = {
  colors,
  fonts,
};
