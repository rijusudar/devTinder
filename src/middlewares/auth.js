const adminAuth = (req, res, next) => {
    // Check if the request is authorised
    console.log('Admin Auth Middleware');
    const token = 'xyz';
    const isAdminAuthorised = token === 'xyz';
    if(!isAdminAuthorised) {
        return res.status(401).send('Unauthorized');
    } else {
        next();
    }
};

const userAuth = (req, res, next) => {
    // Check if the request is authorised
    console.log('User Auth Middleware');
    const token = 'xyz';
    const isAdminAuthorised = token === 'xyz';
    if(!isAdminAuthorised) {
        return res.status(401).send('Unauthorized');
    } else {
        next();
    }
};

module.exports = { adminAuth, userAuth}