/* eslint-disable no-param-reassign */
class PageInitiator {
  static activePage1(page1, page2, page3, pagePrev, pageNext) {
    page1.classList.add('active');
    page2.classList.remove('active');
    page3.classList.remove('active');
    pagePrev.disabled = true;
    pageNext.disabled = false;
  }

  static activePage2(page1, page2, page3, pagePrev, pageNext) {
    page2.classList.add('active');
    page1.classList.remove('active');
    page3.classList.remove('active');
    pagePrev.disabled = false;
    pageNext.disabled = false;
  }

  static activePage3(page1, page2, page3, pagePrev, pageNext) {
    page3.classList.add('active');
    page1.classList.remove('active');
    page2.classList.remove('active');
    pagePrev.disabled = false;
    pageNext.disabled = true;
  }
}

export default PageInitiator;
