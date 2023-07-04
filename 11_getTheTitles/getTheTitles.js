const getTheTitles = function(books) {
    for (let i = 0; i < books.length; i++) {
        books[i] = books[i]["title"];
    }
    return books;
};

// Do not edit below this line
module.exports = getTheTitles;
