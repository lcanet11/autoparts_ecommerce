import { ConcatenarPipe } from './concatenar.pipe';

describe('ConcatenarPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatenarPipe();
    expect(pipe).toBeTruthy();
  });
});
