import Head from 'next/head'
import Image from 'next/image'
import WithTitleLayout from '../components/layouts/with-title'
import MintForm from '../components/mint-form'
import Image1 from '../public/images/bg/bg-image-1.jpg'

export default function Mint() {
  const title = 'Tomoe Gozen NFT - Mint'
  const description =
    '8000 female warriors inspired by Tale of Heike and the legendary tale of a woman named Tomoe Gozen.'
  const image = '/images/og-image.png'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://www.tomoegozen.io" />
        <meta property="og:site_name" content="Tomoe Gozen" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@TomoeGozenNFTs" />
        <meta name="twitter:creator" content="@TomoeGozenNFTs" />
      </Head>
      <div className="rn-upload-variant-area varient rn-section-gap">
        <div className="container">
          <div className="row">
            <div className="upload-variant-title-wrapper">
              <h3 className="title text-center">Mint a Tomoe Gozen</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus inventore, officiis. Alias aspernatur laboriosam
                ratione! Doloremque ipsa nesciunt sed!
              </p>
            </div>
          </div>
          <MintForm />
        </div>
      </div>
    </>
  )
}

Mint.getLayout = function getLayout(page) {
  return <WithTitleLayout title="Mint">{page}</WithTitleLayout>
}
