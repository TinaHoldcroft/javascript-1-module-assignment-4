//https://jsonplaceholder.typicode.com/todos - Given the following API, create a list of TODO cards on a webpage. 

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => createTODOCards(data))
    .catch(err => console.error(err));

    function createTODOCards(cards) {
        var numberOfCards = cards.length;
        var toDoList = document.getElementById('TODOlist');
            toDoList.style.flexFlow = "row wrap";    
            toDoList.style.listStyle = "none";
            toDoList.style.display = "flex";

    for (var index = 0; index < numberOfCards; index++) {
        var card = cards[index];
        var todoCard = createTodoCard(card);
        toDoList.appendChild(todoCard);
    }
}

function createTodoCard(card) {
    var todoCard = document.createElement('li');
    var checked = "";
    todoCard.style.backgroundColor = "#008080";
    todoCard.style.margin = "1%";
    todoCard.style.padding = "10px 30px 10px";
    todoCard.style.width = "15%";
    todoCard.style.minHeight = "180px";
    todoCard.style.textAlign = "center";

    if (card.completed) {
        checked = "checked";
    }

    todoCard.innerHTML = (
        '<p>User ID:' + card.userId + '</p>'
        + '<p>ID: ' + card.id + '</p>'
        + '<p>Title: ' + card.title + '</p>'
        + '<label> Completed: ' + '<input type="checkbox"' + checked + '>' + '</label>'
    );
    
    return todoCard;
}