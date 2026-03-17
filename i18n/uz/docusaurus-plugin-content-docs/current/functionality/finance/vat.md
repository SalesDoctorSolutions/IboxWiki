---
id: vat
title: QQS ni ishlatish
sidebar_label: QQS ni ishlatish
sidebar_position: 4
---

# QQS ni hujjatlarda ishlatish

Ushbu funksiya **har bir mahsulot uchun QQSni hisobga olish** va ushbu ma’lumotlardan hujjatlarni rasmiylashtirish hamda yukxatlarni chop etishda foydalanish imkonini beradi.

Funksiya yoqilgandan so‘ng:

- **sotuvlar, buyurtmalar, qaytarishlar, xaridlar, xarid buyurtmalar va ta'minotchiga qaytarishlar** hujjatlaridagi mahsulotlar jadvalida **QQS foizi**ni ko‘rsatish uchun maydon paydo bo‘ladi;
- mahsulot kartasidagi **Boshqalar** yorlig‘ida **standart QQS**ni belgilash imkoniyati paydo bo‘ladi.

Ushbu funksiyadan yukxatlarni chop etishda **QQS foizi va QQSsız narx**ni ko‘rsatish uchun foydalanish mumkin.

---

:::info Ma’lumot
iBox tizimida odatda **narxlar QQS bilan birga** ko‘rsatiladi.
:::

---

## Funksiya qachon foydali

Ushbu funksiyadan foydalanish quyidagilarga yordam beradi:

- soliq talablarini inobatga olgan holda hujjatlarni to‘g‘ri rasmiylashtirish  
- mijozlar va ta'minotchilarga yukxatlarda QQS summasi va foizini ko‘rsatish  
- har bir mahsulot bo‘yicha hujjatlarga QQSni avtomatik qo‘shish  
- soliqlarni qo‘lda hisoblashdagi xatolarni kamaytirish  
- savdo va xaridlar hisobini yanada shaffof yuritish  

Bu ayniqsa quyidagi holatlarda foydali:

- kompaniya QQS to‘lovchisi bo‘lsa  
- rasmiy yukxatlarni chop etish talab qilinsa  
- mahsulotlarga turli QQS stavkalari qo‘llanilsa  
- mahsulot narxini QQSsız ko‘rish muhim bo‘lsa  

---

## Funksiyani qanday yoqish mumkin

1. Chap panelda **Sozlamalar** bo‘limiga o‘ting.
2. Sozlamalarda **Korxona Sozlamalari** bo‘limini oching.
3. **Funksional** bo‘limiga o‘ting.
4. **QQS ni hujjatlarda ishlatish** parametrini toping va o‘ng tomondagi **qalam** belgisini bosing.
5. **Ha** variantini tanlang.
6. O‘zgarishlarni saqlash uchun **ko‘k belgi (✓)** tugmasini bosing.
---

## Mahsulot uchun standart QQS foizini qanday ko‘rsatish mumkin

1. **Mahsulotlar → Mahsulotlar** bo‘limiga o‘ting.  
2. Kerakli mahsulotning o‘ng tomoniga kursorni olib boring va ✏️ **Qalam** (**Tahrirlash**) belgisini bosing.  
3. **Boshqalar** yorlig‘ini oching.  
4. Mahsulot uchun **QQS foizi**ni kiriting.  
5. **Saqlash** tugmasini bosing.

---

## Chop etiladigan yukxatga QQSni qanday qo‘shish mumkin

1. Chap panelda **Sozlamalar** bo‘limiga o‘ting.  
2. Sozlamalarda **Chop etish shablonlari** bo‘limini oching.  
3. Kerakli shablonni yuklab oling va uni tahrir qiling.  
4. Excel faylini tahrirlash vaqtida mahsulotlar jadvaliga quyidagi qiymatlarni qo‘shing:  
   - **QQS foizi** — `[products.vat_percent]`  
   - **QQSsız narx** — `[products.origin_price]`  
5. **Chop etish shablonlari** bo‘limida **Shablonni yuklash** tugmasini bosing.  
6. Saqlangan Excel faylini tanlang.  
7. **Saqlash** tugmasini bosing.