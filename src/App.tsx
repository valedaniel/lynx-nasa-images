import { useState } from 'react';
import './App.css';
import { ButtonSearch } from './components/ButtonSearch/index.jsx';
import { Header } from './components/Header/index.jsx';
import { Input } from './components/Input/index.jsx';
import { Locale } from './enums/locale.js';
import { i18n } from './i18n.js';

export function App() {
  const [locale, setLocale] = useState<Locale>(Locale.en);

  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <view>
      <view className="Background" />
      <view className="App">
        <Header
          locale={locale}
          onChangeLanguage={async (locale) => {
            await i18n.changeLanguage(locale);
            setLocale(locale);
          }}
        />
        <view className="TopPanel">
          <Input
            value={searchValue}
            placeholder={i18n.t('whatWouldYouLikeToFind')}
            onChangeText={setSearchValue}
          />
          <ButtonSearch disabled={!searchValue} />
        </view>
      </view>
    </view>
  );
}
