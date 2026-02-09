// POO Programación Orientada a Objetos
// Una clase en JS es una plantilla para crear objetos, que comparten mismas propiedades y métodos
// Una clase es como un molde que describe como serán los objetos y que prodrán hacer

class Product {
    constructor(productName = '', productPrice){
        this.productName = productName;
        this.productPrice = productPrice;
    }

    formatProduct(){
        return`El producto ${this.productName} tiene un precio de ${this.productPrice}`
    }
};

const product1 = new Product("Remote Control", 15000)
const product2 = new Product("SSD", 220000)

console.log(product1.formatProduct());
console.log(product2.formatProduct());

//==================================================
// Herencia en JS
// La herencia en JS permite que los objetos reutilicen propiedades y métodos de otros

class Book extends Product{
    constructor(bookName, bookPrice, isbn){
        super('', bookPrice);
        this.bookName = bookName;
        this.isbn = isbn;
    }

    formatBook(){
        return`${super.formatProduct()} ${this.bookName} y su ISBN es ${this.isbn}`
    }
};

const book1 = new Book("el perfume", 20000, 13579);

book1.formatProduct();

console.log(book1.formatBook());