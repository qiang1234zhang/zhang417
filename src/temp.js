// const fs = require('fs');
// const PizZip = require('pizzip');
// const { Document, Packer } = require('docxtemplater');
// const { PDFDocument } = require('pdf-lib');
// // 读取模板文件
// const zip = new PizZip(fs.readFileSync('template.docx'));
 
// // 实例化Docxtemplater
// const doc = new Docxtemplater(zip, {
//   paragraphLoop: true,
//   linebreaks: true
// });

// // 准备要填充的数据（可以根据需要修改）
// const data = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   // 添加更多字段...
// };

// // 填充数据到文档中
// doc.setData(data);

// // 编译文档模板
// doc.render();

// // 将填充好数据的文档转换为Buffer
// const buffer = doc.getZip().generate({ type: 'nodebuffer' });

// // 将Buffer转换为PDF
// PDFDocument.load(buffer).then((pdfDoc) => {
//   // 创建一个新的PDF页面
//   const pdfPage = pdfDoc.addPage();

//   // 将Word文档的内容绘制到PDF页面上
//   pdfPage.drawText(doc.getFullText(), {
//     x: 50,
//     y: pdfPage.getHeight() - 50,
//     size: 12,
//   });

//   // 将PDF保存到文件
//   const pdfBytes = pdfDoc.save();
//   fs.writeFileSync('output.pdf', pdfBytes);
  
//   console.log('PDF文件已生成！');
// }).catch((error) => {
//   console.error('转换失败：', error);
// });
