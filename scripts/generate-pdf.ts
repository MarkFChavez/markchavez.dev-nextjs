import { renderToBuffer } from '@react-pdf/renderer';
import { CVDocument } from '../lib/pdf/CVDocument';
import React from 'react';
import fs from 'fs';
import path from 'path';

async function generatePDF() {
  try {
    console.log('Generating CV PDF...');

    // Generate PDF using renderToBuffer
    const pdfBuffer = await renderToBuffer(React.createElement(CVDocument));

    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write PDF to public directory
    const pdfPath = path.join(publicDir, 'mark-chavez-cv.pdf');
    fs.writeFileSync(pdfPath, Buffer.from(pdfBuffer));

    console.log(`✓ PDF generated successfully: ${pdfPath}`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
}

generatePDF();
