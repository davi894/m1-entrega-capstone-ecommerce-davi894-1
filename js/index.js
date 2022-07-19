
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
        button.id = XX[i].id
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

    /* let ulNavegacao = document.querySelector("#ulNavegacao") */

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

function estruturaCardCarrinho(ProdutoCarrinho) {

    let ulListaDeProdutos = document.querySelector(".listaDeProdutos")

    let spanQuantidade = document.querySelector('.quantidadeDePordutos ')

    let spanPreco = document.querySelector('.precoTotal')

    let soma = 0

    ulListaDeProdutos.addEventListener(`click`, function (event) {
        let produtos = document.querySelector(".comprasFeitas")

        let buttonComprar = event.target

        let ulcomprasFeitas = document.querySelector(".comprasFeitas")

        let valorAtual = ProdutoCarrinho[buttonComprar.id - 1].value

        soma += valorAtual

        for (let i = 0; i < ProdutoCarrinho.length; i++) {

            if (buttonComprar.id == ProdutoCarrinho[i].id) {
                let liProdutosCarrinhos = document.createElement(`li`)
                liProdutosCarrinhos.classList.add(`produtosCarrinhos`)

                let imgCarrinho = document.createElement(`img`)
                imgCarrinho.classList.add(`imgCarrinhos`)
                imgCarrinho.src = `${ProdutoCarrinho[i].img}`

                let divCarrinho = document.createElement(`div`)
                divCarrinho.classList.add(`detalhesProdutosCarrinho`)

                let h3 = document.createElement(`h3`)
                h3.innerText = `${ProdutoCarrinho[i].nameItem}`

                let sapnValorProduto = document.createElement(`span`)
                sapnValorProduto.classList.add(`valorCompra`)
                sapnValorProduto.innerText = `R$ ${ProdutoCarrinho[i].value}`

                let buttonRemover = document.createElement(`button`)
                buttonRemover.classList.add(`removerProtudo`)
                buttonRemover.innerText = `Remover produto`
                buttonRemover.id = ProdutoCarrinho[i].id

                divCarrinho.append(h3, sapnValorProduto, buttonRemover)

                liProdutosCarrinhos.append(imgCarrinho, divCarrinho)

                ulcomprasFeitas.appendChild(liProdutosCarrinhos)

                buttonRemover.addEventListener("click", function () {
                    liProdutosCarrinhos.remove()
                    soma -= valorAtual
                    spanQuantidade.innerText = `${produtos.children.length}`
                    spanPreco.innerText = `R$ ${soma}`
                })

            }
        }
        spanPreco.innerText = `R$ ${soma}`
        spanQuantidade.innerText = `${produtos.children.length}`
    })
}
estruturaCardCarrinho(data)

function Pesquisa() {

    {/* <input type="text" name="" id="produtoDigitado" value="" placeholder="Digite o nome do produto"></input>
 <button class="pesquisarProduto">Pesquisar</button> */}
    let inputPesquisa = document.querySelector("#produtoDigitado")
    /* console.log(inputPesquisa) */
    inputPesquisa.addEventListener("keyup", function () {

       inputPesquisa.value
        /*   console.log(event.target) */
        criandoCard(data)
    })
    let buttonPesquisa = document.querySelector(".pesquisarProduto")
    /*  console.log(buttonPesquisa) 
         filtroCardCabecalho()
    */

    buttonPesquisa.addEventListener("click", function () {
        console.log(event.target)
    })

}
Pesquisa()