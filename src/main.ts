function greet(name: string): string {
  return `Hello, ${name}!`;
}

function entry_point(args: readonly string[] | undefined) {
  const name = args?.[0] ?? "TypeScript learner";
  console.log(greet(name));
}

entry_point(process.argv.slice(2));