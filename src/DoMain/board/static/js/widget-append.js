const widgetAppend = (widgetSeq) => {
  URL = "/widget/widget-append/";
  data = {'widgetSEQ': widgetSeq};
  AjaxCall(URL, data);
  location.reload();
}