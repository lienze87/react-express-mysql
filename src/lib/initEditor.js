import SimpleMDE from 'simplemde';
import marked from 'marked';

export function initEditor(textareaElement,id){
  const editor = new SimpleMDE({
    autoDownloadFontAwesome: true,
    element: textareaElement,
    autofocus: true,
    autosave: {
      enabled: true,
      uniqueId: id,
      delay: 3000
    },
    indentWithTabs: false,
    initialValue: "",
    placeholder: "write your article here",
    previewRender: function (plainText) {
      return marked(plainText, {
        renderer: new marked.Renderer(),
        gfm: true,
        breaks: true,
        smartLists: true,
        smartypants: true,
      });
    },
    status: ['autosave', 'lines', 'words', 'cursor'],
    styleSelectedText: false,
    tabSize: 2,
  });
  return editor;
}