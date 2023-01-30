// написати функцію, яка приймає рядок і повертає кількість голосних в рядку
// регістр не враховувати (рахувати і великі і маленькі голосні)
// працюємо тільки з латинецею
// const vowels = ['a', 'e', 'i', 'u', 'o', 'y'];
// не використовувати регулярні вирази!
//
//     спробувати оптимізувати функцію до одного ретурну (можна функцію-стрілку без ретурну взагалі)


function stringVowels(value) {
    const vowels = ['a', 'e', 'i', 'u', 'o', 'y'];
    const lowerCase = value.toLowerCase();
    const array = lowerCase.split('');
    let result = 0;
    array.forEach((string) => {
        if (vowels.includes(string)) {
            result += 1;
        }
    });
    console.log(result)
}
stringVowels("Olena Sichkar")


