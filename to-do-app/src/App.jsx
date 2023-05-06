import { Button, TextField } from "@mui/material"
import "./style.css";
import { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Checkbox from '@mui/material/Checkbox';

function App() {
  const [textTarefa, setTextTarefa] = useState("");
  const [listTarefa, setListTarefa] = useState([]);

  /*
      (criador de objeto)
    const pessoa = {
      nome: "Evelyn",
      idade: 24,
      cpf:'123456789',
      rg:'123456789',
    }

    const teste = [
      {
        id: 1,
        title: "teste"
      },

      {
        id: 2,
        title: "banana"
      }
    ]
  */

  function handleClick() {

    if (!textTarefa) {
      alert('Nome obrigatório')
    }
    else {
      setListTarefa((old) => [...old, { id: Date.now(), title: textTarefa, indFinish: false }]);
      setTextTarefa("");
    }
  }

  function handleDelete() {
    setListTarefa([]);
  }

  function handleDeleteTask(idTask) {
    setListTarefa(listTarefa.filter(el => el.id !== idTask))
  }

  function handleFinishedTask(idTask) {
    setListTarefa(listTarefa.map((task) => task.id === idTask ? { ...task, indFinished: !task.indFinished } : task))
  }

  return (
    <>
      <form className="form-container">
        <TextField
          value={textTarefa}
          id="standard-basic" label="Tarefa" variant="standard" placeholder="Digite a tarefa" onChange={({ target }) => setTextTarefa(target.value)} />
        <Button variant="contained" onClick={handleClick}> Add </Button>
        <Button variant="contained" color="secondary" onClick={handleDelete}> Deletar </Button>
      </form>

      <div className="container">
        <div className="lista">
          {
            listTarefa.map((tarefa) => (

              <div key={tarefa.id}>
                <div className="task-single">

                  <div className="task">
                    <Checkbox onClick={() => handleFinishedTask(tarefa.id)} />
                    <span style={{ color: tarefa.indFinished ? 'red' : '' }}>
                      {tarefa.title}
                    </span>
                  </div>

                  <DeleteForeverIcon onClick={() => handleDeleteTask(tarefa.id)}
                    className="icon-delete" />
                </div>
                <div className="divider" />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App