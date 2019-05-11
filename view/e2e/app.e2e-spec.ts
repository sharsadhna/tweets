import { TweetsPage } from './app.po';

describe('tweets App', function() {
  let page: TweetsPage;

  beforeEach(() => {
    page = new TweetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
