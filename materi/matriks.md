---
title: Matriks
---
Materi Matriks

1. Transpose Matrik
   Transpose matriks adalah sebuah matriks baru yang terbentuk dari pertukaran tempat baris dan kolom pada matriks awal. Transpose matriks A dinotasikan dengan A'.

A =  	At  =\
B =   	Bt =\
Contoh Soal :
Diketahui transpose matriks , maka matriks A adalah…
A.  
B. 
C. 
D. 
E. 

Pembahasan:
Cara menyelesaikannya tetap sama yaitu, pertukaran baris dengan kolom. Baris 1 -> kolom 1, baris 2 - > kolom 2 akan menjadi . Sehingga jawabannya adalah: B.

2. Operasi Matrik
   operasi penjumlahan dua matriks dengan menjumlahkan komponen-komponennya yang seletak.
       a. Penjumlahan Matrik
   Sifat komunitatif
   A + B = B + A
   Sifat asosiatif 
   (A + B) + C = A + ( B + C)
   Matrik identitas penjumlahan, yaitu matriks O, sehingga berlaku
   A + O = O + A = A
   Invers penjumlahan matriks A adalah –A, sehingga
   A + (-A) = (-A) + A = O
   Contoh soal :
   Diketahui matriks A =  dan matriks B = . Tentukan matriks A + B ?
   Pembahasan:
   Hasil dari A + B dapat diperoleh dengan menjumlahkan setiap elemen matriks A yang seposisi dengan setiap elemen matriks B.
   A + B = .
       b.  Pengurangan matriks
   A - B = A + (-B)
   Contoh :
   Diketahui matriks A =  dan matrik B =  tentukan matriks A – B?
   Pemabahasan :
   Hasil dari A - B dapat diperoleh dengan mengurangkan setiap elemen matriks A yang seposisi dengan setiap elemen matriks B. 
   A – B =  = 
        c.Perkalian matrik
3. Determinan matrik
   Determinan adalah matrik yang jumlah baris dan kolomnya sama.
   Determinan ada 2 bagian, yaitu :
       a. Determinan matriks 2 x 2
   A = 
   Contoh soal :
   Perhatikan matriks A dibawah ini 

A =  

Pembahasan :

det(B) =   
=  (1)(4) - (2)(3)

⇔ det(B) = 4 - 6
⇔ det(B) = -2
b.  Determinan matriks 3 x 3
A = 
Contoh soal :
Diketahui sebuah matriks A sebagai berikut:
A =   Nilai determinan dari matrik A ?

Pembahasan :

det(A) =  
det(A) = (1.3.3) + (2.2.2) + (1.3.1) – (2.3.1) – (1.2.1) = (3.3.2)
det(A) = 9 + 8 + 3 – 6 - 2 – 18
det(A) = 20 – 26
det(A) = -6

4. Adjoin matriks
   Adjoin matriks merupakan transpose dari suatu matriks yang elemen-elemennya merupakan kofaktor dari elemen-elemen matriks tersebut. 
       a. Adjoin Matriks 
   Adjoin matriks ordo  diperoleh dengan mentraspose matriks kofaktor. Misalnya,

Maka, 
    • Minor matriks A adalah









b.   Adjoin Matriks 
Jika kofaktor matriks A adalah

Contoh Soal
    1. 
    2. 
Pembahasan
    1. 
    2. 
Berdasarkan penyelesaian pada contoh diatas, diketahui matriks kofaktor dari matriks 

.

5. Invers matrik
   Pada aljabar dibutuhkan operasi dengan invers perkalian untuk memperoleh unsur identitas. Begitu pula pada matriks, jika suatu matriks dikalikan dengan inversnya maka akan memperoleh matriks identitas. 
   	

Keterangan :
    • A‾¹ =  Invers Matriks (A)
    • det (A) = Determinan Matriks (A)
    • Adj (A) = Adjoin Matriks (A)





contoh soal :

Pembahasan :
baris kedua dari kolom pertama dan baris pertama dari kolom kedua dikalikan dengan -1. Hasilnya adalah sebagai berikut.

Selanjutnya, cari determinan matriks
Det = (2 ˣ 2 ) – ( 4 ˣ 1)
      = 12 – 4
      = 8
Setelah nilai adjoin dan determinan matriks diketahui. Kemudian masukkan rumus matriks di atas. Hasilnya adalah :

b.Invers matrik 3 x 3

Rumus :

Contoh soal :

 A =  menentukan kebalikan dari matriks di atas A
Pemabahasan :

6. Penyelesaian persamaan dengan cara matriks
   Persamaan matriks ada dua bagian  yaitu :
   a. Persamaan linear 2 variabel

Contoh soal :
Tentukan penyelesaian dari sistem persamaan linear berikut dengan cara matriks.
2x + y  = 7
X + 3y  = 7
Jawab :
Dari persamaan di atas dapat kita susun menjadi bentuk matriks sebagai berikut.

Dengan menggunakan rumus penjelasan persamaan matriks di atas, diperoleh sebagai berikut.

Jadi, diperoleh penyelesaian x = 1 dan y = 2.
    b. Sistem Persamaan Linear 3 variabel 

Tentukan himpunan penyelesaian dari sistem persamaan berikut.
2x + y – z = 1
x  + y + z  = 6
jawaban :
Sistem persamaan linear di atas dapat kita susun ke dalam bentuk matriks sebagai berikut.
Misalkan A =  , X =  , dan B = 

Dengan menggunakan minor-kofaktor, diperoleh :

det A = 

det A = 2(3) – 1(0) + (–1)(–3) = 9

Dengan menggunakan minor-kofaktor, diperoleh :

Dengan demikian, diperoleh :
kof(A) = 

Oleh karena itu, adj(A) = (kof(A))T.
Adj(A) = 
Jadi, X = 

Jadi, diperoleh x = 1, y = 2, dan z = 3. Dengan demikian, himpunan penyelesaian sistem persamaan di atas adalah {(1, 2, 3)}.