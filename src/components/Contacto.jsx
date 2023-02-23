const Contacto = () => {
  return (
    <>
        <footer id="contacto" className="bg-[#21202e]">

            <div className="container flex flex-col gap-6 px-5 py-10 lg:flex-row lg:justify-evenly">

                <div>
                    <h1 className="text-white font-medium text-3xl">Contactanos </h1><br />
                    <div className="text-slate-300 my-3 flex flex-col gap-5 ">
                        <p className="flex gap-2 underline-offset-1 ">
                            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z"/></svg>
                                Telefono:
                            <a className="hover:font-bold underline underline-offset-2" href="tel:+51956902562">
                                956902562
                            </a>
                        </p>
                        <p className="flex gap-2 underline-offset-1 ">
                            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
                                Email:
                            <a className='hover:font-bold underline underline-offset-2' href="mailto:voluntariadoicayoung@gmail.com">
                                voluntariadoicayoung@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                <div>
                    <h1 className="text-white font-medium text-3xl">Siguenos </h1><br />
                    <div className='text-slate-300  flex flex-col gap-5 my-3'>
                        <a className="flex gap-2 hover:font-bold underline underline-offset-2" href={'https://www.facebook.com/voluntariadoicayoung/?ref=applinks'} target='_blank' rel="noreferrer">
                            <svg className='fill-white hover:fill-black active:fill-blue-700' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
                            Voluntariado Ica Young
                        </a>
                        <a className="flex gap-2 hover:font-bold underline underline-offset-2" href="https://wa.me/51956902562?text=Hola,%20quiero%20unirme%20al%20voluntariado" target='_blank' rel="noreferrer">
                            <svg className='fill-white hover:fill-black active:fill-green-600' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"/></svg>
                            Escribenos: 956902562
                        </a>

                    </div>

                </div>

            </div>

                <div className="text-center text-slate-300 py-3">
                    <span>ICA YOUNG | Todos los derechos reservados</span>
                </div>

        </footer>

    </>
  )
}

export default Contacto
