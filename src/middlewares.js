export const localsMiddleware = (req, res, next) => {
  console.log(req.session);
  res.locals.logedIn = Boolean(req.session.logedIn);
  res.locals.siteName = "Wetube";
  res.locals.logedInUser = req.session.user;
  console.log(res.locals);
  next();
};
