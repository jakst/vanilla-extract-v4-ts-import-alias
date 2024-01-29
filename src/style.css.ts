import { green } from "@/lib/vars.css" // TS import alias does not work here
import { style } from "@vanilla-extract/css"

export const greenBgStyle = style({
	backgroundColor: green,
})
