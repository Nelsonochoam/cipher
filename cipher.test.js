
const Cipher = require('./cipher.js')

it('no message', () => {
    const message = ""
    const cipher = new Cipher()
    expect(cipher.process(message)).toEqual(message)
})

it('message decryption _ text with spaces', () => {
    const message = "th3s 3s 1 m2ss1g2."
    const cipher = new Cipher()
    expect(cipher.process(message)).toEqual("this is a message.")
})


it('message decryption _ no spaces', () => {
    const message = "h2ll4h4w1r2y45"
    const cipher = new Cipher()
    expect(cipher.process(message)).toEqual("hellohowareyou")
})

it('message encryption _ text with spaces', () => {
    const message = "another message here!"
    const cipher = new Cipher()
    expect(cipher.process(message)).toEqual("1n4th2r m2ss1g2 h2r2!")
})

it('message encryption _ no spaces', () => {
    const message = "hellohowareyou"
    const cipher = new Cipher()
    expect(cipher.process(message)).toEqual("h2ll4h4w1r2y45")
})

it('message encryption _ special characters', () => {
    message = "#$%#$%$@$"
    const cipher = new Cipher()
    expect(cipher.process(message)).toEqual(message)
})