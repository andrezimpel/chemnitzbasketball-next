import Event from './event'
import Video from './video'

export default function IndexPage(): JSX.Element {
  return (
    <div>
      <Event />
      <Video />
      <div>form</div>
      <div>messages</div>
      <div>FAQ</div>
    </div>
  )
}