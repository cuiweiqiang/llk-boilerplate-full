/*
 * @Author: cuiweiqiang
 * @Date:   2018-06-21 17:46:12
 * @Last Modified by:   cuiweiqiang
 * @Last Modified time: 2018-06-21 17:46:52
 */

exports = module.exports = {
    port: process.env.PORT || 3000,
    jwt: {
        secret: 'koa2-starter-secret',
        expiresInSeconds: 60 * 60 * 10,
    }
}