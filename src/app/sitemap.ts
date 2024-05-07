export default function sitemap() {
  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
    },
  ];
}
