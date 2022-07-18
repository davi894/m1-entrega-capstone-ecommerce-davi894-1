
function criandoCard(XX) {

    let ulListaDeProdutos = document.querySelector(".listaDeProdutos")
    ulListaDeProdutos.innerText = ''

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

    let ulNavegacao = document.querySelector("#ulNavegacao")

    ulNavegacao.addEventListener("click", function (event) {

        let liNav = event.target

        if (liNav.innerText == "Todos") {

            criandoCard(data)

        } else if (liNav.innerText == 'Acessórios') {

            let arrayAce = data.filter(data => data.tag[0] == 'Acessórios');
            criandoCard(arrayAce)


        } else if (liNav.innerText == "Calçados") {

            let arrayCal = data.filter(data => data.tag[0] == 'Calçados');
            criandoCard(arrayCal)

        } else if (liNav.innerText == "Camisetas") {

            let arrayCam = data.filter(data => data.tag[0] == 'Camisetas');
            criandoCard(arrayCam)
        }
    })
}
filtroCardCabecalho()

function estruturaCardCarrinho() {
    {/* <li class="produtosCarrinhos">
    <img src="./img/camiseta_branca.svg" alt="" class="imgCarrinhos">
    <div class="detalhesProdutosCarrinho">
        <h3>Camiseta branca</h3>
        <strong class="valorCompra">R$ 30</strong>
        <button class="removerProtudo">Remover produto</button>
    </div>
    </li>  */}

    let alo = data

    /*  let ulListaDeProdutos = document.querySelector(".listaDeProdutos") */

    let ulcomprasFeitas = document.querySelector(".comprasFeitas")
    console.log(ulcomprasFeitas)

    for (let i = 0; i < alo.length; i++) {

        let liProdutosCarrinhos = document.createElement(`li`)
        liProdutosCarrinhos.classList.add(`produtosCarrinhos`)
        /*  liProdutosCarrinhos.innerText = `${alo[i].addCart}`
  */
        let imgCarrinho = document.createElement(`img`)
        imgCarrinho.classList.add(`imgCarrinhos`)
        imgCarrinho.src = `${alo[i].img}`

        let divCarrinho = document.createElement(`div`)
        divCarrinho.classList.add(`detalhesProdutosCarrinho`)

        let h3 = document.createElement(`h3`)
        h3.innerText = `${alo[i].nameItem}`

        let sapnValorProduto = document.createElement(`span`)
        sapnValorProduto.classList.add(`valorCompra`)
        sapnValorProduto.innerText = `R$ ${alo[i].value}`

        let buttonRemover = document.createElement(`button`)
        buttonRemover.classList.add(`removerProtudo`)
        buttonRemover.innerText = `Remover produto`

        divCarrinho.append(h3, sapnValorProduto, buttonRemover)

        liProdutosCarrinhos.append(imgCarrinho, divCarrinho)

        ulcomprasFeitas.appendChild(liProdutosCarrinhos)
    }

    ulcomprasFeitas.addEventListener(`click`, function (event) {
        let buttonComprar = event.target
        if (buttonComprar.tagName == `BUTTON`) {
            console.log(`clicou no botão`)
        }
    })

}
estruturaCardCarrinho()

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



