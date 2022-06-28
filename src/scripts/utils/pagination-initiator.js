class PageInitiator {
  static activePage1(page1, page2, page3) {
    page1.classList.add('active');
    page2.classList.remove('active');
    page3.classList.remove('active');
  }

  static activePage2(page1, page2, page3) {
    page2.classList.add('active');
    page1.classList.remove('active');
    page3.classList.remove('active');
  }

  static activePage3(page1, page2, page3) {
    page3.classList.add('active');
    page1.classList.remove('active');
    page2.classList.remove('active');
  }
}

export default PageInitiator;
