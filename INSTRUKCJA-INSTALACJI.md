# 📧 INSTRUKCJA INSTALACJI STOPKI W GMAIL

## Dla: Artur Oliński - LED Design

---

## METODA 1: INSTALACJA W GMAIL WEB (ZALECANA)

### Krok 1: Otwórz ustawienia Gmail

1. Zaloguj się do Gmail: https://mail.google.com
2. Kliknij ikonę **zębatki** (⚙️) w prawym górnym rogu
3. Wybierz **"Zobacz wszystkie ustawienia"** (See all settings)

### Krok 2: Przejdź do sekcji podpisu

1. Upewnij się, że jesteś w zakładce **"Ogólne"** (General)
2. Przewiń w dół do sekcji **"Podpis"** (Signature)

### Krok 3: Utwórz nowy podpis

1. Kliknij **"+ Utwórz nowy"** (Create new)
2. Nadaj nazwę podpisowi, np. "LED Design - Artur"
3. Pojawi się edytor podpisu

### Krok 4: Wklej kod HTML stopki

**WAŻNE:** Musisz wkleić kod jako HTML, nie jako zwykły tekst!

#### Opcja A: Używając przycisku "Wstaw HTML"

1. Otwórz plik **`stopka-gmail.html`** w Notatniku
2. Zaznacz **CAŁĄ** zawartość pliku (Ctrl+A)
3. Skopiuj (Ctrl+C)
4. W edytorze Gmail kliknij ikonę **"Wstaw obraz"** > **"Przełącz na tryb HTML"**
   - Lub naciśnij **Ctrl+Shift+V** aby wkleić bez formatowania
5. Wklej skopiowany kod (Ctrl+V)
6. Kliknij **"Aktualizuj"** lub przełącz z powrotem na widok normalny

#### Opcja B: Bezpośrednie wklejanie (jeśli Opcja A nie działa)

1. Otwórz plik **`stopka-html.html`** w przeglądarce (już otwarty)
2. Zaznacz **CAŁĄ** stopkę wizualnie (kliknij i przeciągnij myszką)
3. Skopiuj (Ctrl+C)
4. Wróć do edytora podpisu w Gmail
5. Wklej (Ctrl+V)

### Krok 5: Konfiguracja domyślna

1. W sekcji **"Domyślny podpis"** (Signature defaults):
   - **Dla nowych wiadomości:** Wybierz "LED Design - Artur"
   - **Dla odpowiedzi/przekazań:** Wybierz "LED Design - Artur" (lub "-- " jeśli wolisz krótszą wersję)

### Krok 6: Zapisz zmiany

1. Przewiń na sam dół strony
2. Kliknij **"Zapisz zmiany"** (Save Changes)
3. Poczekaj na potwierdzenie "Zmiany zostały zapisane"

### Krok 7: Test

1. Kliknij **"Napisz"** (Compose) aby stworzyć nowy email
2. Sprawdź czy stopka wyświetla się poprawnie
3. Wyślij testowego emaila do siebie
4. Sprawdź jak stopka wygląda po otwarciu emaila

---

## METODA 2: INSTALACJA W GMAIL MOBILE (Android/iOS)

### Uwaga
Aplikacja mobilna Gmail **nie obsługuje** zaawansowanych podpisów HTML. Zalecamy:

1. **Skonfiguruj podpis na komputerze** (Metoda 1)
2. Podpis będzie automatycznie widoczny w emailach wysłanych z telefonu
3. Ewentualnie w aplikacji mobilnej ustaw prosty tekstowy podpis:

```
Artur Oliński
Właściciel | LED Design
Tel: +48 606 108 500
Email: artur.olinski@leddesign.pl
www.leddesign.pl
```

---

## ROZWIĄZYWANIE PROBLEMÓW

### Problem: Grafiki się nie wyświetlają

**Przyczyna:** Blokada obrazów w Gmail

**Rozwiązanie:**
1. W testowym emailu kliknij **"Wyświetl obrazy"** (Display images)
2. Opcjonalnie: Ustawienia Gmail > "Obrazy" > "Zawsze pokazuj obrazy zewnętrzne"

### Problem: Stopka jest zbyt szeroka/wąska

**Przyczyna:** Różnice w szerokości okna Gmail

**Rozwiązanie:**
- Stopka dostosowuje się automatycznie do max 900px
- Jeśli jest za duża, możesz zmniejszyć w pliku HTML wartość `max-width: 900px` na `max-width: 700px`

### Problem: Czcionka wygląda inaczej niż w projekcie

**Przyczyna:** Gmail może blokować Google Fonts

**Rozwiązanie:**
- To normalne zachowanie - Gmail użyje czcionki Arial jako fallback
- Stopka nadal wygląda profesjonalnie

### Problem: Zaokrąglone rogi się nie wyświetlają

**Przyczyna:** Outlook nie wspiera `border-radius`

**Rozwiązanie:**
- W Gmail będzie działać poprawnie
- W Outlook logo i zdjęcie będą miały ostre rogi (akceptowalne)

### Problem: Formatowanie się rozjeżdża po wklejeniu

**Przyczyna:** Wklejono jako zwykły tekst zamiast HTML

