import { Film, Mail, Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full max-w-[1280px] bg-[#4338CA] text-white px-6 py-10 md:rounded-xl mt-30  ">
      <div className=" w-full mx-auto flex flex-col gap-10 md:flex-row md:justify-between ">
        <div>
          <Link href={`/`}>
            <div className="flex items-center gap-2 mb-2">
              <Film />
              <h1 className="text-xl font-bold">Movie Z</h1>
            </div>
          </Link>
          <p className="text-sm">2025 Movie Z. All rights reserved.</p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:w-full md:items-start">
          <div>
            <h2 className="text-lg font-semibold mb-2">Follow us</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <button
                type="button"
                className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                on Facebook
              </button>
              <button
                type="button"
                className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                on Twitter
              </button>

              <button
                type="button"
                className="text-white bg-[#E4405F] hover:bg-[#E4405F]/90 focus:ring-4 focus:outline-none focus:ring-[#E4405F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#E4405F]/55 me-2 mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM398.8,97.2a54.42,54.42,0,0,0-30.24-30.2C346.4,57.6,290.7,56,224,56s-122.4,1.6-144.56,10.96a54.42,54.42,0,0,0-30.24,30.2C37.6,119.6,36,175.3,36,242s1.6,122.4,10.96,144.56a54.42,54.42,0,0,0,30.2,30.24C101.6,454.4,157.3,456,224,456s122.4-1.6,144.56-10.96a54.42,54.42,0,0,0,30.24-30.2C410.4,364.4,412,308.7,412,242S410.4,119.6,398.8,97.2Zm-26,291.12A22.53,22.53,0,0,1,351.76,399C329.9,407.12,278.64,408,224,408s-105.9-.88-127.76-9A22.53,22.53,0,0,1,75.2,388.32C67.12,366.46,66,315.2,66,260.56S67.12,154.66,75.2,132.8A22.53,22.53,0,0,1,96.24,113C118.1,104.88,169.36,104,224,104s105.9.88,127.76,9A22.53,22.53,0,0,1,372.8,132.8c8.08,21.86,9.2,73.12,9.2,127.76S380.88,366.46,372.8,388.32Z" />
                </svg>
                on Instagram
              </button>
              <button
                type="button"
                className="text-black bg-[#FFFC00] hover:bg-[#FFFC00]/90 focus:ring-4 focus:outline-none focus:ring-[#FFFC00]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#FFFC00]/55 me-2 mb-2"
              >
                <svg
                  className="w-4 h-4 me-2"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 480C132.48 480 32 379.52 32 256S132.48 32 256 32s224 100.48 224 224-100.48 224-224 224z" />
                </svg>
                on Snapchat
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold">Contact Information</h2>
            <div className="flex items-start gap-3">
              <Mail />
              <div>
                <p className="text-sm">Email:</p>
                <p className="text-sm">support@movieZ.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone />
              <div>
                <p className="text-sm">Phone:</p>
                <p className="text-sm">+976 (11) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
