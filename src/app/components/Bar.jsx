import { Roboto_Condensed } from 'next/font/google';

const Font = Roboto_Condensed({
	subsets: ['latin'],
	weight: ['400'],
});

export default function Bar() {
	return (
		<div className="w-full bg-customBlue text-white text-center py-3">
			<p className={`${Font.className} text-sm md:text-base`}>Site en construction. Pour plus d'informations, Contactez-nous.</p>
		</div>
	);
}