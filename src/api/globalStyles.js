import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

// In the wild, that should be resolved using themes
injectGlobal`
  ${styledNormalize}
  h1, h2, h3, h4, h5, h6 {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform:uppercase;
  }
  h2 {
    margin-top: 0;
  }
  p {
    color: #333333;
  }
`;
