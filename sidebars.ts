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
        "Panduan Penginputan Metadata/jenis-peraturan",
      ],
    },
    {
      type: "category",
      label: "Panduan Penginputan Abstrak",
      items: [
        "Panduan Penginputan Abstrak/pendahuluan-abstrak",
        "Panduan Penginputan Abstrak/penyusunan-abstrak",
      ],
    },
    {
      type: "category",
      label: "Panduan Penginputan Berkas",
      items: [
        "Panduan Penginputan Berkas/pengisian-berkas",
        "Panduan Penginputan Berkas/tautan-berkas",
      ],
    },
    "pic-faq",
  ],
};

export default sidebars;
