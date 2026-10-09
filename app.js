window.onload = () => {
    fetch('person.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#fName').textContent = data.fName;
            document.querySelector('#lName').textContent = data.lName;
            document.querySelector('#age').textContent = data.age;
            document.querySelector('#email').textContent = data.email;
        })
        .catch(error => {
            console.error('Viga JSON-faili lugemisel:', error);
        });
};