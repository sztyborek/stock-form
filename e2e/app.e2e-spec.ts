import { StockFormPage } from './app.po';

describe('stock-form App', () => {
  let page: StockFormPage;

  beforeEach(() => {
    page = new StockFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
