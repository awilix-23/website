export function ls(args, PWD) {
  const heirarchy = {
    "dft.md": null,
    "cats.md": null,
  };

  const files = Object.entries(heirarchy).map(([name, value]) => {
    return value === null ? name : name + "/";
  });

  return files.join(" ");
}
