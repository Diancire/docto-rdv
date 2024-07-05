'use client'
import { Bell, Calendar, ClipboardPlus, Home, LogOut, PanelLeftClose, Settings } from 'lucide-react';
import Link from 'next/link';
import React  from 'react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

const Sidebar = () => {
    const router = useRouter();
    async function handleLogout() {
        router.push("/");
    }
    const pathname = usePathname()
    const sidebarLinks = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: Home,
        },
        {
            name: "Mes rendez-vous",
            path: "/dashboard/appointments",
            icon: Calendar,
            badgeCount: 6
        },
        {
            name: "Historique médical",
            path: "/dashboard/medical-history",
            icon: ClipboardPlus,
        },
        {
            name: "Paramètres",
            path: "/dashboard/settings",
            icon: Settings,
        },
        {
            name: "Page d'accueil",
            path: "/",
            icon: PanelLeftClose,
        }
    ]
    return (
        <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <span className="p-1.5 font-logo text-primary text-3xl font-bold">Docto-Rdv</span>
                    </Link>
                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                        <Bell className="h-4 w-4" />
                        <span className="sr-only">Toggle notifications</span>
                    </Button>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {sidebarLinks.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <Link
                                key={index}
                                    href={item.path}
                                    className={cn("flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                    pathname === item.path ? "bg-muted text-primary" : ""
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    {item.name}
                                    {item.badgeCount &&                                 
                                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                            {item.badgeCount}
                                        </Badge>
                                    }
                                </Link>
                            )
                        })}
                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-muted-foreground transition-all hover:text-primary"
                        >
                            <LogOut className="w-5 h-5"/>
                            Déconnexion
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;