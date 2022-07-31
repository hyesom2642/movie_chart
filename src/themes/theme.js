const breakPoint = {
  sm: "500px",
  md: "900px",
  lg: "1200px",
  xl: "1800px"
};

const deviceSize = {
  sm: `screen and (max-width: ${breakPoint.sm})`,
  md: `screen and (max-width: ${breakPoint.md})`,
  lg: `screen and (min-width: ${breakPoint.lg})`,
  xl: `screen and (min-width: ${breakPoint.xl})`,
  
}

const theme = {
  deviceSize,
}
export default theme;