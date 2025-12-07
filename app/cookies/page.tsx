import Link from 'next/link';

export const metadata = {
    title: 'Política de Cookies - Mudanzas Sarria',
    description: 'Política de cookies de Mudanzas Sarria',
};

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
                    ← Volver al inicio
                </Link>
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Política de Cookies</h1>

                <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">¿Qué son las cookies?</h2>
                        <p>
                            Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo cuando los visita.
                            Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar
                            información a los propietarios del sitio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">¿Qué tipos de cookies utilizamos?</h2>

                        <h3 className="text-xl font-bold mb-3 mt-6">Cookies Técnicas (Necesarias)</h3>
                        <p>
                            Son imprescindibles para el correcto funcionamiento del sitio web. Permiten la navegación y el uso de las diferentes
                            opciones o servicios que existen en ella.
                        </p>

                        <h3 className="text-xl font-bold mb-3 mt-6">Cookies de Preferencias</h3>
                        <p>
                            Permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden
                            diferenciar su experiencia de la de otros usuarios (idioma, número de resultados a mostrar, etc.).
                        </p>

                        <h3 className="text-xl font-bold mb-3 mt-6">Cookies de Análisis</h3>
                        <p>
                            Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de cómo utilizan los usuarios
                            el servicio ofrecido. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de
                            productos o servicios que le ofrecemos.
                        </p>

                        <h3 className="text-xl font-bold mb-3 mt-6">Cookies Publicitarias</h3>
                        <p>
                            Permiten la gestión de los espacios publicitarios en base a criterios específicos, como la frecuencia en la que se
                            muestran los anuncios.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">¿Cómo gestionar las cookies?</h2>
                        <p>
                            Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones
                            del navegador instalado en su dispositivo:
                        </p>
                        <ul className="list-disc ml-6 mt-4">
                            <li>Chrome: Configuración {'>'} Privacidad y seguridad {'>'} Cookies</li>
                            <li>Firefox: Opciones {'>'} Privacidad y seguridad {'>'} Cookies</li>
                            <li>Safari: Preferencias {'>'} Privacidad {'>'} Cookies</li>
                            <li>Edge: Configuración {'>'} Privacidad, búsqueda y servicios {'>'} Cookies</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Cookies de terceros</h2>
                        <p>
                            Este sitio web puede utilizar servicios de terceros que recopilan información con fines estadísticos,
                            de uso del sitio y para la prestación de otros servicios relacionados con la actividad del sitio web y otros servicios de Internet.
                        </p>
                        <p className="mt-4">
                            En particular, este sitio web utiliza Google Analytics, un servicio analítico de web prestado por Google, Inc.
                            Puede consultar más información sobre las cookies de Google Analytics en:{' '}
                            <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                https://policies.google.com/technologies/cookies
                            </a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Actualización de la Política de Cookies</h2>
                        <p>
                            Esta política de cookies puede ser modificada en función de exigencias legislativas, reglamentarias,
                            o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">Contacto</h2>
                        <p>
                            Para cualquier duda o consulta acerca de esta política de cookies, puede contactar con nosotros a través de:
                        </p>
                        <ul className="list-disc ml-6 mt-4">
                            <li>Email: info@mudanzassarria.com</li>
                            <li>Teléfono: +34 123 456 789</li>
                        </ul>
                    </section>
                </div>

                <div className="mt-8 text-center">
                    <a href="/" className="text-blue-600 hover:text-blue-700 font-semibold">
                        ← Volver al inicio
                    </a>
                </div>
            </div>
        </div>
    );
}
