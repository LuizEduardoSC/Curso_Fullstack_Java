// document.addEventListener('DOMContentLoaded', function () {
//     const nameElement = document.querySelector('#name');
//     const usernameElement = document.querySelector('#username');
//     const avatarElement = document.querySelector('#avatar');
//     const reposElement = document.querySelector('#repos');
//     const followersElement = document.querySelector('#followers');
//     const followingElement = document.querySelector('#following');
//     const linkElement = document.querySelector('#link');

//     fetch('https://api.github.com/users/LuizEduardoSC')
//         .then(function (res) {
//             return res.json();
//         })
//         .then(function (json) {
//             nameElement.innerText = json.name;
//             usernameElement.innerText = json.login;
//             avatarElement.src = json.avatar_url;
//             followingElement.innerText = json.following;
//             followersElement.innerText = json.followers;
//             reposElement.innerText = json.public_repos;
//             linkElement.href = json.html_url;
//         })
// })


document.addEventListener('DOMContentLoaded', async () => {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');
    const loadingElement = document.querySelector('#loading');

    loadingElement.style.display = 'block'; // mostra o feedback

    try {
        const res = await fetch('https://api.github.com/users/LuizEduardoSC');
        if (!res.ok) throw new Error(`Erro ${res.status}`);

        const json = await res.json();

        nameElement.innerText = json.name || 'Nome não disponível';
        usernameElement.innerText = `@${json.login}`;
        avatarElement.src = json.avatar_url;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    } catch (erro) {
        console.error('Erro ao buscar dados do GitHub:', erro);
        loadingElement.innerText = 'Erro ao carregar dados.';
        loadingElement.style.color = 'red';
    } finally {
        setTimeout(() => {
            loadingElement.style.display = 'none'; // esconde após 1s
        }, 1000);
    }
});