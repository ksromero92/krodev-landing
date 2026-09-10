export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-slate-900">

            {/* HEADER */}
            <header className="w-full border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 bg-krodev rounded-xl"></div>
                        <span className="font-semibold text-lg text-krodev">Krodev</span>
                    </div>

                    <nav className="hidden md:flex gap-6 text-sm">
                        <a href="#servicios" className="hover:text-krodev">Servicios</a>
                        <a href="#proyectos" className="hover:text-krodev">Proyectos</a>
                        <a href="#contacto" className="hover:text-krodev">Contacto</a>
                    </nav>
                </div>
            </header>

            {/* HERO */}
            <section className="flex-1 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Soluciones digitales e{" "}
                            <span className="text-krodev">inteligencia de datos</span>
                        </h1>
                        <p className="text-slate-700 text-lg mb-6">
                            Desarrollo web, automatización, dashboards y agentes IA para potenciar negocios.
                            Creadores de la plataforma SaaS <strong>KroBi</strong>.
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="#contacto"
                                className="px-6 py-3 bg-krodev text-white rounded-xl shadow hover:bg-krodev-dark transition"
                            >
                                Contactar
                            </a>

                            <a
                                href="https://krobi.io"
                                className="px-6 py-3 border border-krodev text-krodev rounded-xl hover:bg-krodev hover:text-white transition"
                            >
                                Ver KroBi
                            </a>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 p-6 bg-white shadow-md">
                        <h3 className="text-sm font-semibold text-slate-500 mb-2">Producto destacado</h3>
                        <h2 className="text-xl font-bold text-krodev mb-2">KroBi</h2>
                        <p className="text-slate-600 text-sm mb-4">
                            Plataforma de inteligencia en ventas, inventarios y facturación electrónica
                            para empresas de retail y distribución.
                        </p>

                        <div className="border border-slate-200 rounded-xl p-4 text-xs text-slate-700">
                            “¿Cómo se movieron las ventas este mes?”
                            <div className="mt-2 bg-krodev-light p-2 rounded text-krodev-dark">
                                Respuesta inmediata con IA conectada a tus datos.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICIOS */}
            <section id="servicios" className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">Servicios</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="border border-slate-200 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-krodev">Desarrollo Web</h3>
                            <p className="text-slate-700 mt-2 text-sm">
                                Sistemas a medida con React, .NET y Node. Aplicaciones modernas y escalables.
                            </p>
                        </div>

                        <div className="border border-slate-200 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-krodev">Inteligencia de Datos</h3>
                            <p className="text-slate-700 mt-2 text-sm">
                                Dashboards, análisis, automatización y motores de datos para negocio.
                            </p>
                        </div>

                        <div className="border border-slate-200 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-krodev">Automatización & IA</h3>
                            <p className="text-slate-700 mt-2 text-sm">
                                Integraciones, flujos automáticos, asistentes IA y sistemas inteligentes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROYECTOS */}
            <section id="proyectos" className="py-20 bg-slate-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-8">Proyectos</h2>

                    <div className="border border-slate-200 rounded-xl p-6 bg-white">
                        <h3 className="text-xl text-krodev font-semibold">KroBi</h3>
                        <p className="text-slate-700 text-sm mt-2">
                            Plataforma SaaS para análisis de ventas, inventarios y facturación electrónica.
                        </p>
                        <a href="https://krobi.io" className="text-krodev text-sm mt-4 inline-block hover:underline">
                            Ver proyecto →
                        </a>
                    </div>
                </div>
            </section>

            {/* CONTACTO */}
            <section id="contacto" className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">Contacto</h2>
                    <p className="text-slate-700 mb-6">
                        ¿Tienes un proyecto o necesitas asesoría técnica?
                        Escríbeme y hablemos.
                    </p>

                    <a
                        href="mailto:contacto@krodev.com"
                        className="px-6 py-3 bg-krodev text-white rounded-xl shadow hover:bg-krodev-dark transition"
                    >
                        contacto@krodev.com
                    </a>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
                © {new Date().getFullYear()} Krodev. Todos los derechos reservados.
            </footer>

        </div>
    );
}
