const password =(len) => {
    let chargene = "mnnbvcxzlkjhgfdsapoiuytrewq1234567890"
    let password = ""
    for (let i = 0; i <= len; i++) {
        password+=chargene.charAt(Math.floor(Math.random() * chargene.length))
    }
    return password
}
module.exports = password