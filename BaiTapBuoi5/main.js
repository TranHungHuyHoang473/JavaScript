var man = [
    {
        id: 1,
        name: "The Cosmo (Đen) quần short khaki",
        code: "TC1025011BA",
        price: "250.000",
        image: "img/anh1.jpg"
    },
    {
        id: 2,
        name: "Quần baggy đen sang trọng QQ",
        code: "TC1025011BA",
        price: "398.000",
        image: "img/anh3.jpg"
    },
    {
        id: 3,
        name: "The Cosmo (Đen) quần short khaki",
        code: "TC1025011BA",
        price: "350.000",
        image: "img/anh2.jpg"
    },
    {
        id: 4,
        name: "The Cosmo (Be) quần short khaki",
        code: "TC1025011BA",
        price: "260.000",
        image: "img/anh4.jpg"
    },

]

var woment = [
    {
        id: 1,
        name: "Váy Fashion",
        code: "TC1025011BA",
        price: "260.000",
        image: "img/anh5.jpg"
    },
    {
        id: 2,
        name: "Áo thun phối váy ngắn",
        code: "TC1025011BA",
        price: "260.000",
        image: "img/anh6.jpg"
    },
    {
        id: 3,
        name: "Áo khoác",
        code: "TC1025011BA",
        price: "260.000",
        image: "img/anh7.jpg"
    },
    {
        id: 4,
        name: "Áo thun",
        code: "TC1025011BA",
        price: "260.000",
        image: "img/anh8.jpg"
    },

]

function listProduct() {
    for (let i = 0; i < man.length; i++) {
        var demo = '<div class="card" style="width: 20rem;">'
        demo += '     <img src="' + man[i].image + '" class="card-img-top" alt="...">'
        demo += '     <div class="card-body">'
        demo += '       <h5 class="card-title">' + man[i].name + '</h5>'
        demo += '       <p class="card-text">' + man[i].price + '</p>'
        demo += '       <a href="#" class="btn btn-primary">Go somewhere</a>'
        demo += '     </div>'
        demo += '   </div>'

        document.getElementById("man").innerHTML += demo;
    }
    for (let i = 0; i < woment.length; i++) {
        var demo = '<div class="card" style="width: 20rem;">'
        demo += '     <img src="' + woment[i].image + '" class="card-img-top" alt="...">'
        demo += '     <div class="card-body">'
        demo += '       <h5 class="card-title">' + woment[i].name + '</h5>'
        demo += '       <p class="card-text">' + woment[i].price + '</p>'
        demo += '       <a href="#" class="btn btn-primary">Go somewhere</a>'
        demo += '     </div>'
        demo += '   </div>'

        document.getElementById("woment").innerHTML += demo;
    }
}