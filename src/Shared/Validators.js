class Validators {}
Validators.nameValidator = (name) => {
    name = name.trim();
    const regexpCharactersSet = /^[a-z\s]*$/i;
    const regexpLength = /^.{2,128}$/;

    if ( !regexpCharactersSet.test(name) ) return "Invalid character set";
    if ( !regexpLength.test(name) ) return "The length should be 2-128";
    return null;
};
Validators.emailValidator = (email) => {
    email = email.trim();
    const regexpValue = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+@[a-z0-9!#$%&'*+/=?^_`{|}~-]+\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+$/i;
    const regexpLength = /^.{6,254}$/;

    if ( !regexpValue.test(email) ) return "Mail does not match format";
    if ( !regexpLength.test(email) ) return "The length should be 6-254";
    return null;
};
Validators.emailRFCValidator = (email) => {
    email = email.trim();
    const regexpValue = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if ( !regexpValue.test(email) ) return "Mail does not match format";
    return null;
};
Validators.idValidator = (id) => {
    const regexpCharactersSet = /^[a-z\d_]*$/i;
    const regexpLength = /^.{2,128}$/;

    if ( !regexpCharactersSet.test(id) ) return "Invalid character set";
    if ( !regexpLength.test(id) ) return "The length should be 2-128";
    return null;
};
Validators.idMaskedValidator = (id) => {
    const regexpLength = /^.{2,128}$/;

    if ( !regexpLength.test(id) ) return "The length should be 2-128";
    return null;
};
Validators.phoneValidator = (phone) => {
    const regexpValue = /\+38\(0\d\d\)\s\d\d\d-\d\d-\d\d/;

    if ( !regexpValue.test(phone) ) return "Number does not match format";
    return null;
};
Validators.additionalPhonesValidator = (phones) => {
    const regexpPhoneNumber = /^\+?\d{10,13}$/;
    const regexpSeparator = /[,;]\s?/; // Как добавить разделитель "только пробел"?
    let phonesArr = phones.split(regexpSeparator);
    let invalidPhone = null;
    for (let phone of phonesArr) {
        if (!regexpPhoneNumber.test(phone)) {
            invalidPhone = phone;
            break;
        }
    }

    if ( invalidPhone ) return `Number ${invalidPhone} does not match the format`;
    return null;
};
Validators.pinValidator = (pin) => {
    pin = pin.trim();
    const regexpFormat = /\d\d\d\d-\d\d\d\d/;

    if ( !regexpFormat.test(pin) ) return 'PIN does not match the format';
    return null;
};
Validators.multilineValidator = (text) => {
    const validLinesText = Validators.multilineLineChecker(text);
    const validSpacesText = Validators.multilineSpacesChecker(validLinesText)
    const validText = Validators.multilineSizeChecker(validSpacesText);

    return validText;
};
Validators.multilineLineChecker = (text) => {
    const lines = text.split('\n');
    const countOfAllowLines = 2;

    const validText = lines.reduce((correctString, line, lineNumber) => {
        if (lineNumber === 0) return line;
        if (lineNumber <= countOfAllowLines) {
            return [correctString, line].join('\n');
        } else if (line !== '') {
            return [correctString, line].join(' ');
        } else {
            return correctString;
        }
    }, '');
    return validText;
};
Validators.multilineSpacesChecker = (text) => {
    const lines = text.split('\n');

    const validText =  lines.reduce((correctString, line, lineNumber) => {
        line = line.trim();
        if (lineNumber === 0) return line;
        return [correctString, line].join('\n');
    }, '');

    return validText;
};
Validators.multilineSizeChecker = (text) => {
    if (text.length > 500) return text.slice(0, 500);
    return text;
};

export default Validators;