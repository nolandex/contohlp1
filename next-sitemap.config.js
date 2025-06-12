/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nolandex.my.id", // GANTI jika kamu pakai domain lain
  generateRobotsTxt: true,
  sitemapSize: 7000, // batas default Google
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin", "/login"], // halaman yang tidak perlu diindeks (opsional)
};
