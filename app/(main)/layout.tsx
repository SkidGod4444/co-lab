import Navigation from "@/components/global/main/navigation";

const MainLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full flex dark:bg-muted">
            <Navigation>
            <main className="flex-1 h-full overflow-y-auto">
                {children}
            </main>
            </Navigation>
        </div>
    )
};

export default MainLayout;