// app/profile/page.tsx
import Image from 'next/image';

export default function ProfileTokoCrochet() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 px-4 pb-6">
      <div className="bg-white/80 rounded-3xl shadow-xl p-8 max-w-3xl w-full flex flex-col items-center">
        <Image
          src="/logo.png" 
          alt="Logo Toko Crochet"
          width={120} 
          height={120}
          className="rounded-full border-4 border-pink-200 shadow-lg mb-4 bg-white"
          priority
        />
        <h1 className="text-4xl font-bold text-pink-500 mb-5 drop-shadow-lg">CrochetCute Shop</h1>
        <p className="text-sm text-gray-700 m-4 text-center">
          "Toko rajutan handmade dengan sentuhan cinta dan warna pastel.<br />
          Temukan boneka amigurumi, pouch, tas, dan aksesoris lucu lainnya!""
        </p>

        <p className="text-sm text-gray-700 m-4 text-center">
            Temukan Kami disini
        </p>
        <div className="flex gap-4 mt-2">
          <a href="https://instagram.com/crochetcute.shop" target="_blank" rel="noopener noreferrer"
            className="bg-pink-400 text-white px-4 py-2 rounded-full shadow hover:bg-pink-500 transition">
            Instagram
          </a>
          <a href="mailto:crochetcute@email.com"
            className="bg-purple-400 text-white px-4 py-2 rounded-full shadow hover:bg-purple-500 transition">
            Email
          </a>
        </div>
      </div>
    </main>
  );
}