import useLocalStorage from "../CustomHooks/useLocalStorage";

function NameForm() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter your name"
      />
      <p>show name: {name}</p>
      <p>example of create customHook'localStorage ' . </p>
    </div>
  );
}

export default NameForm;