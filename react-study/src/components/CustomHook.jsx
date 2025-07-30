import useInput from "../hooks/useInput"


const HookSample = () => {
    const [input, onChange] = useInput();
    return <>
        <h3>커스텀 훅</h3>
        <div>
            <input value={input} onChange={onChange}/>
        </div>
    </>
};

export default HookSample;