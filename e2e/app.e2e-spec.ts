import { IntranetCarpetmaker2Page } from './app.po';

describe('intranet-carpetmaker2 App', function() {
  let page: IntranetCarpetmaker2Page;

  beforeEach(() => {
    page = new IntranetCarpetmaker2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
