import {ReactNode} from "react";

type TeaserProps = {
	title: string;
	// datum: string;
	// datumFormat: "lang" | "kurz"
	// zeitzone?: string
	// dateAsChooser: boolean

	datum: ReactNode
	verfuegbarBis: ReactNode

	// datum2: DatumProps

}
function Teaser({title, datum, }: TeaserProps) {
	return <div>
		<h1>{title}</h1>
		<Datum datum={datum} datumFormat={datumFormat} />
	</div>
}

type DatumProps = {
	datum: string;
	datumFormat: "lang" | "kurz"
	zeitzone? : string;
}
function Datum(p: DatumProps) {
	 //
	return "formatiertes datum"
}