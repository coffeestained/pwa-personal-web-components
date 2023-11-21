import { newE2EPage } from '@stencil/core/testing';

describe('spa-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<spa-button></spa-button>');

    const element = await page.find('spa-button');
    expect(element).toHaveClass('hydrated');
  });
});
