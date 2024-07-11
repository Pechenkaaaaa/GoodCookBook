const router = require("express").Router();

const userRouter = require('./api/user.routes');
const authRouter = require('./api/auth.routes');
const tokensRouter = require('./api/tokens.routes')
// const catRoutes = require("./api/categoriy.routes");
// const askRoutes = require("./api/ask.routes");

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/tokens', tokensRouter);

// router.use("/category", catRoutes);
// router.use("/ask", askRoutes);

module.exports = router;