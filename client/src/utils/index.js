// Will contain the functions like: getRandomPrompts & downloadImage

import { randomPrompts } from "../constants/index";
import FileSaver from "file-saver";

const totalPromptsLength = randomPrompts.length;

// Gets Random Prompts
function getRandomPrompts(prompt) {
  const randomPromptIndex = Math.floor(Math.random() * totalPromptsLength);
  const randomPrompt = randomPrompts[randomPromptIndex];

  // Check the previous prompt to give different prompt each time
  if (randomPrompt === prompt) return getRandomPrompts(prompt);

  return randomPrompt;
}

// Download Photos On Demand
async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

export { getRandomPrompts, downloadImage };
