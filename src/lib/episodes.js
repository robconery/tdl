import { parse as parseFeed } from 'rss-to-json'
import { array, number, object, parse, string } from 'valibot'

export async function getAllEpisodes() {
  let FeedSchema = object({
    items: array(
      object({
        id: number(),
        title: string(),
        published: number(),
        description: string(),
        content: string(),
        enclosures: array(
          object({
            url: string(),
            type: string(),
          }),
        ),
      }),
    ),
  })

  //https://open.spotify.com/show/0u4yIncvhevlTX2gWDwSWA
  //https://feeds.buzzsprout.com/2263824.rss
  let feed = await parseFeed('https://feeds.buzzsprout.com/2263824.rss')

  //let items = parse(FeedSchema, feed).items

  let episodes = feed.items.map(
    ({ id, title, description, content, enclosures, published, itunes_image }) => ({
      id: (id.split(":")[2]),
      title: title,
      image: (itunes_image ? itunes_image.href : ""),
      published: new Date(published),
      description: description.replace("<p>","").replace("</p>",""),
      content,
      audio: enclosures.map((enclosure) => ({
        src: enclosure.url,
        type: enclosure.type,
      }))[0],
    }),
  )

  return episodes
}
