let removeEmpty = function(obj) {
    Object.entries(obj).forEach(([key, val]) => {
        if (val && typeof val === 'object') {
            removeEmpty(val)
        } else if (val == null) {
            delete obj[key]
        }
    });
}

exports.removeEmpty = removeEmpty;

exports.successReply = function(data) {
    return {
        status: {
            code: 0,
            message: 'success'
        },
        data,
    }
}

exports.failReply = function(code, message) {
    return {
        status: {
            code,
            message
        }
    }
}