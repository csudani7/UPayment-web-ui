// #region Global Imports
import { render } from '@testing-library/react';
import * as React from 'react';
// #endregion Global Imports

// #region Local Imports
import Layout from './';

// #endregion Local Imports

describe('Basic Components', () => {
  describe('Layout', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <Layout>
          <p> Hello </p>
        </Layout>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
