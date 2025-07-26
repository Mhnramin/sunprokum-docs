const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

// Konfigurasi: ubah sesuai proyek kamu
const BASE_URL = "http://localhost:3000/sunprokum-docs/docs";
const OUTPUT_PDF = "manual-book.pdf";
const DOC_ROUTES = [
  "/",
  "/panduan-login",
  "/Panduan Penginputan Metadata/akses-metadata",
  "/Panduan Penginputan Metadata/metadata-dokumen",
  "/Panduan Penginputan Metadata/metadata-artikel-jurnal",
  "/Panduan Penginputan Metadata/metadata-monitoring",
  "/Panduan Penginputan Metadata/tajuk-entri-utama-peraturan",
  "/Panduan Penyusunan & Penginputan Abstrak/pendahuluan-abstrak",
  "/Panduan Penyusunan & Penginputan Abstrak/penyusunan-abstrak",
  "/Panduan Penginputan Dokumen/pengisian-berkas",
  "/Panduan Penginputan Dokumen/dokumen-lainnya",
  "/submit-riwayat",
  "/pic-faq",
];

(async () => {
  console.log("🚀 Membuka browser...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const pdfBuffers = [];

  for (const route of DOC_ROUTES) {
    const url = `${BASE_URL}${route}`;
    console.log(`📄 Membuka halaman: ${url}`);
    await page.goto(url, { waitUntil: "networkidle0" });
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait 3 seconds to ensure full load

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "20mm",
        bottom: "20mm",
        left: "15mm",
        right: "15mm",
      },
    });

    pdfBuffers.push(pdfBuffer);
  }

  console.log("📚 Menggabungkan PDF...");
  const { PDFDocument } = require("pdf-lib");
  const finalDoc = await PDFDocument.create();

  for (const pdfBuffer of pdfBuffers) {
    const tempDoc = await PDFDocument.load(pdfBuffer);
    const copiedPages = await finalDoc.copyPages(
      tempDoc,
      tempDoc.getPageIndices()
    );
    copiedPages.forEach((page) => finalDoc.addPage(page));
  }

  const pdfBytes = await finalDoc.save();
  fs.writeFileSync(OUTPUT_PDF, pdfBytes);

  console.log(`✅ Manual book berhasil dibuat: ${OUTPUT_PDF}`);

  await browser.close();
})();
