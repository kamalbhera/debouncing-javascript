function getJokes(searchTerm, limit = 15) {
    fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}&limit=${limit}`,{
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
    }).then(response => response.json())
      .then(json => {
        const jokes = json.results;
        var element = document.getElementById("itemList");
        jokes.forEach(item => {
            element.innerHTML += `<li>${item.joke}</li>`;
        });
        document.body.appendChild(element);
      });
  };
function debounce(callback, dealy) {
    let timer;
    return function (...args) {
        let searchItem = document.getElementById('searchItem').value;
        let context = this;
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            callback(searchItem)
            timer = null
        }, dealy);
    }    
}

let deboucingFunction = debounce(getJokes, 200)