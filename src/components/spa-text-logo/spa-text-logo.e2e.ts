import { newE2EPage } from '@stencil/core/testing';

describe('spa-text-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<spa-text-logo></spa-text-logo>');
    const element = await page.find('spa-text-logo');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<spa-text-logo></spa-text-logo>');
    const component = await page.find('spa-text-logo');
    const element = await page.find('spa-text-logo >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
