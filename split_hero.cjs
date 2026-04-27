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
    
    // We match the h5 block that currently has all 3 sentences
    // It looks like: <h5 className="prefix__description ...">...</h5>
    const descRegex = /(<h5 className="([^" ]+)[\s\S]*?">)([\s\S]*?)(<\/h5>)/;
    
    // We also want to check if a <p> description already exists, and if so, remove it to avoid duplicates
    // But since my previous script just replaced the h5 and left whatever was there?
    // Wait! The previous shorten.cjs script ONLY replaced the <h5> block. It didn't remove the old <p> block!
    // Let me check if <p className="...__description-secondary"> is still there in the files.
    // If it is, I should remove it.
    
    let changed = false;
    
    // First, let's clean up any lingering old <p> tags
    const pRegex = /<p className="[^"]+description-secondary[^"]*">[\s\S]*?<\/p>\s*/g;
    if (content.match(pRegex)) {
        content = content.replace(pRegex, '');
        changed = true;
    }

    content = content.replace(descRegex, (match, p1, p2, p3, p4) => {
        const text = p3.trim();
        const firstDotIndex = text.indexOf('.');
        
        // Only split if we have more than one sentence and it hasn't been split yet
        if (firstDotIndex !== -1 && text.length > firstDotIndex + 1) {
            changed = true;
            const part1 = text.substring(0, firstDotIndex + 1).trim();
            const part2 = text.substring(firstDotIndex + 1).trim();
            const prefix = p2.replace('__description', '');
            
            return `${p1}
                                ${part1}
                            ${p4}
                            <p className="${prefix}__description-secondary m-0 text-gray-700 dark:text-gray-300 normal-case font-normal text-[16px]">
                                ${part2}
                            </p>`;
        }
        return match;
    });

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
    }
});

console.log('Total files split into h5 and p:', updatedCount);
