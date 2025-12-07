'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already accepted/rejected cookies
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowBanner(false);
    };

    const rejectCookies = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 shadow-2xl z-50 animate-slide-up">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2">🍪 Este sitio utiliza cookies</h3>
                        <p className="text-sm text-gray-300">
                            Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
                            Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra{' '}
                            <a href="/cookies" className="underline hover:text-blue-400">
                                Política de Cookies
                            </a>
                            .
                        </p>
                    </div>
                    <div className="flex gap-4 flex-shrink-0">
                        <button
                            onClick={rejectCookies}
                            className="px-6 py-3 bg-gray-700 text-white rounded-full font-semibold hover:bg-gray-600 transition"
                        >
                            Rechazar
                        </button>
                        <button
                            onClick={acceptCookies}
                            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
                        >
                            Aceptar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
