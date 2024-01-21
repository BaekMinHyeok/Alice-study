export default async function HomeLayout({ children }): Promise<Element> {
    return (
        <div>
            홈 레이아웃
            {children}
        </div>
    );
}
