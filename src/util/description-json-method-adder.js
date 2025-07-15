import description from '../../src/json/description.json';
import cvPdf from '../assets/pdf/cv _justine_english.pdf';

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
    const link = document.createElement('a');
    link.href = cvPdf;
    link.download = 'cv_justine_ingles.pdf';
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