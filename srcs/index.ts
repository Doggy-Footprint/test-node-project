import test_JSON_serialization from "./test_JSON_serialization";
import test_typeof from "./typeof";
import test_intersection from "./test_intersection"

console.log('running');

if (false) {
    test_date();
}

if (false) {
    test_base_type_variable();
}

if (false) {
    test_JSON_serialization();
    // TODO need to import: why? 
    // TODO: seems like runtime error. Maybe other functions are needed to be imported also, but not caught in runtime
}

if (false) {
    test_implementing_interface();
}

if (false) {
    test_unit_type();
} 

if (false) {
    test_typeof();
}

if (true) {
    test_intersection();
}

console.log('ended');
