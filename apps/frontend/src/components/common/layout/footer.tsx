import React from "react";

import { Text } from "../text";
import { Title } from "../title";

export const Footer = () => {
	return (
		<footer
			className="relative h-[600px]"
			style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
		>
			<div className="relative -top-[100vh] bottom-0 h-[calc(100vh+600px)] w-full bg-[#ff991c]">
				<div className="container sticky top-[calc(100vh-600px)] flex h-[600px] flex-col justify-end pb-4">
					<div className="flex gap-4 pt-[calc(100vh-600px)]">
						<div className="flex flex-col gap-2">
							<Title>Titl</Title>
							<Text>content</Text>
							<Text>content</Text>
							<Text>content</Text>
						</div>
						<div className="flex flex-col gap-2">
							<Title>Titl</Title>
							<Text>content</Text>
							<Text>content</Text>
							<Text>content</Text>
							<Text>content</Text>
							<Text>content</Text>
							<Text>content</Text>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
