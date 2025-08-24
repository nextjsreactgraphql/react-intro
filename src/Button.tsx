import {ReactNode} from "react";

type ButtonProps = {
	iconLeft?: ReactNode;
	icon2?: string;
	// help: typeof Help;
	children: ReactNode
}

function Hello() {return ""}

function Help() {
	return "...";
}

function A() {
	return <Button >
		fasdfasdfasdf
	</Button>
}

export default function Button({children, iconLeft, icon2}: ButtonProps) {
	return <button>
		{iconLeft}
		<span>
			{children}
		</span>
		{icon2}
	</button>
}
