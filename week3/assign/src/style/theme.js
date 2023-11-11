const colors = {
  main: "#CDF0EA",
  background: "#F9F9F9",
  sub1: "#ECC5FB",
  sub2: "#FAF4B7",
  grey: "#B7B7B7",
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
  neon: FONT({ weight: 900, size: 5.0, lineHeight: 2.6, letterSpacing: 0 }),

  title01: FONT({ weight: 700, size: 2.0, lineHeight: 2.6, letterSpacing: 0 }),
  title02: FONT({ weight: 500, size: 1.6, lineHeight: 2.0, letterSpacing: 0 }),

  body01: FONT({ weight: 700, size: 1.4, lineHeight: 1.6, letterSpacing: 0 }),
  body02: FONT({ weight: 500, size: 1.2, lineHeight: 1.6, letterSpacing: 0 }),
  body03: FONT({ weight: 400, size: 1.2, lineHeight: 1.6, letterSpacing: 0 }),
  body04: FONT({ weight: 500, size: 1.1, lineHeight: 1.4, letterSpacing: 0 }),
  body05: FONT({ weight: 400, size: 1.1, lineHeight: 1.4, letterSpacing: 0 }),
};

export const theme = {
  colors,
  fonts,
};
