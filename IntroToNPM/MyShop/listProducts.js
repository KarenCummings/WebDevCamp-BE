var faker = require( 'faker' );
console.log('====================');
console.log('WELCOME TO MY SHOP! ');
console.log('====================');
console.log(faker.commerce.price());
for(var i = 0; i < 10; i++){
    console.log( faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
    // console.log( faker.fake("{{commerce.productName}} {{commerce.price}}"));
    // console.log( faker.fake("{{commerce.productName}} {{commerce.price}}"));
}