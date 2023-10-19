import '@/styles/tailwind.css'

export const metadata = {
  metadataBase: "https://thisdeveloperslife.com",
  title: "This Developer's Life",
  description:'Stories from tech people just like you.',
  openGraph: {
    title: "This Developer's Life - stories from tech folks sharing their lives",
    description: 'Stories from tech people just like you.',
    url: 'https://thisdeveloperslife.com',
    siteName: "This Developer's Life",
    images: [
      {
        url: 'https://www.buzzsprout.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCSmd2MXdVPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c685eb482d1d6ad5d9cc7a24d76d692d18ab89e3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRFRZd01IZzJNREJlQmpzR1ZEb01aM0poZG1sMGVVa2lDMk5sYm5SbGNnWTdCbFE2QzJWNGRHVnVkRWtpRERZd01IZzJNREFHT3daVU9neHhkV0ZzYVhSNWFWVTZEMk52Ykc5eWMzQmhZMlZKSWdselVrZENCanNHVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--8a9b4b1bc245a46b538f72d4d9b2ab0a7fbe8ac1/cover.jpg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "This Developer's Life - stories from tech folks sharing their lives",
    description: 'Stories from tech people just like you.',
    creator: '@shanselman,@robconery',
    images: ['https://www.buzzsprout.com/rails/active_storage/representations/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCSmd2MXdVPSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c685eb482d1d6ad5d9cc7a24d76d692d18ab89e3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2QzNKbGMybDZaVWtpRFRZd01IZzJNREJlQmpzR1ZEb01aM0poZG1sMGVVa2lDMk5sYm5SbGNnWTdCbFE2QzJWNGRHVnVkRWtpRERZd01IZzJNREFHT3daVU9neHhkV0ZzYVhSNWFWVTZEMk52Ykc5eWMzQmhZMlZKSWdselVrZENCanNHVkE9PSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--8a9b4b1bc245a46b538f72d4d9b2ab0a7fbe8ac1/cover.jpg'],
  },
}

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
      </head>
      <body className="flex min-h-full">
        <div className="w-full">{children}</div>
      </body>
    </html>
  )
}
