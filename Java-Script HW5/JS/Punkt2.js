let gama = {
    userName : "user",
    Bitcoin:{
        name : "Bitcoin ",
        logo : "<img style='width: 30px; vertical-align: middle;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/2048px-Bitcoin.svg.png'>",
        coins : 3,
        rate : 2478150
    },
    Ethereum:{
        name : "Ethereum ",
        logo : "<img style='width: 30px; vertical-align: middle;' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/640px-Ethereum-icon-purple.svg.png'>",
        coins : 2,
        rate : 119035
    },
    Stellar:{
        name : "Stellar ",
        logo : "<img style='width: 30px; vertical-align: middle;' src='https://s2.coinmarketcap.com/static/img/coins/200x200/512.png'>",
        coins : 116,
        rate : 4
    },
    showName(a){
        document.write(`Доброго дня, ${this.userName}! На вашому балансі ${a.name + a.logo} залишилося ${a.coins} монет, якщо ви сьогодні продасте їх, то отримаєте ${a.coins*a.rate} грн`)
    }
}
gama.showName(gama.Stellar)
gama.showName(gama.Bitcoin)
gama.showName(gama.Ethereum)