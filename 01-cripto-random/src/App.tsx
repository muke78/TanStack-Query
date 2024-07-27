
import { useRandom } from './hooks/useRandom';
import './App.css'
function App() {

  const { randomQuery } = useRandom();

  return (
    <>
      {
        randomQuery.isFetching ? <h1>Cargando....</h1> : <h1>Numero: {randomQuery.data} </h1>
      }
      <div> {JSON.stringify(randomQuery.error)} </div>

      <button disabled={randomQuery.isFetching} onClick={() => randomQuery.refetch()}>Nuevo numero</button>
    </>
  );

}

export default App
