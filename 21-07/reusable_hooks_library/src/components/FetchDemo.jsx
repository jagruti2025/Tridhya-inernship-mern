import useFetch from "../hooks/useFetch";

function FetchDemo() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div className="demo-card">
      <span className="tag">useFetch</span>
      <h3>Live Data</h3>
      {loading && <p className="hint">Fetching...</p>}
      {error && <p className="error-text">{error}</p>}
      {data && (
        <ul>
          {data.slice(0, 5).map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchDemo;