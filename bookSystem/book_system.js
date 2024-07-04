let books = [];

//Create the add function to add the book entered by the user of our application 
function addBook(){
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    //Let us add the logic to add the book 
    //using the push method of array

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        //use object literal 

        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };

        //Let us add the book to our object array

        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert("Please fill in all fields correctly")
    }
}

function showbooks(){
    const booksDiv = books.map((book, index) => `<h1> book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong>${book.authorName}</p>
        <p><strong>Book Description:</strong>${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong>${book.pagesNumber}</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deletebook(${index})">Delete</button>
    `);

    document.getElementById('books').innerHTML = booksDiv.join(' ');
}

//Let create the functions to clear the inputs
function clearInputs(){
    document.getElementById("bookName").value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = ''; 
    document.getElementById('pagesNumber').value = '';
}



