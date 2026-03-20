```
app.get('/user', (req, res) => {
    res.send({
        firstName: 'Riju',
        lastName: 'Sudar'
    })
});

app.post('/user', (req, res) => {
    console.log('Creating a new user...');
    res.send('User created successfully');
});

app.delete('/user', (req, res) => {
    console.log('Deleting a user...');
    res.send('User deleted successfully');
});

app.put('/user', (req, res) => {
    console.log('Updating a user...');
    res.send('User updated successfully');
});

app.patch('/user', (req, res) => {
    console.log('Partially updating a user...');
    res.send('User partially updated successfully');
});

app.use('/test', (req, res) => {
    res.send('Hello from the server');
});

/***************************************/
// /ac, /abc, 
app.get("/ab?c", (req, res) => {   
    res.send({ firstName: 'John', lastName: 'Doe' });
 });

// /abc, /abbbc
app.get("/ab+c", (req, res) => {   
    res.send({ firstName: 'John', lastName: 'Doe' });
 });

// /abc, /abbbc   start with ab and end with cd
app.get("/ab*cd", (req, res) => {   
    res.send({ firstName: 'John', lastName: 'Doe' });
 });

// /abc, /abcd, /ad,   bc is optional
app.get("/a(bc)?d", (req, res) => {   
    res.send({ firstName: 'John', lastName: 'Doe' });
 });

// /abc, /abcd, /ad,   regex anything with a in it
app.get(/a/, (req, res) => {   
    res.send({ firstName: 'John', lastName: 'Doe' });
 });

//  /abc, /abcd, /ad,   regex anything with ends with fly
app.get(/.*fly$/, (req, res) => {   
    res.send({ firstName: 'John', lastName: 'Doe' });
 });

 /****************************************/
 // Get query params
app.get('/user', (req, res) => {
    console.log(req.query);
    res.send({ firstName: 'John', lastName: 'Doe' });
});

// Get route params
app.get('/user/:userId/:name/:password', (req, res) => {
    console.log(req.params);
    res.send({ firstName: 'John', lastName: 'Doe' });
});

```