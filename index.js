const { getFemaleNames, getMaleNames, getLastNames, getJobTitle, getVehicles, getAddresses } = require("./lists.js");

function getRandomPerson() {
    const gender = getRandomGender()
    const names = getRandomName(gender)
    const person = {
        names,
        personalDetails: getPersonalDetails(names),
        personalStatus: getRandomPersonalStatus(),
        location: getRandomAddress(),
        appearance: getRandomAppearance(gender),
        finance: getRandomFinance(),
        professional: getRandomProfessional(),
        internetPreferences: getRandomInternetPreferences(),
        facebookUserDetails: getRandomFacebookUserDetails(names),
        instagramUserDetails: getRandomInstagramUserDetails(names),
        twitterUserDetails: getRandomTwitterUserDetails(names),
        linkedinUserDetails: getRandomLinkedinUserDetails(names),
        drivingDetails: getRandomDrivingDetails()
    }

    return person
}

function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[_getRandomChar(17)];
    }
    return color;
}

function getRandomAddress() {
    const addresses = getAddresses()
    return addresses[_getRandomChar(addresses.length)]
}

function getRandomLastName() {
    const lastNames = getLastNames()
    return lastNames[_getRandomChar(lastNames.length)]
}

function _getRandomChar(length) {
    return Math.floor(Math.random() * (length - 1))
}

function _getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomId() {
    let id = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    for (let i = 0; i < 9; i++) {
        id += characters.charAt(_getRandomChar(characters.length));
    }
    return id;
}

function getRandomIdCardNumber() {
    let idCardNumber = ''
    const characters = '0123456789'
    for (let i = 0; i < 12; i++) {
        idCardNumber += characters.charAt(_getRandomChar(characters.length));
    }
    return idCardNumber;
}

function getRandomPassword() {
    let password = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    for (let i = 0; i < 8; i++) {
        password += characters.charAt(_getRandomChar(characters.length));
    }
    return password;
}

function getRandomMobile() {
    let phonNum = '('
    for (let i = 0; i < 3; i++) {
        phonNum += _getRandomInt(0, 9)
    }
    phonNum += ') '
    for (let i = 0; i < 3; i++) {
        phonNum += _getRandomInt(0, 9)
    }
    phonNum += '-'
    for (let i = 0; i < 3; i++) {
        phonNum += _getRandomInt(0, 9)
    }
    return phonNum
}

function getRandomPhone() {
    let phonNum = '('
    for (let i = 0; i < 2; i++) {
        phonNum += _getRandomInt(0, 9)
    }
    phonNum += ') '
    for (let i = 0; i < 8; i++) {
        phonNum += _getRandomInt(0, 9)
    }
    return phonNum
}

function getRandomLastSeen() {
    return new Date(_getRandomInt(Date.now() - 31536000000, Date.now())).toLocaleString()
}

function getRandonEyeColor() {
    const eyeColors = ['amber', 'blue', 'brown', 'gray', 'green', 'hazel']
    return eyeColors[_getRandomInt(0, 5)]
}

function getRandonHairColor() {
    const hairColors = ['black', 'brown', 'blond', 'white', 'gray', 'red']
    return hairColors[_getRandomInt(0, 5)]
}

function getRandomPassportNumber() {
    let passportNumber = ''
    for (let i = 0; i < 9; i++) {
        passportNumber += _getRandomInt(0, 9)
    }
    return passportNumber
}

function getRandomGender() {
    const sex = ['male', 'female']
    return sex[_getRandomInt(0, 1)]
}

function getRandomWord(min, max) {
    let word = '';
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const wordLength = _getRandomInt(min, max);
    for (let i = 0; i < wordLength; i++) {
        word += alphabet[_getRandomChar(alphabet.length)]
    }
    return word;
}

function getRandomEmail(firstName, lastName) {
    return firstName + '.' + lastName + '@gmail.com'
}

function getRandomJobTitle() {
    const jobTitles = getJobTitle()
    return jobTitles[_getRandomChar(jobTitles.length)]
}

