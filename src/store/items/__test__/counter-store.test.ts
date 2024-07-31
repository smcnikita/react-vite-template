import { describe, expect, it } from 'vitest';
import CounterStore from '../counter-store';

describe('CounterStore', () => {
  it('should increment and decrement', () => {
    const store = CounterStore;

    store.increment(2);
    store.increment(5);
    store.decrement(1);

    expect(store.count).toBe(6);
    expect(store.total).toBe(12);
  });
});
