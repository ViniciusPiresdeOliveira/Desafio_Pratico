import { Modal, Form, Button } from "react-bootstrap";
import API from "../api/API";
import "../styles/ModalEditar.css"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Input from "@material-ui/core/Input";

export default function CriarUserSkills({ show, handleClose }) {
    const [name, setName] = useState();
    const [version, setVersion] = useState();
    const [description, setDescription] = useState();
    const [imageUrl, setImageUrl] = useState();
    var navigate = useNavigate();

    // const validationPost = yup.object({
    //     name: yup.string().required("Campo obrigatório !"),
    //     version: yup.string().required("Campo obrigatório !"),
    //     description: yup.string().required("Campo obrigatório !"),
    //     imageUrl: yup.string().required("Campo obrigatório !"),
    // }).required();

    const atualizar = () => {
        handleClose()
        navigate({ replace: true });
        setTimeout(() => {
            window.location.reload();
        }, 800);
    }

    function cadastrarSkill(e) {
        e.preventDefault();
        API.post(`/api/skills`, {
            name: name,
            version: version,
            description: description,
            imageUrl: imageUrl,
        },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        )
            .then(response => {
                console.log(response.data)
                atualizar()
            })
            .catch(function (error) {
                if (error.response.status === 400) {
                    alert('Informações inválidas!');
                } else if (error.response.status === 500) {
                    alert('Erro interno de servidor!');
                }
            });
    }

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm({
    //     resolver: yupResolver(validationPost),
    // });

    // const cadastrarUserSkills = (dados, e) => {
    //     e.preventDefault();
    //     var data = new FormData();

    //     const meuJSON = new Blob(
    //         [
    //             JSON.stringify({
    //                 name: dados.name,
    //                 version: dados.version,
    //                 description: dados.description,
    //                 imageUrl: dados.imageUrl,
    //             }),
    //         ],
    //         {
    //             type: "application/json",
    //         }
    //     );

    //     data.append("skills", meuJSON, { contentType: "application/json" });

    //     var config = {
    //         method: "post",
    //         url: `/api/skills`,
    //     };

    //     API(config)
    //         .then(function (response) {
    //             console.log(JSON.stringify(response.data));
    //             alert("Skill cadastrada com sucesso");
    //             atualizar()
    //         })
    //         .catch(function (error) {
    //             if (error.response.status === 400) {
    //                 alert('Informações inválidas!');
    //             } else if (error.response.status === 500) {
    //                 alert('Erro interno de servidor!');
    //             }
    //         });
    // }

    return (
        <Modal className="containerModal" show={show} onHide={handleClose}>
            <button className="close" onClick={handleClose}>
                <h3>X</h3>
            </button>
            <Modal.Body className='modalBody'>
                <Form>
                    <div>
                        <div className="informacoesAlteradas"><b>Nome*</b></div>
                        <Input
                            // {...register("name")}
                            type="text"
                            placeholder="Nome"
                            onChange={(e) => setName(e.target.value)}
                        />
                        {/* <p className="error-message">{errors.name?.message}</p> */}
                    </div>
                    <div className="inputFlex">
                        <div className="styleDiv">
                            <div className="informacoesAlteradas"><b>Versão*</b></div>
                            <Input
                                // {...register("version")}
                                type="text"
                                placeholder="Descrição"
                                onChange={(e) => setVersion(e.target.value)}
                            />
                            {/* <p className="error-message">{errors.version?.message}</p> */}
                        </div>
                        <div className="styleDiv">
                            <div className="informacoesAlteradas"><b>Descrição*</b></div>
                            <Input
                                // {...register("description")}
                                type="text"
                                placeholder="Descrição"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            {/* <p className="error-message">{errors.description?.message}</p> */}
                        </div>
                        <div className="styleDiv">
                            <div className="informacoesAlteradas"><b>Imagem(URL)*</b></div>
                            <Input
                                // {...register("imageUrl")}
                                type="text"
                                placeholder="URL"
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                            {/* <p className="error-message">{errors.imageUrl?.message}</p> */}
                        </div>
                    </div>
                    <Modal.Footer className="modalFooter">
                        <div>
                            <div className="containerBotoesModal">
                                <button
                                    className='botoesModal botaoAtualizar'
                                    onClick={(e) => cadastrarSkill(e)}
                                >
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                        <div className="containerBotoesModal">
                            <button className='botoesModal botaoCancelar' onClick={handleClose}  >
                                Cancelar
                            </button>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    )
}