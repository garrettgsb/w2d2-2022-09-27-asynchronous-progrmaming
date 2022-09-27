/*
  It's always "What's the trigger, what's the action?"
  Triggers:
    - 1000 milliseconds have passed
    - An element has been clicked
    - An HTTP request to "GET /about" has arrived
    - A file was read
    - A database query was performed
*/

function doAThing();
setTimeout(doAThing, 1000);


function doAThing(event);
button.addEventListener('click', doAThing);



function doAThing(request, response);
app.get('/about', doAThing); // https://myapp.com/about




function doAThing(error, theDataInTheFile);
fs.readFile('./some-file.txt', { encoding: 'utf8' }, doAThing);



function doAThing(queryResult);
pg.query('SELECT * FROM users', doAThing);
