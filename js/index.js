const container = document.getElementById('dynamic-content');
let navLinks = document.querySelectorAll('nav li a');

let defaultUrl = 'partials/home.html';

const loadContent = (url) => {
    fetch(url)
    .then(function (response){
        if (response.ok){   
            return response.text();
        }
        throw new Error('Could not find the page');
    })
    .then (data => {
        container.innerHTML = data;
    })
    .catch (error => {
        console.error ('Encountered error' , error);
    });
};

const selectContent = (event) => {
    event.preventDefault();

    const href = event.target.getAttribute('href');

    if(href){
        loadContent(href);
    }
};

navLinks.forEach(link => {
    link.addEventListener('click', selectContent);
});

loadContent(defaultUrl);
