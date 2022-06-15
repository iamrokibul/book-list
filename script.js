// Select Dom
// Add Event Listener
// Create Element
// Append Element

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function(e){
    e.preventDefault();
    // console.log('Hello');
    if(title.value == ''){
        alert('Please input title...');
    }else if(author.value == ''){
        alert('Please input author name...');
    }else if(year.value == ''){
        alert('Please input year...');
    }
    else{
        // Create New Row 
        const newRow = document.createElement('tr');
        
        // Create New Table Head 
        const newHead = document.createElement('td');
        newHead.innerText = title.value;
        newRow.appendChild(newHead);
        title.value = '';

        // Create New Table Head 
        const newAthor = document.createElement('td');
        newAthor.innerText = author.value;
        newRow.appendChild(newAthor);
        author.value = '';

        // Create New Table Head 
        const newYear = document.createElement('td');
        newYear.innerText = year.value;
        newRow.appendChild(newYear);
        year.value = '';

        bookList.appendChild(newRow);
        
    }
});