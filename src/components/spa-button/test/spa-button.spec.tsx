import { newSpecPage } from '@stencil/core/testing';
import { SpaButton } from '../spa-button';

describe('spa-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SpaButton],
      html: `<spa-button></spa-button>`,
    });
    expect(page.root).toEqualHtml(`
      <spa-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </spa-button>
    `);
  });
});
