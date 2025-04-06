import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6 px-4">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
                {/* Left Side - Copyright */}
                <p className="text-center sm:text-left">
                    &copy; {new Date().getFullYear()} Rith Banerjee. All rights reserved.
                </p>

                {/* Right Side - Social Icons */}
                <div className="flex gap-5">
                    <Link
                        href="https://github.com/Rithb898"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub className="h-5 w-5 hover:text-white transition-colors duration-300" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/rith-banerjee/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="h-5 w-5 hover:text-blue-400 transition-colors duration-300" />
                    </Link>
                    <Link
                        href="mailto:rithbanerjee@example.com"
                        aria-label="Email"
                    >
                        <IoMdMail className="h-5 w-5 hover:text-teal-400 transition-colors duration-300" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer