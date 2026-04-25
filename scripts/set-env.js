/**
 * Reads environment variables (from .env file locally, or from
 * system env vars on Railway/CI) and injects them into angular.json's
 * `define` field so esbuild replaces process.env.X at compile time.
 */
const fs = require('fs');
const path = require('path');

const envPath = path.resolve(__dirname, '..', '.env');
const angularJsonPath = path.resolve(__dirname, '..', 'angular.json');

// Parse .env file into key-value pairs
function parseEnvFile(filePath) {
    if (!fs.existsSync(filePath)) return {};

    const content = fs.readFileSync(filePath, 'utf-8');
    const vars = {};

    content.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const eqIndex = trimmed.indexOf('=');
        if (eqIndex === -1) return;
        const key = trimmed.substring(0, eqIndex).trim();
        let value = trimmed.substring(eqIndex + 1).trim();
        if ((value.startsWith("'") && value.endsWith("'")) ||
            (value.startsWith('"') && value.endsWith('"'))) {
            value = value.slice(1, -1);
        }
        vars[key] = value;
    });

    return vars;
}

// Merge: .env file values first, then system env vars override
const fileVars = parseEnvFile(envPath);

const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID || fileVars.EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || fileVars.EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || fileVars.EMAILJS_PUBLIC_KEY || '';

if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.warn('\x1b[33m⚠ Some EmailJS variables are empty. Email sending will not work.\x1b[0m');
    console.warn('  Set them in .env (local) or as environment variables (Railway/CI).');
}

// Read angular.json and inject define values
const angularJson = JSON.parse(fs.readFileSync(angularJsonPath, 'utf-8'));
const projectName = Object.keys(angularJson.projects)[0];
const buildOptions = angularJson.projects[projectName].architect.build.options;

buildOptions.define = {
    'process.env.EMAILJS_SERVICE_ID': JSON.stringify(EMAILJS_SERVICE_ID),
    'process.env.EMAILJS_TEMPLATE_ID': JSON.stringify(EMAILJS_TEMPLATE_ID),
    'process.env.EMAILJS_PUBLIC_KEY': JSON.stringify(EMAILJS_PUBLIC_KEY)
};

fs.writeFileSync(angularJsonPath, JSON.stringify(angularJson, null, 4) + '\n', 'utf-8');

console.log('\x1b[32m✔ angular.json updated with env variables\x1b[0m');
