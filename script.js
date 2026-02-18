import { help } from "./bin/help.js";
import { cat } from "./bin/cat.js";
import { ls } from "./bin/ls.js"
let PWD = "root";

const terminal = document.querySelector(".term");

async function runCommand(command)
{
  const [cmd, ...args] = command.split(" ");
  let outputText = "";

  switch (cmd) {
    case "help":
      outputText = await help(args);
      break;
    case "cat":
      outputText = await cat(args, PWD);
      break;
    case "ls":
      outputText = await ls(args, PWD);
      break;
    case "pwd":
      outputText = "/" + PWD;
      break;
    case "":
      outputText = "";
      break;
    default:
      outputText = "Error: Unknown command";
  }

  if (outputText) {
    const output = document.createElement("pre");
    output.textContent = outputText;
    terminal.appendChild(output);
  }
}

function createPrompt()
{
  const container = document.createElement("div");
  container.className = "prompt";

  const P1 = document.createElement("p");
  P1.style.color = "#F38BA8";
  P1.textContent = "[root@/bin/ash]# ";

  const input = document.createElement("input");
  input.type = "text";
  input.autofocus = true;

  input.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      const command = input.value.trim();
      input.disabled = true;
      await runCommand(command);
      createPrompt();
    }
  })

  container.appendChild(P1);
  container.appendChild(input);
  terminal.appendChild(container);

  setTimeout(() => input.focus(), 0);
}

createPrompt();
