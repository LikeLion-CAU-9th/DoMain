const widgetDeleteAlert = (index) => {
  let deleteConfirm = confirm("해당 위젯을 삭제하시겠습니까?");
  if(deleteConfirm) {
    document.querySelectorAll('.widget')[index].querySelector('input').value = "";
  }
  saveHiddenData();
  location.reload();
} 