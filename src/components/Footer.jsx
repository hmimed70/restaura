import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mb-8 mt-20  h-30 text-neutral-200">
        <div className="flex justify-center items-center gap-8">
      
                <a  href="https://x.com/" target='_blank' rel="noreferrer">
                   <FaXTwitter fontSize={30} className="hover:opacity-80" />
                </a>
                <a  href="https://x.com/" target='_blank' rel="noreferrer">
                   <FaInstagram fontSize={30} className="hover:opacity-80" />
                </a>
                <a  href="https://x.com/" target='_blank' rel="noreferrer">
                   <FaFacebook fontSize={30} className="hover:opacity-80" />
                </a>
        </div>
        <p className="mt-8 text-center tracking-tighter text-neutral-500">
            &copy;compileTab {new Date().getFullYear()}. All rights reserved. 
        </p>
    </div>
  )
}

export default Footer