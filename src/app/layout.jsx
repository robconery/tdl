import '@/styles/tailwind.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white antialiased">
      <head>
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap"
        />
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
      </head>
      <body className="flex min-h-full">
        <div className="w-full">{children}</div>
      </body>
    </html>
  )
}
