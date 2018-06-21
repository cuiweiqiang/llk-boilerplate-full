exports.errHandler = () => async (ctx, next) => {
    try {
        await next();
        if (ctx.status === 404) {
            ctx.body = {
                status: {
                    code: 404,
                    message: 'NOT FOUND'
                }
            };
        }
    } catch (err) {
        console.error('-------> ERROR : ', err)
        ctx.status = err.status || 500;
        ctx.body = {
            status: {
                code: err.code || 'unknow',
                message: err.message || 'unknow'
            }
        };
    }
};