**Rozwiązanie:**
1. Usuń niepoprawny podpis
2. Spróbuj ponownie używając **Ctrl+Shift+V** (wklej bez formatowania)
3. Lub otwórz `stopka-html.html` w przeglądarce i skopiuj wizualnie

### Problem: Linki nie działają (tel:, mailto:)

**Przyczyna:** Niepoprawne skopiowanie kodu

**Rozwiązanie:**
- Upewnij się, że skopiowałeś cały kod ze wszystkimi atrybutami `href`
- Sprawdź w testowym emailu czy linki są klikalne

---

## TESTOWANIE STOPKI

### Checklist testowy:

- [ ] Stopka wyświetla się w nowej wiadomości
- [ ] Logo ma niebieskie obramowanie i zaokrąglone rogi
- [ ] Zdjęcie Artura ma zaokrąglone rogi
- [ ] Wszystkie ikony są widoczne
- [ ] Tekst "Naszą pasją jest światło!" jest pochylony (italic)
- [ ] Kliknięcie w telefon otwiera aplikację telefonu
- [ ] Kliknięcie w email otwiera nowego emaila
- [ ] Kliknięcie w www.leddesign.pl otwiera stronę
- [ ] Stopka wygląda dobrze na desktop i mobile
- [ ] Kolory są zgodne z projektem (#52B5EB - jasny niebieski)

### Test w różnych klientach email (opcjonalnie):

1. **Gmail Web** (Chrome) - ✓ Główny priorytet
2. **Gmail Mobile** (Android/iOS) - ✓ Sprawdź czy ikony są czytelne
3. **Outlook Web** - Może mieć ostre rogi zamiast zaokrąglonych
4. **Apple Mail** - Powinien działać podobnie jak Gmail

---

## EDYCJA STOPKI (PRZYSZŁOŚĆ)

### Jeśli chcesz zmienić dane kontaktowe:

1. Otwórz plik `stopka-html.html` w Notatniku
2. Znajdź odpowiednią sekcję (Ctrl+F):
   - Telefon: szukaj `+48 606 108 500`
   - Email: szukaj `artur.olinski@leddesign.pl`
   - WWW: szukaj `www.leddesign.pl`
3. Zmień tekst i zapisz
4. Zainstaluj ponownie w Gmail (Metoda 1)

### Jeśli chcesz zmienić zdjęcie:

1. Załaduj nowe zdjęcie na ImgBB.com
2. Skopiuj nowy URL
3. W pliku `stopka-html.html` znajdź:
   ```html
   <img src="https://i.ibb.co/Z6gjGghC/artur-olinski.webp"
   ```
4. Zamień URL na nowy
5. Zainstaluj ponownie w Gmail

---

## PLIKI W PROJEKCIE

```
📁 C:\ai\stopa_leddesign\
├── stopka-html.html          ← Pełna wersja (do podglądu w przeglądarce)
├── stopka-gmail.html         ← Wersja do wklejenia w Gmail ⭐
├── algoritm.md               ← Dokumentacja techniczna
├── lista-url-grafik.txt      ← Lista linków do grafik
├── INSTRUKCJA-INSTALACJI.md  ← Ten plik
├── stopka-artur.png          ← Projekt graficzny (wzór)
└── data-uris.json            ← Pliki graficzne zakodowane (backup)
```

### Które pliki są najważniejsze?

1. **stopka-gmail.html** ⭐ - Do instalacji w Gmail
2. **stopka-html.html** - Do podglądu w przeglądarce
3. **INSTRUKCJA-INSTALACJI.md** - Ten plik
4. **lista-url-grafik.txt** - Dokumentacja linków

---

## WSPARCIE TECHNICZNE

### Jeśli coś nie działa:

1. **Sprawdź czy skopiowałeś CAŁY kod** z pliku `stopka-gmail.html`
2. **Wyczyść cache przeglądarki** (Ctrl+Shift+Delete)
3. **Spróbuj w trybie incognito** przeglądarki
4. **Sprawdź połączenie internetowe** (grafiki są ładowane z ImgBB)

### Kontakt z webmasterem:

Jeśli nadal masz problemy, skontaktuj się z osobą, która przygotowała stopkę i dołącz:
- Screenshot problemu
- Informację jakiej przeglądarki używasz
- Dokładny opis co się dzieje

---

## BACKUP I BEZPIECZEŃSTWO

### Backup stopki:

1. **Kod HTML** - Zapisany w plikach `stopka-html.html` i `stopka-gmail.html`
2. **Grafiki:**
   - Zdjęcie: https://i.ibb.co/Z6gjGghC/artur-olinski.webp (ImgBB)
   - Logo i ikony: Zakodowane w pliku jako Data URI (nie wymagają internetu)

### Trwałość linków:

- **ImgBB:** Linki są permanentne i nie wygasają (darmowy plan)
- **Data URI:** Grafiki wbudowane w kod, zawsze dostępne

---

**Data utworzenia:** 2025-11-28
**Wersja:** 1.0
**Projekt:** LED Design - Stopka Email Artur Oliński

**✅ GOTOWE DO INSTALACJI!**
