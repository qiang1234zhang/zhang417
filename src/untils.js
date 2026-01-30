import PizZip from 'pizzip';
import DocxTemplater from 'docxtemplater';

function getFileBinaryString(templateFile) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve(e.target.result);
    }
    reader.onerror = reject;
    reader.readAsBinaryString(templateFile);
  });
}

export async function generateDocxFile(template, fileData) {
  return new Promise((resolve, reject) => {
    getFileBinaryString(template)
      .then(templateData => {
        const zip = new PizZip(templateData);
        const doc = new DocxTemplater()
          .loadZip(zip)
          .render(fileData); // fileData是我们需要定义好，传给docxtempale的数据。
        const out = doc.getZip().generate({
          type: 'blob',
          mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        });
        resolve(out);
      })
      .catch(reject);
  });
} 