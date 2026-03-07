import { Separator } from "@/shared/ui";
import { MAIN_NAVIGATION, SITE_CONFIG } from "@/shared/config";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.3fr_0.85fr_0.85fr]">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.name}
                width={151}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">{SITE_CONFIG.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">동아리 소개</h3>
            <ul className="space-y-2">
              {MAIN_NAVIGATION.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target={item.newTab ? "_blank" : undefined}
                    rel={item.newTab ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center text-sm text-muted-foreground">
          <p>© 2025-2026 {SITE_CONFIG.name}</p>
        </div>
      </div>
    </footer>
  );
}
