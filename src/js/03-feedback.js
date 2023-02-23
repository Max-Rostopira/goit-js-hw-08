import localStorageApi from './storage.js'
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCAL__STORAGE = 'feedback-form-state';


let fillFormFields = ({ elements }) => {
    const formData = localStorageApi.load(LOCAL__STORAGE);

    if (!formData) {
        return;
    }
    
    const keys = Object.keys(elements).filter(el => isNaN(el));
    
    keys.forEach(key => {
        elements[key].value = formData[key] || '';
    })
}

let onFormChange = ({ target }) => {
    const { value, name } = target;

    const formData = localStorageApi.load(LOCAL__STORAGE) || {};
    formData[name] = value;

    localStorageApi.save(LOCAL__STORAGE, formData);

    // console.log(value);
};


let onFormSubmit = (event) => {
    event.preventDefault();
   
    const { target } = event;
    const { email, message } = target.elements;

    const userEmail = email.value;
    const userMessage = message.value;

    console.log({ userEmail, userMessage });
    target.reset();
    localStorageApi.remove(LOCAL__STORAGE)
};


formEl.addEventListener('input', throttle(onFormChange, 500));
formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('change', onFormChange);
fillFormFields(formEl);