import { useState } from "react";

const useAddClass = () => {

    const [addClass, setAddClass] = useState(false);

    const handleSelecte = (e) => {
        setAddClass(!addClass);
    };

    return { addClass, handleSelecte };
}

export default useAddClass;