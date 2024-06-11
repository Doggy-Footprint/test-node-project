/**
 * after compiling srcs/test.ts
 * 
 * cd <root>
 * tsc test/test_parameterizedTEst.ts
 * node test/test_parameterizedTEst.js
 */

import { parameterizedTest, TestParameter } from "../srcs/test";

function addStr(strs: string[]) {
    return strs.join('');
}

let testParameter: TestParameter<string[], string> 
    = new TestParameter<string[], string>(['a', 'b'], 'ab', 'test');

const result = parameterizedTest<string[], string>(testParameter, addStr);
if (result) console.log("test successs");
else console.error("test failed");
