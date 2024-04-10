function resizeIframe() {
    var iframe = document.getElementById('myIframe');
    var contentHeight = iframe.contentWindow.document.body.scrollHeight;
    iframe.style.height = contentHeight + 'px';
  }

  window.addEventListener('load', resizeIframe);
  window.addEventListener('resize', resizeIframe);
