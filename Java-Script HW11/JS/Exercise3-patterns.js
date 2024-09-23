const phonePattern = /^\+380\d{2} \d{3} \d{2} \d{2}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const phoneOperators = [
    {
        name: "lifecell",
        codes: "63|73|93",
        logo: "https://www.lifecell.ua/images/logo.svg"
    },
    {
        name: "kyivstar",
        codes: "67|98|96|97|68",
        logo: "https://kyivstar.ua/assets/cms/uploads/kyivstar_logo_full_d905270219.svg"
    },
    {
        name: "vodafone",
        codes: "65|99|50|66",
        logo: "https://www.vodafone.ua/svg/logo.svg"
    },    
          
];

export {phonePattern, emailPattern, phoneOperators};