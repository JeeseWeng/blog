judge = (str) => {
    for (let i = 0; i < parseInt(str.length / 2); i++) {
        console.log(i + 1)
        if (str[i] != str[str.length - i - 1]) {
            return false
        }
    }
    return true
}

