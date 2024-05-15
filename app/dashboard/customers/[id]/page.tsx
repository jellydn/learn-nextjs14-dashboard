export default function Page(props: unknown) {
  return (
    <div>
      Customer Page
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}
