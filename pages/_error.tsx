import Link from "next/link";
import { useRouter } from "next/router";

export default function ErrorPage() {
	const router = useRouter();

	return (
		<div className="min-h-screen flex flex-col justify-center items-center space-y-2 tracking-tight">
			<p className="text-xl font-semibold">
				This page is currently unavailable
			</p>
			<p className="">
				Please go{" "}
				<span
					className="text-orange-500 cursor-pointer hover:underline"
					onClick={() => router.back()}>
					back
				</span>{" "}
				or{" "}
				<Link
					href="/"
					className="text-orange-500 cursor-pointer hover:underline">
					{" "}
					home
				</Link>
			</p>
		</div>
	);
}
