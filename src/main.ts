/**
 * Entry point — run with: npm run dev
 * Pass arguments: npm run dev -- hello world
 */

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const args = process.argv.slice(2);
const name = args[0] ?? "TypeScript learner";

console.log(greet(name));
