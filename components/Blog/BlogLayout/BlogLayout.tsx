import { Alert } from 'components/AlertBanner'

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} loading={loading} />
        <main>{children}</main>
      </div>
    </>
  )
}
