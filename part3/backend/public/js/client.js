const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
function get() {
  fetch('/api/user/' + 1, {
    method: 'GET',
    headers,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showResult(json);
    });
}

function showResult(json) {
  document.getElementById('result').innerHTML = JSON.stringify(json);
}

function post() {
  fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({ id: 1, name: 'hello' }),
    headers,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showResult(json);
    });
}
function put() {
  fetch('/api/user', {
    method: 'PUT',
    body: JSON.stringify({ id: 1, name: 'world' }),
    headers,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showResult(json);
    });
}
function del() {
  fetch('/api/user', {
    method: 'DELETE',
    headers,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showResult(json);
    });
}

window.onload = function () {
  const form = document.getElementById('uploadForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        showResult(json);
      });
  });
};
