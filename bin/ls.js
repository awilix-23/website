export function ls(args, PWD) {
  const heirarchy = {
    "test.txt": null,
  };

  const files = Object.entries(heirarchy).map(([name, value]) => {
    return value === null ? name : name + "/";
  });

  return files.join(" ");
}
