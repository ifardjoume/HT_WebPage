import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import Spanish from '../lang/es.json';
import English from '../lang/en.json';
const Context = React.createContext();
const local = navigator.language;
let lang;
if (local === 'en') {
   lang = English;
}else {
   lang = Spanish;
}
const Wrapper = (props) => {
   const [locale, setLocale] = useState(local);
   const [messages, setMessages] = useState(lang);
   function selectLanguage(e) {
       const newLocale = e.target.value;
       setLocale(newLocale);
       if (newLocale === 'en') {
           setMessages(English);
       } else {
            setMessages(Spanish);
       }
   }
   return (
       <Context.Provider value = {{locale, selectLanguage}}>
           <IntlProvider messages={messages} locale={locale}>
               {props.children}
           </IntlProvider>
       </Context.Provider>
   );
}
export default Wrapper;