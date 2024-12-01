import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-poppins' });

export const metadata = {
	title: 'El Haaretz - Une Aliyah Réussie',
	description: 'Accompagnement complet pour votre intégration en Israël.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<body className={`${inter.variable} ${poppins.variable} antialiased bg-gray-50`}>
				{children}
			</body>
		</html>
	);
}
