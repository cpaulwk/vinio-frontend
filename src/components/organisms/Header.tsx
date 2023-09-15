import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type HeaderProps = {
	page: string;
	targetRef?: React.MutableRefObject<HTMLDivElement | null | undefined>;
};

export default function Header({ page }: HeaderProps) {
	const [isNavBarOpen, setIsNavBarOpen] = useState(false);

	const fontColor = page === "Home" ? "text-brand-white" : "text-brand-red";

	const navigationLinks = [
		{ href: "/#home", text: "Home" },
		{ href: "/#what-is-vinio", text: "What is Vinio?" },
		{ href: "/about", text: "About" },
	]

	return (
		<header className="relative flex h-[7.5rem] w-screen shrink-0 items-center justify-between px-[4.25rem]">
			<div
				className={`flex w-full items-center ${fontColor} gap-x-[5.3125rem]`}
			>
				<Link href="/#home" className="text-xl xl:text-2xl">
					Vinio
				</Link>
				{page !== "Vinio" && (
					<nav
						className={`flex items-center gap-x-[3rem] text-l max-md:hidden lg:gap-x-[5.3125rem] xl:text-2xl`}
					>
						{navigationLinks.map((link) => (
							<Link key={link.href} href={link.href} >
								{link.text}
							</Link>
						))}
					</nav>
				)}
			</div>
			<button className="md:hidden" onClick={() => setIsNavBarOpen(true)}>
				<FontAwesomeIcon
					className=""
					icon={faBars}
					style={{ color: page === "Home" ? "#f8fdfd" : "#d0122d" }}
					onClick={() => setIsNavBarOpen(true)}
				/>
			</button>
			{isNavBarOpen && (
				<div
					className="fixed z-10 h-screen bg-black top-0 right-0 w-screen flex flex-col items-end gap-y-2 bg-opacity-50"
				>
					<div className="bg-brand-white min-w-[250px] flex flex-grow flex-col items-center pt-5 px-5 gap-y-5">
						<button
							className="self-end"
							onClick={() => setIsNavBarOpen(false)}
						>
							<FontAwesomeIcon
								icon={faXmark}
								style={{ color: "#042554" }}
							/>
						</button>
						{navigationLinks.map((link) => (
							<Link key={link.href} href={link.href} onClick={() => setIsNavBarOpen(false)}>
								{link.text}
							</Link>
						))}
					</div>
				</div>
			)}
			{
			}
		</header>
	);
}
