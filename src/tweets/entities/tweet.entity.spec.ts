import { Tweet } from './tweet.entity';

describe('Tweet Tests', () => {
  it('create a tweet', () => {
    const tweet = new Tweet({
      content: 'Hello World',
      screen_name: 'cleudeir',
    });

    expect(tweet.content).toBe('Hello World');
    expect(tweet.screen_name).toBe('cleudeir');
  });

  it('create a tweet postegres', () => {
    const tweet = new Tweet({
      content: 'Hello World',
      screen_name: 'cleudeir',
    });

    expect(tweet.content).toBe('Hello World');
    expect(tweet.screen_name).toBe('cleudeir');
  });
});
