/* eslint-disable */
const { writeFileSync } = require('fs');

const mod = require(`${__dirname}/../dist/index.js`);

const entries = Object.keys(mod);
const exportsMeta = entries.map((m) => `\t${m}`).join(',\n');

const content = [
    `import DiscordPlayerOpus from './index.js';\n`,
    `const {\n${exportsMeta}\n} = DiscordPlayerOpus;\n`,
    `export {\n${exportsMeta}\n};`
];

writeFileSync(`${__dirname}/../dist/index.mjs`, content.join('\n'));
