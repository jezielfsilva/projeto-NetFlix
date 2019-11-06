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