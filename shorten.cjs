const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('Hero.jsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('E:/MsAsiaNew/MSasiaWEB/src/components');
let updatedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    const h1Regex = /<h1 className="[^"]+heading[^"]*">([\s\S]*?)<\/h1>/;
    const h1Match = content.match(h1Regex);
    let serviceName = h1Match ? h1Match[1].trim() : 'this sector';

    // To preserve specific formatting, we target the h5 description tag
    const descRegex = /(<h5 className="[^"]+description[^"]*">)([\s\S]*?)(<\/h5>)/;
    
    let changed = false;
    content = content.replace(descRegex, (match, p1, p2, p3) => {
        changed = true;
        // The shorter version: 3 sentences max
        const shortText = `Handling ${serviceName} requires specialized infrastructure and strict regulatory compliance. We provide customized, end-to-end waste management frameworks that protect your workforce and the environment. Partner with MS Asia Enterprises for verifiable sustainability, operational transparency, and audit-ready documentation at every step.`;
        return `${p1}\n                                ${shortText}\n                            ${p3}`;
    });

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
    }
});

console.log('Total files shortened:', updatedCount);
