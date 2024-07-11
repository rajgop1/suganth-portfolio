import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Email from "../components/home/email";
import LetsGoForTea from "../components/home/lets-go-for-tea";
import AllProjectComponent from "./components/AllProjectComponent";

export default function AllProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="bg-black-100">
            <Header />
            <AllProjectComponent>
                {children}
            </AllProjectComponent>
            <LetsGoForTea />
            <Email />
            <Footer />
        </section>
    );
}
