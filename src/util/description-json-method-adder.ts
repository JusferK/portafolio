import description from '../json/profile.json';
import cvPdfEng from '/assets/pdf/cv _justine_english.pdf';
import cvPdfEsp from '/assets/pdf/cv_justine_spanish.pdf';
import type { Description, ProfileDescription, SocialMediaAction } from '../type/description.type';

const downloadCv = () => {
    const language = prompt("¿Qué versión del CV quieres? (es/en)") ?? '';

    const link = document.createElement('a');

    if (language.toLowerCase() === "es") {
        link.href = cvPdfEsp;
        link.download = 'cv_justine_spanish.pdf';
    } else if (language.toLowerCase() === "en") {
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

};

const openWindow = (item: Description): Window | null => window.open(item.link, '_blank', 'noopener, noreferrer');

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

const socialMediaActionMap: Record<string, SocialMediaAction> = {
    Linkedin: openWindow,
    Twitter: openWindow,
    Github: openWindow,
    Mail: sendMail,
    Whatsapp: openWhatsapp,
    Curriculum: downloadCv,
};

const profileDescription: ProfileDescription = {
    ...description,
    socialMedia: description.socialMedia.map(media => ({
        ...media,
        clickHandler: socialMediaActionMap[media.name] ?? (() => {}),
    })),
};

export default profileDescription;
