import { pxToRem, responsiveFontSizes } from "../utils/getFontValue";

// ----------------------------------------------------------------------

const FONT_PRIMARY = "Public Sans, sans-serif"; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,

  h1: {
    fontWeight: 400,
    lineHeight: "100%",
    fontSize: pxToRem(48),
    // letterSpacing: 2,
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: "150%",
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 32, md: 32, lg: 35 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 24, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: "150%",
    fontSize: pxToRem(18),
  },
  body2: {
    lineHeight: "125%",
    fontSize: pxToRem(16),
  },
  caption: {
    lineHeight: 1.3,
    fontSize: pxToRem(10),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize",
  },
};

export default typography;
