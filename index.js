/**
 * The Fun-troller: A humorous (troll) extension for Scratch.
 * This extension features blocks that look useful but behave unexpectedly.
 */

// Define the class that holds the extension's logic and blocks.
class TrollExtension {
    /**
     * Required method: Returns the metadata for the extension.
     */
    getInfo() {
        return {
            // A unique ID for the extension
            id: 'trollextension',
            // The name displayed in the block palette
            name: 'The Fun-troller',
            // Colors for the blocks (Hot Pink and Deep Red)
            color1: '#FF69B4',
            color2: '#D81B60',
            blocks: [
                {
                    // --- Block 1: The Misleading Wait ---
                    opcode: 'fastWait',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'wait [SECONDS] seconds (super fast)',
                    tooltip: 'Waits for the specified duration, but faster.',
                    arguments: {
                        SECONDS: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0.1
                        }
                    }
                },
                {
                    // --- Block 2: The Ambiguous Answer ---
                    opcode: 'ultimateAnswer',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'calculate the ultimate answer',
                    tooltip: 'Computes the single most important number.',
                    disableMonitor: true // Hides the block monitor
                },
                {
                    // --- Block 3: The Direction Reversal ---
                    opcode: 'reverseDirection',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'send me in the right direction',
                    tooltip: 'Points the sprite in the correct direction.'
                },
                {
                    // --- Block 4: The Fake Log ---
                    opcode: 'logDebug',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'log important debug info: [TEXT]',
                    tooltip: 'Logs critical system information to the console.',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'System is nominal.'
                        }
                    }
                },
                {
                    // --- Block 5: The Sneaky Resizer ---
                    opcode: 'shrinkSprite',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'make sprite look totally normal',
                    tooltip: 'Sets the sprite size to 1% (totally normal).',
                },
                {
                    // --- Block 6: The Volume Blaster ---
                    opcode: 'muteProject',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'ensure project volume is at 100%',
                    tooltip: 'Sets the sprite volume to 0% (nice and loud).',
                },
                {
                    // --- Block 7: The Ghostly Faker ---
                    opcode: 'makeVisible',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'make sure everyone can see the sprite',
                    tooltip: 'Sets the ghost effect to 99 (maximum visibility).',
                }
            ]
        };
    }

    // --- Block Implementations ---

    /**
     * Block 1: Waits much longer than the user expects.
     */
    fastWait(args) {
        // Wait at least 0.5 seconds, or 10x the input time, whichever is greater.
        const actualWaitTime = Math.max(0.5, args.SECONDS * 10); 
        console.log(`[Fun-troller] Waiting "super fast" for ${actualWaitTime}s instead of ${args.SECONDS}s.`);
        return new Promise(resolve => setTimeout(resolve, actualWaitTime * 1000));
    }

    /**
     * Block 2: Returns a random, confusing answer instead of a useful number.
     */
    ultimateAnswer() {
        const answers = [
            '43',
            'Purple',
            'Maybe next time',
            'undefined',
            'Error: File Not Found',
            '7' // It could be 7, who knows?
        ];
        return answers[Math.floor(Math.random() * answers.length)];
    }

    /**
     * Block 3: Reverses the sprite's direction (the opposite of 'right').
     */
    reverseDirection(args, util) {
        const currentDirection = util.target.direction;
        util.target.setDirection(-currentDirection); // Reverse the direction (e.g., 90 becomes -90)
    }

    /**
     * Block 4: Logs a warning and an error to the browser console.
     */
    logDebug(args) {
        // This won't affect the Scratch project but will annoyingly clutter the console
        console.warn(`[Troll Extension] Important Info Logged: "${args.TEXT}"`);
        console.error(`[Troll Extension] Actual Debugging Result: The opposite of ${args.TEXT} is TRUE.`);
    }

    /**
     * Block 5: Sets sprite size to 1%, making it tiny.
     */
    shrinkSprite(args, util) {
        // Sets size to 1%, the minimum.
        util.target.setSize(1); 
        console.log('[Fun-troller] Sprite size set to 1%. Looks totally normal, right?');
    }

    /**
     * Block 6: Mutes the volume despite claiming to set it to 100%.
     */
    muteProject(args, util) {
        // Sets volume to 0%, the opposite of 100%
        util.target.setVolume(0); 
        console.log('[Fun-troller] Volume set to 0% for maximum "loundness".');
    }

    /**
     * Block 7: Sets ghost effect to 99, making the sprite nearly invisible.
     */
    makeVisible(args, util) {
        // Sets ghost effect to 99 (nearly invisible)
        util.target.setEffect('ghost', 99); 
        console.log('[Fun-troller] Ghost effect set to 99. Visibility guaranteed.');
    }
}

// Register the extension so Scratch can load it
Scratch.extensions.register(new TrollExtension());
