import Link from "next/link";
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Image from "next/image";
import bkash from "@/public/images/bkash.png";
import nagad from "@/public/images/nagad.png";
const EnrollInstructionsBangla = () => {
  return (
    <div className="max-w-4xl mx-auto md:px-6 px-3 py-12 text-black font-medium">
      <h1 className="mtext-2xl md:text-5xl font-bold text-center mb-8 text-magenta">
        যেভাবে কোর্সে ভর্তি হবেন
      </h1>

      <p className="md:text-lg text-sm mb-6">
        কোর্সে ভর্তি হতে নিচের ধাপগুলো অনুসরণ করুন :
      </p>

      <ol className=" pl-6 space-y-4 md:text-lg text-sm">
        <li>
          <span className="font-semibold">ধাপ ১: </span>আমাদের দেওয়া{" "}
          <span className=" font-semibold text-magenta">WhatsApp/Facebook</span>{" "}
          লিংকে প্রবেশ করুন এবং আপনি কোন কোর্সটি নিতে চান সেটি আমাদের মেসেজ
          করুন।
        </li>
        <div className="flex gap-3 justify-center">
          <Link
            href="https://wa.me/8801725125455"
            target="_blank"
            className=" font-bold flex items-center gap-2 text-base rounded-lg px-4 py-2 bg-violet text-white"
          >
            {" "}
            <RiWhatsappFill className="text-[#25D366] text-2xl " />{" "}
            <p className=" font-sans">Join Now</p>
          </Link>
          <Link
            href="https://www.facebook.com/messages/t/661901847005593"
            target='_blank'
            className="text-[#0084FF] font-bold flex items-center gap-2 text-base rounded-lg px-4 py-2 bg-violet"
          >
            <FaFacebookMessenger className="text-[#0084FF]  text-2xl" />
            <p className=" font-sans text-white">Join Now</p>
          </Link>
        </div>
        <li>
          <span className="font-semibold">ধাপ ২: </span>আপনি কোন নম্বর থেকে
          বিকাশ করবেন সেটিও আমাদের মেসেজ করুন।
        </li>
        <li>
          <span className="font-semibold">ধাপ ৩: </span>নিচের বিকাশ নাম্বারে
          কোর্স ফি পাঠান:
          <br />
          <p className="flex items-center text-magenta montserrat">
            <Image src={bkash} alt="bkash" className="w-12" />
            <span className="font-semibold">01577090674 (BKash Personal)</span>
          </p>
          <p className="flex items-center gap-2 text-magenta montserrat">
            <Image src={nagad} alt="bkash" className="w-7 ml-3" />
            <span className="font-semibold">01577090674 (Nagad Personal)</span>
          </p>
        </li>
        <li>
          <span className="font-semibold">ধাপ ৪: </span>বিকাশ থেকে আপনি একটি
          মেসেজ পাবেন যেখানে একটি{" "}
          <strong className="text-magenta">Transaction ID</strong> থাকবে। সেই
          <strong className="text-magenta"> Transaction ID</strong> টি কপি করে
          আপনার বিকাশ নম্বরটি হোয়াটসঅ্যাপ অথবা মেসেঞ্জারে যেখানে আপনি মেসেজ
          করেছেন, সেখানে আমাদের মেসেজ করুন অথবা স্ক্রিনশট নিয়ে আমাদের কাছে
          পাঠান।
        </li>
        <li>
          <span className="font-semibold">ধাপ ৫: </span>এরপর কিছু সময় অপেক্ষা
          করুন। আমাদের টিম খুব দ্রুত আপনার সাথে যোগাযোগ করবে এবং ভর্তি নিশ্চিত
          করবে।
        </li>
      </ol>

      <div className="mt-10 p-6 bg-gray-100 rounded-xl shadow">
        <h2 className="tmd:ext-xl text-lg font-semibold mb-2 text-magenta">
          যোগাযোগের তথ্য
        </h2>
        <p className="flex items-center gap-1 md:text-xl text-md">
          <IoCallSharp className="" />{" "}
          <Link href="tel:+8801725125455" target='_blank' className="font-semibold">
            +88 01725125455
          </Link>
        </p>

        <p className="flex items-center gap-1 md:text-xl text-md">
          <MdEmail className="" />
          <Link href="mailto:codecampit@gmail.com" target='_blank' className=" font-semibold">
            codecampit@gmail.com
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EnrollInstructionsBangla;
