const Button = React.memo(({ onClick, label }) => {
  console.log('Button re-rendered');
  return <button onClick={onClick}>{label}</button>;
});

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <Button onClick={increment} label="Click me" />
      <p>Count: {count}</p>
    </div>
  );
}

export default App
