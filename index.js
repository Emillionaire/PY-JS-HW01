while(true) {
    const generatedNumber = Math.floor(Math.random() * 1000)
    console.log('Сгенерированное число для загадки: ', generatedNumber)

    receivedFromUserNumber = +(prompt('Я загадал число от 0 до 999, попробуйте его отагадать! Какое я загадал число?'))
    console.log('Введенное пользователем число: ', receivedFromUserNumber)

    if ((typeof receivedFromUserNumber === "number") && !isNaN(receivedFromUserNumber)) {
        if (receivedFromUserNumber === generatedNumber) {
            alert('Верно! Я загадал число ' + generatedNumber + '.')
        } else {
            alert('Неверно! Я загадал число ' + generatedNumber + '.')
        }
    } else {
        alert('Вы ввели не число!')
    }
}