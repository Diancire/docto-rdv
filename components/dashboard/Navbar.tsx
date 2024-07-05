"use client";
 
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Calendar, CircleUser, ClipboardPlus, Home, LogOut, Menu, PanelLeftClose, Search, Settings } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { cn } from '@/lib/utils';
import ModeToggle from "../ModeToggle";
 
export default function Navbar() {
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
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <span className="p-1.5 font-logo text-primary text-3xl font-bold">Docto-Rdv</span>
            </Link>
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
                  <Icon className="w-5 h-5"/>
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
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <ModeToggle/>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/dashboard/settings" className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              Paramètres
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Déconnexion
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}