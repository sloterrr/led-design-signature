# ALGORYTM TWORZENIA STOPKI HTML DLA GMAIL
## Projekt: LED Design - Stopka Email Artur Oliński

---

## FAZA 1: ANALIZA I PRZYGOTOWANIE

### 1.1 Analiza projektu graficznego (stopka-artur.png)
**Status:** ✓ WYKONANE

**Wyniki analizy:**
- **Układ:** Trzy główne sekcje w poziomie (logo | zdjęcie | dane kontaktowe)
- **Kolor podstawowy:** #52B5EB (jasny niebieski)
- **Wymiary ogólne:** ~1200px szerokości × ~470px wysokości
- **Tło:** Białe/przezroczyste

**Struktura layoutu:**
```
┌──────────────┬──────────────┬──────────────────────┐
│              │              │ Artur Oliński        │
│   LED.DESIGN │   ZDJĘCIE    │ Właściciel           │
│   (LOGO BOX) │   ARTURA     │ ☎ +48 606 108 500   │
│              │              │ ✉ artur.olinski@...  │
│              │              │ 🌐 www.leddesign.pl  │
├──────────────┼──────────────┴──────────────────────┤
│www.led.design│ Naszą pasją jest światło!            │
└──────────────┴──────────────────────────────────────┘
```

### 1.2 Weryfikacja zasobów graficznych
**Status:** ✓ WYKONANE