function getRandomBirthDay() {
    const date = new Date(_getRandomInt(Date.now() - 3122064000000, Date.now() - 567648000000)).toDateString()
    return date
}

function getRandomMaritalStatus() {
    const maritalStatus = ['single', 'married', 'widowed', 'divorced', 'separated', 'registered partnership']
    return maritalStatus[_getRandomChar(maritalStatus.length)]
}

function getRandomChildrenAmount() {
    return _getRandomInt(0, 6)
}

function getRandomEducation() {
    const educations = ['Secondary school', 'Associates', 'Bachelors', 'Masters', 'Doctorate', 'Professional Degree', 'Honorary Doctorate']
    return educations[_getRandomChar(educations.length)]
}

function getRandomSalary() {
    return _getRandomInt(2125, 12500) + '$'
}

function getRandomDriversLicenseType() {
    const driversLicenseType = ['Class D', 'Class A', 'Class B', 'Class C', 'Class E']
    return driversLicenseType[_getRandomChar(driversLicenseType.length)]
}

function getRandomCurrentAccount() {
    return _getRandomInt(-1000, 50000) + '$'
}

function getRandomVehiclePlateNumber() {
    let vehiclePlateNumber = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    for (let i = 0; i < _getRandomInt(6, 7); i++) {
        vehiclePlateNumber += characters.charAt(_getRandomChar(characters.length));
    }
    return vehiclePlateNumber;
}

function getRandomWeight(gender) {
    return gender == 'female' ? _getRandomInt(50, 100) + 'kg' : _getRandomInt(70, 100) + 'kg'
}

function getRandomHeigth(gender) {
    return gender == 'female' ? _getRandomInt(150, 180) + 'cm' : _getRandomInt(160, 200) + 'cm'
}

function getRandomAppearance(gender) {
    return { gender, weigth: getRandomWeight(gender), heigth: getRandomHeigth(gender), eyeColor: getRandonEyeColor(), hairColor: getRandonHairColor() }
}

function getRandomFinance() {
    return {
        currentAccount: getRandomCurrentAccount(), salary: getRandomSalary(),
        loan: getRandomHasLoan()
    }
}

function getRandomProfessional() {
    return { education: getRandomEducation(), jobTitle: getRandomJobTitle() }
}

function getRandomName(gender) {
    const femaleNames = getFemaleNames()
    const maleNames = getMaleNames()
    const firstName = gender == 'female' ? femaleNames[_getRandomChar(femaleNames.length)] : maleNames[_getRandomChar(maleNames.length)]
    const lastName = getRandomLastName()
    return { firstName, lastName }
}

function getPersonalDetails({ firstName, lastName }) {
    const email = getRandomEmail(firstName, lastName)
    const birthDayDate = getRandomBirthDay()
    const age = new Date().getFullYear() - parseInt(birthDayDate.split(' ')[3])
    return [{ _id: getRandomId(), idCardNumber: getRandomIdCardNumber(), passportNumber: getRandomPassportNumber(), birthDay: birthDayDate, age }, { email, mobie: getRandomMobile(), phone: getRandomPhone() }]
}

function getRandomPreferredMode() {
    const Modes = ['ligthMode', 'DarkMode']
    return Modes[_getRandomInt(0, 1)]
}

function getRandomPreferredFontSize() {
    const fontSizes = ['small', 'regular', 'big', 'huge']
    return fontSizes[_getRandomInt(0, 3)]
}

function getRandomPreferredFontFamily() {
    const fontFamily = ['Arial', 'Verdana', 'Tahoma', 'Trebuchet', 'Times New Roman', 'Georgia', 'Garamond', 'Courier New', 'Brush Script']
    return fontFamily[_getRandomInt(0, 8)]
}

function getRandomInternetPreferences() {
    return { preferredHexColor: getRandomHexColor(), preferredMode: getRandomPreferredMode(), preferredFontSize: getRandomPreferredFontSize(), preferredFontFamily: getRandomPreferredFontFamily() }
}

function getRandomRegistered() {
    return new Date(_getRandomInt(Date.now() - 315360000000, Date.now())).toDateString()
}

function getRandomUserName({ firstName, lastName }) {
    let userName = firstName + ' ' + lastName
    return userName
}

