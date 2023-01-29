import { extend } from "vee-validate";
import { required, alpha, email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message (fieldName) {
    return `<strong>${fieldName}</strong> zorunludur!`;
  }
});

extend("alpha", {
  ...alpha,
  message: "Bu alan yalnızca alfabetik karakterler içermelidir!"
});

extend("email", {
  ...email,
  message (fieldName) {
    return `<strong>${fieldName}</strong> geçerli bir e-posta adresi değil!`;
  }
});

extend('phone', {
  message (fieldName) {
    return `<strong>${fieldName}</strong> geçerli bir telefon numarası değil!`;
  },
  validate (value) {
    let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return reg.test(value.replace(/\D/g, ""));
  }
});