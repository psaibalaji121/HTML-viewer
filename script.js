// Initialize CodeMirror
const editor = CodeMirror.fromTextArea(document.getElementById('html-input'), {
  mode: 'htmlmixed',
  lineNumbers: true,
  theme: 'default',
});

// Function to render HTML
function renderHTML() {
  const htmlCode = editor.getValue();
  outputFrame.srcdoc = htmlCode;
}