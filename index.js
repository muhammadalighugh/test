  let todos = [];


function generateId() {

       return Math.random().toString(36).substring(2, 6).toUpperCase();
}

           function createTodo() {
  const title = prompt('Enter TODO title:');

     const description = prompt('Enter TODO description:');
           const date = new Date().toLocaleDateString();

                const id = generateId();
            const completed = false;
  const todo = { id, title, date, description, completed };
             todos.push(todo);
        alert('TODO created!');
}

                function readTodo() {
        if (todos.length === 0) {
            alert('No TODOs found!');
      
            return;
           }

            const id = prompt('Enter TODO ID to read:');

            const todo = todos.find(t => t.id === id);
   
     if (todo) {
     
                    alert(`ID: ${todo.id}\nTitle: ${todo.title}\nDate: ${todo.date}\nDescription: ${todo.description}\nCompleted: ${todo.completed}`);
     } else {
                alert('TODO not found!');
      }
}

    function updateTodo() {
              const id = prompt('Enter TODO ID to update:');
    const todo = todos.find(t => t.id === id);
       if (todo) {
            const newDescription = prompt('Enter new TODO description:', todo.description);
            
            todo.description = newDescription;
        alert('TODO updated!');
       
    }   else {
       alert('TODO not found!');
    }
}

  function deleteTodo() {
          if (todos.length === 0) {
               alert('No TODOs to delete!');
        
          return;
    }

               todos.pop();
         alert('Last TODO deleted!');
}

function showTodo() {
             const table = document.getElementById('todoTable');

    
       table.innerHTML = `
     <tr>
        <th>ID</th>
             <th>Title</th>
            <th>Date</th>
               <th>Description</th>
             <th>Completed</th>
        </tr>
    `;

    
    todos.forEach(todo => {
  const row = table.insertRow();
               const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
     
           const cell3 = row.insertCell(2);
     
        const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);

        cell1.innerHTML = todo.id;
     cell2.innerHTML = todo.title;
    
            cell3.innerHTML = todo.date;
    
            cell4.innerHTML = todo.description;
        cell5.innerHTML = todo.completed;
           });
}