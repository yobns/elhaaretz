'use client';

import { Dialog } from '@headlessui/react';
import { useState } from 'react';

export default function ContactModal({ isOpen, onClose }) {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setSuccess(false);

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSuccess(true);
				setFormData({ name: '', email: '', message: '' });
			} else {
				throw new Error('Erreur lors de l\'envoi');
			}
		} catch (error) {
			alert('Une erreur est survenue. Veuillez réessayer.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<Dialog
			open={isOpen}
			onClose={onClose}
			className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
		>
			<div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
			<Dialog.Panel className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl transform transition-all">
				<button
					onClick={onClose}
					className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
					aria-label="Fermer"
				>
					✖
				</button>
				<Dialog.Title className="text-xl font-semibold text-gray-900 px-6 py-4 border-b">
					Contactez-nous
				</Dialog.Title>
				<div className="px-6 py-5">
					<p className="text-sm text-gray-600 mb-4">
						Remplissez ce formulaire pour nous envoyer un message.<br />
						Nous vous reconnecterons dans les plus brefs délais.
					</p>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Nom
							</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
								required
								className="block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
								placeholder="Votre nom"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Email
							</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								required
								className="block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
								placeholder="Votre email"
							/>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Message
							</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleInputChange}
								required
								rows="4"
								className="block w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 transition resize-none"
								placeholder="Votre message"
							/>
						</div>
						<button
							type="submit"
							disabled={loading}
							className={`w-full py-2 rounded-md text-white font-medium transition ${loading
									? 'bg-blue-400 cursor-not-allowed'
									: 'bg-blue-600 hover:bg-blue-700'
								}`}
						>
							{loading ? 'Envoi en cours...' : 'Envoyer'}
						</button>
					</form>
					{success && (
						<p className="text-center text-sm text-green-500 mt-4">
							Message envoyé avec succès !
						</p>
					)}
				</div>
			</Dialog.Panel>
		</Dialog>
	);
}