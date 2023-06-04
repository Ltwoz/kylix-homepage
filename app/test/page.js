import axios from "axios";

const Test = () => {
    console.log(data);
    
    return <div>Enter</div>;
};

export default Test;

export const getServerSideProps = async (ctx) => {
    const { data } = await axios.get(
        "https://harlequin-fish-kilt.cyclic.app/api/v1/properties"
    );

    return {
        props: { data },
    };
};
