import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Panduan Online",
  tagline: "Penyusununan Produk Hukum JDIH Komisi Yudisial.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://mhnramin.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/sunprokum-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Mhnramin", // Usually your GitHub org/user name.
  projectName: "sunprokum-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarCollapsed: false,
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Mhnramin/sunprokum-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/Mhnramin/sunprokum-docs/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/social-card.jpg",
    navbar: {
      title: "Docs",
      logo: {
        alt: "",
        src: "img/sunprokum-logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Panduan",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://jdih.komisiyudisial.go.id/",
          label: "JDIH KYRI",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Dokumentasi",
          items: [
            {
              label: "Panduan Online",
              to: "/docs/index",
            },
          ],
        },
        {
          title: "Link Terkait",
          items: [
            {
              label: "Komisi Yudisial",
              href: "https://komisiyudisial.go.id/",
            },
            {
              label: "JDIHN",
              href: "https://jdihn.go.id/",
            },
            {
              label: "PPID KY",
              href: "https://ppid.komisiyudisial.go.id/",
            },
            {
              label: "Karakterisasi Putusan",
              href: "https://karakterisasi.komisiyudisial.go.id/",
            },
          ],
        },
        {
          title: "Hubungi Kami",
          items: [
            {
              label: "Jl. Kramat Raya No. 57 Jakarta Pusat 10450",
              href: "https://jdih.komisiyudisial.go.id/",
            },
            {
              label: "jdih@komisiyudisial.go.id",
              href: "mailto:jdih@komisiyudisial.go.id",
            },
            {
              label: "(021)3905876",
              href: "tel:(021)3905876",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/jdih.komisiyudisial",
            },
            {
              label: "Tiktok",
              href: "https://www.tiktok.com/@jdih_komisiyudisial",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Subbagian Hukum dan Organisasi - Komisi Yudisial.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
