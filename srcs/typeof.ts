/**
 * typeof does not guarantee null-checking (as JS behavior)
 * @param strs 
 */
function check_type_guard(strs: string | string[] | null) {
    console.log(`typeof strs ${typeof strs}`);
    if (typeof strs === 'object') {
        // uncomment to see error log
        // for (const s of strs) console.log(s);
        console.log(strs);
    } else if (typeof strs === 'string') {
        console.log(strs);
    } else {
        console.log(strs);
    }
}

export default function test_typeof() {
    /**
     * string
     * number
     * bigint
     * boolean
     * symbol
     * undefined
     * object
     * function
     * 
     * type guard: in TS, checking against the value returned by typeof is a type guard
     */

    check_type_guard('abc');
    console.log('---');
    check_type_guard(['a', 'b', 'c']);
    console.log('---');
    check_type_guard(null);
    console.log('---');
}