import InspirationalQuote from './InspirationalQuote.svelte';
import { render } from '@testing-library/svelte';

it('should verify that inspirational quote shows correct text', async () => {
  const { getByTestId } = render(InspirationalQuote);
  const inspirationalQuote = getByTestId('quote');

  expect(inspirationalQuote.textContent).toBe(
    'Inspiration is a natural part of respiration.',
  );
});
