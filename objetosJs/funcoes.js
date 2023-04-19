const cliente = {
    nome:"Joao",
    idade:15,
    email:"there@gmail.com",
    saldo:200,
    efetuaPagamento: function(valor){
        if(valor> this.saldo){
            console.log("Saldo insuficiente");
        }else {
            this.saldo -= valor;
            console.log(`Pagamento realizado com sucesso. saldo atual : ${this.saldo}`)
        }
    },

};


cliente.efetuaPagamento(22);