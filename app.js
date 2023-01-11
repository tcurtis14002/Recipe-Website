const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element
  throw Error(
    ` Please double chekc your class names, there is no ${selector} class`
  )
};

const links = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn');

navBtnDOM.addEventListner('click', () => {
  links.classList.toggle('show-links')
});

