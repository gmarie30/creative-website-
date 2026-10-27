import { useState } from 'react'
import { motion } from 'framer-motion'

const official = 'https://wendylovesthis.com'
const images = {
  hero: `${official}/cdn/shop/files/IMG_6636_642f1a57-34a5-4ffe-b5a8-5cf7d607ba77_1080x.jpg?v=1786647314`,
  cotton: 'https://cdn.shopify.com/s/files/1/0621/6083/0717/files/498DC05D-36A5-49AB-BA2F-DBF76F589E9E_700x.jpg?v=1792190249',
  linen: 'https://cdn.shopify.com/s/files/1/0621/6083/0717/files/NavyLinenBlouseonWoodenHanger_700x.png?v=1792521951',
  accessories: `${official}/cdn/shop/files/BBC5586F-D6E4-47C6-974D-72059BA9DEEB_700x.jpg?v=1754596313`,
}
const collections = [
  { title: 'The resort collection', category: 'Clothing', note: 'HAND BLOCK PRINTED COTTON', description: 'Airy prints and relaxed shapes for days by the water.', image: images.cotton, alt: 'Floral lounge pants from Wendy Loves This', href: '/collections/beach' },
  { title: 'Wendy’s favorite finds', category: 'Clothing', note: 'A LITTLE EVERYDAY DISCOVERY', description: 'Discover easy layers and linen pieces from Italy.', image: images.linen, alt: 'Navy linen Lucia blouse displayed on a wooden hanger', href: '/collections/womens' },
  { title: 'The finishing touches', category: 'Accessories', note: 'DETAILS TO LOVE', description: 'Bags, jewelry, and accessories to make the look yours.', image: images.accessories, alt: 'Suede leather bag with striped handles from Wendy Loves This', href: '/collections/accessories' },
]
const fade = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.65 } }

export default function Hero() {
  const [filter, setFilter] = useState('All')
  const visible = collections.filter(item => filter === 'All' || item.category === filter)
  return (
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <img className="hero-image" src={images.hero} alt="A relaxed white linen outfit and woven bag, featured by Wendy Loves This" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content">
          <motion.div className="glass-badge" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>A LITTLE COASTAL. A LOT TO LOVE.</motion.div>
          <motion.h1 id="hero-title" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}><span>Made for sunshine.</span><span className="thin-line">Loved for real life.</span></motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>Meet Wendy Loves This: breezy cotton, beautiful linen, and favorite finds for wherever the day takes you.</motion.p>
          <motion.div className="glass-cta" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}><span>Your next favorite is waiting.</span><motion.a href="#collections" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>Explore the edit <span className="arrow-circle" aria-hidden="true">↗</span></motion.a></motion.div>
        </div>
        <motion.div className="hero-footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}><span>Easy layers. Beautiful details. Room to breathe.</span><a href="#collections">Find something you love ↓</a></motion.div>
      </section>

      <section className="collections section-wrap" id="collections" aria-labelledby="collection-title">
        <motion.div {...fade} className="section-heading"><div><p className="eyebrow">THE WENDY LOVES THIS EDIT</p><h2 id="collection-title">A wardrobe with <em>somewhere to go.</em></h2></div><p>From a slow morning to an evening out.<br />Find the pieces that feel like you.</p></motion.div>
        <div className="collection-filters" role="group" aria-label="Filter collections">{['All', 'Clothing', 'Accessories'].map(label => <motion.button key={label} type="button" aria-pressed={filter === label} onClick={() => setFilter(label)} whileTap={{ scale: 0.96 }}>{label === 'All' ? 'All collections' : label}</motion.button>)}<span className="results-count" aria-live="polite">{visible.length} {visible.length === 1 ? 'collection' : 'collections'}</span></div>
        <div className="collection-grid">{visible.map(item => <motion.article key={item.title} {...fade} className="collection-card"><a href={official + item.href} target="_blank" rel="noreferrer"><div className="card-image-wrap"><img src={item.image} alt={item.alt} loading="lazy" /><span className="card-arrow" aria-hidden="true">↗</span></div><p className="eyebrow">{item.note}</p><h3>{item.title}</h3><p>{item.description}</p><span className="shop-link">Explore on the official shop ↗</span></a></motion.article>)}</div>
      </section>

      <section className="story" id="story" aria-labelledby="story-title"><motion.div {...fade} className="story-inner"><span className="story-heart" aria-hidden="true">♡</span><p className="eyebrow">THOUGHTFULLY FOUND. EFFORTLESSLY WORN.</p><h2 id="story-title">Good days start<br />with <em>feeling like yourself.</em></h2><p>Wendy Loves This brings together cotton garments hand block printed in India, linen from Italy, and finds from around the world. Think relaxed fits, light fabrics, and pieces you can take from the coast into everyday life.</p><motion.a className="button-dark" href={official} target="_blank" rel="noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>Discover Wendy Loves This ↗</motion.a></motion.div></section>
      <footer className="site-footer"><a className="brand" href="#home">wendy loves this<span aria-hidden="true">♡</span></a><p>Educational concept · Business information and imagery from <a href={official} target="_blank" rel="noreferrer">wendylovesthis.com ↗</a></p></footer>
    </main>
  )
}
