import * as fs from 'fs';
export * from './test'

console.log('running');

if (false) {
    class A {
        value: number = 0;
        date: Date = new Date();
        date2: Date;
    
        constructor(value?: number) {
            if (value) this.value = value;
            this.date2 = new Date();
        }
    }
    console.log('---test initialization---');

    const a = new A();
    const b = new A(123);

    console.log(`a.date: ${a.date.getTime()}, a.date2: ${a.date2.getTime()}`);

    console.log(`b.date: ${b.date.getTime()}, b.date2: ${b.date2.getTime()}`);
    // can't get order between date and date2, but it seems same in millisecond level
}

if (false) {
    class Base {
        baseValue: number;

        constructor(value: number) {
            this.baseValue = value
        }

        public getValue(): string {
            return this.baseValue.toString();
        }
    }

    class Ext_A extends Base {
        value: string;

        constructor(value: string, baseValue: number) {
            super(baseValue);
            this.value = value;
        }

        public getValue(): string {
            return this.value + this.baseValue.toString();
        }
    }

    class Ext_B extends Base {
        value: number[]

        constructor(value: number[], baseValue: number) {
            super(baseValue);
            this.value = value;
        }

        public getValue(): string {
            return (this.baseValue + this.value.reduce((prev, cur) => prev + cur)).toString();
        }
    }

    let var_A: Ext_A = new Ext_A('A', 1);
    let var_B: Ext_B = new Ext_B([1,2,3], 4);

    let baseVar: Base;

    console.log('--- assign Ext_A to Base variable---');

    baseVar = var_A;
    console.log(`baseVar.getValue(): ${baseVar.getValue()}`);

    console.log('--- assign Ext_B to Base variable---');

    baseVar = var_B;
    console.log(`baseVar.getValue(): ${baseVar.getValue()}`);
    // Why this works..
}

if (true) {
    const statistic = {
        useCount: 1,
        lastUsed: new Date()
    }

    const jsonString = JSON.stringify(statistic, null, 4);
    fs.writeFileSync('sample.json', jsonString, 'utf8');

    console.log('---stored json file---');

    const jsonData = fs.readFileSync('sample.json', 'utf8');
    const loadedStat = JSON.parse(jsonData);
    console.log(`---loaded json file: ${loadedStat.useCount}, ${loadedStat.lastUsed}`);
}



console.log('ended');
