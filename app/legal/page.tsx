export default function Legal() {
    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-gray-900">Aviso Legal</h1>

                <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Datos Identificativos</h2>
                        <p>
                            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico,
                            se informa a los usuarios del sitio web que el titular del dominio es:
                        </p>
                        <ul className="list-disc ml-6 mt-4">
                            <li>Denominación Social: Mudanzas Sarria S.L.</li>
                            <li>CIF: B12345678</li>
                            <li>Domicilio Social: Calle Barcelona 123, 08001 Barcelona, España</li>
                            <li>Email: info@mudanzassarria.com</li>
                            <li>Teléfono: +34 123 456 789</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Condiciones de Uso</h2>
                        <p>
                            El acceso y uso de este sitio web implica la aceptación de las presentes condiciones legales.
                            El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Propiedad Intelectual</h2>
                        <p>
                            Todos los contenidos, textos, imágenes, logos y demás elementos del sitio web son propiedad de Mudanzas Sarria S.L.
                            o de terceros que han autorizado su uso. Queda prohibida su reproducción sin autorización expresa.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Responsabilidad</h2>
                        <p>
                            Mudanzas Sarria S.L. no se hace responsable de los daños y perjuicios que pudieran derivarse del uso incorrecto del sitio web
                            o de la imposibilidad de acceso al mismo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Legislación Aplicable</h2>
                        <p>
                            Las presentes condiciones se rigen por la legislación española. Para cualquier controversia será competente la jurisdicción de Barcelona.
                        </p>
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
