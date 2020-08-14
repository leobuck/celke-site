import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Menu from '../components/Menu';

library.add(fas);

const Home = (data) => (
    <div>
        <Head>
            <title>Home Page</title>
            <meta name="description" content="Site de ... sobre ..." />
            <meta name="author" content="Leo Buck" />
            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Menu />
        <Jumbotron fluid className="descr-top">
            <style>{`.descr-top {
                background-color: #000;
                color: #FFF;
                padding-top: 150px;
                padding-bottom: 100px;
                margin-bottom: 0rem !important;
                position: relative;
            }
            .inicio-link {
                position: absolute;
                top: 0px;
            }`}</style>
            <Container className="text-center">
                <a name="inicio" className="inicio-link"></a>
                <h1 className="display-4 mb-4">{data.response.home.topTitulo}</h1>
                <p className="lead mb-4">{data.response.home.topSubtitulo}</p>
                <p className="lead">
                    <a href={data.response.home.topLinkButton} className="btn btn-outline-warning btn-lg">
                        {data.response.home.topTextButton}
                    </a>
                </p>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="servicos">
            <style>{`.servicos {
                background-color: #FFF;
                padding-top: 80px;
                padding-bottom: 80px;
                margin-bottom: 0rem !important;
                position: relative;
            }
            .servicos-link {
                position: absolute;
                top: 0px;
            }
            .circulo {
                width: 140px;
                height: 140px;
                background-color: #fed136;
                font-size: 52px;
                padding-top: 24px;
                color: #FFF;
            }
            .centralizar {
                margin: 0 auto !important;
                float: none !important;
            }`}</style>
            <Container className="text-center">
                <a name="servicos" className="servicos-link"></a>
                <div>
                <h2 className="display-4">{data.response.home.servTitulo}</h2>
                <p className="lead pb-4">{data.response.home.servSubtitulo}</p>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon={data.response.home.servUmIcone} />
                        </div>
                        <h2 className="mt-4 mb-4">{data.response.home.servUmTitulo}</h2>
                        <p>{data.response.home.servUmDesc}</p>
                        <p><a className="btn btn-secondary" href="/">Saiba mais</a></p>
                    </div>
                    <div className="col-lg-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon="laptop-code" />
                        </div>
                        <h2 className="mt-4 mb-4">Consultoria</h2>
                        <p>Consultoria</p>
                        <p><a className="btn btn-secondary" href="/">Saiba mais</a></p>
                    </div>
                    <div className="col-lg-4">
                        <div className="rounded-circle circulo centralizar">
                            <FontAwesomeIcon icon="mobile-alt" />
                        </div>
                        <h2 className="mt-4 mb-4">Consultoria</h2>
                        <p>Consultoria</p>
                        <p><a className="btn btn-secondary" href="/">Saiba mais</a></p>
                    </div> 
                </div>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="portifolio">
            <style>{`.portifolio {
                background-color: #F8F9FA;
                padding-top: 80px;
                padding-bottom: 80px;
                margin-bottom: 0rem !important;
                position: relative;
            }
            .portifolio-link {
                position: absolute;
                top: 0px;
            }`}</style>
            <Container className="text-center">
                <a name="portifolio" className="portifolio-link"></a>
                <div>
                    <h2 className="display-4">{data.response.home.portTitulo}</h2>
                    <p className="lead pb-4">{data.response.home.portSubtitulo}</p>
                    <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4">
                            <div className="card">
                                <img src={data.response.home.portUmFileName} className="card-img-top" alt="Portifólio" />
                                <div className="card-body">
                                    <h5 className="card-title">{data.response.home.portUmTitulo}</h5>
                                    <p className="card-text">{data.response.home.portUmSubtitulo}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src="/portolio_um.jpg" className="card-img-top" alt="Portifólio" />
                                <div className="card-body">
                                    <h5 className="card-title">Projeto</h5>
                                    <p className="card-text">Projeto sobre ...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src="/portolio_um.jpg" className="card-img-top" alt="Portifólio" />
                                <div className="card-body">
                                    <h5 className="card-title">Projeto</h5>
                                    <p className="card-text">Projeto sobre ...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src="/portolio_um.jpg" className="card-img-top" alt="Portifólio" />
                                <div className="card-body">
                                    <h5 className="card-title">Projeto</h5>
                                    <p className="card-text">Projeto sobre ...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src="/portolio_um.jpg" className="card-img-top" alt="Portifólio" />
                                <div className="card-body">
                                    <h5 className="card-title">Projeto</h5>
                                    <p className="card-text">Projeto sobre ...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-4">
                            <div className="card">
                                <img src="/portolio_um.jpg" className="card-img-top" alt="Portifólio" />
                                <div className="card-body">
                                    <h5 className="card-title">Projeto</h5>
                                    <p className="card-text">Projeto sobre ...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Jumbotron>
        <Jumbotron fluid className="rodape">
            <style>{`.rodape {
                background-color: #000;
                color: #FFF;
                padding-top: 0px;
                padding-bottom: 0px;
                margin-bottom: 0rem !important;
            }`}</style>
            <Container className="text-center">
                <footer className="footer mt-auto py-3">
                    <Container>
                        <span>Desenvolvido por Leo Buck</span>
                    </Container>
                </footer>
            </Container>
        </Jumbotron>
    </div>
);

Home.getInitialProps = async() => {
    var response = await axios.get('http://localhost:8080/home');

    return { response: response.data };
}

export default Home