import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "index",
    "panduan-login",
    {
      type: "category",
      label: "Panduan Penginputan Metadata",
      items: [
        "Panduan Penginputan Metadata/akses-input",
        "Panduan Penginputan Metadata/metadata-dokumen",
        "Panduan Penginputan Metadata/metadata-artikel-jurnal",
        "Panduan Penginputan Metadata/monitoring-dokumen",
        "Panduan Penginputan Metadata/tajuk-entri-utama-peraturan",
      ],
    },
    {
      type: "category",
      label: "Panduan Penyusunan & Penginputan Abstrak",
      items: [
        "Panduan Penyusunan & Penginputan Abstrak/pendahuluan-abstrak",
        "Panduan Penyusunan & Penginputan Abstrak/penyusunan-abstrak",
      ],
    },
    {
      type: "category",
      label: "Panduan Penginputan Dokumen",
      items: [
        "Panduan Penginputan Dokumen/pengisian-berkas",
        "Panduan Penginputan Dokumen/dokumen-lainnya",
      ],
    },
    "submit-riwayat",
    "pic-faq",
  ],
};

export default sidebars;
