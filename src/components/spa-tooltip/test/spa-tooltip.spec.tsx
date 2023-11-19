import { newSpecPage } from '@stencil/core/testing';
import { SpaTooltip } from '../spa-tooltip';

describe('spa-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SpaTooltip],
      html: `<spa-tooltip></spa-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <spa-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </spa-tooltip>
    `);
  });
});