function getRandomFacebookUserDetails(names) {
    const hasAccount = Math.random() < 0.5
    return hasAccount ? { registered: getRandomRegistered(), userName: getRandomUserName(names), postsAmount: getRandomPostsAmount(), password: getRandomPassword(), lastSeen: getRandomLastSeen(), photosAmount: getRandomPhotosAmount(), friendsAmount: getRandomFriendsAmount(), isOnline: getRandomIsOnline() } : { hasAccount }
}

function getRandomTwitterUserDetails(names) {
    return { registered: getRandomRegistered(), userName: getRandomUserName(names), tweetsAmount: getRandomPostsAmount(), password: getRandomPassword(), lastSeen: getRandomLastSeen(), followers: getRandomFollowersAmount(), isOnline: getRandomIsOnline() }
}

function getRandomPostsAmount() {
    return _getRandomInt(0, 200)
}

function getRandomPhotosAmount() {
    return _getRandomInt(0, 500)
}

function getRandomFollowersAmount() {
    return _getRandomInt(0, 1000)
}

function getRandomConnectionsAmount() {
    return _getRandomInt(0, 500)
}

function getRandomFollowingAmount() {
    return _getRandomInt(0, 1000)
}

function getRandomIsOnline() {
    return Math.random() < 0.5
}

function getRandomPersonalStatus() {
    return { maritalStatus: getRandomMaritalStatus(), childrenAmount: getRandomChildrenAmount() }
}

function getRandomVehicle() {
    const vehicles = getVehicles()
    const vehicle = vehicles[_getRandomChar(6)]
    const brand = vehicle.brand
    const model = vehicle.models[_getRandomInt(0, vehicle.models.length)]
    return { brand, model }
}

function getRandomDrivingDetails() {
    const hasDrivingLicense = Math.random() < 0.5
    return hasDrivingLicense ? { hasDrivingLicense, driversLicenseType: getRandomDriversLicenseType(), vehiclePlateNumber: getRandomVehiclePlateNumber(), vehicle: getRandomVehicle() } : { hasDrivingLicense }
}

function getRandomFriendsAmount() {
    return _getRandomInt(0, 1000)
}

function getRandomSkillsAmount() {
    return _getRandomInt(0, 20)
}

function getRandomActivityAmount() {
    return _getRandomInt(0, 1000)
}

function getRandomLinkedinUserDetails(names) {
    const hasAccount = Math.random() < 0.5
    return hasAccount ? { registered: getRandomRegistered(), userName: getRandomUserName(names), password: getRandomPassword(), lastSeen: getRandomLastSeen(), connections: getRandomConnectionsAmount(), isOnline: getRandomIsOnline(), skills: getRandomSkillsAmount(), activity: getRandomActivityAmount() } : { hasAccount }
}

function getRandomInstagramUserDetails(names) {
    const hasAccount = Math.random() < 0.5
    return hasAccount ? { hasAccount, registered: getRandomRegistered(), userName: getRandomUserName(names), password: getRandomPassword(), lastSeen: getRandomLastSeen(), photosAmount: getRandomPhotosAmount(), followers: getRandomFollowersAmount(), following: getRandomFollowingAmount(), isOnline: getRandomIsOnline() } : { hasAccount }
}

function getRandomHasLoan() {
    const hasLoan = Math.random() < 0.5
    const loanAmount = getRandomLoanAmount()
    return hasLoan ? { hasLoan, loanAmount, leftToPay: loanAmount - _getRandomInt(0, loanAmount), dateTaken: getRandomLoanDate('start'), lastDayToPay: getRandomLoanDate('end') } : { hasLoan }
}

function getRandomLoanAmount() {
    return _getRandomInt(500, 10000)
}

function getRandomLoanDate(startOrEnd) {
    return startOrEnd == 'start' ? new Date(_getRandomInt(Date.now() - 31536000000, Date.now())).toLocaleString() : new Date(_getRandomInt(Date.now(), Date.now() + 9460800000000)).toLocaleString()
}

module.exports = {
	getRandomPerson
}