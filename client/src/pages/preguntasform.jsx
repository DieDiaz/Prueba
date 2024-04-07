import { Form, Field, Formik } from 'formik';

function Examform() {

    const handleSubmit = async (values) => {
        try {
            console.log(values);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Formik 
                initialValues={{
                    toggle1: false,
                    toggle2: false,
                    toggle3: false,
                    Name: '',
                }}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange }) => (
                    <Form>
                        <label>pregunta 1</label><br/>
                        <input type="text" name="pregunta" placeholder='Escribir pregunta' onChange={handleChange} /><br/>
                        <input type="text" name="respuesta 1" placeholder='Escribir respuesta' onChange={handleChange} />
                        <label> <Field type="checkbox" name="toggle 1" />{`${values.toggle1}`}</label><br/>
                        <input type="text" name="respuesta 2" placeholder='Escribir respuesta' onChange={handleChange} />
                        <label> <Field type="checkbox" name="toggle 2" />{`${values.toggle2}`}</label><br/>
                        <input type="text" name="respuesta 3" placeholder='Escribir respuesta' onChange={handleChange} />
                        <label> <Field type="checkbox" name="toggle 3" />{`${values.toggle3}`}</label><br/>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Examform;
