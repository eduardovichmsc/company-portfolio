import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface InputProps {
	textarea?: boolean;
	id: string;
	label: string;
	placeholder: string;
	type?: string;
	className?: string[] | string;
	register: any;
	required?: boolean;
}

interface FormValues {
	name: string;
	email: string;
	subject: string;
	phone: string;
	message: string;
}

const Input: FC<InputProps> = ({
	textarea,
	label,
	placeholder,
	required,
	id,
	className,
	type = "text",
	register,
}) => {
	return (
		<div
			className={`flex flex-col space-y-2 col-span-2 lg:col-span-1 ${
				textarea ? "lg:col-span-2" : ""
			}`}>
			<label htmlFor={id} className="font-medium">
				{label}
			</label>
			{textarea ? (
				<textarea
					id={id}
					required={required}
					placeholder={placeholder}
					{...register(id)}
					className={`transition outline-none focus:border-neutral-500 w-full rounded-md border-2 border-neutral-300 px-4 py-3 h-48 ${className}`}
				/>
			) : (
				<input
					id={id}
					required={required}
					placeholder={placeholder}
					type={type}
					{...register(id)}
					className={`transition outline-none focus:border-neutral-500 w-full rounded-md border-2 border-neutral-300 px-4 py-3 ${className}`}
				/>
			)}
		</div>
	);
};

const Contacts = () => {
	const { register, handleSubmit, reset, formState } = useForm<FormValues>();

	const sendMessage: SubmitHandler<FormValues> = (data) => {
		console.log(data);
		reset();
	};

	return (
		<>
			<title>PeakStudio - Contact us</title>
			<Navbar />
			<Banner
				title="Contact Us"
				image="images/contacts.jpeg"
				body="Get in Touch: Let's Start Building Your Dream Together. Reach Out to Our Team of Experts Today!"
			/>
			<div className="bg-white section-wrapper">
				<div className="container mx-auto section space-y-5">
					<p className="section-title text-center">Find Us on Google Maps</p>
					<div className="space-y-10">
						<p className="section-body text-center mx-auto w-auto lg:w-[75%] xl:w-[63%]">
							If you have any questions you can report them below with the
							following information, so that it is easy for us to reply to your
							message.
						</p>
						<div className="maps w-full h-[30rem] lg:h-[40rem] bg-orange-300 rounded-xl">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1576.836908393129!2d-122.42649387192785!3d37.77424579999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580a192e74831%3A0xe2f260f56a59fc27!2zMjg4IExpbHkgU3QsIFNhbiBGcmFuY2lzY28sIENBIDk0MTAyLCDQodCo0JA!5e0!3m2!1sru!2skz!4v1722330520421!5m2!1sru!2skz"
								className="border-none w-full h-full rounded-xl"
								loading="lazy"></iframe>
						</div>
					</div>
				</div>

				<div className="container mx-auto section space-y-10">
					<div className="space-y-4">
						<p className="section-title text-center">Send us a message</p>
						<p className="section-body text-center">
							Fill out the form and our team will get back to you as quickly as
							we can.
						</p>
					</div>
					<form
						className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto w-full lg:w-[60%]"
						onSubmit={handleSubmit(sendMessage)}>
						<Input
							label="Name"
							placeholder="Enter your name"
							id="name"
							required
							register={register}
						/>
						<Input
							label="E-mail"
							placeholder="Enter your E-mail"
							id="email"
							required
							register={register}
						/>
						<Input
							label="Subject"
							placeholder="Your subject"
							id="subject"
							required
							register={register}
						/>
						<Input
							label="Phone"
							placeholder="Your Phone number"
							id="phone"
							register={register}
						/>
						<Input
							textarea
							id="message"
							placeholder="Write your message here"
							label="Message"
							className="auto-rows-max resize-none"
							register={register}
						/>
						<Button primary className="w-fit lg:py-2 lg:text-base font-normal">
							Submit
						</Button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Contacts;
