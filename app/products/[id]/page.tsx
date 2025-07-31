'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  stock?: number;
  image?: string;
}

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) {
          setProduct(null);
        } else {
          const data = await res.json();
          setProduct(data);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
    else setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 rounded-full border-t-4 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat produk...</p>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-red-600 text-lg font-semibold">Produk tidak ditemukan.</p>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 py-9 min-h-screen">
      <section className="bg-gray-100 max-w-4xl mx-auto px-8 py-8 rounded-2xl shadow-lg">
        <div className="flex justify-center py-5">
          <Image
            src={product.image || '/product1.jpg'}
            alt={product.name}
            width={400}
            height={300}
            className="rounded-lg object-cover mb-4"
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-pink-600 font-bold mb-2">Rp {product.price.toLocaleString()}</p>
        <p className="mb-4">{product.description || 'Tidak ada deskripsi.'}</p>

        <p className="text-sm text-gray-800 mb-2 font-semibold">Deskripsi Produk:</p>
        <p className="text-sm text-gray-500 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit pretium ipsum,
          eget feugiat justo cursus nec. Proin gravida ligula diam, semper lacinia magna sagittis
          vitae. Morbi eros ante, finibus et dui ut, pretium sagittis nisl.
        </p>

        <p className="text-sm text-gray-500 mb-8">Stok: {product.stock ?? '100'}</p>

        <Link
          href="https://wa.me/6285797207968"
          target="_blank"
          className="justify-center text-center mt-auto w-full inline-block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Beli Sekarang
        </Link>
      </section>
    </main>
  );
}
