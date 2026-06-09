import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Portfolio } from '@/components/portfolio'
import { Services } from '@/components/services'
import { Process } from '@/components/process'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
