const password = (len) => {
    let chargene = "mnnbvcxzlkjhgfdsapoiuytrewq1234567890"
    let password = ""
    for (let i = 0; i <= len; i++) {
        password += chargene.charAt(Math.floor(Math.random() * chargene.length))
    }
    return password
}
const sendmail = async (email, password, userName) => {
    try {
        const transport = nodemailer.createTransport({
            service: "gmail",
            auth:
            {
                user: "whytap017@gmail.com",
                pass: "szbj grou gcar vrbl"
            }
        })

        const fromtosend = {
            from: "whytap017@gmail.com",
            to: email,
            sub: "sending mail",
            text: `Hii ${userName} this is your ${password}`
        }
        await transport.sendMail(fromtosend)


    } catch (error) {
        console.log(error.message);

    }
}
module.exports = { password, sendmail }