**Pliki dostępne:**
- ✓ `logo.svg` - 145×187px - logo firmy "led.design"
- ✓ `artur.webp` - zdjęcie kontaktowe Artura Olińskiego
- ✓ `mobile.svg` - 40×40px - ikona telefonu (kolor: #52B5EB)
- ✓ `email.svg` - 40×40px - ikona email (kolor: #52B5EB)
- ✓ `www.svg` - 40×40px - ikona strony www (kolor: #52B5EB)

### 1.3 Specyfikacja kolorów
**Status:** ✓ WYKONANE

**Paleta kolorów:**
- **Kolor główny:** `#52B5EB` (jasny niebieski)
- **Tekst:** `#52B5EB` (niebieski) lub `#333333` (ciemnoszary - alternatywa)
- **Tło:** Białe/przezroczyste
- **Border logo box:** `#52B5EB` (obramowanie 2-3px)

### 1.4 Specyfikacja typografii
**Status:** ✓ WYKONANE

**Czcionka:** Poppins (Google Fonts)

**Warianty do załadowania:**
- Poppins Regular (400)
- Poppins Medium (500)
- Poppins SemiBold (600)
- Poppins Bold (700)
- Poppins Medium Italic (500 italic)

**Zastosowanie:**
1. **"Artur Oliński"** - Poppins Bold, 13pt (~17px), kolor #52B5EB
2. **"Właściciel"** - Poppins Regular, 9pt (~12px), kolor #52B5EB
3. **Kontakt (tel/email/www)** - Poppins Regular, 7pt (~9px), kolor #52B5EB
4. **"Naszą pasją jest światło!"** - Poppins Medium Italic, 8pt (~11px), kolor #52B5EB
5. **"www.led.design"** - Poppins Regular, ~11pt (~14px), kolor #52B5EB

---

## FAZA 2: PLANOWANIE STRUKTURY HTML

### 2.1 Wymagania techniczne Gmail
**Status:** W TRAKCIE

**Kluczowe ograniczenia Gmail:**
- ✗ Nie używać `<div>` z flexbox/grid
- ✗ Nie używać CSS w `<style>` (może być ignorowany)
- ✓ Używać `<table>` dla struktury
- ✓ Inline CSS w atrybutach `style=""`
- ✓ Atrybuty `width`, `height`, `cellpadding="0"`, `cellspacing="0"`
- ✓ Zaokrąglone rogi: `border-radius` (działa w większości klientów)
- ✓ Używać `mso-` atrybutów dla Outlook (opcjonalnie)

### 2.2 Struktura HTML - Schemat tabelowy

```html
<table> <!-- Główna tabela stopki -->
  <tr>
    <!-- KOLUMNA 1: Logo -->
    <td>
      <table> <!-- Logo box z borderem -->
        <tr><td>[LOGO SVG]</td></tr>
      </table>
      <table> <!-- Tekst pod logo -->
        <tr><td>www.led.design</td></tr>
      </table>
    </td>

    <!-- KOLUMNA 2: Zdjęcie -->
    <td>
      <table> <!-- Zdjęcie -->
        <tr><td>[IMG artur.webp]</td></tr>
      </table>
      <table> <!-- Tekst pod zdjęciem -->
        <tr><td>Naszą pasją jest światło!</td></tr>
      </table>
    </td>

    <!-- KOLUMNA 3: Dane kontaktowe -->
    <td>
      <table>
        <tr><td>Artur Oliński</td></tr>
        <tr><td>Właściciel</td></tr>
        <tr><td>[IKONA] +48 606 108 500</td></tr>
        <tr><td>[IKONA] artur.olinski@leddesign.pl</td></tr>
        <tr><td>[IKONA] www.leddesign.pl</td></tr>
      </table>
    </td>
  </tr>
</table>
```

### 2.3 Wymiary szczegółowe

**KOLUMNA 1 - Logo:**
- Szerokość box: ~300px
- Wysokość box: ~300px
- Logo wewnątrz: ~200px
- Border: 3px solid #52B5EB
- Border-radius: 20px
- Padding: 30px
- Tekst pod logo: margin-top 20px

**KOLUMNA 2 - Zdjęcie:**
- Szerokość: ~300px
- Wysokość: ~300px
- Border-radius: 20px
- Margin: 0 30px (odstęp od logo i danych)
- Tekst pod zdjęciem: margin-top 20px, text-align center

**KOLUMNA 3 - Dane kontaktowe:**
- Szerokość: ~400px
- Wysokość: auto
- Wyrównanie: vertical-align top
- Odstępy między wierszami: 8-10px
- Ikony: 24px × 24px (skalowane z 40px)
- Odstęp ikona-tekst: 8px

---

## FAZA 3: HOSTING GRAFIK

### 3.1 Wybór platformy hostingowej
**Status:** OCZEKUJE

**Opcje:**
1. **ImgBB** (imgbb.com) - darmowy, bez rejestracji, stabilny
2. **Imgur** (imgur.com) - popularny, wymaga konta
3. **GitHub** (raw.githubusercontent.com) - dla repozytoriów publicznych
4. **PostImage** (postimages.org) - alternatywa

**Wybór:** ImgBB lub GitHub (do uzgodnienia)

### 3.2 Lista plików do uploadu

1. `logo.svg` → URL1
2. `artur.webp` → URL2
3. `mobile.svg` → URL3
4. `email.svg` → URL4
5. `www.svg` → URL5

**UWAGA:** NIE uploadować `stopka-artur.png` (tylko wzór projektowy)

### 3.3 Konwersje formatów (jeśli potrzebne)

- **SVG → PNG:** Jeśli klient email nie wspiera SVG
  - Logo: 200×200px PNG (przezroczyste tło)
  - Ikony: 24×24px PNG (przezroczyste tło)
- **WebP:** Sprawdzić kompatybilność, ewentualnie skonwertować na JPG/PNG

---

## FAZA 4: IMPLEMENTACJA HTML

### 4.1 Szablon głównej struktury

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,500&display=swap" rel="stylesheet">
</head>
<body>
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: 'Poppins', Arial, sans-serif; max-width: 1200px;">
    <!-- Główna zawartość stopki -->
  </table>
</body>
</html>
```

### 4.2 Sekcja 1: Logo Box

**Cel:** Stworzyć box z logo i obramowaniem

```html
<td valign="top" style="padding-right: 30px;">
  <!-- Logo box z borderem -->
  <table cellpadding="0" cellspacing="0" border="0"
         style="border: 3px solid #52B5EB;
                border-radius: 20px;
                padding: 30px;
                width: 240px;
                height: 240px;">
    <tr>
      <td align="center" valign="middle">
        <img src="[URL_LOGO]"
             alt="LED Design"
             width="200"
             height="auto"
             style="display: block;"/>
      </td>
    </tr>
  </table>

  <!-- Tekst pod logo -->
  <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px;">
    <tr>
      <td style="font-family: 'Poppins', Arial, sans-serif;
                 font-size: 14px;
                 color: #52B5EB;
                 font-weight: 400;">
        www.led.design
      </td>
    </tr>
  </table>
</td>
```

### 4.3 Sekcja 2: Zdjęcie + Tagline

**Cel:** Zdjęcie Artura z zaokrąglonymi rogami + tekst

```html
<td valign="top" style="padding-right: 30px;">
  <!-- Zdjęcie -->
  <img src="[URL_ARTUR_WEBP]"
       alt="Artur Oliński"
       width="300"
       height="300"
       style="display: block;
              border-radius: 20px;"/>

  <!-- Tagline -->
  <table cellpadding="0" cellspacing="0" border="0" style="margin-top: 20px;">
    <tr>
      <td align="center"
          style="font-family: 'Poppins', Arial, sans-serif;
                 font-size: 11px;
                 font-style: italic;
                 font-weight: 500;
                 color: #52B5EB;">
        Naszą pasją jest światło!
      </td>
    </tr>
  </table>
</td>
```

### 4.4 Sekcja 3: Dane kontaktowe

**Cel:** Imię, stanowisko, kontakt z ikonami

```html
<td valign="top">
  <table cellpadding="0" cellspacing="0" border="0">
    <!-- Imię i nazwisko -->
    <tr>
      <td style="font-family: 'Poppins', Arial, sans-serif;
                 font-size: 17px;
                 font-weight: 700;
                 color: #52B5EB;
                 padding-bottom: 5px;">
        Artur Oliński
      </td>
    </tr>

    <!-- Stanowisko -->
    <tr>
      <td style="font-family: 'Poppins', Arial, sans-serif;
                 font-size: 12px;
                 font-weight: 400;
                 color: #52B5EB;
                 padding-bottom: 15px;">
        Właściciel
      </td>
    </tr>

    <!-- Telefon -->
    <tr>
      <td style="padding-bottom: 8px;">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-right: 8px;">
              <img src="[URL_MOBILE_ICON]"
                   alt="Phone"
                   width="24"
                   height="24"
                   style="display: block;"/>
            </td>
            <td>
              <a href="tel:+48606108500"
                 style="font-family: 'Poppins', Arial, sans-serif;
                        font-size: 9px;
                        color: #52B5EB;
                        text-decoration: none;">
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
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-right: 8px;">
              <img src="[URL_EMAIL_ICON]"
                   alt="Email"
                   width="24"
                   height="24"
                   style="display: block;"/>
            </td>
            <td>
              <a href="mailto:artur.olinski@leddesign.pl"
                 style="font-family: 'Poppins', Arial, sans-serif;
                        font-size: 9px;
                        color: #52B5EB;
                        text-decoration: none;">
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
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="padding-right: 8px;">
              <img src="[URL_WWW_ICON]"
                   alt="Website"
                   width="24"
                   height="24"
                   style="display: block;"/>
            </td>
            <td>
              <a href="https://www.leddesign.pl"
                 style="font-family: 'Poppins', Arial, sans-serif;
                        font-size: 9px;
                        color: #52B5EB;
                        text-decoration: none;">
                www.leddesign.pl
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</td>
```

---

## FAZA 5: OPTYMALIZACJA I TESTY

### 5.1 Checklist optymalizacji

- [ ] Zamienić wszystkie `[URL_*]` na rzeczywiste linki do grafik
- [ ] Sprawdzić czy wszystkie style są inline
- [ ] Usunąć `<head>` i `<body>` jeśli wklejane bezpośrednio do Gmail
- [ ] Dodać fallback font: `font-family: 'Poppins', Arial, sans-serif;`
- [ ] Sprawdzić `alt` text dla wszystkich obrazków
- [ ] Upewnić się że wszystkie linki mają `https://`
- [ ] Telefon: format `tel:+48606108500` (bez spacji)
- [ ] Email: format `mailto:artur.olinski@leddesign.pl`
- [ ] Sprawdzić responsive (opcjonalnie - media queries)

### 5.2 Plan testowania

**Klienci email do przetestowania:**
1. **Gmail Web** (Chrome, Firefox)
2. **Gmail Mobile** (Android, iOS)
3. **Outlook Web** (opcjonalnie)
4. **Apple Mail** (opcjonalnie)

**Sposób testowania:**
1. Wysłać testowego emaila do siebie
2. Sprawdzić poprawność wyświetlania na różnych urządzeniach
3. Kliknąć wszystkie linki (tel, email, www)
4. Sprawdzić zaokrąglenia rogów
5. Sprawdzić wyrównanie tekstu i grafik

### 5.3 Problemy do rozwiązania (potencjalne)

| Problem | Rozwiązanie |
|---------|-------------|
| SVG nie wyświetla się | Konwersja na PNG |
| WebP nie działa w Outlook | Backup na JPG/PNG |
| Czcionka się nie ładuje | Fallback na Arial/sans-serif |
| Border-radius nie działa | VML dla Outlooka (zaawansowane) |
| Layout się rozjeżdża mobile | Media queries + max-width |

---

## FAZA 6: DOKUMENTACJA I WDROŻENIE

### 6.1 Instrukcja instalacji w Gmail

**Krok 1: Przejdź do ustawień Gmail**
1. Otwórz Gmail
2. Kliknij ikonę zębatki (⚙️) → "Zobacz wszystkie ustawienia"
3. Przejdź do zakładki "Ogólne"

**Krok 2: Edytuj podpis**
1. Przewiń do sekcji "Podpis"
2. Kliknij "Utwórz nowy" lub edytuj istniejący
3. Wklej kod HTML stopki
4. **Ważne:** Użyj trybu HTML (Ctrl+Shift+V lub ikonka `<>`)

**Krok 3: Zapisz zmiany**
1. Przewiń na dół strony
2. Kliknij "Zapisz zmiany"
3. Wyślij testowego emaila do sprawdzenia

### 6.2 Rozwiązywanie problemów

**Problem:** Grafiki się nie wyświetlają
- **Rozwiązanie:** Sprawdź czy linki to pełne URLe (https://)

**Problem:** Formatowanie się rozjeżdża
- **Rozwiązanie:** Upewnij się że wklejasz jako HTML, nie jako zwykły tekst

**Problem:** Czcionka wygląda inaczej
- **Rozwiązanie:** Gmail może nie ładować Google Fonts - to normalne, użyje Arial

### 6.3 Pliki końcowe

**Do dostarczenia:**
1. `stopka-html.html` - Pełny kod HTML stopki
2. `stopka-gmail.html` - Wersja zoptymalizowana do wklejenia w Gmail (bez `<html>`, `<head>`, `<body>`)
3. `instrukcja-instalacji.md` - Przewodnik instalacji
4. `lista-url-grafik.txt` - Lista wszystkich linków do grafik

---

## FAZA 7: KONTROLA JAKOŚCI (QA)

### 7.1 Checklist końcowy

**Grafika i layout:**
- [ ] Logo wyświetla się poprawnie w box z borderem
- [ ] Zdjęcie ma zaokrąglone rogi
- [ ] Wszystkie ikony są widoczne i wyrównane
- [ ] Tekst "Naszą pasją jest światło!" jest italic
- [ ] Odstępy między elementami są zgodne z projektem
- [ ] Kolor #52B5EB jest spójny we wszystkich elementach

**Funkcjonalność:**
- [ ] Link tel: +48 606 108 500 otwiera aplikację telefonu
- [ ] Link mailto: otwiera klienta email
- [ ] Link www.leddesign.pl otwiera stronę w nowej karcie
- [ ] Wszystkie linki działają na mobile

**Typografia:**
- [ ] Imię i nazwisko: Poppins Bold 13pt/17px
- [ ] Stanowisko: Poppins Regular 9pt/12px
- [ ] Kontakt: Poppins Regular 7pt/9px
- [ ] Tagline: Poppins Medium Italic 8pt/11px
- [ ] www.led.design: Poppins Regular ~11pt/14px

**Kompatybilność:**
- [ ] Działa w Gmail Web (desktop)
- [ ] Działa w Gmail Mobile (Android/iOS)
- [ ] Obrazy ładują się szybko (< 2s)
- [ ] Stopka mieści się w width ~1200px

### 7.2 Metryki jakości

**Ocena 10/10 wymaga:**
- ✓ 100% zgodność wizualna z stopka-artur.png
- ✓ Wszystkie linki działają poprawnie
- ✓ Czcionki, rozmiary i kolory są pixel-perfect
- ✓ Stopka działa w Gmail Web + Mobile
- ✓ Kod HTML jest czysty, zoptymalizowany
- ✓ Dokumentacja jest kompletna i zrozumiała

---

## TIMELINE WYKONANIA

### Priorytety:
1. **KRYTYCZNE:** Struktura HTML + hosting grafik
2. **WYSOKIE:** Implementacja sekcji + style
3. **ŚREDNIE:** Testy + optymalizacja
4. **NISKIE:** Dokumentacja dodatkowa

### Szacowany czas:
- Faza 3 (Hosting): 15-30 min
- Faza 4 (Implementacja): 45-60 min
- Faza 5 (Testy): 30 min
- Faza 6 (Dokumentacja): 20 min
- **TOTAL:** ~2-2.5h dla wykonania 10/10

---

## NOTATKI KOŃCOWE

**Kluczowe zasady:**
1. **Jakość > Szybkość** - dokładność wymiarów i kolorów
2. **Kompatybilność** - priorytet Gmail, ale test w innych klientach
3. **Inline CSS** - wszystkie style w atrybutach `style=""`
4. **Tabele zamiast div** - struktura tabelowa dla email
5. **Pełne URLe** - wszystkie grafiki z https://

**Narzędzia pomocnicze:**
- [HTML Email Check](https://www.htmlemailcheck.com/) - walidacja kodu
- [Litmus](https://litmus.com/) - testy w różnych klientach (płatne)
- [Can I Email](https://www.caniemail.com/) - sprawdzanie wsparcia CSS

**Backup plan:**
- Jeśli Google Fonts nie działa → Arial, sans-serif
- Jeśli SVG nie działa → PNG
- Jeśli WebP nie działa → JPG/PNG
- Jeśli border-radius nie działa → akceptowalne (tylko Outlook)

---

**Algorytm stworzony:** 2025-11-28
**Wersja:** 1.0
**Status:** Gotowy do realizacji
