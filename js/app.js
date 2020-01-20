function Furry() {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

function Coin() {

    this.random = function() {}
    const pozx = Math.floor(Math.random() * 10);
    const pozy = Math.floor(Math.random() * 10)
    this.x = pozx;
    this.y = pozy;
}
const allboard = document.querySelectorAll("#board div")
console.log(allboard)
const array = [...allboard];
console.log(array)
document.addEventListener('keydown', function(event) {
    newgame.turnFurry(event)
})

function Game() {
    this.board = array;
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.index = function(x, y) {
        return x + (y * 10);

    };
    this.showFurry = function() {
this.hideVisibleFurry();
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
        console.log(this.furry.x);
        console.log(this.furry.y);
        
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');

    };
    this.showCoin = function() {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
        console.log('bkfdvc')
    }
    this.startGame = function() {
        this.showFurry();
        this.moveFurry();

    }
    this.moveFurry = function() {
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        } else {
            this.furry.y = this.furry.y + 1;
        }
        this.checkCoinCollision();
        this.gameOver();
    }
    this.hideVisibleFurry = function() {
        const divwithfurry = document.querySelector('.furry');
        console.log(divwithfurry);
        if(divwithfurry){divwithfurry.classList.remove("furry")};
    }
    const self = this;
    this.turnFurry = function(event) {

        switch (event.which) {
            case 37:
                {
                    self.furry.direction = "left";
                    break;
                }
            case 38:
                {
                    self.furry.direction = "up";
                    break;
                }
            case 39:
                {
                    self.furry.direction = "right";
                    break;
                }
            case 40:
                {
                    self.furry.direction = "down";
                    break;
                }
        }


    }
    this.checkCoinCollision = function() {
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
            this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
            const scorecount = document.querySelector("#score strong");
            let num = scorecount.innerText;
            scorecount.innerText = parseInt(num) + 1;
            this.score = scorecount.innerText;
            const newcoin = new Coin();
            this.coin = newcoin;
            this.showCoin();
        }

    }
    this.gameOver = function() {
        if (this.furry.x < 0 || this.furry.x > 9) {
            const over = document.querySelector("#over");
            over.classList.remove('invisible');
            clearInterval(inter);
            this.hideVisibleFurry()

        }
        else if (this.furry.y < 0 || this.furry.y > 9) {
            over.classList.remove('invisible');
            clearInterval(inter);
            this.hideVisibleFurry();
        }
    }
}
const newgame = new Game();
console.log(newgame);

newgame.showCoin();

const inter = setInterval(function() {
    newgame.startGame();
}, 250)


// document.addEventListener('keydown', function(event) {
//     newgame.turnFurry(event);





// })


