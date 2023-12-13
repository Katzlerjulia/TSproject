export const validateEmail = (email: string): boolean => {
  return email.indexOf("@") > -1 && email.indexOf(".") > 1;
};
