import readline from 'node:readline';

let buf1 = Buffer.alloc(0); // Start with empty buffer

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user
console.log(`Choices:\n1. Concat\n2. Compare\n3. Copy\nEnter your choice:`);

// First input for choice

rl.on('line', (choice) => {
    let ch=parseInt(choice.trim())
    switch (ch) {
        case 1: // Concat
            rl.question('Enter string to concat: ', (input1) => {
                const tempBuf = Buffer.from(input1);
                buf1 = Buffer.concat([buf1, tempBuf]);
                console.log('Updated Buffer (ascii):', buf1.toString('ascii'));
                rl.close();
            });
            break;

        case 2: // Compare
            rl.question('Enter string to compare: ', (input2) => {
                const tempBuf = Buffer.from(input2);
                const result = Buffer.compare(buf1, tempBuf);
                console.log('Comparison result:', result);
                rl.close();
            });
            break;

        case 3: // Copy
            rl.question('Enter string to copy into buffer: ', (input3) => {
                const tempBuf = Buffer.from(input3);
                tempBuf.copy(buf1, 0); // Copy into buf1 starting at index 0
                console.log('Copied into buffer:', buf1.toString('ascii'));
                rl.close();
            });
            break;

        default:
            console.log('Invalid choice. Please enter 1, 2, or 3.');
            rl.close();
            break;
    }
});
