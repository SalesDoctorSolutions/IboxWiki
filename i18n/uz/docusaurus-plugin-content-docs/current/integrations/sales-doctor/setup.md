---
id: setup
title: Integratsiyani sozlash
sidebar_label: Sozlash
sidebar_position: 2
---

# Sales Doctor bilan integratsiyani sozlash

Ushbu bo‘limda iBox va Sales Doctor o‘rtasidagi integratsiyani ulashning to‘liq jarayoni bayon qilingan.

---

## Talablar

Boshlashdan oldin quyidagilarga ishonch hosil qiling:

- sizda iBox va Sales Doctor tizimlariga kirish mavjud;
- sizda administrator huquqlari mavjud;
- har ikkala tizimda ham mahsulotlar yaratilgan;
- mahsulotlarda **artikul** to‘ldirilgan;
- artikullar har ikkala tizimda **bir xil**.

:::warning Muhim
Artikul — mahsulotning asosiy identifikatori.  
Agar artikullar mos kelmasa, mahsulotlar bir-biriga bog‘lanmaydi.
:::

---

## Ulanishning umumiy sxemasi

Integratsiya ikki bosqichda sozlanadi:

1. **Sales Doctor** tizimida:
   - integratsiya yoqiladi;
   - ta'minotchi (iBox) yaratiladi;
   - token yaratiladi.

2. **iBox** tizimida:
   - integratsiya yoqiladi;
   - mijoz yaratiladi;
   - token bog‘lanadi.

---

## 1-qadam. Sales Doctor’da sozlash

### 1.1 Integratsiyani yoqish

1. **Sozlamalar** bo‘limiga o‘ting  
2. **27. Integratsiya** bo‘limini oching  
3. **iBox** blokida **Integratsiya** tugmasini bosing  
4. Quyidagilarni ko‘rsating:
   - qabul ombori;
   - narx turi  
5. **Saqlash** tugmasini bosing

---

### 1.2 Ta'minotchini qo‘shish (iBox)

1. **Kassa** modulini oching  
2. **Ta'minotchilar** bo‘limiga o‘ting  
3. **Qo‘shish** tugmasini bosing  
4. Quyidagilarni to‘ldiring:
   - nomi  
   - telefon  
   - manzil  
5. **Tizim turi** maydonida **iBox** ni tanlang  
6. **Saqlash** tugmasini bosing

Ta'minotchi yaratilgandan so‘ng:

- jadvalda **ta'minotchi tokeni** paydo bo‘ladi;
- uni nusxalab oling — u iBox’da sozlash uchun kerak bo‘ladi.

---

## 2-qadam. iBox’da sozlash

### 2.1 Integratsiyani yoqish

1. **Sozlamalar** bo‘limiga o‘ting  
2. **Integratsiyalar** bo‘limini oching  
3. **Sales Doctor** ni toping  
4. **⚙️ (sozlamalar)** tugmasini bosing  
5. **Faol qilish** opsiyasini tanlang

---

### 2.2 Mijozni yaratish va sozlash

1. iBox’da [mijoz yarating](/knowledge/customers/customer-add.md#customer-add)  
2. Mijoz kartasini oching  
3. **Integratsiyalar** bo‘limiga o‘ting  
4. **Plus** tugmasini bosing  
5. Sales Doctor’dan olingan **ta'minotchi tokeni**ni kiriting  
6. **Saqlash** tugmasini bosing

---

## Sozlamani tekshirish

Sozlash tugagandan so‘ng test o‘tkazish tavsiya etiladi:

1. iBox’da test sotuvni yarating  
2. Quyidagilarga ishonch hosil qiling:
   - token bog‘langan mijoz tanlangan  
   - mahsulotlarda artikullar mavjud  
3. Sales Doctor’da hujjat paydo bo‘lganini tekshiring  

---

## Sozlashdagi cheklovlar

- bitta token bitta mijozga bog‘lanadi;
- integratsiya faqat token bog‘langan mijozlar uchun ishlaydi;
- token o‘zgartirilsa, qayta sozlash talab etiladi.

---

## Tavsiyalar

- artikullar uchun yagona formatdan foydalaning;
- avval integratsiyani test ma’lumotlarida sozlang;
- kengaytirishdan oldin bitta mijozda ishlashini tekshiring;
- tokenlarni xavfsiz joyda saqlang.

---

:::tip Maslahat
Sozlash muvaffaqiyatli yakunlangandan so‘ng quyidagi bo‘limga o‘ting  
👉 [Integratsiya bilan ishlash](./usage)
:::