import HomeNavbar from "@/components/global/home/navbar";

const HomeLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <HomeNavbar />
            <main className="h-full pt-40 dark:bg-muted">
                {children}
            </main>
        </div>
    )
};

export default HomeLayout;