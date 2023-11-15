const formValues = {}  // Сюда пишутся значения формы (Object как в Java, или dict из Python)
const formValidation = {}  // Сюда пишутся статусы валидации каждого поля. Если поле ни разу не валидировалось,
// то при обращении к Object вернётся undefined, который при логическом сравнении обрабатывается как false

export const validatePassword = (e) => {
  const passwordRegex = /^(?=.*[a-zа-яё\d])(?=.*[A-ZА-ЯЁ])(?=.*\d).{8,}$/;
  return String(e).match(passwordRegex);
}

export const validateRepPassword = (e) => {
  return e===formValues.password;
}

export const validateEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return String(email).toLowerCase().match(regExp);
}

export const getValidationStatus = () => {
  return Object.values(formValidation).every((validationStatus) => !!validationStatus)
}


// Функция возвращающая которая ставит значение поля в форме по ключу
export const setFormValue = (valueKey, target, validator) => {
  formValues[valueKey] = target.value
  if (validator !== undefined) {
    const isValid = validator(target.value)
    if (!isValid){
      target.classList.remove('valid')
      target.classList.add('invalid')
    }
    else{
      target.classList.remove('invalid')
      target.classList.add('valid')
    }
    formValidation[valueKey] = isValid
  }
}


// Функция для обработки отправки формы регистрации
// В этой функции должен быть http запрос на сервер для регистрации пользователя (сейчас просто демонстрация)
export const submitSignUpForm = () => {
  if (!getValidationStatus()) {
    console.log("FORM IS INCORRECT")
    return false
  }
  console.log("FORM IS FINE")
  console.log(formValues)
  return true
}
