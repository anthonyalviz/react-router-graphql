import en from './en'

const STRINGS = generateLocalization(navigator.language)

function generateLocalization(language) {
    if (language === 'en-US') {
        return en
    }
}

export default STRINGS