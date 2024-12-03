import Nav from '@/app/components/Nav'
import Footer from '@/app/components/Footer'
import Contact from '@/app/components/Contact'
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import ProgramHighlights from '@/app/components/ProgramHighlights'
import SupportDetails from '@/app/components/SupportDetails'
import TextSection from './components/TextSection'
import { Separator } from './components/ui/separator'
import Bar from './components/Bar'

export default function Component() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-50">
			<Nav />
			<main className="flex-grow">
				<Hero />
				<Bar />
				<ProgramHighlights />
				<TextSection />
				<Separator className="my-12" />
				<About />
				<Separator className="my-8" />
				<SupportDetails />
				<Separator className="my-4" />
				<Contact />
			</main>
			<Footer />
		</div>
	)
}
