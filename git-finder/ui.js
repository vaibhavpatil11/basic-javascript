class UI {


    constructor() {

        this.profile = document.getElementById('profile');

    }


    showProfile(profileData) {

        this.profile.innerHTML =
            `
        <div class="card card-body mb-3">
        <div class="row">
        <div class="col-md-3">
            <img class="img-fluid mb-2" src="${profileData.avatar_url}">
            <a href="${profileData.html_url}" target="_blank" class="btn btn-primary btn_block"> 
            view profile
            </a>
            </div >
            <div class="col-md-9">
            <span class="badge badge-primary">Public repo : ${profileData.public_repos}</span>
            <span class="badge badge-secondary">Public gists : ${profileData.public_gists}</span>
            <span class="badge badge-success">Followers : ${profileData.followers}</span>
            <span class="badge badge-info">Following : ${profileData.following}</span>
            <br><br>
            <ul class="list-group">
            <li  class="list-group-item">Company : ${profileData.company} </li>
            <li  class="list-group-item">blog : ${profileData.blog} </li>
            <li  class="list-group-item">location : ${profileData.location} </li>
            <li  class="list-group-item">Member since : ${profileData.created_at} </li>
            </ul>
            </div>
        </div >
        </div >
        <h3 class="page-heading mb-3"> Latest Repos </h3>
        <div id="repos"></div>
            `;

    }


    showRepos(repos) {


        let output = '';
        repos.forEach((repo) => {
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                    <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">watchers : ${repo.watchers}</span>
                    <span class="badge badge-success">Forks : ${repo.forms_count}</span>
                    </div>
                </div>
            </div>
            
            `;

            document.querySelector('#repos').innerHTML = output;
        })

    }



    showAlert(message, className) {

        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        document.querySelector('.searchContainer')
            .insertBefore(div, document.getElementById('searchUser'));

        setTimeout(() => {
            this.clearAlert();
        }, 2500);


    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.clearAlert()
        this.profile.innerHTML = '';
    }



}