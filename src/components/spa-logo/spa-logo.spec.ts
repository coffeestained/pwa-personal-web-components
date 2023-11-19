import { newSpecPage } from '@stencil/core/testing';
import { SpaLogo } from './spa-logo';

describe('spa-logo', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SpaLogo],
      html: '<spa-logo></spa-logo>',
    });
    expect(root).toEqualHtml(`
      <spa-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </spa-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SpaLogo],
      html: `<spa-component first="Stencil" last="'Don't call me a framework' JS"></spa-component>`,
    });
    expect(root).toEqualHtml(`
      <spa-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </spa-component>
    `);
  });
});
