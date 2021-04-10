let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    
    var IsItRead = "";
    if (read == "yes" || read == "Yes") {
        IsItRead = "read already";
    } else {
        IsItRead = "not read yet";
    }
    this.read = IsItRead;
    this.info = function(){
        return (title + " by " + author + ", " + pages + " pages, " + IsItRead);
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "no")
const harryPotter = new Book("Harry Potter", "J.K. Rowling", 309, "no")
const gameOfThrones = new Book("Game of Thrones", "George R.R. Martin", 309, "yes")
// theHobbit.info();
// console.log(theHobbit.info());

myLibrary = [ theHobbit, harryPotter, gameOfThrones];
console.table(myLibrary);

