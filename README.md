# 💌 Happy Anniversary — เว็บไซต์วันครบรอบของเรา

## วิธีใช้งาน
เปิดไฟล์ `index.html` ด้วยเบราว์เซอร์ได้ทันที ไม่ต้องติดตั้งอะไรเพิ่ม

## วิธีแก้ไขเนื้อหา
ทุกอย่างที่แก้ไขได้ถูกรวมไว้ที่ด้านบนของไฟล์ `js/script.js` ในส่วน `CONFIG`:

- `anniversaryDate` — วันครบรอบ (ต้องตรงกับที่ให้กรอกในหน้า Login)
- `names` — ชื่อคู่รักทั้งสอง
- `backgrounds` — path รูปพื้นหลังหน้า Login และ Hero
- `timeline` — รายการเหตุการณ์สำคัญ (เพิ่ม/ลบ/แก้ไขได้อิสระ)
- `gallery` — รายการรูปภาพใน Gallery
- `loveLetter` — ข้อความจดหมายรัก
- `reasons` — เหตุผลที่รัก (สุ่มแสดง)
- `music` — path ไฟล์เพลงและชื่อเพลง

## การเพิ่มรูปภาพและเพลง
วางไฟล์ของคุณไว้ที่:

```
/assets/images/   → รูปพื้นหลัง, รูป Timeline, รูป Gallery (.jpg / .png / .webp)
/assets/music/    → ไฟล์เพลงพื้นหลัง (.mp3)
```

จากนั้นแก้ path ใน `CONFIG` ให้ตรงกับชื่อไฟล์จริงของคุณ

> หมายเหตุ: ถ้ายังไม่ได้ใส่ไฟล์รูป/เพลง เว็บไซต์จะยังทำงานได้ปกติ โดยจะแสดง
> ไอคอนหรือข้อความแทนตำแหน่งที่ควรมีไฟล์ (graceful fallback) จนกว่าคุณจะใส่ไฟล์จริง

## โครงสร้างไฟล์
```
/index.html
/css/style.css
/js/script.js
/assets/images/
/assets/music/
```

## ฟีเจอร์หลัก
- หน้า Login ตรวจสอบวันครบรอบก่อนเข้าเว็บไซต์หลัก
- Hero, Timeline, Gallery พร้อม Lightbox, Love Letter (พิมพ์ทีละตัว)
- Love Counter นับเวลาแบบ Real-time
- Reasons I Love You แบบสุ่ม
- เครื่องเล่นเพลงพร้อม Progress bar และปรับระดับเสียง
- Surprise Section พร้อม Confetti / Heart Explosion
- Responsive ทุกขนาดหน้าจอ, รองรับ `prefers-reduced-motion`
