const leftBtn = document.getElementById('left-arrow');
const rightBtn = document.getElementById('right-arrow');
const form = document.getElementById('switch-page');

leftBtn.onclick = function() {
  const currentPageNum = parseInt(document.getElementById('current-page').innerText);
  if (currentPageNum === 1) return;
  document.getElementById('page-number').value = currentPageNum - 1;
  form.submit();
};

rightBtn.onclick = function() {
  const currentPageNum = parseInt(document.getElementById('current-page').innerText);
  const pageLimit = parseInt(document.getElementById('page-limit').innerText);
  if (currentPageNum === pageLimit) return;
  document.getElementById('page-number').value = currentPageNum + 1;
  form.submit();
};