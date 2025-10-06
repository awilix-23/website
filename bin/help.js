export function help(args) {
  if (!args.length) {
    const commands = [
      ["help", "Show this message again"],
      ["cat", "Display contents of a file"],
      ["pwd", "Print the current working directory"],
      ["ls", "List files in current directory"],
      // ["clear", "Clear the terminal"],
    ];

    const lines = commands.map(([cmd, desc]) =>
      `${cmd.padEnd(10)}${desc}`
    );

    return `Available commands:\n` + lines.join("\n");
  }
}
