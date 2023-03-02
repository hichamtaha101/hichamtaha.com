// See https://github.com/vercel/next.js/issues/8158#issuecomment-813883518 for details.
const replace = require("replace-in-file");
const options = {
  //you may need to modify the file address to suite your project
  files: "./out/projects/*.html",
  from: [/src="\.\//g, /href="\.\//g],
  to: ['src="..\/', 'href="..\/'],
};
(async function () {
  try {
    const results = await replace(options);
    console.log("Replacement results:", results);
  } catch (error) {
    console.error("Error occurred:", error);
  }
})();