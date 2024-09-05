export default function DashboardLayout({children, chat, analytics, video}) {
    return (
        <>
        <article>{children}</article>
        <section>
            <aside>{analytics}</aside>
            <aside>{video}</aside>
            <aside>{chat}</aside>
        </section>
        </>
    );
}