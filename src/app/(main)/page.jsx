import Link from 'next/link'
import Head from 'next/head';
import { Container } from '@/components/Container'
import { EpisodePlayButton } from '@/components/EpisodePlayButton'
import { FormattedDate } from '@/components/FormattedDate'
import { getAllEpisodes } from '@/lib/episodes'

function PauseIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
      />
    </svg>
  )
}

function PlayIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" {...props}>
      <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
    </svg>
  )
}

function EpisodeEntry({ episode }) {
  let date = new Date(episode.published)

  return (
   
    <article
      aria-labelledby={`episode-${episode.id}-title`}
      className="py-10 sm:py-12"
    >
      <Head>
        <meta data-hid="title" name="title" content="Welcome to Big Machine" />
        <meta data-hid="description" name="description"
          content="Don't have a degree and feel like you should? Hey me too! Then again I love teaching myself things and sharing with people and I wouldn't have it any other way. That's what I do here."/>
        <meta data-hid="og:title" name="og:title" content="Welcome to Big Machine"/>
        <meta data-hid="og:description" name="og:description"
          content="Don't have a degree and feel like you should? Hey me too! Then again I love teaching myself things and sharing with people and I wouldn't have it any other way. That's what I do here."/>
        <meta data-hid="og:image" name="og:image" content="https://bigmachine.io/images/stuff.png"/>
        <meta data-hid="og:url" name="og:url" content="https://bigmachine.io/"/>
        <meta data-hid="twitter:title" name="twitter:title" content="Welcome to Big Machine"/>
        <meta data-hid="twitter:description" name="twitter:description"
          content="Don't have a degree and feel like you should? Hey me too! Then again I love teaching myself things and sharing with people and I wouldn't have it any other way. That's what I do here."/>
        <meta data-hid="twitter:image" name="twitter:image"
          content="https://bigmachine.io/images/stuff.png"/>
        <meta data-hid="twitter:creator" name="twitter:creator" content="@robconery"/>
        <meta data-hid="twitter:site" name="twitter:site" content="@robconery"/>
        <meta data-hid="twitter:card" name="twitter:card" content="summary_large_image"/>
      </Head>


      <Container>
        <div className="flex flex-col items-start">
          <p>
          <img src={episode.image} alt={episode.title} width={250} height={300} />
            
          </p>
          <h2
            id={`episode-${episode.id}-title`}
            className="mt-2 text-lg font-bold text-slate-900"
          >
            <Link href={`${episode.url}`}>{episode.title}</Link>
          </h2>
          <FormattedDate
            date={date}
            className="order-first font-mono text-sm leading-7 text-slate-500"
          />
          <div className="mt-1 text-base leading-7 text-slate-700" dangerouslySetInnerHTML={{ __html: episode.description }}>

          </div>
          <div className="mt-4 flex items-center gap-4">
            <EpisodePlayButton
              episode={episode}
              className="flex items-center gap-x-3 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
              playing={
                <>
                  <PauseIcon className="h-2.5 w-2.5 fill-current" />
                  <span aria-hidden="true">Listen</span>
                </>
              }
              paused={
                <>
                  <PlayIcon className="h-2.5 w-2.5 fill-current" />
                  <span aria-hidden="true">Listen</span>
                </>
              }
            />
            <span
              aria-hidden="true"
              className="text-sm font-bold text-slate-400"
            >
              /
            </span>
            <Link
              href={`${episode.url}`}
              className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
              aria-label={`Show notes for episode ${episode.title}`}
            >
              Show notes
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}

export default async function Home() {
  let episodes = await getAllEpisodes()

  return (
    <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
      <Container>
        <h1 className="text-2xl font-bold leading-7 text-slate-900">
          Episodes
        </h1>
      </Container>
      <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
        {episodes.map((episode) => (
          <EpisodeEntry key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  )
}

export const revalidate = 10
