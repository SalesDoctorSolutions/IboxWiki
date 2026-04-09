---
id: usage
title: Integratsiya bilan ishlash
sidebar_label: Ishlash va xatolar
sidebar_position: 3
---

# Sales Doctor integratsiyasi bilan ishlash

Ushbu bo‘limda integratsiyadan kundalik ish jarayonida qanday foydalanish, shuningdek xatolarni qanday aniqlash va tuzatish tushuntiriladi.

---

## Jarayon qanday ishlaydi

Integratsiya avtomatik ishlaydi:

1. Siz **iBox’da sotuv yaratasiz**
2. iBox ma’lumotlarni Sales Doctor’ga yuboradi
3. Sales Doctor’da **tasdiqlanmagan kirim hujjati** yaratiladi
4. Foydalanuvchi hujjatni tasdiqlaydi

:::info Integratsiya ishga tushish sharti
Integratsiya **sotuv birinchi marta “Yakunlangan” statusiga o‘tkazilganda** ishga tushadi.

Ma’lumotlar yuborilgandan so‘ng:
- hujjat yuborilgan deb belgilanadi;
- qayta yuborish avtomatik ravishda **amalga oshirilmaydi**;
- sotuvni o‘zgartirish yoki statuslarni almashtirish **qayta yuborishga olib kelmaydi**.
:::

---

## iBox’da sotuv yaratish

1. **Sotuvlar → Sotuvlar** bo‘limiga o‘ting
2. **Plyus** tugmasini bosing
3. Mijozni tanlang
   - mijozga **integratsiya biriktirilgan bo‘lishi kerak**
4. Quyidagilarni ko‘rsating:
   - ombor
   - valyuta
5. Mahsulotlarni qo‘shing:
   - miqdor
   - narx
6. **Saqlash** tugmasini bosing

Saqlangandan so‘ng:

- ma’lumotlar avtomatik ravishda Sales Doctor’ga yuboriladi;
- **"Kutilmoqda"** statusidagi kirim hujjati yaratiladi.

---

## Sales Doctor’da tasdiqlash

1. **Ombor** bo‘limiga o‘ting
2. **Tasdiqlanmagan kirimlar** bo‘limini oching
3. Kerakli hujjatni oching
4. Ma’lumotlarni tekshiring
5. Amalni tanlang:
   - **Qabul qilish** — mahsulot omborga qabul qilinadi
   - **Rad etish** — hujjat bekor qilinadi

---

## Statuslar va ularning ma’nosi

| Status        | Tavsif                                 |
|--------------|-----------------------------------------|
| Kutilmoqda   | hujjat yaratilgan, lekin tasdiqlanmagan |
| Qabul qilindi| mahsulot omborga qabul qilindi             |
| Rad etildi   | hujjat bekor qilindi                    |

---

## Odatiy ish ssenariysi

1. Menejer iBox’da sotuv yaratadi
2. Ma’lumotlar avtomatik ravishda yuboriladi
3. Sales Doctor’da kirim paydo bo‘ladi
4. Mas’ul xodim ma’lumotlarni tekshiradi
5. Hujjatni tasdiqlaydi

---

## Muhim jihatlar

- sotuv integratsiya ulangan mijoz uchun yaratilgan bo‘lishi kerak;
- barcha mahsulotlarda artikul bo‘lishi kerak;
- artikullar har ikki tizimda bir xil bo‘lishi kerak.

---

## Diagnostika va xatolar

### Xatolarni qayerdan ko‘rish mumkin

1. iBox’da **Sotuvlar → Sotuvlar** bo‘limini oching
2. Kerakli hujjatni oching
3. **Loglar** yorlig‘iga o‘ting

Agar xato bo‘lsa:
- **Status** ustunida *Xato* deb ko‘rsatiladi;
- **Ma’lumot** ustunida esa sabab ko‘rsatiladi.

Batafsil ma’lumotni ko‘rish uchun xabar ustiga bosing.

---

## Tez-tez uchraydigan muammolar va yechimlar

### ❌ Kirim hujjati paydo bo‘lmadi

Sabablari:

- mijoz integratsiyaga ulanmagan;
- token yo‘q yoki noto‘g‘ri;
- integratsiya o‘chirilgan;
- yuborishda xatolik yuz bergan.

Yechim:

- integratsiya sozlamalarini tekshiring;
- tokenni tekshiring;
- loglarni ochib, xatoni toping.

---

### ❌ mahsulotlar topilmadi

Sabablari:

- artikul mavjud emas;
- artikullar mos kelmaydi.

Yechim:

- har ikki tizimdagi artikullarni tekshiring;
- ma’lumotlarni to‘g‘rilang;
- qayta yuborishni amalga oshiring.

---

### ❌ Noto‘g‘ri summalar yoki narxlar

Sabablari:

- Sales Doctor’da noto‘g‘ri narx turi tanlangan;
- sotuv ma’lumotlarida xatolik bor.

Yechim:

- narx sozlamalarini tekshiring;
- hujjat ma’lumotlarini tekshiring.

---

## Hujjatni qayta yuborish

Agar xatolik yuz bersa:

1. Ma’lumotlarni tuzating:
   - artikullar
   - narx
   - miqdor
2. Hujjatni saqlang
3. **Qayta yuborish (🔄)** tugmasini bosing

---

## Integratsiyani nazorat qilish

Tavsiya etiladi:

- loglarni muntazam tekshirib borish;
- tasdiqlanmagan kirimlarni kuzatib borish;
- mas’ul xodim tayinlash.

---

## Eng yaxshi amaliyotlar

- noyob artikullardan foydalaning;
- yuborilgandan keyin hujjatlarni tahrirlamang;
- o‘zgarishlarni ishlatishdan oldin test qiling;
- xatolarni loglar orqali nazorat qiling.

---

## Qachon qo‘llab-quvvatlash xizmatiga murojaat qilish kerak

Quyidagi holatlarda qo‘llab-quvvatlash xizmatiga murojaat qiling:

- xatolik tushunarsiz bo‘lsa;
- ma’lumotlar sababsiz yuborilmasa;
- doimiy dublikatlar paydo bo‘lsa;
- integratsiya beqaror ishlasa.

---

:::tip Maslahat
Agar siz hali integratsiyani sozlamagan bo‘lsangiz, quyidagi bo‘limga o‘ting  
👉 [Integratsiyani sozlash](./setup)
:::