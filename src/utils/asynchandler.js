
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .then((result) => {
        // If requestHandler doesn't return a Promise, resolve it as a Promise
        if (!(result instanceof Error)) {
          result = Promise.resolve(result);
        }

        return result;
      })
      .catch((err) => {
        // Ensure that next is called only with the error
        next(err);
      });
  };
};

export { asyncHandler };
