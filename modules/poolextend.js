const poolextend = (target, source, flag) => {
    console.log('执行前', target, source, flag)
    for (let key in source) {
        if (source.hasOwnProperty(key)) {
            flag ? (target[key] = source[key]) : (target[key] === void 0 && (target[key] = source[key]));
        }
    }
    console.log('执行后', target);
    return target;
}

module.exports = poolextend;
