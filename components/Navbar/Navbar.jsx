import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    return (
        <nav className="bg-pink-50 top-0 w-full flex px-10 py-4 lg:px-20 lg:py-6 z-10">
            <div style={{ fontFamily: "var(--font-logo)" }} className="title">
                <Link href="/" className="text-5xl font-bold flex items-center gap-2">
                    <Image 
                        src="/images/logo.png"
                        alt="The Sweet Treat Logo"
                        width={50}
                        height={50}
                    />
                    The Sweet Treat
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;