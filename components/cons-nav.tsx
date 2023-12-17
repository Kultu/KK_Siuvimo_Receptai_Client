"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"

const ConsNav: React.FC = ({
}) => {
  const pathname = usePathname();

  const active = pathname === `/about`

  return (
    <nav
      className="mx-6 flex items-center space-x-4 lg:space-x-6"
    >
        <Link
            key='/about/'
            href='/about/'
            className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            active ? 'text-black' : 'text-neutral-500'
            )}
        >
            {'Apie mus'}
        </Link>
    </nav>
  )
};

export default ConsNav;
