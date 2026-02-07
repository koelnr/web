import { AppFooter } from "@/components/app-footer";
import { AppHeader } from "@/components/app-header";

export default function PublicLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
}
