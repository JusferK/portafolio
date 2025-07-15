import description from '../../src/json/description.json';
import cvPdfEng from '../assets/pdf/cv _justine_english.pdf';
import cvPdfEsp from '../assets/pdf/cv_justine_spanish.pdf';

const profileDescription = description;

const getMethodHandler = (socialMedia) => {
    switch (socialMedia.name) {
        case 'Linkedln':
            return (media) => openWindow(media);
        case 'Twitter':
            return (media) => openWindow(media);
        case 'Github':
            return (media) => openWindow(media);
        case 'Mail':
            return () => sendMail();
        case 'Whatsapp':
            return () => openWhatsapp();
        case 'Curriculum':
            return () => downloadCv();
        default:
            return () => {};
    }
}

const downloadCv = async () => {

    const idioma = prompt("¿Qué versión del CV quieres? (es/en)");

    const link = document.createElement('a');

    if (idioma === "es") {
        link.href = cvPdfEsp;
        link.download = 'cv_justine_spanish.pdf';
    } else if (idioma === "en") {
        link.href = cvPdfEng;
        link.download = 'cv_justine_ingles.pdf';
    } else {
        alert("Opción no válida. Intenta con 'es' o 'en'.");
        return;
    }


    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(pdfUrl);

};

const openWindow = (item) => window.open(item.link, '_blank', 'noopener, noreferrer');

const sendMail = () => {
    const mail = 'justinearriagam@gmail.com';
    const subject = 'Cotización de servicios';
    const body = 'Me gustaría cotizar tus servicios, ¿tienes disponibilidad para una reunión?';
    const url = `mailto:${mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank', 'noopener noreferrer');
};

const openWhatsapp = () => {
    const phoneNumber = '50237795593';
    const defaultMessage = `Me gustaría cotizar tus servicios, ¿tienes disponibilidad para una reunión?`;
    const encodeMessage = encodeURIComponent(defaultMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encodeMessage}`
    window.open(url, '_blank', 'noopener, noreferrer');
};

profileDescription.socialMedia = profileDescription.socialMedia.map((media) => {
    media.clickHandler = getMethodHandler(media);
    return media;
});

export default profileDescription;