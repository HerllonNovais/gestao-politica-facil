const express = require('express');
const multer = require('multer');
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/import', upload.single('file'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Aqui você poderia salvar no banco. Exemplo:
    // await db.insertMany(data);

    fs.unlinkSync(filePath); // remove arquivo após leitura
    res.json({ success: true, imported: data.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erro ao importar arquivo.' });
  }
});

module.exports = router;
