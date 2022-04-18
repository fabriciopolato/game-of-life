import { evolveToNextGeneration } from './evolveToNextGeneration.js';
import matrices from './matrices.js';

it('returns the right output based on the given input', () => {
  matrices.forEach(({ input, output }) => {
    expect(evolveToNextGeneration(input)).toEqual(output);
  });
})
