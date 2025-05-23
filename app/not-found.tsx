import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 text-white px-6">
        <Image
          src="/images/home/brand.png" 
          alt="Company Logo"
          height={100}
          width={100}
          className="w-24 md:w-32 lg:w-40 mb-6"
        />
        <h1 className="text-4xl md:text-6xl font-extrabold animate-bounce text-center">
          404 - Page Not Found
        </h1>
        <p className="text-base md:text-lg mt-4 text-gray-300 text-center font-sans">
          Sorry, the page you&apos;re looking for doesn&apos;t exist. Let us guide you back to safety.
        </p>
        <p className="mt-2 text-sm md:text-base text-gray-400 text-center font-sans">
          Need assistance? Email us at {""}
          <Link
            href="mailto:codecampit@gmail.com"
            className="text-white underline hover:text-blue-500"
          >
            codecampit@gmail.com
          </Link>
          .
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-sm md:text-base rounded-lg text-white font-medium shadow-md hover:bg-violet transition-all duration-300"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    );
  }
  