let productsArrayTam;
let productPos;

$.ajax({
    url: "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1",
    dataType: "json",
    success: (data)=>{
        for(let i=0; i<data.products.length; i++){
            $(`#fotoProduto${i}`).attr("src", data.products[i].image);
            $(`#nameProduto${i}`).html(data.products[i].name);
            $(`#descricaoProduto${i}`).html(data.products[i].description);
            $(`#priceProduto${i}`).html("R$:" + data.products[i].oldPrice + ",00");
            $(`#priceDescontoProduto${i}`).html("R$:" + data.products[i].price + ",00");
            $(`#parcelamentoProduto${i}`).html("ou " + data.products[i].installments.count + "de R$:" + data.products[i].installments.value);
            productsArrayTam = data.products.length;
        }
    },
    error: ()=>{
        console.log("Erro na requisição.");
    }
});


const newDivs = ()=>{
    let produtosItemsTam = $(".produtos");

    for(let i=produtosItemsTam.length; i<produtosItemsTam.length+8; i++){
        $(".productsView").append('<div id=produto' + i + ' class=produtos>')
        $('#produto'+i).append('<img src="" alt="" id=fotoProduto'+i+ '>'); 
        $('#produto'+i).append('<h3 id=nameProduto'+i +'></h3>'); 
        $('#produto'+i).append('<p id=descricaoProduto'+i+'></p>'); 
        $('#produto'+i).append('<p id=priceProduto'+i+'></p>'); 
        $('#produto'+i).append('<h4 id=priceDescontoProduto'+i+' class=priceBold></h4>'); 
        $('#produto'+i).append('<p id=parcelamentoProduto'+i+'></p>'); 
        $('#produto'+i).append('<button id=buttonBuyProduto'+i+'>Comprar</button>'); 
        $('#produto'+i).append('</div>'); 
    }

}


const preencherProdutos = ()=>{
    let produtosItemsTam = $(".produtos");
    let newIndice = 0;
    $.ajax({
        url: `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`,
        dataType: "json",
        success: (data) =>{
            for(let i=produtosItemsTam.length-8; i<produtosItemsTam.length; i++){
                $('#fotoProduto'+i).attr("src", data.products[newIndice].image);
                $(`#nameProduto${i}`).html(data.products[newIndice].name);
                $(`#descricaoProduto${i}`).html(data.products[newIndice].description);
                $(`#priceProduto${i}`).html("R$:" + data.products[newIndice].oldPrice + ",00");
                $(`#priceDescontoProduto${i}`).html("R$:" + data.products[newIndice].price + ",00");
                $(`#parcelamentoProduto${i}`).html("ou " + data.products[newIndice].installments.count + "de R$:" + data.products[newIndice].installments.value);
                newIndice++;
            }
            page++;
        },
        error: ()=>{
            console.log("Erro na requisição.");
        }            
    }) 
}


let page = 2;
$("#mostItems").click(()=> {
    newDivs();
    preencherProdutos();
})