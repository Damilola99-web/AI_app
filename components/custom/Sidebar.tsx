'use client';

// import { routes } from '@/lib/helper';
import { cn } from '@/lib/utils';
import { Montserrat } from 'next/font/google';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

import {
	Code,
	ImageIcon,
	LayoutDashboard,
	MessagesSquare,
	Music,
	Settings,
	VideoIcon,
} from 'lucide-react';

export const routes = [
	{
		label: 'Dashboard',
		icon: LayoutDashboard,
		href: '/dashboard',
		color: 'text-sky-500',
	},
	{
		label: 'Conversation',
		icon: MessagesSquare,
		href: '/conversation',
		color: 'text-violet-500',
	},
	{
		label: 'Image Generation',
		icon: ImageIcon,
		href: '/image',
		color: 'text-pink-700',
	},
	{
		label: 'Video Generation',
		icon: VideoIcon,
		href: '/video',
		color: 'text-orange-700',
	},
	{
		label: 'Music Generation',
		icon: Music,
		href: '/music',
		color: 'text-emerald-500',
	},
	{
		label: 'Code Generation',
		icon: Code,
		href: '/code',
		color: 'text-green-700',
	},
	{
		label: 'Settings',
		icon: Settings,
		href: '/settings',
	},
];

const Sidebar = () => {
	const pathname = usePathname();
	return (
		<div className=' space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
			<div className='px-3 py-2 flex-1'>
				<Link
					className=' flex items-center pl-3 mb-14'
					href={'/dashboard'}
				>
					<div className='relative w-8 h-8 mr-4'>
						<Image
							fill
							alt='logo'
							src={'/logo.png'}
						/>
					</div>
					<h1
						className={cn(
							'text-2xl font-bold',
							montserrat.className
						)}
					>
						Rashtech AI
					</h1>
				</Link>
				<div className='space-y-1'>
					{routes.map((route) => (
						<Link
							className={cn(
								'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
								pathname === route.href
									? 'text-white bg-white/10'
									: 'text-zinc-400'
							)}
							key={route.href}
							href={route.href}
						>
							<div className=' items-center flex flex-1'>
								<route.icon
									className={cn('h-5 w-5 mr-3', route.color)}
								></route.icon>
								{route.label}
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
