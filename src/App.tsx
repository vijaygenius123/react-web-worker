import {useState} from 'react'
import './App.css'
import {runTask, runTaskAsync} from "./utils";
import {wrap} from "comlink";
import {BigTaskWorker} from "./worker";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className={"container"}>
            <h1>React Web Worker Example</h1>
          <div className={"button-container"}>
            <button onClick={() => {
              console.log("Hello 🎉")
            }}>
              Log Hello
            </button>

            <button onClick={() => {
                console.log(runTask(100000000/2))
            }}>
                Run Task
            </button>

          <button onClick={() => {
            runTaskAsync(100000000/2).then(console.log)
          }}>
            Run Task Async
          </button>

              <button onClick={async () => {
                  //const worker = new Worker(new URL('./worker.js'), {name: 'runTask', type: "module" })
                  const worker = new Worker(new URL('./worker', import.meta.url), {
                      type: 'module'
                  })
                  const workerApi = wrap<import('./worker').BigTaskWorker>(worker)
                  console.log(await workerApi.runTaskWorker(100000000/2))
              }}>
                  Web Worker
              </button>
          </div>
        </div>
    )
}

export default App
