/**
 * cd <root>
 * tsc srcs/test.ts
 */

export class TestParameter<T, V> {
    description: string;
    parameter: T;
    expected: V;

    constructor(parameter: T, expected: V, description: string = 'No Description') {
        this.parameter = parameter;
        this.expected = expected;
        this.description = description;
    }
}

/**
 * test given testCase.
 * by default, '==' is used to check equality. if
 * 
 * @param testCase 
 * @param testFn 
 * @returns 
 */
export function parameterizedTest<T, V>(testCase: TestParameter<T, V>, testFn: (tp: T) => V): boolean {
    if (testFn(testCase.parameter) == testCase.expected) {
        return true;
    } else {
        console.error(testCase.description);
        return false;
    }
}
