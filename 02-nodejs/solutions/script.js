function todosCallback(data) {
  console.log(data);
  var parentElement = document.getElementById("mainArea");
  parentElement.innerHTML = JSON.stringify(data);
}

function getDataCallback(resp) {
  resp.json().then(todosCallback);
}

function getData() {
  fetch("http://localhost:3000/todos", {
    method: "GET",
  }).then(getDataCallback);
}

getData();

function parsedResponse(data) {
  console.log(data);
}

function callback(resp) {
  resp.json().then(parsedResponse);
}

function onPress() {
  var title = document.getElementById("title1").value;
  var description = document.getElementById("description").value;

  fetch("http://localhost:3000/todos", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      description: description,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(callback);
}
