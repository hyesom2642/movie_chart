const breakPoint = {
  small: '576px',
  medium: '900px',
  large: '1200px'
};

const theme = {
  mobile: `screen and (max-width: ${breakPoint.small})`,
  tablet: `screen and (min-width: ${breakPoint.small})`,
  desktop: `screen and (min-width: ${breakPoint.large})`,
}
export default theme;