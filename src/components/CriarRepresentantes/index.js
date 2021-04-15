import React from 'react'
import './style.css'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import axios from 'axios'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await axios.post('http://localhost:4002/criar', values)
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

export default function CriarCursos() {


  return (
    <div>
      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators
        }}
        render={({
          handleSubmit,
          form: {
            mutators: { push, pop }
          }, // injected from final-form-arrays above
          pristine,
          form,
          submitting,
          values
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Field
                name="nome"
                component="input"
                placeholder="nome"
              />
              <Field
                name="url"
                component="input"
                placeholder="url"
              />
              <Field
                name="whatsapp_link"
                component="input"
                placeholder="whatsapp"
              />
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => push('cursos_presenciais', undefined)}
                >
                  Add Curso Presencial
              </button>
                <button type="button" onClick={() => pop('cursos_presencias')}>
                  Remover Curso Presencial
              </button>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => push('cursos_online', undefined)}
                >
                  Add Curso Online
              </button>
                <button type="button" onClick={() => pop('cursos_online')}>
                  Remover Online
              </button>
              
              </div>
              <FieldArray name="cursos_presenciais">
                {({ fields }) =>
                  fields.map((name, index) => (
                    <div key={name}>
                      <label>Cursos Presenciais{index + 1}</label>
                      <Field
                        name={`${name}.nome_curso`}
                        component="input"
                        placeholder="First Name"
                      />
                      <Field
                        name={`${name}.cod_curso`}
                        component="input"
                        placeholder="Last Name"
                      />
                      <span
                        onClick={() => fields.remove(index)}
                      >
                        ❌
                    </span>
                    </div>
                  ))
                }
              </FieldArray>
              <FieldArray name="cursos_online">
                {({ fields }) =>
                  fields.map((name, index) => (
                    <div key={name}>
                      <label>Cursos Online{index + 1}</label>
                      <Field
                        name={`${name}.nome_curso`}
                        component="input"
                        placeholder="First Name"
                      />
                      <Field
                        name={`${name}.cod_curso`}
                        component="input"
                        placeholder="Last Name"
                      />
                      <span
                        onClick={() => fields.remove(index)}
                      >
                        ❌
                    </span>
                    </div>
                  ))
                }
              </FieldArray>


              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Submit
              </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
              </button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )
        }}
      />
    </div>
  )
}

