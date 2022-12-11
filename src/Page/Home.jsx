import '../style/App.css'

// ::: image ::: //
import About_img from '../image/Group.png'
import Logo from '../image/Logo.png'



// ::: card img ::: //
import Kol from '../image/kol.webp'


// ::: Video ::: //
import VKera from '../video/Vgif.webm'
import VCard from '../video/Vcard.webm'
import Vsga from '../video/Vsga.webm'

//  ::: Components ::: //
import NavBar from '../Components/NavBar'

// ::: Icons ::: //
import { FaFacebookSquare, FaInstagram, FaAward } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import { BsMessenger, BsWhatsapp, BsFilesAlt } from 'react-icons/bs'
import { FiHeadphones, FiDownload } from 'react-icons/fi'
import { RiMailSendFill } from 'react-icons/ri'
import { HiArrowSmRight } from 'react-icons/hi'
import { MdAttachEmail } from 'react-icons/md'
import { IoCloseSharp } from 'react-icons/io5'


// ::: React ::: //
import { useState, useRef } from 'react'
import ParticlesBackground from '../Components/ParticlesBackground/ParticlesBackground'

// ::: Framer Motion ::://
import { motion } from "framer-motion";


const Home = () => {

    // :: service Card ::: //
    // const [card1, setCard1] = useState(false)
    // const [card2, setCard2] = useState(false)
    // const [card3, setCard3] = useState(false)

    // Work Popups //
    const [popup, setPopup] = useState(false)
    const [popup2, setPopup2] = useState(false)
    const [popup3, setPopup3] = useState(false)

    // Work Video Popups //
    const [ppv, setPpv] = useState(false)
    const [ppv1, setPpv1] = useState(false)
    const [ppv2, setPpv2] = useState(false)


    // ::: Email js ::: //
    const form = useRef();

    // ::: Framer motion ::://
    const textAnimation = {
        offscreen: { x: -400, opacity: 0 },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: {
                bounce: 0.2,
                duration: 1.2
            }
        }
    }
    const descAnimation = {
        offscreen: { y: 400, opacity: 0 },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                bounce: 0.2,
                duration: 1.2
            }
        }
    }


    return (
        <>
            <NavBar />

            <main className='main'>

                {/* ::: Home section ::: */}
                <section className='home' id='home'>
                    <motion.div className='home__container container grid'
                        initial={'offscreen'}
                        whileInView={'onscreen'}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.9 }}
                    >
                        <div className='home__data'>
                            <motion.h1 className='home__title'
                                variants={textAnimation}
                            >
                                TAKE OUR PATH TO <br /> <span className="bleu">ABSOLUTE</span> DIGITALIZATION
                            </motion.h1>
                            <motion.p className='home__description'
                                variants={descAnimation}
                            >
                                Make your idea come true with great team and experience Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus qui voluptatem inventore ea impedit nihil, itaque assumenda suscipit nesciunt quasi soluta.
                            </motion.p>
                            <motion.a href='#contact' className='button'
                                variants={descAnimation}
                            >
                                <RiMailSendFill className='button__icon' /> Contactez Nous
                            </motion.a>
                        </div>
                        <img src={About_img} alt="" />

                    </motion.div>
                    <div className="background">
                        <ParticlesBackground />
                    </div>
                </section>

                {/* ::: About Section ::: */}
                <section className='about section' id='about'>
                    <h2 data-heading="Intro" className='section__title'>À Propos</h2>

                    <motion.div className='about__container container grid'
                        initial={'offscreen'}
                        whileInView={'onscreen'}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.2 }}
                    >
                        <motion.img src={About_img} alt='img' className='about__img'
                            variants={textAnimation}
                        />

                        <motion.div className='about__data'
                            initial={'offscreen'}
                            whileInView={'onscreen'}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.6 }}
                        >
                            <motion.h3 className='about__heading'
                                variants={textAnimation}
                            >
                                UNE SOLUTION GLOBALE, UN SUPPORT SUR MESURE OU UN SIMPLE CONSEIL?
                            </motion.h3>
                            <motion.p className='about__descripiton'
                                variants={textAnimation}
                            >
                                Notre groupe de communication apporte des solutions à tous les types d’entreprises ou institutions, grâce à notre large champ d’action et nos partenaires, nous pouvons assurer l’intégralité de vos projets, de leurs conceptions à leurs réalisations :
                                création d’identité visuelle, création graphique et édition, impression de supports publicitaires, rédaction de contenu, création de site Internet, gestion d’e-réputation, montages vidéo,
                                conseils en stratégie de communication & publicité, logiciel et développement.
                            </motion.p>

                            <motion.div className='about__info'>

                                <motion.div className='about__box'
                                    variants={textAnimation}
                                >
                                    <FaAward className='about__icon' />
                                    <h3 className='about__title'>Expérience</h3>
                                    <span className='about__subtitle'> + 7ans</span>
                                </motion.div>

                                <motion.div className='about__box'
                                    variants={textAnimation}
                                >
                                    <BsFilesAlt className='about__icon' />
                                    <h3 className='about__title'>Projets</h3>
                                    <span className='about__subtitle'> +150 </span>
                                </motion.div>

                                <motion.div className='about__box'
                                    variants={textAnimation}
                                >
                                    <FiHeadphones className='about__icon' />
                                    <h3 className='about__title'>Support</h3>
                                    <span className='about__subtitle'> en line</span>
                                </motion.div>

                            </motion.div>

                            <motion.a href="https://drive.google.com/file/d/1VxsPEykOnAFcgsSnX4wvvbq0yYtnLC1M/view?usp=share_link" target={"_blank"} download className='button'
                                variants={descAnimation}
                            >
                                <FiDownload />En savoir plus
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </section>

                {/* ::: Service Section ::: */}
                {/* <section className='service section' id='services'>
                    <h2 data-heading='Services' className='section__title'>Ce que nous offrons</h2>

                    <div className='services__container container grid'>

                        <div className='services__content'>
                            <div>
                                <MdLaptop className='services__icon' />
                                <h3 className='services__title'>Dev <br />Informatique</h3>
                            </div>

                            <span className='services__button' onClick={() => {
                                setCard1(true)
                            }}>
                                Voir plus <HiArrowSmRight className='services__button-icon' />
                            </span>

                            <div className={`services__model ${card1 && 'show__model'}`}>

                                <div className='services__model-content'>
                                    <IoCloseSharp className='services__model-close' onClick={() => {
                                        setCard1(false)
                                    }} />

                                    <h3 className='services__model-title'>Dev Informatique</h3>
                                    <p className='services__model-description'>Nous vous proposons des solutions informatique, clés en mains, adaptables à vos besoins et votre secteur d’activité.</p>

                                    <ul className='services__model-services grid'>

                                        <li className='services__model-service'>
                                            <HiOutlineCursorClick className='services__model-icon' />
                                            <p className='services__model-info'>Creation de sites Internet</p>
                                        </li>

                                        <li className='services__model-service'>
                                            <AiOutlineAppstore className='services__model-icon' />
                                            <p className='services__model-info'> Développement d'applications et logiciels</p>
                                        </li>

                                        <li className='services__model-service'>
                                            <VscServerProcess className='services__model-icon' />
                                            <p className='services__model-info'> Solutions CRM </p>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div className='services__content'>
                            <div>
                                <HiOutlineColorSwatch className='services__icon' />
                                <h3 className='services__title'> Marketing <br />Digital</h3>
                            </div>

                            <span className='services__button' onClick={() => {
                                setCard2(true)
                            }}>
                                Voir plus <HiArrowSmRight className='services__button-icon' />
                            </span>

                            <div className={`services__model ${card2 && 'show__model'}`}>

                                <div className='services__model-content'>
                                    <IoCloseSharp className='services__model-close' onClick={() => {
                                        setCard2(false)
                                    }} />

                                    <h3 className='services__model-title'>Marketing Digital</h3>
                                    <p className='services__model-description'>Nous créons des expériences uniques et rentables <br /> afin d'aider les entreprises à améliorer leur relation client au travers des dispositifs ingénieux, pour couvrir les enjeux d’acquisition et de rétention des utilisateurs.</p>

                                    <ul className='services__model-services grid'>

                                        <li className='services__model-service'>
                                            <BiNetworkChart className='services__model-icon' />
                                            <p className='services__model-info'>Gestion des réseaux sociaux</p>
                                        </li>

                                        <li className='services__model-service'>
                                            <HiOutlineUserGroup className='services__model-icon' />
                                            <p className='services__model-info'> Acquisition clients</p>
                                        </li>

                                        <li className='services__model-service'>
                                            <FaChartLine className='services__model-icon' />
                                            <p className='services__model-info'> Web & social marketing</p>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>

                        <div className='services__content'>
                            <div>
                                <MdOutlinePhotoSizeSelectLarge className='services__icon' />
                                <h3 className='services__title'>Infographie <br />& Design</h3>
                            </div>

                            <span className='services__button' onClick={() => {
                                setCard3(true)
                            }}>
                                Voir plus <HiArrowSmRight className='services__button-icon' />
                            </span>

                            <div className={`services__model ${card3 && 'show__model'}`}>

                                <div className='services__model-content'>
                                    <IoCloseSharp className='services__model-close' onClick={() => {
                                        setCard3(false)
                                    }} />

                                    <h3 className='services__model-title'>UX/Ui design</h3>
                                    <p className='services__model-description'>Une agence indépendante, avec comme idée maîtresse la souplesse et l'expertise. Nous réalisons des solutions étudiées au cas par cas pour chacun de nos clients.</p>

                                    <ul className='services__model-services grid'>

                                        <li className='services__model-service'>
                                            <MdWeb className='services__model-icon' />
                                            <p className='services__model-info'> Creation d'identité visuelle</p>
                                        </li>

                                        <li className='services__model-service'>
                                            <HiOutlineCubeTransparent className='services__model-icon' />
                                            <p className='services__model-info'> Modelisation 3D</p>
                                        </li>

                                        <li className='services__model-service'>
                                            <FaPrint className='services__model-icon' />
                                            <p className='services__model-info'> Impression & Signalétique</p>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>

                    </div>

                </section> */}

                {/* ::: Work Section ::: */}
                <section className='work section' id='service'>
                    <h2 data-heading='Service' className='section__title'>Ce que nous offrons</h2>


                    <div className='work__container container grid'>

                        <div className='work__card'>
                            <img src={Kol} className='work__img' alt='new digital way' />
                            <h3 className='work__title'>INGÉNIERIE DE LOGICIELS</h3>
                            <a href='/' target="_blank" rel="noreferrer" className='work__button'>Détails <HiArrowSmRight className='work__button-icon' /></a>

                        </div>

                        <div className='work__card'>
                            <img src={Kol} className='work__img' alt='new digital way' />
                            <h3 className='work__title'>INFRASTRUCTURE IT ET RÉSEAUX</h3>
                            <a href='/' target="_blank" rel="noreferrer" className='work__button'>Détails <HiArrowSmRight className='work__button-icon' /></a>
                        </div>

                        <div className='work__card'>
                            <img src={Kol} className='work__img' alt='new digital way' />
                            <h3 className='work__title'>Securité des systèmeS d’information</h3>
                            <a href='/' target="_blank" rel="noreferrer" className='work__button'>Détails <HiArrowSmRight className='work__button-icon' /></a>
                        </div>

                        <div className='work__card'>
                            <img src={Kol} className='work__img' alt='new digital way' />
                            <h3 className='work__title'>Réalisation Data Cente</h3>
                            <span className='work__button'>Détails <HiArrowSmRight className='work__button-icon' /></span>

                        </div>

                        <div className='work__card'>
                            <img src={Kol} className='work__img' alt='new digital way' />
                            <h3 className='work__title'>Hébergement</h3>
                            <span className='work__button' >Détails <HiArrowSmRight className='work__button-icon' /></span>

                        </div>

                        <div className='work__card'>
                            <img src={Kol} className='work__img' alt='new digital way' />
                            <h3 className='work__title'>Développement des applications mobile</h3>
                            <span className='work__button'>Détails <HiArrowSmRight className='work__button-icon' /></span>

                        </div>

                        <div className='work__card'>
                            <img src={Kol} className='work__img' alt='new digital way' />
                            <h3 className='work__title'>Audit Informatique</h3>
                            <span className='work__button'>Détails <HiArrowSmRight className='work__button-icon' /></span>

                        </div>

                        <div className='work__card'>
                            <img src={Kol} className='work__img' alt='new digital way' />
                            <h3 className='work__title'>Conseil et Assistance à la maîtrise d’ouvrage</h3>
                            <span className='work__button'>Détails <HiArrowSmRight className='work__button-icon' /></span>


                        </div>

                        <div className='work__card'>
                            <img src={Kol} className='work__img' alt='new digital way' />
                            <h3 className='work__title'>Formation</h3>
                            <span className='work__button'>Détails <HiArrowSmRight className='work__button-icon' /></span>
                        </div>
                    </div>



                    {/* ::: Popup ::: */}

                    {/* mobilis */}
                    {/* <div className={`portfolio__popup ${popup && 'show__popup'}`}>
                        <div className='portfolio__popup-inner'>
                            <div className='portfolio__popup-content grid'>

                                <IoCloseSharp className='protfolio__popup-close' onClick={() => {
                                    setPopup(false)
                                }} />
                                <div className='pp__thumbnail'>
                                    <img src={Mobilis} className='pp__img' alt='new digital way' />
                                </div>

                                <div className='portfolio__popup-info'>

                                    <div className='portfolio__popup-body'>
                                        <div className='portfolio__item-details'>
                                            <h3 className='details__title'>Mobilis</h3>
                                            <p className='details__description'>Réalisation des concepts pour mobilis depuis 2014, des campagnes 360, du master visuel aux adaptations en tout genre, affiches, affichage urbain, insertion press, PLV ftyers, bâches, autocollants ...</p>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div> */}

                    {/* Asus Algerie */}
                    {/* <div className={`portfolio__popup ${popup2 && 'show__popup'}`}>
                        <div className='portfolio__popup-inner'>
                            <div className='portfolio__popup-content grid'>

                                <IoCloseSharp className='protfolio__popup-close' onClick={() => {
                                    setPopup2(false)
                                }} />
                                <div className='pp__thumbnail'>
                                    <img src={Rog} className='pp__img' alt='new digital way' />
                                </div>

                                <div className='portfolio__popup-info'>
                                    <div className='portfolio__popup-body'>
                                        <div className='portfolio__item-details'>
                                            <h3 className='details__title'>Asus Algerie</h3>
                                            <p className='details__description'>Réalisation de divers conceptions graphiques (affichage urbain et digitale) et une campagne 360 aboutissant à un evenement pour célébrer les 30 ans d'ASUS</p>



                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div> */}

                    {/* Sim */}
                    {/* <div className={`portfolio__popup ${popup3 && 'show__popup'}`}>
                        <div className='portfolio__popup-inner'>
                            <div className='portfolio__popup-content grid'>

                                <IoCloseSharp className='protfolio__popup-close' onClick={() => {
                                    setPopup3(false)
                                }} />
                                <div className='pp__thumbnail'>
                                    <img src={Sim} className='pp__img' alt='new digital way' />
                                </div>

                                <div className='portfolio__popup-info'>
                                    <div className='portfolio__popup-body'>
                                        <div className='portfolio__item-details'>
                                            <h3 className='details__title'>Sim</h3>
                                            <p className='details__description'>Group sim conception, realisation et production nous avons accompagner le group dans divers domaines tel que: cadeau de fin d'année, etiquette, packaging, site web et animaiton motion. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}



                    {/* Video Popup */}
                    <div className={`video__popup ${ppv && 'show__ppv'}`}>
                        <div className='video__popup-inner'>
                            <div className='video__popup-content grid'>

                                <IoCloseSharp className='video__popup-close' onClick={() => {
                                    setPpv(false)
                                }} />

                                <video controls src={VKera} type='mp4' className='video' />

                            </div>
                        </div>
                    </div>

                    <div className={`video__popup ${ppv1 && 'show__ppv'}`}>
                        <div className='video__popup-inner'>
                            <div className='video__popup-content grid'>

                                <IoCloseSharp className='video__popup-close' onClick={() => {
                                    setPpv1(false)
                                }} />

                                <video controls src={VCard} type='mp4' className='video' />

                            </div>
                        </div>
                    </div>

                    <div className={`video__popup ${ppv2 && 'show__ppv'}`}>
                        <div className='video__popup-inner'>
                            <div className='video__popup-content grid'>

                                <IoCloseSharp className='video__popup-close' onClick={() => {
                                    setPpv2(false)
                                }} />

                                <video controls src={Vsga} type='mp4' className='video' />

                            </div>
                        </div>
                    </div>


                </section>

                {/* ::: Contact section ::: */}
                <section className='contact section' id='contact'>
                    <h2 data-heading="Get in touch" className='section__title'>Contactez-nous</h2>

                    <div className='contact__container container grid'>
                        {/* left */}
                        <div className='contact__content'>
                            <div className='contact__info'>

                                <a className='contact__card' href='mailto:contact@ndw.com' target="_blank" rel='noreferrer'>
                                    <MdAttachEmail className='contact__card-icon ' />
                                    <h3 className='contact__card-title'>Email</h3>
                                    <span className='contact__card-data'>contact@ndw.com</span>

                                    <span className='contact__button'>
                                        <a href='mailto:contact@ndw.com' className='contact__icon-iconn' target="_blank" rel='noreferrer'>
                                            Ecrire <HiArrowSmRight className='contact__button-icon ' />
                                        </a>
                                    </span>
                                </a>

                                <a href='tel:+213560845854' className='contact__card' target="_blank" rel='noreferrer'>
                                    <BsWhatsapp className='contact__card-icon ' />
                                    <h3 className='contact__card-title'>Whatsapp</h3>
                                    <span className='contact__card-data'>+213 560 005 054</span>

                                    <span className='contact__button'>
                                        <a href='tel+213560845854' className='contact__icon-iconn' target="_blank" rel='noreferrer'>
                                            Appeler <HiArrowSmRight className='contact__button-icon' />
                                        </a>
                                    </span>
                                </a>

                                <a href='contact@ndw.com' className='contact__card' target="_blank" rel='noreferrer'>
                                    <BsMessenger className='contact__card-icon ' />
                                    <h3 className='contact__card-title'>Messenger</h3>
                                    <span className='contact__card-data'>New Digital Way</span>

                                    <span className='contact__button'>
                                        <a href='contact@ndw.com' className='contact__icon-iconn' target="_blank" rel='noreferrer'>
                                            Ecrire <HiArrowSmRight className='contact__button-icon' />
                                        </a>
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* right */}
                        <div className='contact__content'>
                            <form ref={form} className='contact__form'>
                                <div className='input__container'>
                                    <input type="text" name="name" className='input' placeholder='Nom Complet/Raison Sociale' required />
                                </div>

                                <div className='input__container'>
                                    <input type="email" name="email" className='input' placeholder='Email' required />
                                </div>

                                <div className='input__container'>
                                    <input type="tel" name="phone" className='input' placeholder='Numéro de téléphone' required />
                                </div>

                                <div className='input__container'>
                                    <textarea name="message" cols='0' rows='7' className='input' placeholder='Message' />
                                </div>

                                <input type="submit" value="Envoyer" className='button buttons' onClick={() => {
                                    alert('Votre message a bien été envoyé, Nous reviendrons vers vous au plus vite !')
                                }} />
                            </form>
                        </div>
                    </div>
                </section>

                {/* ::: Footer ::: */}
                <section className='footer section' id='footer'>
                    <div className='footer__bg'>
                        <div className='footer__container container grid'>
                            <div className='footer__i'>
                                <img src={Logo} alt='new digital way' className='footer__img' />
                            </div>

                            {/* <ul className='footer__links'>
                                <li>
                                    <a href='#services' className='footer__link'>Services</a>
                                </li>

                                <li>
                                    <a href='#work' className='footer__link'>Work</a>
                                </li>

                                <li>
                                    <a href='#contact' className='footer__link'>Contact</a>
                                </li>
                            </ul> */}

                            <div className='footer__socials'>
                                <a href='/' target="_blank" rel='noreferrer' className='footer__social'>
                                    <FaFacebookSquare className='facebook' />
                                </a>

                                <a href='/' target="_blank" rel='noreferrer' className='footer__social'>
                                    <FaInstagram className='instagram' />
                                </a>

                                <a href='/' target="_blank" rel='noreferrer' className='footer__social'>
                                    <BiPhoneCall className='viber' />
                                </a>

                            </div>

                        </div>
                        <div className="footer__content container">
                            <div className="footer__right">
                                <h2 className="footer__title">NEW DIGITAL WAY</h2>
                                <p className="footer__desc">New Digital Way est une société spécialisée dans la digitalisation des entreprises, propose des solutions
                                    informatiques et accompagne ses clients dans leur croissance et évolutions technologiques.
                                </p>
                                <br />
                                <p className="footer__desc">Avec new digital way amenez votre entreprise à l'ère numérique.</p>
                                <br />
                                <ul className="footer__info">
                                    <li>Abban Ramdan, Alger Centre</li>
                                    <li>info@newdigitalway.dz</li>
                                    <li>(+213) 770 69 22 21</li>
                                </ul>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12782.590312791845!2d3.0599372!3d36.7790211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7b1e60c573fac063!2sNew%20Digital%20Way!5e0!3m2!1sfr!2sdz!4v1670502222843!5m2!1sfr!2sdz"
                                width="40%"
                                height="250px"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                            />
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Home