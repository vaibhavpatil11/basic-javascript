document.getElementById('name').addEventListener('blur', e => {

    let re = /^[a-zA-Z]{2,10}$/;
    const name = document.getElementById('name');
    if (!re.test(name.value)) {

        name.classList.add('is-invalid');

    } else {
        name.classList.remove('is-invalid');
    }

});

document.getElementById('zip').addEventListener('blur', e => {
    let re = /^[0-9]{6}$/;
    const zip = document.getElementById('zip');
    if (!re.test(zip.value)) {

        zip.classList.add('is-invalid');

    } else {
        zip.classList.remove('is-invalid');
    }

});

document.getElementById('phone').addEventListener('blur', e => {

    let re = /^\d{10}$/;
    const phone = document.getElementById('phone');
    if (!re.test(phone.value)) {

        phone.classList.add('is-invalid');

    } else {
        phone.classList.remove('is-invalid');
    }

});

document.getElementById('email').addEventListener('blur', e => {

    let re = /^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-z]{2,5})$/;
    const email = document.getElementById('email');
    if (!re.test(email.value)) {

        email.classList.add('is-invalid');

    } else {
        email.classList.remove('is-invalid');
    }

});


