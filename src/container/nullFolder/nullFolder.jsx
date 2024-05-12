import { Field, FieldArray, Formik, Form } from 'formik';
import './nullFolder.scss'
import { useState } from 'react';
import * as Yup  from 'yup';
const NullFolder = () => {
  const [state, setState] = useState([])

  const schema = Yup.object().shape({
    collection: Yup.array()
      .of(
        Yup.object().shape({
          code_position: Yup.string().required('Required'), // these constraints take precedence
          des_sample_method: Yup.string().required('Required'), // these constraints take precedence
          determined_char: Yup.string().required('Required'), // these constraints take precedence
          name_test_obj: Yup.string().required('Required'), // these constraints take precedence
          test_type_code: Yup.string().required('Required'), // these constraints take precedence
        })
      )
  });
  console.log(state);
    return (
      <div>
     <h1>Friend List</h1>
     <Formik
       initialValues={{ collection: [{
        code_position:'',
        des_sample_method:'',
        determined_char:'',
        name_test_obj:'',
        test_type_code:''
       }] }}
       validationSchema={schema}
       onSubmit={values =>
        {setState(values.collection)
        console.log(values)}
       }
       render={({ values, handleSubmit, errors}) => {
        return (
           <Form>
           <FieldArray
             name="collection"
             render={arrayHelpers => (
               <div>
                 {
                   values.collection.map((friend, index) => (
                     <div key={index}>
                        <Field  name={`collection.${index}.code_position`} label={("sl-sl-code_position")} type="text"/>
                        <Field   name={`collection.${index}.des_sample_method`} label={("sl-sl-determined_char")} type="text"/>
                        <Field   name={`collection.${index}.determined_char`} label={("sl-sl-des_sample_method")} type="text"/>
                        <Field   name={`collection.${index}.name_test_obj`} label={("sl-sl-name_test_obj")} type="text"/>
                        <Field   name={`collection.${index}.test_type_code`} label={("sl-sl-test_type_code")} type="text"/>
                       <button
                         type="button"
                         onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                       >
                         -
                       </button>
                       <button
                         type="button"
                         onClick={handleSubmit} // insert an empty string at a position
                       >
                         save
                       </button>
                     </div>
                   ))}
                   <button type="button" onClick={() => arrayHelpers.push({
                    code_position:'',
                    des_sample_method:'',
                    determined_char:'',
                    name_test_obj:'',
                    test_type_code:''
                   })}>
                     {/* show this when user has removed all collection from the list */}
                     Add a friend
                   </button>
                 
                 <div>
                   <button type="submit">Submit</button>
                 </div>
               
               </div>
               
             )}
           />
         </Form>
        )
       }}
     />
   </div>
    )
  }

export default NullFolder
 