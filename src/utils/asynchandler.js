// const asynchandler = (higherOrderFn) => async (req, res, next) => {
//   try {
//     await higherOrderFn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       succusss: true,
//       message: error.message,
//     });
//   }
// };
const asynchandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => err);
  };
};
export { asynchandler };
