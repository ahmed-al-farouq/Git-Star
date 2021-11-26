import '@testing-library/jest-dom/extend-expect';
import fetchRepos from '../__mocks__/fetchRepos';

describe('test fethcing repos', () => {
  it('test fetching ID', async () => {
    await fetchRepos().then((repos) => {
      expect(repos[0].id).toBe(116682298);
    });
  });

  it('test fetching owner name', async () => {
    await fetchRepos().then((repos) => {
      expect(repos[0].owner_name).toBe('rrdssfgcs');
    });
  });

  it('test fetching avatar', async () => {
    await fetchRepos().then((repos) => {
      expect(repos[0].avatar).toBe('https://avatars.githubusercontent.com/u/29747636?v=4');
    });
  });

  it('test fetching repo name', async () => {
    await fetchRepos().then((repos) => {
      expect(repos[0].repo_name).toBe('wenda-helper');
    });
  });

  it('test fetching description', async () => {
    await fetchRepos().then((repos) => {
      expect(repos[0].description).toBe(null);
    });
  });

  it('test fetching stars', async () => {
    await fetchRepos().then((repos) => {
      expect(repos[0].stars).toBe(794);
    });
  });

  it('test fetching issues', async () => {
    await fetchRepos().then((repos) => {
      expect(repos[0].issues).toBe(0);
    });
  });
});
