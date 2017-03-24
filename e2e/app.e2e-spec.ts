import { DragDropTestPage } from './app.po';

describe('drag-drop-test App', () => {
  let page: DragDropTestPage;

  beforeEach(() => {
    page = new DragDropTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
