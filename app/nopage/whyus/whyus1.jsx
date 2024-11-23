import Image from "next/image"
import Whyus from "../../../public/whyus.svg"



export default function Page() {
    return (
        <>
            <Image
                src={Whyus}
                alt="about image"
                className=""

            ></Image>
           
        </>
    )
}