import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <nav className="bg-pink-50 top-0 w-full flex px-10 py-4 lg:px-20 lg:py-6 z-10">
            <div style={{ fontFamily: "var(--font-logo)" }} className="title">
                <Link href="/" className="text-5xl font-bold">
                    The Sweet Treat
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;