module.exports = function check(str, bracketsConfig) {

    while (true) {
        let strLength = str.length;
        bracketsConfig.forEach(bracketPair => {
            str = str.replace(bracketPair[0] + bracketPair[1], '')
        });

        if (strLength === str.length) {
            break;
        }
    }

    return str.length === 0;
}

    