import NavbarLoggedIn from "@/components/navbar/NavbarLoggedIn";
import Content from "@/components/overview/Content";

export default function Overview() {

    return (
        <div
            className="mx-[1.3em] sm:mx-[1.8em] py-[0.8em]"
        >
            <NavbarLoggedIn />
            <Content/>
        </div>
    );
}
