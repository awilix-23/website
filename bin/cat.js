export function cat (args, PWD) {
  if (!args.length) {
    return Promise.resolve("Error: No input file provided\nUsage: cat <file>");
  }

  const fileName = args[0];
  const filePath = `${PWD}/${fileName}`;
  console.log(filePath);

  return fetch(filePath)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error: Failed to load file`);
      }
      return res.text();
    })
    .catch((err) => `Error: ${err.message}`);
}
