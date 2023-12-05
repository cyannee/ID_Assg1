function filterItems(category){
    var items = document.querySelectorAll('.container-merch');
    items.forEach(function(item){
        var itemCategory = item.dataset.category;
        if (category === 'Show All' || itemCategory === category) {
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
    adjustLayout();
}


function showAll(){
    var items = document.querySelectorAll('.container-merch');
    items.forEach(function(item) {
        item.style.display = 'block';
    });
    adjustLayout();
}

