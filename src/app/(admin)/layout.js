export const metadata = {
  title: 'Admin Panel for Gulnar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
