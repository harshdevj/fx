import { FxPage } from './app.po';

describe('fx App', () => {
  let page: FxPage;

  beforeEach(() => {
    page = new FxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
