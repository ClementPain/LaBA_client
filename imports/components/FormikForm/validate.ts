interface formErrorsType {
  email?: string,
  password?: string,
  password_confirmation?: string,
  first_name?: string,
  last_name?: string
}

type validateType = (values: formErrorsType, initial_values: formErrorsType) => formErrorsType;

const validate: validateType = (values, initial_values) => {
  const formErrors: formErrorsType = {};

  if (initial_values['email']) {
    if (!values.email) {
      formErrors.email = "Champ obligatoire";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      formErrors.email = "Adresse email invalide";
    }
  }

  if (initial_values['password']) {
    if (!values.password) {
      formErrors.password = "Champ obligatoire";
    } else if (values.password.length < 6) {
      formErrors.password = "Doit avoir 6 caractères ou plus";
    }
  }

  if (initial_values['password_confirmation']) {
    if (values.password && !values.password_confirmation) {
      formErrors.password_confirmation = "Champ obligatoire";
    } else if (values.password_confirmation && values.password_confirmation.length < 6) {
      formErrors.password_confirmation = "Doit avoir 6 caractères ou plus";
    }
  
    if (values.password_confirmation && (values.password !== values.password_confirmation)) {
      formErrors.password_confirmation = "Ne correspond pas au champ mot de passe";
    }
  }

  if (initial_values['first_name']) {
    if (!values.first_name) {
      formErrors.first_name = "Champ obligatoire"
    } else if (values.first_name.length < 2) {
      formErrors.first_name = "Le prénom doit contenir au moins 2 caractères"
    }
  }

  if (initial_values['last_name']) {
    if (!values.last_name) {
      formErrors.last_name = "Champ obligatoire"
    } else if (values.last_name.length < 2) {
      formErrors.last_name = "Le nom doit contenir au moins 2 caractères"
    }
  }

  return formErrors;
};

export default validate;