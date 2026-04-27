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
    let changed = false;
    
    // Find the prefix
    const prefixMatch = content.match(/<section className="([^ ]+) /);
    if (!prefixMatch) return;
    const prefix = prefixMatch[1];
    
    // Fix H1
    if (!content.includes('<h1')) {
        const headingRegex = /({\/\* Large Two-Tone Heading \*\/}\s*)([\s\S]*?)(?=\s*{\/\* Concise Description \*\/})/;
        content = content.replace(headingRegex, (match, p1, p2) => {
            const innerText = p2.trim();
            changed = true;
            return `${p1}
                        <h1 className="${prefix}__heading leading-tight !text-transparent !bg-clip-text bg-gradient-to-r from-[#47622A] to-[#799851]">
                            ${innerText}
                        </h1>\n`;
        });
    }
    
    // Fix H5
    if (!content.includes('<h5')) {
        const descRegex = /(<div className="[^"]+content[^"]+">\s*)([\s\S]*?)(?=\s*<p className="[^"]+description-secondary)/;
        content = content.replace(descRegex, (match, p1, p2) => {
            const innerText = p2.trim();
            changed = true;
            return `${p1}
                            <h5 className="${prefix}__description m-0 text-gray-700 dark:text-gray-300 font-normal text-[18px]">
                                ${innerText}
                            </h5>\n`;
        });
    }
    
    // Fix P (if missing)
    if (!content.includes('<p className="')) {
        // Find everything between </h5> and </div>
        const pRegex = /(<\/h5>\s*)([\s\S]*?)(?=\s*<\/div>\s*<\/div>\s*{\/\* RIGHT COLUMN: Image \*\/})/;
        content = content.replace(pRegex, (match, p1, p2) => {
            const innerText = p2.trim();
            if (innerText.length > 0 && !innerText.startsWith('<p')) {
                changed = true;
                return `${p1}
                            <p className="${prefix}__description-secondary m-0 text-gray-700 dark:text-gray-300 normal-case font-normal">
                                ${innerText}
                            </p>\n`;
            }
            return match;
        });
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
        console.log('Fixed:', path.basename(file));
    }
});
console.log('Total files fixed:', updatedCount);
