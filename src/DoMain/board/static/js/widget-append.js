const widgetAppend = (widgetSeq) => {
  URL = "/widget/widget-append/";
  data = {'widgetSEQ': widgetSeq};
  AjaxCall(URL, data);
  renderAppliedLayout();
  widgetLockToggle(makeUnlock=true);
  modalOff();
  btnEventSet();
}