export default function Footer() {
	return (
		<footer className="bg-blue-950 text-white py-12">
			<div className="container mx-auto px-4 text-center">
				<p className="">&copy; {new Date().getFullYear()} EL HAARTEZ. Tous droits réservés.</p>
				<div className="mt-4">
					<a href="#" className="text-blue-300 hover:text-white mx-2">Politique de confidentialité</a>
					<a href="#" className="text-blue-300 hover:text-white mx-2">Conditions d'utilisation</a>
				</div>
			</div>
		</footer>
	)
}
