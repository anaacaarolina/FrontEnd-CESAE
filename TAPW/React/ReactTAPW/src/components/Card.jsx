export default function Card({ firstName, lastName = "Silva", title }) {
  return (
    <div className="card">
      <p>
        {firstName} {lastName}
      </p>
      <p>{title}</p>
    </div>
  );
  // const [count, setCount] = useState(0);
  // <div className="card">
  //   <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
  //   <p>
  //     Edit <code>src/App.jsx</code> and save to test HMR
  //   </p>
  // </div>;
}
