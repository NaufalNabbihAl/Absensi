import { Link } from "@inertiajs/react";
export default function Pagination({ links }) {
    return (
        <div className="flex mt-4">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url}
                    className={
                        link.active
                            ? "bg-blue-500 text-white px-4 py-2 mx-1 rounded"
                            : "text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 mx-1 rounded"
                    }
                    // set innerHTML to render the HTML string
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </div>
    );
}
