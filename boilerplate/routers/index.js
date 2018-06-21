const KoaRouter = require('koa-router');
const controllers = require('../controllers/v1/index');

const router = new KoaRouter({
    prefix: '/api/v1'
});

router
    .get('/home/index', controllers.home.index);

exports = module.exports = router;