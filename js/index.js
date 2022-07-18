
function criandoCard(XX) {

    let ulListaDeProdutos = document.querySelector(".listaDeProdutos")
    ulListaDeProdutos.innerText = ''

    /*  console.log(XX) */

    /*  let arrayData = data
     console.log(arrayData) */

    for (let i = 0; i < XX.length; i++) {

        let li = document.createElement("li")
        li.classList.add("produtos")

        let img = document.createElement("img")
        img.src = `${XX[i].img}`

        let div = document.createElement("div")
        div.setAttribute("class", "tipoProduto")

        let spanTipoPOroduto = document.createElement("span")
        spanTipoPOroduto.innerText = `${XX[i].tag[0]}`

        let h2 = document.createElement("h2")
        h2.innerText = `${XX[i].nameItem}`

        let p = document.createElement("p")
        p.setAttribute("class", "descricaoProduto")
        p.innerText = `R$ ${XX[i].description}`

        let divPreco = document.createElement("div")
        divPreco.setAttribute("class", "preco")

        let spanPreco = document.createElement(`span`)
        spanPreco.innerText = `R$ ${XX[i].value}`

        let button = document.createElement("button")
        button.setAttribute("class", "comprar")
        button.innerText = `${XX[i].addCart}`

        divPreco.appendChild(spanPreco)
        div.appendChild(spanTipoPOroduto)
        li.append(img, div, h2, p, divPreco, button)
        ulListaDeProdutos.appendChild(li)
    }
}
criandoCard(data)

function filtroCardCabecalho() {

    /*  let ulListaDeProdutos = document.querySelector(".listaDeProdutos")
     ulListaDeProdutos.innerText = '' */

    let ulNavegacao = document.querySelector("#ulNavegacao")

    ulNavegacao.addEventListener("click", function (event) {

        /*    <ul id="ulNavegacao">
                <li class="liNavegacao" id="todos">Todos</li>
                <li class="liNavegacao" id="acessorios">Acessórios</li>
                <li class="liNavegacao" id="calcados">Calçados</li>
                <li class="liNavegacao" id="camisetas">Camisetas</li>
            </ul> */
        /*   let todos = document.querySelector(`#todos`)
         let acessorios = document.querySelector(`#acessorios`)
         let calcados = document.querySelector(`#calcados`)
         let camisetas = document.querySelector(`#camisetas`) */

        let liNav = event.target
        console.log(liNav)

        if (liNav.innerText == "Todos") {
            console.log(event.target)
            criandoCard(data)
            console.log(criandoCard(data))
        } else if (liNav.innerText == 'Acessórios') {
            console.log(event.target)
            let arrayAce = data.filter(data => data.tag[0] == 'Acessórios');
            criandoCard(arrayAce)
            console.log(criandoCard(arrayAce))

        } else if (liNav.innerText == "Calçados") {
            console.log(event.target)
            let arrayCal = data.filter(data => data.tag[0] == 'Calçados');
            criandoCard(arrayCal)
            console.log(criandoCard(arrayCal))

        } else if (liNav.innerText == "Camisetas") {


            console.log(event.target)
            let arrayCam = data.filter(data => data.tag[0] == 'Camisetas');
            criandoCard(arrayCam)
            console.log(criandoCard(arrayCam))
        }
    })
}
filtroCardCabecalho()

function adicionarCarrinho() {

    {/* <li class="produtosCarrinhos">
    <img src="./img/camiseta_branca.svg" alt="" class="imgCarrinhos">
    <div class="detalhesProdutosCarrinho">
        <h3>Camiseta branca</h3>
        <strong class="valorCompra">R$ 30</strong>
        <button class="removerProtudo">Remover produto</button>
    </div>
    </li>  */}

    let ulListaDeProdutos = document.querySelector(".listaDeProdutos")

    ulListaDeProdutos.addEventListener(`click`, function (event) {
        let buttonComprar = event.target
        if (buttonComprar.tagName == `BUTTON`) {
            console.log(`clicou no botão`)
        }
    })

}
/* adicionarCarrinho() */

function removerDocarrinho() {

    /*  <img src="./img/camiseta_branca.svg" alt="" class="imgCarrinhos">
     <div class="detalhesProdutosCarrinho">
         <h3>Camiseta branca</h3>
         <strong class="valorCompra">R$ 30</strong>
         <button class="removerProtudo">Remover produto</button>
     </div>
 </li>  
  */

    let comprasFeitas = document.querySelector('.comprasFeitas')

    comprasFeitas.addEventListener('click', function (event) {
        let buttonRemover = event.target
        if (buttonRemover.tagName == `BUTTON`) {
            console.log(`clicou no botão de remover`)
        }
    })

}
/* removerDocarrinho() */


function calculoDocarrinho() {

    /*  <img src="./img/camiseta_branca.svg" alt="" class="imgCarrinhos">
       <div class="detalhesProdutosCarrinho">
           <h3>Camiseta branca</h3>
           <strong class="valorCompra">R$ 30</strong>
           <button class="removerProtudo">Remover produto</button>
       </div>
   </li>  
    */


    let ulcomprasFeitas = document.getElementsByClassName("comprasFeitas")[0]
    console.log(ulcomprasFeitas)

    let liProdutosCarrinhos = document.getElementsByClassName(`produtosCarrinhos`)
    console.log(liProdutosCarrinhos)
}
/* calculoDocarrinho() */

function pesquisa() {

    let produtoDigitado = document.querySelector('#produtoDigitado')

    produtoDigitado.addEventListener('keyup', function (event) {

        let inputValue = event.target.value

        console.log(inputValue)
    })
}
/* pesquisa() */




