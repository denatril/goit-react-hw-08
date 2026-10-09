# Kişi Rehberi — React Ödev 8

Kişiye özel rehber: React, Redux Toolkit, React Router, Redux Persist, Axios, Formik ve Yup.

## Çalıştırma

```sh
npm install
npm run dev
```

`npm run lint` kod kontrolü, `npm run build` üretim derlemesi yapar.

## Yapı ve akış

- `src/redux/auth`: `register` → POST /users/signup, `login` (`logIn`) → POST /users/login, `logout` (`logOut`) → POST /users/logout, `refreshUser` → GET /users/current.
- `setAuthHeader(token)` Axios isteklerine Bearer token ekler. `clearAuthHeader()` çıkışta veya başarısız oturum yenilemede başlığı kaldırır.
- `src/redux/contacts`: listeleme, ekleme, silme işlemleri; yüklenme/hata durumu ve memoize edilmiş filtre seçicisi.
- `src/redux/filters`: ad/telefon araması. Çıkışta filtre ve rehber temizlenir; önceki oturumun geciken istekleri yok sayılır.
- `src/redux/store.js`: yalnızca auth token kalıcıdır. Şifreler ve kişiler localStorage'a yazılmaz.
- `src/pages`: Home, Login, Registration ve Contacts. PrivateRoute rehberi korur, RestrictedRoute giriş yapmış kullanıcıyı rehbere yönlendirir.
- App açılışta refreshUser çağırır; PersistGate token yüklenmesini bekler. Oturum kontrolünde yükleme mesajı gösterilir.

API belgeleri: https://connections-api.goit.global/docs/

Ek özellikler: telefonla arama, silmeden önce tarayıcı onayı, ekleme/silme bildirimleri, responsive Türkçe arayüz.

Contacts sayfasındaki effect `[dispatch]` bağımlılığıyla montajda çalışır; Redux dispatch referansı sabittir ve bu kullanım hook lint kurallarına uygundur.

## Manuel kontrol

1. /contacts adresini oturumsuz açın; /login yönlendirmesini doğrulayın.
2. Kayıt olun; kişi ekleyin, ad ve numarayla arayın.
3. /contacts sayfasını yenileyin; oturumun geri geldiğini doğrulayın.
4. Silme onayını iptal edin, ardından onaylayın.
5. Çıkış yapın; başka hesapta önceki kişilerin görünmediğini doğrulayın.
6. Hatalı giriş ve ağ hatalarında mesajları kontrol edin.

Vercel için SPA rewrite `vercel.json` dosyasında tanımlıdır.
