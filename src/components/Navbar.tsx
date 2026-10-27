import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <p className="education-disclaimer">This website was created for educational purposes only and does not represent or reflect the official website of the business.</p>
      <motion.nav className="navbar" aria-label="Main navigation" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <a className="brand" href="#home" aria-label="Wendy Loves This home">wendy loves this<span aria-hidden="true">♡</span></a>
        <div className="desktop-links"><a href="#collections">The collections</a><a href="#story">The story</a><a href="https://wendylovesthis.com/pages/contact" target="_blank" rel="noreferrer">Contact ↗</a></div>
        <motion.a className="nav-cta" href="https://wendylovesthis.com/" target="_blank" rel="noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>Visit official shop ↗</motion.a>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
      </motion.nav>
      {open && <div className="mobile-menu" id="mobile-menu"><a href="#collections" onClick={() => setOpen(false)}>The collections</a><a href="#story" onClick={() => setOpen(false)}>The story</a><a href="https://wendylovesthis.com/" target="_blank" rel="noreferrer">Visit official shop ↗</a></div>}
    </header>
  )
}
