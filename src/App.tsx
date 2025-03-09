import { useMemo, useState } from '@lynx-js/react';
import { useMutation } from '@tanstack/react-query';
import './App.css';
import { ButtonSearch } from './components/ButtonSearch/index.jsx';
import { Header } from './components/Header/index.jsx';
import { Input } from './components/Input/index.jsx';
import { ListImages } from './components/ListImages/index.jsx';
import { Locale } from './enums/locale.js';
import { i18n } from './i18n.js';
import { ImagesService } from './services/images.service.js';
import type { Response } from './types/Response.js';

export function App() {
  const [locale, setLocale] = useState<Locale>(Locale.en);

  const [searchValue, setSearchValue] = useState<string>('');
  const [responseImages, setResponseImages] = useState<Response>();

  const { mutate, status } = useMutation({
    mutationFn: () => ImagesService.fetchImages(searchValue),
    onSuccess: (data) => {
      setResponseImages(data);
    },
  });

  const loading = useMemo(() => {
    return status === 'pending';
  }, [status]);

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
          <ButtonSearch
            disabled={!searchValue}
            onPress={() => mutate()}
            loading={loading}
          />
        </view>
        <ListImages
          items={responseImages?.collection?.items}
          loading={loading}
        />
      </view>
    </view>
  );
}
