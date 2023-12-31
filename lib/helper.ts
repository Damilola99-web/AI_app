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
