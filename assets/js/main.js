var open = document.querySelector('.search-for')
var borderAppear = document.querySelector('.box-search')


function openSearch() {
    if (open.style.display == 'flex') {
        open.style.display = 'none';
        borderAppear.style.border = 'none';
    }
    else {
        open.style.display = 'flex';
        borderAppear.style.border = '1px solid #696969';
    }
}

let photo = document.querySelector('photo-object');

let photos = [
    'https://interprete.me/wp-content/uploads/2018/11/motown-magic-netflix-musical-anos-70-capa-700x361.jpg'
    ,

    'https://i.ytimg.com/vi/hlOM_naM270/maxresdefault.jpg'
    ,

    'https://1.bp.blogspot.com/-lERiIPLSypA/XXqtm5KDxgI/AAAAAAAAF6U/jfb7F_rTBbIaCeNyMh4pZpfkmK0MlqmvACLcBGAsYHQ/s1600/Hello%2BNinja%2Bpic.jpg'
    ,

    'https://interprete.me/wp-content/uploads/2018/10/trolls-o-ritmo-continua-netflix-animacao-infantil-capa-700x361.jpg'
    ,

    'https://soumamae.com.br/wp-content/uploads/2019/07/super-monstros-serie-para-criancas-netflix.jpg'

]

let counter = 0;

photos.innerHTML = advance

function advance() {
    if (counter < 4) {
        counter++
        photo.setAttribute('src', photos[counter].img)
    }
    else {
        counter = 0
        photo.setAttribute('src', photos[counter].img)
    }
}

