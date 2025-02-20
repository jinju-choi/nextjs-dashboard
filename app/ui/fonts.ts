import { Inter, Lusitana, Noto_Sans_KR } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({ 
	subsets: ['latin'],
	weight: ['400', '700'],
});

export const notoSansKr = Noto_Sans_KR({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
})
