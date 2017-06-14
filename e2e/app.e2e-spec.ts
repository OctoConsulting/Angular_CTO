import { AngularCTOPage } from './app.po';

describe('angular-cto App', () => {
  let page: AngularCTOPage;

  beforeEach(() => {
    page = new AngularCTOPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
