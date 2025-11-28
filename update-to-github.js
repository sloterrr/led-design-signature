const fs = require('fs');

// GitHub Raw URLs
const githubBaseUrl = 'https://raw.githubusercontent.com/sloterrr/led-design-signature/main/';
const githubUrls = {
  logo: githubBaseUrl + 'logo.svg',
  artur: githubBaseUrl + 'artur.webp',
  mobile: githubBaseUrl + 'mobile.svg',
  email: githubBaseUrl + 'email.svg',
  www: githubBaseUrl + 'www.svg'
};

// Wczytaj Data URIs
const dataUris = JSON.parse(fs.readFileSync('data-uris.json', 'utf8'));

// Generuj HTML z linkami GitHub
const signatureHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0;">

  <!-- Główna tabela stopki -->
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: 'Poppins', Arial, Helvetica, sans-serif; max-width: 900px; border-collapse: collapse;">
    <tr>
      <!-- KOLUMNA 1: Logo Box -->
      <td valign="top" style="padding-right: 25px;">
        <!-- Logo box bez bordera -->
        <table cellpadding="0" cellspacing="0" border="0" style="width: 300px; height: 300px; border-collapse: separate;">
          <tr>
            <td align="center" valign="middle" style="padding: 20px;">
              <img src="${githubUrls.logo}"
                   alt="LED Design Logo"
                   width="250"
                   style="display: block; max-width: 250px; height: auto;"/>
            </td>
          </tr>
        </table>

        <!-- Tekst pod logo -->
        <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 15px; width: 300px;">
          <tr>
            <td align="center" style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 14px; color: #52B5EB; font-weight: 400; line-height: 1.4;">
              www.led.design
            </td>
          </tr>
        </table>
      </td>

      <!-- KOLUMNA 2: Zdjęcie + Tagline -->
      <td valign="top" style="padding-right: 25px;">
        <!-- Zdjęcie Artura -->
        <img src="${githubUrls.artur}"
             alt="Artur Oliński"
             width="300"
             height="300"
             style="display: block; border-radius: 20px;"/>

        <!-- Tagline pod zdjęciem -->
        <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 15px; width: 300px;">
          <tr>
            <td align="center" style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 11px; font-style: italic; font-weight: 500; color: #52B5EB; line-height: 1.4;">
              Naszą pasją jest światło!
            </td>
          </tr>
        </table>
      </td>

      <!-- KOLUMNA 3: Dane kontaktowe -->
      <td valign="top">
        <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
          <!-- Imię i nazwisko -->
          <tr>
            <td style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 17px; font-weight: 700; color: #52B5EB; padding-bottom: 5px; line-height: 1.3;">
              Artur Oliński
            </td>
          </tr>

          <!-- Stanowisko -->
          <tr>
            <td style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 400; color: #52B5EB; padding-bottom: 15px; line-height: 1.3;">
              Właściciel
            </td>
          </tr>

          <!-- Telefon -->
          <tr>
            <td style="padding-bottom: 8px;">
              <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                <tr>
                  <td valign="middle" style="padding-right: 8px;">
                    <img src="${githubUrls.mobile}"
                         alt="Phone"
                         width="20"
                         height="20"
                         style="display: block;"/>
                  </td>
                  <td valign="middle">
                    <a href="tel:+48606108500"
                       style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 10px; color: #52B5EB; text-decoration: none; line-height: 1.3;">
                      +48 606 108 500
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Email -->
          <tr>
            <td style="padding-bottom: 8px;">
              <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                <tr>
                  <td valign="middle" style="padding-right: 8px;">
                    <img src="${githubUrls.email}"
                         alt="Email"
                         width="20"
                         height="20"
                         style="display: block;"/>
                  </td>
                  <td valign="middle">
                    <a href="mailto:artur.olinski@leddesign.pl"
                       style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 10px; color: #52B5EB; text-decoration: none; line-height: 1.3;">
                      artur.olinski@leddesign.pl
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- WWW -->
          <tr>
            <td>
              <table cellpadding="0" cellspacing="0" border="0" style="border-collapse: collapse;">
                <tr>
                  <td valign="middle" style="padding-right: 8px;">
                    <img src="${githubUrls.www}"
                         alt="Website"
                         width="20"
                         height="20"
                         style="display: block;"/>
                  </td>
                  <td valign="middle">
                    <a href="https://www.leddesign.pl"
                       style="font-family: 'Poppins', Arial, Helvetica, sans-serif; font-size: 10px; color: #52B5EB; text-decoration: none; line-height: 1.3;">
                      www.leddesign.pl
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;

// Zapisz pełny HTML
fs.writeFileSync('stopka-html-github.html', signatureHTML);
console.log('✓ Zapisano pełny HTML (GitHub) do stopka-html-github.html');

// Wersja do wklejenia w Gmail (bez DOCTYPE, html, head, body)
const gmailVersion = signatureHTML
  .replace(/<!DOCTYPE html>\s*/gi, '')
  .replace(/<html>\s*/gi, '')
  .replace(/<\/html>\s*/gi, '')
  .replace(/<head>[\s\S]*?<\/head>\s*/gi, '')
  .replace(/<body[^>]*>/gi, '')
  .replace(/<\/body>\s*/gi, '')
  .trim();

fs.writeFileSync('stopka-gmail-github.html', gmailVersion);
console.log('✓ Zapisano wersję Gmail (GitHub) do stopka-gmail-github.html');

// Zapisz listę URLi
const urlList = `# LISTA URLi GRAFIK - GITHUB HOSTING

## 1. Zdjęcie Artura (GitHub)
URL: ${githubUrls.artur}
Typ: WebP
Rozmiar: 302x303px

## 2. Logo (GitHub)
URL: ${githubUrls.logo}
Typ: SVG
Rozmiar oryginalny: 145x187px

## 3. Ikona telefonu (GitHub)
URL: ${githubUrls.mobile}
Typ: SVG
Rozmiar: 40x40px

## 4. Ikona email (GitHub)
URL: ${githubUrls.email}
Typ: SVG
Rozmiar: 40x40px

## 5. Ikona WWW (GitHub)
URL: ${githubUrls.www}
Typ: SVG
Rozmiar: 40x40px

---

**Metoda:** GitHub Raw CDN
**Repozytorium:** https://github.com/sloterrr/led-design-signature
**Zalety:**
- ✅ Permanentne linki
- ✅ Pełna kontrola
- ✅ Łatwa aktualizacja (git push)
- ✅ Darmowy hosting
- ✅ Szybkie CDN

**Poprzednia metoda (Data URI + ImgBB):**
- Zdjęcie ImgBB: https://i.ibb.co/Z6gjGghC/artur-olinski.webp (nadal działa)
- SVG: Data URI embedded (większe pliki)
`;

fs.writeFileSync('lista-url-grafik-github.txt', urlList);
console.log('✓ Zapisano listę URLi GitHub do lista-url-grafik-github.txt');

console.log('\n🎉 GOTOWE! Wygenerowano wersje z linkami GitHub:');
console.log('   1. stopka-html-github.html (pełna wersja)');
console.log('   2. stopka-gmail-github.html (do wklejenia w Gmail)');
console.log('   3. lista-url-grafik-github.txt (dokumentacja)');
console.log('\n📦 Repozytorium: https://github.com/sloterrr/led-design-signature');
