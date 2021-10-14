var tHead = document.querySelectorAll('.tHead');
var listContent = document.querySelector('.listcontent');
for (var i = 0; i < tHead.length; i++) {
    tHead[i].addEventListener('mouseover', function() {
        var k = listContent.style.height = 200 + 'px';
        console.log(k);
    })
    listContent.addEventListener('mouseleave', function() {
        listContent.style.height = 40 + 'px';
    })
}