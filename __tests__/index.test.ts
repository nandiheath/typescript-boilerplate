import { helloWorld } from '../src/index';

describe('helloWorld function', () => {
  // Act before assertions
  beforeAll(async () => {    
  });

  // Assert if helloWorld function returns the correct value
  it('should returns correct string', () => {
    expect(helloWorld()).toBe('Hello, World!');    
  });
});