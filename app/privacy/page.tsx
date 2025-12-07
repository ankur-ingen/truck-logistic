export default function Privacy() {
    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-gray-900">Política de Privacidad</h1>

                <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Responsable del Tratamiento</h2>
                        <p>
                            Mudanzas Sarria S.L., con domicilio en Calle Barcelona 123, 08001 Barcelona, es el responsable del tratamiento
                            de los datos personales del Usuario y le informa que estos datos serán tratados de conformidad con lo dispuesto
                            en el Reglamento (UE) 2016/679 de 27 de abril (GDPR) y la Ley Orgánica 3/2018 de 5 de diciembre (LOPDGDD).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Finalidad del Tratamiento</h2>
                        <p>Los datos personales proporcionados serán utilizados para:</p>
                        <ul className="list-disc ml-6 mt-4">
                            <li>Gestionar solicitudes de presupuesto</li>
                            <li>Prestar servicios de mudanzas</li>
                            <li>Enviar comunicaciones comerciales (con su consentimiento)</li>
                            <li>Cumplir obligaciones legales y fiscales</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Legitimación</h2>
                        <p>
                            La base legal para el tratamiento de sus datos es la ejecución del contrato de servicios,
                            el cumplimiento de obligaciones legales y el consentimiento del usuario.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Conservación de Datos</h2>
                        <p>
                            Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron
                            y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Derechos del Usuario</h2>
                        <p>El usuario puede ejercer los siguientes derechos:</p>
                        <ul className="list-disc ml-6 mt-4">
                            <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos</li>
                            <li>Derecho de limitación y oposición a su tratamiento</li>
                            <li>Derecho a presentar una reclamación ante la autoridad de control (AEPD)</li>
                        </ul>
                        <p className="mt-4">
                            Para ejercer estos derechos, puede contactar con nosotros en: info@mudanzassarria.com
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Seguridad</h2>
                        <p>
                            Mudanzas Sarria S.L. ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad
                            de los datos de carácter personal y evitar su alteración, pérdida y acceso no autorizado.
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
