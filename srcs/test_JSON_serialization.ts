import * as fs from 'fs';

const statistic = {
    useCount: 1,
    lastUsed: new Date()
}

export default function test_JSON_serialization() {
    const jsonString = JSON.stringify(statistic, null, 4);
    fs.writeFileSync('sample.json', jsonString, 'utf8');

    console.log('---stored json file---');

    const jsonData = fs.readFileSync('sample.json', 'utf8');
    const loadedStat = JSON.parse(jsonData);
    console.log(`---loaded json file: ${loadedStat.useCount}, ${loadedStat.lastUsed}`);

}

