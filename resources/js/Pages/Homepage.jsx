import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Homepage(props) {
    console.log(props);
    return (
        <div className="p-4 bg-slate-200">
            <Head title={props.title} />

            {props.news ? (
                props.news.map((data, i) => {
                    return (
                        <div
                            key={i}
                            className="p-4 m-4 bg-slate-100 shadow-lg rounded-lg"
                        >
                            <p className="text-2xl text-slate-800">
                                <strong>Title</strong> : {data.title}
                            </p>
                            <p className="text-xl text-slate-700">
                                <strong>Description</strong> :{" "}
                                {data.description}
                            </p>
                            <p>
                                <strong>Cateogry</strong> : {data.category}
                            </p>
                            <p>
                                <strong>Author</strong> : {data.author}
                            </p>
                        </div>
                    );
                })
            ) : (
                <p>Saat ini belum ada berita!</p>
            )}
        </div>
    );
}
