// *******************************************
// Javascript to get layout data from server
// *******************************************

const getAppliedLayoutJSON = () => {
  let http = new XMLHttpRequest();
  let url = '/widget/get-applied-layout/';
  let params = "";
  http.open('GET', url, false);
  json = "[]";
  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
          json = http.responseText;
      }
  }
  http.send(params);
  return json;
}

const renderAppliedLayout = () => {
  const JSON_STR = getAppliedLayoutJSON();
  console.log(JSON_STR);
  let json = JSON.parse(JSON_STR);
  for(let i=0; i<json.length; i++) {
    let type = json[i].type;
    let contents = json[i].contents;
    if(type === "finance")
      finance(contents);
    else if(type === "d-day")
      console.log()
    else if(type === "stickynote")
      console.log()
  }
}