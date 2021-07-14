const validateIsPhoneNumber = (phoneNumber = "") => {
  const phoneRegex = /^\d{10}$/;
  console.log("INPUT PHONE_NUMBER IS", phoneNumber);
  if (phoneNumber.match(phoneRegex)) return true;
  return false;
};

const validateIsBlank = (text = "") => {
  if (text === "") return true;
  return false;
};

export { validateIsPhoneNumber, validateIsBlank };
