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
    
    // Extract serviceName
    const h1Regex = /<h1 className="[^"]+heading[^"]*">([\s\S]*?)<\/h1>/;
    const h1Match = content.match(h1Regex);
    let serviceName = h1Match ? h1Match[1].trim() : 'this sector';

    // Regex to match both <h5> and <p> blocks together
    const descRegex = /(<h5 className="([^" ]+)[\s\S]*?">)([\s\S]*?)(<\/h5>\s*<p className="[^"]+description-secondary[^"]*">)([\s\S]*?)(<\/p>)/;
    
    let changed = false;
    content = content.replace(descRegex, (match, p1, p2, p3, p4, p5, p6) => {
        changed = true;
        
        // Rebalance the text: put 2 sentences in part1 (18px) and 1 sentence in part2 (16px)
        const part1 = `Handling ${serviceName} requires specialized infrastructure and strict regulatory compliance. We provide customized, end-to-end waste management frameworks that protect your workforce and the environment.`;
        const part2 = `Partner with MS Asia Enterprises for verifiable sustainability, operational transparency, and audit-ready documentation at every step.`;

        return `${p1}
                                ${part1}
                            ${p4}
                                ${part2}
                            ${p6}`;
    });

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
    }
});

console.log('Total files rebalanced:', updatedCount);
