import { hasFeatureFlagEnabled } from '../utils';

describe('hasFeatureFlagEnabled', () => {
  const { location } = global;

  beforeAll(() => {
    delete global.location;
    global.location = { search: '?feature=test1&feature=test2' };
  });

  afterAll(() => {
    global.location = location;
  });

  test('properly determines feature flags from query params', () => {
    expect(hasFeatureFlagEnabled('test1')).toEqual(true);
    expect(hasFeatureFlagEnabled('test2')).toEqual(true);
    expect(hasFeatureFlagEnabled('foobar')).toEqual(false);
  });
});
