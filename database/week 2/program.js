// This is the connector (also known as driver)
// that we can use to connect to a MySQL process
// and access its databases.
const mysql = require('mysql');

class TodoModel {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    // Loads all the TODOs in the database
    load(callback) {
        const selectTodoItems = "SELECT * FROM todo_items";
        this.dbConnection.query(selectTodoItems, function(err, results, fields) {
            if(err) {
                callback(err);
                return;
            }

            callback(null, results);
        });
    }

    create(description, callback) {
        // Write code and query to create a new TODO item
        const createTodoItem = 'INSERT INTO todo_items SET ?';
        dbConnection.query(createTodoItem, description, function (err, res) {
            if (err) {
                callback(err);
                return;
            }
                callback(null, res);
        });
    }

    update(id, description, callback) {
        // Write code and query to update and existing TODO item
        const updateTodoItem = 'UPDATE todo_items SET text = ? WHERE user_id = ?';
        dbConnection.query(updateTodoItem, id,description, function (err, res) {
            if (err) {
                callback(err);
                return;
            }
                callback(null, res);
        });
    }

    delete(id, callback) {
        // Write code and query to delete an existing TODO item
        const deleteTodoItem = 'DELETE FROM todo_items WHERE user_id=?';
        this.dbConnection.query(deleteTodoItem,id, function (err, results, fields) {
            if (err) {
                callback(err);
                return;
            }

            callback(null, results);
        }); 
    }

    tagTodoItem(todoItemId, tagId, callback) {
        // Write code and query add a tag to a TODO item
        const tagItem= 'INSERT INTO todo_item_tag SET ?';
        this.dbConnection.query(tagItem,todoItemId, tagId, function (err, results, fields) {
            if (err) {
                callback(err);
                return;
            }

            callback(null, results);
        });
    }
        
    untagTodoItem(todoItemId, tagId, callback) {
        // Write code and query remove a tag from a TODO item
        const untagItem = 'DELETE FROM todo_item_tag WHERE todo_item_id=? and tag_id=? ';
        this.dbConnection.query(untagItem,[todoItemId,todoTag], function (err, results, fields) {
            if (err) {
                callback(err);
                return;
            }

            callback(null, results);
        });
    }

    markCompleted(todoItemId, callback) {
        // Write code to mark a TODO item as completed
        const completeTodoItem = "UPDATE todo_items SET is_completed = TRUE WHERE id=?";
        this.dbConnection.query(completeTodoItem,todoItemId, function (err, results, fields) {
            if (err) {
                callback(err);
                return;
            }

            callback(null, results);
        });
    }
    }
}

const dbConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'todo_app'
});

dbConnection.connect(function(err) {
    if (err != null) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + dbConnection.threadId);

    const todoModel = new TodoModel(dbConnection);
    todoModel.load(function(err, todoItems) {
        if(err) {
            console.log("error loading TODO items:", err);
        }

        console.log("existing todo items:", todoItems);
    });
});