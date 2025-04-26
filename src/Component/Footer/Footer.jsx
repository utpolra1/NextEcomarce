import Link from 'next/link';
import { FaFacebook, FaInstagram, FaFax , FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-8">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link href="/about" className="hover:text-neutral-100">
              About
            </Link>
            <Link href="/blog" className="hover:text-neutral-100">
              Blog
            </Link>
            {/* ... other Link components ... */}
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100">
            <FaFax   size={24} />
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100">
            <FaGithub size={24} />
          </Link>
          <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-100">
            <FaYoutube size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;