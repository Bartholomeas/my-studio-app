import { BringToFront, GrabIcon, MousePointerClick, SendIcon, type LucideIcon } from "lucide-react";

import { CursorActionType } from "./cursor-handler.types";

const CURSOR_CONTENT: Record<CursorActionType, [string | null, LucideIcon | null]> = {
	[CursorActionType.CLICK]: ["Klik", MousePointerClick],
	[CursorActionType.DRAG]: ["Przeciągnij w prawo", GrabIcon],
	[CursorActionType.HOVER]: ["👉", BringToFront],
	[CursorActionType.SEND]: ["Wyślij 👉 Wyślij 👉 ", SendIcon],
	[CursorActionType.HIDE]: [null, null],
};

export const getCursorContent = (type: CursorActionType): [string | null, LucideIcon | null] => {
	return CURSOR_CONTENT[type] || [null, null];
};
