import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'web-components',
  globalStyle: 'src/global/global.css',
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      dir: "dist/custom-elements/"
      // Output target config options here
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
