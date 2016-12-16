// This script copies src/index.html into /dist/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
import fs from 'fs';
 import cheerio from 'cheerio';
 import colors from 'colors';

/*eslint-disable no-console */
const srcDir = 'src';
fs.readdir(srcDir, (err, files) => {
    files
        .filter((file) => file.substr(-5) === '.html')
        .forEach(file => {
            readFile(file);
        });

});
const readFile = (file) =>{
    const filePath = srcDir + '/' + file;
    fs.readFile(filePath, 'utf8', (err, markup) => {
        if (err) {
            return console.log(err);
        }

        const $ = cheerio.load(markup);
        $('script').attr('src', 'bundle.min.js');
        // since a separate spreadsheet is only utilized for the production build, need to dynamically add this here.
        $('head').prepend('<link rel="stylesheet" href="bundle.css">');

        fs.writeFile('dist/' + file, $.html(), 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log(filePath + ' written to /dist'.green);
        });
    });
};

