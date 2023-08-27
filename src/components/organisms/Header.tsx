import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type HeaderProps = {
	page: string;
	targetRef?: React.MutableRefObject<HTMLDivElement | null | undefined>;
};

interface FontColors {
	[key: string]: string;
}

export default function Header({ page }: HeaderProps) {
	const [isNavBarOpen, setIsNavBarOpen] = useState(false);

	console.log("isNavBarOpen => ", isNavBarOpen)
	enum Page {
		Home = "Home",
		About = "About",
		Vinio = "Vinio",
	}

	const fontColors: FontColors = {
		[Page.Home]: "text-brand-white",
		[Page.About]: "text-brand-red",
		[Page.Vinio]: "text-brand-red",
	};

	const fontColor = fontColors[page] || "text-brand-white";

	console.log("page => ", page)

	return (
		<header className="relative flex h-[7.5rem] w-screen shrink-0 items-center justify-between px-[4.25rem]">
			<div
				className={`flex w-full items-center ${fontColor} gap-x-[5.3125rem]`}
			>
				<Link href="/#home" className="text-xl xl:text-2xl">
					Vinio
				</Link>
				{page !== Page.Vinio && (
					<nav
						className={`flex items-center gap-x-[3rem] text-l max-md:hidden lg:gap-x-[5.3125rem] xl:text-2xl`}
					>
						<Link href="/#home">Home</Link>
						<Link href="/#what-is-vinio">What is Vinio?</Link>
						<Link href="/about">About</Link>
					</nav>
				)}
			</div>
			{!isNavBarOpen ? (
				<button onClick={() => setIsNavBarOpen(true)}>
					<FontAwesomeIcon
						className=""
						icon={faBars}
						style={{ color: page === "Home" ? "#f8fdfd" : "#d0122d" }}
						onClick={() => setIsNavBarOpen(true)}
					/>
				</button>
			) : (
				<>
					<div
						className="absolute z-10 h-screen bg-black top-0 right-0 w-screen flex flex-col items-end gap-y-2 bg-opacity-50"
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
							<nav className="flex flex-grow flex-col gap-y-2 items-start self-stretch">
								<Link href="/#home" onClick={() => setIsNavBarOpen(false)}>Home</Link>
								<Link href="/#what-is-vinio" onClick={() => setIsNavBarOpen(false)}>What is Vinio?</Link>
								<Link href="/about" onClick={() => setIsNavBarOpen(false)}>About</Link>
							</nav>
						</div>
					</div>
				</>
			)}
			{
			}
		</header>
	);
}
