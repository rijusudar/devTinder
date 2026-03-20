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

/****************************************/
app.use(
    '/user', 
    (req, res, next) => {
        // Route handler
        console.log('User route accessed');
        next();
        res.send('Response!');
    },
    (req, res, next) => {
        // Route 2 handler
        console.log('User route 2 accessed');
        // res.send('Response 2!');
        next();
    },
    (req, res, next) => {
        // Route 3 handler
        console.log('User route 3 accessed');
        // res.send('Response 3!');
        next();
    },
    (req, res, next) => {
        // Route 4 handler
        console.log('User route 4 accessed');
        // res.send('Response 4!');
        next();
    },
);
// app.use('/routes', [rh1, rh2, rh3])
// app.use('/routes', [rh1, rh2], rh3, rh4, rh5)


/*****************************************/
// GET /users => middleware chain => request handler
app.use('/', (req, res, next) => { 
    next();
    res.send('Response1!');
 });

app.use(
    '/user', 
    (req, res, next) => {
        next();
    },
    (req, res, next) => {
        next();
    },
    (req, res, next) => {
        next();
        // res.send('Response2!');
    },
);

```