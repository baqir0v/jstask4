class Books{
    constructor(bookname,authorname,year,price){
        this.bookname = bookname
        this.authorname = authorname
        this.year = year
        this.price = price
        this.discountprice = this.discountprice
    }
    ask_for_a_Price(discount){
        const discountprice = (this.price * ((100 - discount)/100))
        this.discountprice = discountprice
    }
}

const myBook = new Books ("Harry Potter","J. K. Rowling","1997",15)

myBook.ask_for_a_Price(50)

console.log(myBook);