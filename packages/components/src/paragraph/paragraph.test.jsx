import React from 'react';
import { render } from '@testing-library/react';

import Paragraph from '.';

describe('Paragraph', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Paragraph>Test</Paragraph>);
    expect(asFragment()).toMatchSnapshot();
  });
});