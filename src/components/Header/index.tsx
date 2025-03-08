import { useState } from '@lynx-js/react';
import NASALogo from '../../assets/nasa-logo.png';
import { Locale } from '../../enums/locale.js';
import { i18n } from '../../i18n.js';
import { locales } from '../../utils/constants.js';
import { formatLocale } from '../../utils/formatLocale.js';
import './header.css';

export function Header() {
  const [locale, setLocale] = useState<Locale>(Locale.en);

  const getNextLocale = (locale: Locale) => {
    const index = locales.indexOf(locale);
    return locales[(index + 1) % locales.length];
  };

  return (
    <view className="header">
      <image src={NASALogo} className="nasa-logo" />
      <view>
        <text className="title">{i18n.t('NASA')}</text>
        <text className="subtitle">{i18n.t('searchImages')}</text>
      </view>
      <view className="language">
        <text
          bindtap={async () => {
            const nextLocale = getNextLocale(locale);
            await i18n.changeLanguage(nextLocale);
            setLocale(nextLocale);
          }}
          className="btn"
        >
          {formatLocale(getNextLocale(locale))}
        </text>
      </view>
    </view>
  );
}
