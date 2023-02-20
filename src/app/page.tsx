import About from './about'
import Architecture from './architecture'
import Event from './event'
import Faq from './faq'

export default function IndexPage(): JSX.Element {
  return (
    <div className="space-y-8 md:space-y-14">
      <Event />
      <Architecture />
      <About />
      <Faq />
      {/* <Video /> */}
      {/* <div>form</div>
      <div>messages</div>
      <div>FAQ</div> */}
    </div>
  )
}