
export default function initBitcoin() {

}

fetch('https://blockchain.info/ticker').then(response =>  response.json())
.then(bitcoin =>{
const precoBitcoin = document.querySelector('.btc-preco')
precoBitcoin.innerText = (1000 /   bitcoin.BRL.sell).toFixed(4)
} ).catch(erro => {
  console.log('erro encontrado', erro)
})
