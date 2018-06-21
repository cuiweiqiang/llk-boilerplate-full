/*
 * @Author: Cui
 * @Date:   2018-06-21 17:33:42
 * @Last Modified by:   Cui
 * @Last Modified time: 2018-06-21 17:34:00
 */

'use strict';

module.exports = {
    name: {
        desc: 'project name',
    },
    description: {
        desc: 'project description',
    },
    author: {
        desc: 'project author',
    },
    keys: {
        desc: 'cookie security keys',
        default: Date.now() + '_' + random(100, 10000),
    },
};

function random(start, end) {
    return Math.floor(Math.random() * (end - start) + start);
}