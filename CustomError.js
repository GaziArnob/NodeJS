class CustomError extends Error {
    constructor(massage) {
        super(massage);
    }
}
module.exports = {CustomError};