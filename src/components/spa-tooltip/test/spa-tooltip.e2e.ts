import { newE2EPage } from '@stencil/core/testing';

describe('spa-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<spa-tooltip></spa-tooltip>');

    const element = await page.find('spa-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
