import { newSpecPage } from '@stencil/core/testing';
import { SpaTextLogo } from './spa-text-logo';

describe('spa-text-logo', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [SpaTextLogo],
      html: '<spa-text-logo></spa-text-logo>',
    });
    expect(root).toEqualHtml(`
      <spa-text-logo>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </spa-text-logo>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [SpaTextLogo],
      html: `<spa-text-logo first="Stencil" last="'Don't call me a framework' JS"></spa-text-logo>`,
    });
    expect(root).toEqualHtml(`
      <spa-text-logo first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </spa-text-logo>
    `);
  });
});
