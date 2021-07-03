(function () {
  const contentElement = document.querySelector("#content");
  const asideElement = document.querySelector("#aside");
  // console.table({ contentElement, asideElement });
  const ch = window.innerHeight / 2;
  const clientHeightContentElement = parseInt(
    contentElement.clientHeight + 120 - ch
  );
  document.body.onscroll = () => {
    asideElement.style.opacity = "0";
    if (window.scrollY >= 120 && window.scrollY < clientHeightContentElement) {
      asideElement.style.opacity = "1";
    }
  };
})();
