
const github = new Github;
const searchUser = document.getElementById('searchUser');
const ui = new UI;


searchUser.addEventListener('keyup', e => {


    const user = e.target.value;
    if (user !== '') {

        github.getUSer(user)
            .then(data => {


                console.log(data)
                if (data.profile.message === 'Not Found') {


                    ui.showAlert('User not Found', 'alert alert-danger');

                }
                else {

                    ui.showProfile(data.profile)
                    ui.showRepos(data.repo)
                }
            });


    }
    else {

        ui.clearProfile();
    }






    e.preventDefault();
});