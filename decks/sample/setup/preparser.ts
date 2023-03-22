import { definePreparserSetup } from "@slidev/types";

export default definePreparserSetup((setup: any) => {
  return {
    name: "Example",
    transformRawLines: (lines) => {
      lines.forEach((line, index) => {
        if (line.startsWith("@page")) {
          const page = line.replace("@page:", "").trim();
          const replacement = `src: ./../../pages/${page}`;
          lines.splice(index, 1, replacement);
          console.log(
            `Replaced ${setup.filepath} [${index}]:${line} with ${replacement}`
          );
        }
      });
    },
  };
});
