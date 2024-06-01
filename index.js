const fs = require('fs');
const pdf = require('pdf-parse');

// Function to extract words from the text
const extractWords = (text) => {
    return text.match(/\b\w+\b/g);
};

// Read the PDF file
const dataBuffer = fs.readFileSync('book.pdf');

pdf(dataBuffer).then(function(data) {
    // Extract the text content from the PDF
    const text = data.text;

    // Extract words from the text
    const words = extractWords(text);

    // Save words to a file
    fs.writeFileSync('words.txt', words.join('\n'), 'utf8');
    console.log('Words saved to words.txt');
}).catch(error => {
    console.error("Error reading PDF file: ", error);
});
