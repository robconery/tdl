import { Container } from '@/components/Container'
export default async function About() {

  return (
    <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
      <Container>
        <h1 className="text-2xl font-bold leading-7 text-slate-900">
          About This Developer&apos;s Life
        </h1>
        <p class="my-4">
          This podcast began as a weird experiment on a late night back in 2010. Rob had just listened to the late K. Scott Allen<a href="https://herdingcode.com/herding-code-63-victory-in-software-development-with-k-scott-allen/"> talk about victory in software development</a>, sharing a riveting story about the Battle of Antietam.
        </p>
        <p class="my-4">
          Inspiration set in:
          <i>we need more stories like this</i>. Personal stories, where you learn about other developers and their lives. Something like <a href="https://www.thisamericanlife.org/">This American Life</a>, but for programmers.
        </p>
        <p class="my-4">
          Rob sat down that night and recorded a few ideas and, for lack of a better name, called his experiment <i>This Developer&apos;s Life</i>. He recorded it in the open, asking some friends to share stories about being fired, and learned how to mix audio and also the extremely delicate art of adding music, which he is still trying to figure out.
        </p>
        <h2 class="text-2xl">Hello Scott</h2>
        <p  class="my-4">
          A month or so after the first show, <a href="https://hanselman.com">Scott Hanselman</a> joined up, adding his amazing talent at telling stories and interviewing people.
        </p>
        <p  class="my-4">
          Our audience grew quickly and within 4 months Rob&apos;s weird little experiment topped Apple Tech Podcasts, hitting number one for almost a month.
        </p>
        <h2 class="text-2xl">What&apos;s With the Music?</h2>
        <p class="my-4">
          Most tech podcasts don&apos;t include music. Ours does, and we&apos;ve hear <i>quite a bit of feedback</i> on the subject - most of it being positive. This was Rob&apos;s choice, as he wanted to do something like <i>This American Life</i>, but for programmers. The goal is cinematic storytelling, not a typical podcast with talking heads.
        </p>
        <p class="my-4">
          If you don&apos;t care for it, that&apos;s OK! We&apos;re not going to change.
        </p>
        <h2 class="text-2xl">Have a Story For Us?</h2>
        <p class="my-4">
          We love hearing from <i>anyone</i> with a story to tell! If you want to share yours, you can <a href="mailto:robconery@gmail.com">reach out to us via email</a>. Here is what we ask:
        </p>
        <p class="my-4">
          Record yourself with the best microphone you can find. Onboard laptop microphones are horrible, but you can probably use your phone to record a voice memo. Tell us what the story is about, and if you want, go into detail!
        </p>
        <p class="my-4">
          If it fits what we&apos;re doing, we&apos;ll reach out to you and ask for detail and setup a time to talk with you. If you included enough of a story that&apos;s ready to go, we&apos;ll reach out for permission to use it and a few other necessaries, and off we go!
        </p>

      </Container>
      
    </div>
  )
}