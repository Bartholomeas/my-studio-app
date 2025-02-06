import Image from "next/image";
import {Text} from "@/components/common/text";

export interface OpinionAuthorProps {
    image: string,
    authorName: string,
    role?: string,
    company?: string

}

export const OpinionAuthor = ({image, authorName, role, company}: OpinionAuthorProps) => {
    return (
        <div className={"flex items-center gap-4 mt-4"}>
            <Image
                src={image}
                loading={"lazy"}
                // placeholder={"blur"}
                alt={"Team member"}
                height={60}
                width={60}
                // fill
                className={"rounded-full aspect-square object-cover"}
            />

            <div className={'flex flex-col'}>
                <Text weight={'semibold'} size={'md'}>
                    {authorName}
                </Text>
                <Text size={'md'}>
                    {role && <span>{role}{company ? `, ${company}` : ''}</span>}
                </Text>
            </div>
        </div>
    )
}