var base_url = "https://readerapi.codepolitan.com/";

// blok kode yang akan dipanggil jika fetch berhasil
function status(response) {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        // method reject() akan membuat blok catch terpanggil
        return Promise.reject(new Error(response.statusText));
    } else {
        // mengubah suatu objek menjadi promise agar bisa di-then-kan
        return Promise.resolve(response);
    }
}

// blok kode untuk memparsing JSON menjadi array Javascript
function json(response) {
    return response.json();
}

// blok kode untuk menghandle kesalahan di blok catch
function error(error) {
    // parameter error berasal dari promise.reject()
    console.log("Error : " + error);
}

// blok kode untuk melakukan request data json
function getArticles() {

    if ('caches' in window) {
        caches.match(base_url + "articles").then(function (response) {
            if (response) {
                response.json().then(function (data) {
                    var articlesHTML = "";
                    data.result.forEach(function (article) {
                        articlesHTML += `
                      <div class="card">
                        <a href="./article.html?id=${article.id}">
                          <div class="card-image waves-effect waves-block waves-light">
                            <img src="${article.thumbnail}" />
                          </div>
                        </a>
                        <div class="card-content">
                          <span class="card-title truncate">${article.title}</span>
                          <p>${article.description}</p>
                        </div>
                      </div>
                    `;
                    });
                    // Sisipkan komponen card ke dalam elemen dengan id #content
                    document.getElementById("articles").innerHTML = articlesHTML;
                })
            }
        })
    } else {
        event.respondWith(
            caches.match(event.request, {
                ignoreSearch: true
            }).then(function (response) {
                return response || fetch(event.request);
            })
        )
    }

    fetch(base_url + "articles")
        .then(status)
        .then(json)
        .then(function (data) {
            // objeck/array javascript dari response.json() masuk lewat data.

            // Menyusun komponen card artikel secara dinamis
            var articlesHTML = "";
            data.result.forEach(function (article) {
                articlesHTML += `
              <div class="card">
                <a href="./article.html?id=${article.id}">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img src="${article.thumbnail}" />
                  </div>
                </a>
                <div class="card-content">
                  <span class="card-title truncate">${article.title}</span>
                  <p>${article.description}</p>
                </div>
              </div>
            `;
            });
            // Sisipkan komponen card ke dalam elemen dengan id #content
            document.getElementById("articles").innerHTML = articlesHTML;
        })
        .catch(error);

    // Ambil nilai query parameter (?id=)
    var urlParams = new URLSearchParams(window.location.search);
    var idParam = urlParams.get("id");
    fetch(base_url + "article/" + idParam)
        .then(status)
        .then(json)
        .then(function (data) {
            // Objek JavaScript dari response.json() masuk lewat variabel data.
            console.log(data);
            // Menyusun komponen card artikel secara dinamis
            var articleHTML = `
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img src="${data.result.cover}" />
            </div>
            <div class="card-content">
              <span class="card-title">${data.result.post_title}</span>
              ${snarkdown(data.result.post_content)}
            </div>
          </div>
        `;
            // Sisipkan komponen card ke dalam elemen dengan id #content
            document.getElementById("body-content").innerHTML = articleHTML;
        });
}