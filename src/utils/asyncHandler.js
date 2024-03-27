const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    }
};


export { asyncHandler }


// const asyncHandler = (fn) => { () => { } }; in function body i add another function
// const asyncHandler = () => () => { }; So i can write this as well


/* try catch part
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    } catch (error) {
        res.status(error.code || 500)({
            success: false,
            message: error.message
        })
    }
}
 */