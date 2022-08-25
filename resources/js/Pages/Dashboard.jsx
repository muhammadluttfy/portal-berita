import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Link, Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [isNotif, setIsNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };

        Inertia.post("/news", data);
        setIsNotif(true);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get("/news");
        }
        return;
    }, []);

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Berita Saya
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto mb-6 max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200 rounded-lg">
                        {isNotif && (
                            <div className="m-2 rounded-lg shadow-lg alert alert-success text-slate-800">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="flex-shrink-0 w-6 h-6 stroke-current"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>{props.flash.message}</span>
                                </div>
                            </div>
                        )}

                        <input
                            type="text"
                            placeholder="Judul"
                            className="w-full m-2 bg-gray-100 input input-bordered"
                            onChange={(title) => setTitle(title.target.value)}
                            value={title}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Deskripsi"
                            className="w-full m-2 bg-gray-100 input input-bordered"
                            onChange={(description) =>
                                setDescription(description.target.value)
                            }
                            value={description}
                        />
                        <input
                            type="text"
                            placeholder="Kategori"
                            className="w-full m-2 bg-gray-100 input input-bordered"
                            onChange={(category) =>
                                setCategory(category.target.value)
                            }
                            value={category}
                        />

                        <button
                            className="px-6 m-2 btn btn-primary"
                            onClick={() => handleSubmit()}
                        >
                            Tambah Postingan
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 mx-6 my-16 lg:flex-row lg:flex-wrap lg:items-stretch">
                    {props.myNews && props.myNews.length > 0 ? (
                        props.myNews.map((news, i) => {
                            return (
                                <div
                                    key={i}
                                    className="w-full bg-white shadow-xl rounded-xl lg:w-96 card"
                                >
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {" "}
                                            {news.title}
                                            <div className="badge badge-secondary">
                                                NEW
                                            </div>
                                        </h2>

                                        <p>{news.description}</p>
                                        <div className="justify-between mt-8 card-actions">
                                            <div className="badge badge-inline">
                                                {news.category}
                                            </div>
                                            <div>
                                                <div className="badge badge-outline">
                                                    <Link
                                                        href={route(
                                                            "edit.news"
                                                        )}
                                                        method="get"
                                                        data={{ id: news.id }}
                                                        as="button"
                                                    >
                                                        Edit
                                                    </Link>
                                                </div>
                                                <div className="badge badge-outline">
                                                    <Link
                                                        href={route(
                                                            "delete.news"
                                                        )}
                                                        method="post"
                                                        data={{ id: news.id }}
                                                        as="button"
                                                    >
                                                        Delete
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p className="">Kamu belum membuat postingan!!</p>
                    )}
                </div>
            </div>
        </Authenticated>
    );
}
