---
id: overview
title: Sales Doctor bilan integratsiya
sidebar_label: Umumiy ko‘rinish
sidebar_position: 1
---

# Sales Doctor bilan integratsiya

iBox Sales Doctor tizimi bilan B2B integratsiyani qo‘llab-quvvatlaydi. Bu savdo ma’lumotlarini avtomatik uzatish va hisobdan tortib distribyutsiyagacha bo‘lgan yagona jarayonni yo‘lga qo‘yish imkonini beradi.

Integratsiya doirasida:
- **iBox** — **ta'minotchi** sifatida ishlaydi;
- **Sales Doctor** — **mijoz** sifatida ishlaydi.

---

## Talablar

Boshlashdan oldin quyidagilarga ishonch hosil qiling:

- sizda iBox va Sales Doctor tizimlariga kirish mavjud;
- har ikkala tizimda ham mahsulotlar yaratilgan;
- mahsulotlarda **artikul** to‘ldirilgan;
- artikullar har ikkala tizimda **bir xil**;
- sizda administrator huquqlari mavjud.

---

## Bu qanday ishlaydi (qisqacha)

1. Siz **iBox’da sotuv yaratasiz**  
2. iBox ma’lumotlarni Sales Doctor’ga yuboradi  
3. Sales Doctor’da **tasdiqlanmagan qabul** yaratiladi  
4. Foydalanuvchi hujjatni tasdiqlaydi  

:::info Integratsiya triggeri
Integratsiya **iBox’da sotuv «Yakunlangan» status bilan saqlangan paytda** ishga tushadi.
:::

---

## Integratsiya qanday ishlaydi

Ma’lumotlar avtomatik tarzda uzatiladi.

**iBox yuboradi:**
- artikul;
- miqdor;
- narx;
- summa.

**Sales Doctor:**
- mahsulotni artikul bo‘yicha topadi;
- qabul hujjatini yaratadi;
- **"Kutilmoqda"** statusini o‘rnatadi.

---

## Hujjat statuslari

Sales Doctor’da quyidagi statuslar ishlatiladi:

- **Kutilmoqda** — hujjat yaratilgan, ammo tasdiqlanmagan  
- **Qabul qilingan** — mahsulot omborga qabul qilingan  
- **Rad etilgan** — hujjat bekor qilingan  

---

## Integratsiya qachon foydali

iBox va Sales Doctor integratsiyasi biznes jarayonlarini tizimlar o‘rtasida taqsimlash va ma’lumot almashinuvini avtomatlashtirish imkonini beradi.

**iBox quyidagilar uchun ishlatiladi:**
- ombor hisobi;
- ulgurji savdo;
- xaridlar va qoldiqlarni boshqarish;
- ishlab chiqarish va tannarx hisoblash.

**Sales Doctor quyidagilar uchun ishlatiladi:**
- distribyutsiya;
- savdo vakillari bilan ishlash;
- savdo nuqtalaridagi buyurtmalarni qayta ishlash;
- maydon savdolarini nazorat qilish.

---

## Asosiy foydalanish ssenariylari

### 1. Ishlab chiqarish → distribyutsiya

- Ishlab chiqarish iBox’da yuritiladi;  
- Tayyor mahsulot hamkorlarga jo‘natiladi;  
- Sales Doctor’da keyingi distribyutsiya uchun avtomatik ravishda qabul hujjati yaratiladi.

---

### 2. Ulgurji savdo → distribyutor mijozlar

- Siz iBox’da ta'minotchi sifatida ishlaysiz;  
- Sizning mijozlaringiz Sales Doctor’dan foydalanadi;  
- Sotuv paytida ma’lumotlar avtomatik ravishda uzatiladi;  
- Mijozlar mahsulotni qo‘lda kiritmasdan darhol sotishni boshlashi mumkin.

---

### 3. Hujjatlar almashinuvini avtomatlashtirish

- ma’lumotlarni qo‘lda kiritish bartaraf etiladi;
- xatolar xavfi kamayadi;
- buyurtmalarni qayta ishlash tezlashadi;
- hisobning shaffofligi oshadi.

---

## Biznes samarasi

Integratsiya quyidagilarga imkon beradi:

- operatsion xarajatlarni kamaytirish;
- hisob aniqligini oshirish;
- logistikani tezlashtirish;
- mahsulotlar harakati shaffofligini ta’minlash.

---

## Yagona jarayon

1. Xarid va ishlab chiqarish — iBox’da  
2. Mahsulotni shakllantirish — iBox’da  
3. Distribyutorga jo‘natish — iBox’da  
4. Avtomatik qabul — Sales Doctor’da  
5. Savdo vakillari orqali sotish — Sales Doctor’da  

---

## Cheklovlar

- integratsiya faqat token bog‘langan mijozlar uchun ishlaydi;
- artikulsiz mahsulotlar uzatilmaydi;
- artikullar har ikkala tizimda bir xil bo‘lishi kerak;
- yuborilgandan keyin sotuv o‘zgartirilsa, hujjat avtomatik yangilanmaydi.

---

## Integratsiyani kim ishga tushiradi

Tashabbuskor — **iBox**.

Aynan iBox sotuv yaratilganda ma’lumotlarni Sales Doctor’ga yuboradi.