const newName = document.querySelector('#generation');
const def = document.querySelector('#clear');

newName.addEventListener('click', () => {

    const initName = personGenerator.getPerson();

    document.getElementById('firstNameOutput').innerText = initName.firstName;
    document.getElementById('surnameOutput').innerText = initName.surname;
    document.getElementById('patronymicOutput').innerText = initName.satronymic;
    document.getElementById('genderOutput').innerText = initName.gender;
    document.getElementById('dateOutput').innerText = initName.date;
    document.getElementById('professionOutput').innerText = initName.profession;
})

def.addEventListener('click', function () {
    window.location.reload()
})