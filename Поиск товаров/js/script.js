let prodAmount = 50;
let prodName = [];
let prodPrice = [];

for(let i=0;i<prodAmount;i++){
    prodName[i] = "Товар " + Math.round(Math.random() * (15 - 1) + 1);
    prodPrice[i] = Math.round(Math.random() * (20000 - 100) + 100);
    document.getElementById('script_prod_block').innerHTML += '<div class="area_block prod' + i + '>' +
                        '<div class="block_container">' +
                            '<header class="block_head">' +
                                '<a>' +
                                    '<img src="img/prod_plug.png">' +
                                '</a>' +
                            '</header>' +
                            '<div class="block_body">' +
                                '<div class="block_options">' +
                                    '<div class="buttons">' +
                                        '<button><span>♡</span></button>' +
                                        '<button><span>…</span></button>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="block_prod_name">' +
                                    '<span>' +
                                        prodName[i] + 
                                    '</span>' +
                                '</div>' +
                                '<div class="block_prod_price">' +
                                    '<span>' +
                                        prodPrice[i] + ' руб' +
                                    '</span>' +
                                '</div>' +
                                '<div class="block_prod_to_basket">' +
                                    '<input type="button" value="В корзину">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
}

let prodList = [];
let suitableProd;

document.getElementById('find_button').onclick = function(){
    document.getElementById('main_page').style.display = "none";
    document.getElementById('find_page').style.display = "flex";
    
    document.getElementById('script_find_block').innerHTML = "";
    
    suitableProd = document.getElementById('search_string').value;
    
    let j=0;
    
    for(let i=0;i<prodAmount;i++){
        if(prodName[i]==suitableProd){ 
            prodList[j] = i; // сохраняю индекс найденных файлов
            j++;
            document.getElementById('script_find_block').innerHTML += '<div class="area_block prod' + i + '>' +
                        '<div class="block_container">' +
                            '<header class="block_head">' +
                                '<a>' +
                                    '<img src="img/prod_plug.png">' +
                                '</a>' +
                            '</header>' +
                            '<div class="block_body">' +
                                '<div class="block_options">' +
                                    '<div class="buttons">' +
                                        '<button><span>♡</span></button>' +
                                        '<button><span>…</span></button>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="block_prod_name">' +
                                    '<span>' +
                                        prodName[i] + 
                                    '</span>' +
                                '</div>' +
                                '<div class="block_prod_price">' +
                                    '<span>' +
                                        prodPrice[i] + ' руб' +
                                    '</span>' +
                                '</div>' +
                                '<div class="block_prod_to_basket">' +
                                    '<input type="button" value="В корзину">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
        }
    }
}

let price_range;

function changeMaxPrice(){
    price_range = document.getElementById("price_range").value;
    document.getElementById("max_price").value = price_range;
    
    sortByPrice();
}

function sortByPrice(){
    document.getElementById('script_find_block').innerHTML = "";
    for(let i=0;i<prodAmount;i++){
        
        if(prodPrice[i]<=document.getElementById("max_price").value && prodName[i]==suitableProd && prodPrice[i]>=document.getElementById("min_price").value){
            
            document.getElementById('script_find_block').innerHTML += '<div class="area_block prod' + i + '>' +
                        '<div class="block_container">' +
                            '<header class="block_head">' +
                                '<a>' +
                                    '<img src="img/prod_plug.png">' +
                                '</a>' +
                            '</header>' +
                            '<div class="block_body">' +
                                '<div class="block_options">' +
                                    '<div class="buttons">' +
                                        '<button><span>♡</span></button>' +
                                        '<button><span>…</span></button>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="block_prod_name">' +
                                    '<span>' +
                                        prodName[i] + 
                                    '</span>' +
                                '</div>' +
                                '<div class="block_prod_price">' +
                                    '<span>' +
                                        prodPrice[i] + ' руб' +
                                    '</span>' +
                                '</div>' +
                                '<div class="block_prod_to_basket">' +
                                    '<input type="button" value="В корзину">' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                    '</div>';
        }
        
    }
}