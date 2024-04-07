import { Form, Field, Formik } from 'formik';
import { createxamrequest } from '../api/examen.api';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

function Examform() {
    const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

    const handleSubmit = async (values) => {
        try {
            console.log(values);
            await createxamrequest(values);
            // Limpiar pantalla y navegar a otra ruta
            navigate('/newp'); // Usamos navigate en lugar de history.push
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Formik
                initialValues={{
                    picked: '',
                    Name: '',
                }}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange }) => (
                    <Form>
                        <label>Nombre</label>
                        <input type="text" name="Name" placeholder='Escribir el nombre' onChange={handleChange} />
                        <div id="my-radio-group">Cantidad de preguntas</div>
                        <div role="group" aria-labelledby="my-radio-group">
                            <label>
                                <Field type="radio" name="picked" value="1" />
                                1
                            </label>
                            <label>
                                <Field type="radio" name="picked" value="2" />
                                2
                            </label>
                            <label>
                                <Field type="radio" name="picked" value="3" />
                                3
                            </label>
                            <label>
                                <Field type="radio" name="picked" value="4" />
                                4
                            </label>
                            <label>
                                <Field type="radio" name="picked" value="5" />
                                5
                            </label>
                            <div>CANTIDAD: {values.picked}</div>
                        </div>
                        <button type="submit">Save</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Examform;
