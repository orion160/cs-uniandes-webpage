export const metadata = {
  title: "cs uniandes webpage",
  description: "cs uniandes webpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
