type myBook = 'spiens' | 'adult' | 'fairy tail'
function adultBook(book: myBook): boolean {
    return book === 'adult';
}


function test_unit_type() {
    let book1 = 'adult';

    // console.log(`is adult book ${adultBook(book1)}`);
    // uncomment to see error
    
    let book2: myBook = 'adult'
    
    console.log(`is adult book ${adultBook(book2)}`);
    // book2 = 'comic';
    // uncomment to see error    
}
