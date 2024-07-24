class A {
    value: number = 0;
    date: Date = new Date();
    date2: Date;

    constructor(value?: number) {
        if (value) this.value = value;
        this.date2 = new Date();
    }
}

function test_date() {
    console.log('---test initialization---');

    const a = new A();
    const b = new A(123);

    console.log(`a.date: ${a.date.getTime()}, a.date2: ${a.date2.getTime()}`);

    console.log(`b.date: ${b.date.getTime()}, b.date2: ${b.date2.getTime()}`);
    // can't get order between date and date2, but it seems same in millisecond level
}


