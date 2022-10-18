export default function Album({ info }) {
  return (
    <div>
      <p>{info.artist}</p>
      <p>{info.album}</p>
    </div>
  )
}