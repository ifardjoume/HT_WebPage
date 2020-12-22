import React,{ useState } from 'react';
import { IntlProvider } from 'react-intl';


const defaultLocale = localStorage['locale'] ? localStorage['locale'] : 'es_AR'; // English is default locale if none is set
const localeList = [
    { name: 'ENG', code: 'en', lang: 'English' },
    { name: 'ESP', code: 'es_AR', lang: 'Spanish' }
];
export const TranslateBtn = () => {
    const selectStyle = {
        marginTop: "10px",
        marginLeft:"10px",
        height:"40px"
    }
    const [currentLocale, setCurrentLocale] = useState(defaultLocale);
    const onChangeLanguage = (e) => {
        const selectedLocale = e.target.value;
        setCurrentLocale(selectedLocale);
        localStorage.setItem('locale',selectedLocale)
    }
    return (
        <select style={selectStyle} onChange={onChangeLanguage} defaultValue={currentLocale}>
            {
                localeList.map((locale,index)=>(
                  <option key={index} value={locale.code}>{locale.name}</option>
                ))
            }
        </select>
    )
}


