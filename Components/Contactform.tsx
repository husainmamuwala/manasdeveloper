import React, { useRef, useState, FormEvent } from "react";
// import emailjs from 'emailjs';
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
    name: String;
    email: String;
    subject: String;
    message: String;
    phone: String;
};

export default function ContactForm({ }: Props) {
    const { register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:info@manasdevelopers.in?subject=Enquiry&body=
phone Number: ${formData.phone}${" "}
Client Name : ${formData.name}${" "}
${" "}${formData.message}`;
    };


    return (
        <div className=" text-black px-0">
            <form
                onSubmit={handleSubmit(onSubmit)}
                id="form"
                className="mt-6 md:mt-0 flex flex-col gap-y-4"
            >
                <div>
                    <div className="flex flex-row">
                        <div className="mr-2 w-1/2">

                            <label className="text-sm lg:text-base" htmlFor="name">
                                Your Name
                                <span className="flex mt-2 border-2 border-black items-center md:pl-4 pl-2 rounded-xl">
                                    <svg
                                        width="38"
                                        height="38"
                                        className="w-7"
                                        viewBox="0 0 38 38"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M26.917 33.3133H11.0837C6.06449 33.3133 1.97949 29.2283 1.97949 24.2092V9.04084C1.97949 6.9825 2.92949 6.27 3.49949 6.0325C4.06949 5.795 5.24116 5.62083 6.69783 7.0775L10.7987 11.1783C10.957 11.3367 11.2103 11.3367 11.3528 11.1783L17.037 5.49417C18.082 4.44917 19.9187 4.44917 20.9478 5.49417L26.632 11.1783C26.7903 11.3367 27.0437 11.3367 27.1862 11.1783L31.287 7.0775C32.7437 5.62083 33.9153 5.81084 34.4853 6.0325C35.0553 6.27 36.0053 6.96667 36.0053 9.04084V24.225C36.0212 29.6558 32.3637 33.3133 26.917 33.3133ZM4.44949 8.29667C4.40199 8.42333 4.35449 8.66084 4.35449 9.04084V24.225C4.35449 27.93 7.37866 30.9542 11.0837 30.9542H26.917C31.002 30.9542 33.6462 28.31 33.6462 24.225V9.04084C33.6462 8.66084 33.5987 8.43917 33.5512 8.3125C33.4245 8.37584 33.2345 8.5025 32.9653 8.77167L28.8645 12.8725C27.8195 13.9175 25.9828 13.9175 24.9537 12.8725L19.2695 7.18833C19.1112 7.03 18.8578 7.03 18.7153 7.18833L13.047 12.8567C12.002 13.9017 10.1653 13.9017 9.13616 12.8567L5.03533 8.75584C4.76616 8.48667 4.56033 8.36 4.44949 8.29667Z"
                                            fill="#1C1C1C"
                                        />
                                    </svg>
                                    <input
                                        required
                                        className="bg-transparent w-3/4 outline-none
                                ml-2 placeholder-black placeholder-opacity-80 placeholder-shown:text-[0.65rem] focus:text-secondary text-secondary/70  placeholder-shown:font-light"
                                        type="text"
                                        name="name"
                                        placeholder="What's your Name ?"
                                        {...register('name')}
                                    />
                                </span>
                            </label>
                        </div>
                        <div className="w-1/2">

                            <label className="text-sm lg:text-base" htmlFor="email">
                                Your Email
                                <span className="flex mt-2 border-2 border-black items-center md:pl-4 pl-2 rounded-xl">
                                    <svg
                                        className="w-7"
                                        width="38"
                                        height="38"
                                        viewBox="0 0 38 38"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M26.917 33.6458H11.0837C10.4345 33.6458 9.89616 33.1075 9.89616 32.4583C9.89616 31.8092 10.4345 31.2708 11.0837 31.2708H26.917C31.4453 31.2708 33.6462 29.07 33.6462 24.5417V13.4583C33.6462 8.93 31.4453 6.72916 26.917 6.72916H11.0837C6.55533 6.72916 4.35449 8.93 4.35449 13.4583C4.35449 14.1075 3.81616 14.6458 3.16699 14.6458C2.51783 14.6458 1.97949 14.1075 1.97949 13.4583C1.97949 7.67916 5.30449 4.35416 11.0837 4.35416H26.917C32.6962 4.35416 36.0212 7.67916 36.0212 13.4583V24.5417C36.0212 30.3208 32.6962 33.6458 26.917 33.6458Z"
                                            fill="#1C1C1C"
                                        />
                                        <path
                                            d="M19.0001 20.3775C17.6701 20.3775 16.3243 19.9658 15.2951 19.1267L10.3392 15.1683C9.83256 14.7566 9.73756 14.0125 10.1492 13.5058C10.5609 12.9991 11.305 12.9041 11.8117 13.3158L16.7676 17.2742C17.9709 18.24 20.0134 18.24 21.2168 17.2742L26.1726 13.3158C26.6793 12.9041 27.4393 12.9833 27.8351 13.5058C28.2468 14.0125 28.1676 14.7725 27.6451 15.1683L22.6893 19.1267C21.6759 19.9658 20.3301 20.3775 19.0001 20.3775Z"
                                            fill="#1C1C1C"
                                        />
                                        <path
                                            d="M12.667 27.3125H3.16699C2.51783 27.3125 1.97949 26.7742 1.97949 26.125C1.97949 25.4758 2.51783 24.9375 3.16699 24.9375H12.667C13.3162 24.9375 13.8545 25.4758 13.8545 26.125C13.8545 26.7742 13.3162 27.3125 12.667 27.3125Z"
                                            fill="#1C1C1C"
                                        />
                                        <path
                                            d="M7.91699 20.9792H3.16699C2.51783 20.9792 1.97949 20.4408 1.97949 19.7917C1.97949 19.1425 2.51783 18.6042 3.16699 18.6042H7.91699C8.56616 18.6042 9.10449 19.1425 9.10449 19.7917C9.10449 20.4408 8.56616 20.9792 7.91699 20.9792Z"
                                            fill="#1C1C1C"
                                        />
                                    </svg>

                                    <input
                                        required
                                        className="bg-transparent w-3/4 outline-none
                                ml-2 placeholder-black placeholder-opacity-80 placeholder-shown:text-[0.65rem] focus:text-secondary text-secondary/70 placeholder-shown:font-light"
                                        type="email"
                                        name="email"
                                        placeholder="What's your Email ?"
                                        {...register('email')}
                                    />
                                </span>
                            </label>
                        </div>
                    </div>
                
                </div>
        
                <label className="text-sm lg:text-base" htmlFor="phone">
                    Your Phone
                    <span className="flex mt-2 border-2 border-black items-center md:pl-4 pl-2 rounded-xl">
                        <svg
                            className="w-7"
                            width="38"
                            height="38"
                            viewBox="0 0 38 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.7497 36.0208H14.2497C7.26717 36.0208 5.14551 33.8992 5.14551 26.9167V11.0833C5.14551 4.10082 7.26717 1.97916 14.2497 1.97916H23.7497C30.7322 1.97916 32.8538 4.10082 32.8538 11.0833V26.9167C32.8538 33.8992 30.7322 36.0208 23.7497 36.0208ZM14.2497 4.35416C8.58134 4.35416 7.52051 5.43082 7.52051 11.0833V26.9167C7.52051 32.5692 8.58134 33.6458 14.2497 33.6458H23.7497C29.418 33.6458 30.4788 32.5692 30.4788 26.9167V11.0833C30.4788 5.43082 29.418 4.35416 23.7497 4.35416H14.2497Z"
                                fill="#1C1C1C"
                            />
                            <path
                                d="M22.1663 9.89583H15.833C15.1838 9.89583 14.6455 9.35749 14.6455 8.70833C14.6455 8.05916 15.1838 7.52083 15.833 7.52083H22.1663C22.8155 7.52083 23.3538 8.05916 23.3538 8.70833C23.3538 9.35749 22.8155 9.89583 22.1663 9.89583Z"
                                fill="#1C1C1C"
                            />
                            <path
                                d="M19.0001 31.445C16.9892 31.445 15.3584 29.8142 15.3584 27.8033C15.3584 25.7925 16.9892 24.1617 19.0001 24.1617C21.0109 24.1617 22.6417 25.7925 22.6417 27.8033C22.6417 29.8142 21.0109 31.445 19.0001 31.445ZM19.0001 26.5208C18.3034 26.5208 17.7334 27.0908 17.7334 27.7875C17.7334 28.4842 18.3034 29.0542 19.0001 29.0542C19.6967 29.0542 20.2667 28.4842 20.2667 27.7875C20.2667 27.0908 19.6967 26.5208 19.0001 26.5208Z"
                                fill="#1C1C1C"
                            />
                        </svg>

                        <input
                            required
                            className="bg-transparent w-3/4 outline-none
                                ml-2 placeholder-black placeholder-opacity-80 placeholder-shown:text-[0.65rem] placeholder-shown:font-light"
                            type="text"
                            name="phone"
                            placeholder="What's your Phone Number ?"
                            {...register('phone')}
                        />
                    </span>
                </label>
                
                <label className="text-sm lg:text-base" htmlFor="message">
                    Your Message
                    <span className="flex mt-2 border-2 border-black items-start pt-2 md:pl-4 pl-2   rounded-xl">
                        <svg
                            className=" w-7 -mt-2"
                            width="39"
                            height="39"
                            viewBox="0 0 39 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M24.375 36.9688H14.625C5.80125 36.9688 2.03125 33.1987 2.03125 24.375V14.625C2.03125 5.80125 5.80125 2.03125 14.625 2.03125H22.75C23.4162 2.03125 23.9688 2.58375 23.9688 3.25C23.9688 3.91625 23.4162 4.46875 22.75 4.46875H14.625C7.13375 4.46875 4.46875 7.13375 4.46875 14.625V24.375C4.46875 31.8663 7.13375 34.5312 14.625 34.5312H24.375C31.8663 34.5312 34.5312 31.8663 34.5312 24.375V16.25C34.5312 15.5838 35.0838 15.0312 35.75 15.0312C36.4162 15.0312 36.9688 15.5838 36.9688 16.25V24.375C36.9688 33.1987 33.1987 36.9688 24.375 36.9688Z"
                                fill="#000000"
                            />
                            <path
                                d="M35.75 17.4688H29.25C23.6925 17.4688 21.5312 15.3075 21.5312 9.75V3.25C21.5312 2.7625 21.8238 2.3075 22.2787 2.12875C22.7337 1.93375 23.2537 2.0475 23.6112 2.38875L36.6112 15.3888C36.9525 15.73 37.0662 16.2663 36.8712 16.7213C36.6762 17.1763 36.2375 17.4688 35.75 17.4688ZM23.9687 6.19125V9.75C23.9687 13.9425 25.0575 15.0313 29.25 15.0313H32.8087L23.9687 6.19125Z"
                                fill="#000000"
                            />
                            <path
                                d="M21.125 22.3438H11.375C10.7088 22.3438 10.1562 21.7912 10.1562 21.125C10.1562 20.4588 10.7088 19.9062 11.375 19.9062H21.125C21.7912 19.9062 22.3438 20.4588 22.3438 21.125C22.3438 21.7912 21.7912 22.3438 21.125 22.3438Z"
                                fill="#000000"
                            />
                            <path
                                d="M17.875 28.8438H11.375C10.7088 28.8438 10.1562 28.2912 10.1562 27.625C10.1562 26.9588 10.7088 26.4062 11.375 26.4062H17.875C18.5412 26.4062 19.0938 26.9588 19.0938 27.625C19.0938 28.2912 18.5412 28.8438 17.875 28.8438Z"
                                fill="#000000"
                            />
                        </svg>

                        <textarea
                            required
                            className="bg-transparent h-28 w-3/4 outline-none
                                ml-2 placeholder-black placeholder-opacity-80 placeholder-shown:text-[0.65rem] focus:text-secondary text-secondary/70 placeholder-shown:font-light"
                            name="message"
                            placeholder="What's on your Mind ?"
                            {...register('message')}
                        />
                    </span>
                </label>

                <button
                    className="bg-primary text-white mt-4 lg:mt-2 text-md w-max px-6 py-2 
                        border-[#1c1c1c] hover:border-2 hover:scale-105 rounded-xl
                     active:text-[#1c1c1c] active:bg-transparent
                        active:scale-90
                        disabled:opacity-30 disabled:cursor-not-allowed"
                    type="submit"
                >Submit Now
                </button>
            </form>
        </div>
    )
}