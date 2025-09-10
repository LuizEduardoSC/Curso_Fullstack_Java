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
    try {
        const res = await fetch('https://api.github.com/users/LuizEduardoSC');
        if (!res.ok) throw new Error(`Erro ${res.status}: usuário não encontrado`);

        const json = await res.json();

        document.querySelector('#name').innerText = json.name || 'Nome não disponível';
        document.querySelector('#username').innerText = `@${json.login}`;
        document.querySelector('#avatar').src = json.avatar_url;
        document.querySelector('#repos').innerText = json.public_repos;
        document.querySelector('#followers').innerText = json.followers;
        document.querySelector('#following').innerText = json.following;
        document.querySelector('#link').href = json.html_url;
    } catch (erro) {
        console.error('Erro ao buscar dados do GitHub:', erro.message);
        alert('Não foi possível carregar os dados do perfil.');
    }
});