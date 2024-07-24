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

function test_base_type_variable() {
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
