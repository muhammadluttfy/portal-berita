import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import NewsLists from "@/Components/Homepage/NewsLists";
import Footer from "@/Components/Footer";
import Paginator from "@/Components/Homepage/Paginator";

export default function Homepage(props) {
    // console.log("data di props nih bro:", props);
    return (
        <div className="bg-gray-100">
            <Head title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex flex-col items-center justify-center gap-6 mx-6 my-16 lg:flex-row lg:flex-wrap lg:items-stretch">
                <NewsLists news={props.news.data} />
            </div>

            <div className="flex items-center justify-center my-16">
                <Paginator meta={props.news.meta} />
            </div>

            <div className="">
                <Footer />
            </div>
        </div>
    );
}
