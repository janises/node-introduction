let books = [],
    id = 0;

module.exports = {
    create:(req, res) => {
        let {title, author} = req.body;
        books.push({id, title, author});
        id++;
        res.status(200).send(books)
    },
    read: (req, res) => {
        res.status(200).send(books)
    },
    update:(req, res) => {
        books.map(book => {
            if(book.id === +req.params.id) { //+req.params.id to turn it into a number, because it could be a string.
                Object.assign(book, req.body) //if the book id and req.params.id are the same, object.assign the req.body to the book
            }
            return book;
            });
        res.status(200).send(books);
    },
    delete: (req, res) => {
        books = books.filter(book => { //removing the books that don't have the same id as req.params.id
            if(book.id !== +req.params.id) {
                return book;
            }
        })
        res.status(200).send(books)
    }
}