import React from "react";
import { BpkCode } from "@skyscanner/backpack-web/bpk-component-code";
import BpkButton from "@skyscanner/backpack-web/bpk-component-button";
import BpkText from "@skyscanner/backpack-web/bpk-component-text";
import BpkCalendar, {
	CALENDAR_SELECTION_TYPE,
} from "@skyscanner/backpack-web/bpk-component-calendar";
import format from "date-fns/format";

import { cssModules } from "@skyscanner/backpack-web/bpk-react-utils";

import STYLES from "./App.scss";
import component from "@skyscanner/backpack-web/bpk-component-text";

const getClassName = cssModules(STYLES);

const formatDateFull = (date) => format(date, "EEEE, do MMMM yyyy");
const formatMonth = (date) => format(date, "MMMM yyyy");

const daysOfWeek = [
	{
		name: "Sunday",
		nameAbbr: "Sun",
		index: 0,
		isWeekend: true,
	},
	{
		name: "Monday",
		nameAbbr: "Mon",
		index: 1,
		isWeekend: false,
	},
	{
		name: "Tuesday",
		nameAbbr: "Tue",
		index: 2,
		isWeekend: false,
	},
	{
		name: "Wednesday",
		nameAbbr: "Wed",
		index: 3,
		isWeekend: false,
	},
	{
		name: "Thursday",
		nameAbbr: "Thu",
		index: 4,
		isWeekend: false,
	},
	{
		name: "Friday",
		nameAbbr: "Fri",
		index: 5,
		isWeekend: false,
	},
	{
		name: "Saturday",
		nameAbbr: "Sat",
		index: 6,
		isWeekend: true,
	},
];

class App extends component {
	constructor() {
		super();

		this.state = {
			selectionConfiguration: {
				type: CALENDAR_SELECTION_TYPE.single,
				date: null,
			},
		};
	}

	handleDateSelect = (date) => {
		this.setState({
			selectionConfiguration: {
				type: this.props.selectionConfiguration.type,
				date: date,
			},
		});
	};

	render() {
		return (
			<div className={getClassName("App")}>
				<header className={getClassName("App__header")}>
					<div className={getClassName("App__header-inner")}>
						<BpkText
							tagName="h1"
							textStyle="xxl"
							className={getClassName("App__heading")}
						>
							Flight Schedule
						</BpkText>
					</div>
				</header>
				<main className={getClassName("App__main")}>
					<BpkText tagName="p" className={getClassName("App__text")}>
						To get started, edit <BpkCode>src/App.jsx</BpkCode> and save to
						reload.
					</BpkText>
					<BpkButton onClick={() => alert("It works!")}>Click me</BpkButton>
				</main>
			</div>
		);
	}
}

export default App;
