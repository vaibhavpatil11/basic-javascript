class Github {
    constructor() {

        this.client_id = '40a6ea81ef0944b7c3e2';
        this.client_secret = '5b0d7b2ac04a22a39057bc088550625497b3b5cd';
        this.reps_Sort = 'created:asc';

    }


    async getUSer(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();


        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?sort=${this.reps_Sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repo = await repoResponse.json();



        return {
            profile, repo
        }

    }






}