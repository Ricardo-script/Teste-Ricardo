/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { 
    Container, SideBar, AreaLogo, Logo, Legend, TextLegend, Menu, AreaIndicator,
    Header, Content, Text, Indicator, Cardbox, HeaderBox, HeaderText,
   
} from './styles';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';

import logo from '../../assets/logo.png';
import apiAproval from '../../services/api';
import apiLastAccess from '../../services/apiLastAccess';
import apiScheduled from '../../services/apiScheduled';
import { FaUserFriends } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { RiArrowUpDownFill } from "react-icons/ri";
import { RiArrowDownFill } from "react-icons/ri";
import { RiArrowUpFill } from "react-icons/ri"
import { AiFillEye } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import Chart from '../../components/Chart';

export default function Home(){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [dados, setDados] = useState({
        data: {
            access_approval:['']
        }
    });

    const [lastAccess, setLastAccess] = useState({
        data:{
            last_access:[
                {
                    dependents:['']
                }
            ]
            
        }
    });

    const [scheduled, setScheduled] = useState({
        data:{
            scheduled:['']
        }
    });

    useEffect(() => {
        async function carregarApi(){
            const response = await apiAproval.get('');
            setDados(response.data);
            console.log(response.data);
        }

        carregarApi();

        async function accessApi(){
            const response2 = await apiLastAccess.get('');
            setLastAccess(response2.data);
            console.log(response2.data);
        }

        accessApi();

        async function scheduledApi(){
            const response3 = await apiScheduled.get('');
            setScheduled(response3.data);
            console.log(response3.data);
        }

        scheduledApi();

    }, [])


    return(
        <Container>
            { dados.data.access_approval.map(item => {
                return(
                    
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <span style={{fontSize:13}}>Aprovação de Acesso</span>
                        </Modal.Header>
                        <Modal.Body>
                            <div style={{display:'flex', padding: 5}}>
                                <img src={item.avatar} alt="" style={{
                                    width: '70px', height:'70px', borderRadius: '35px'}}
                                />
                                <div style={{display:'flex', flexDirection:'column' , margin: 15}}>
                                    <span>{item.name}</span>
                                    <span style={{fontSize: 12}}>{item.type_user}</span>
                                </div>
                            </div>

                        <Form>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Destino</Form.Label>
                                <Form.Control value="Quality - Sala 510"/>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Data e Hora</Form.Label>
                                    <Form.Control type="text" value="14:27 - 06/01/2021"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Acompanhantes</Form.Label>
                                    <Form.Control type="text" value="04"/>
                                </Form.Group>
                            </Form.Row>
                            
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Referencia</Form.Label>
                                <Form.Control type="text" value={9874584795175} />
                            </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Procedimento</Form.Label>
                                    <Form.Control as="select" defaultValue="Choose...">
                                        <option>Entrada-Saída</option>
                                        <option>Entrada</option>
                                        <option>Saída</option>
                                        <option>Entregue</option>
                                    </Form.Control>
                                    </Form.Group>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Permanencia Limite</Form.Label>
                                    <Form.Control value={'08:00'} disabled="true"/>
                                </Form.Group>
                            </Form.Row>
                            
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>CPF</Form.Label>
                                    <Form.Control disabled="true" value="368.965.762-04"/>
                                    </Form.Group>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control disabled="true" value="(11) 9-7854-9658"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Veículo</Form.Label>
                                    <Form.Control disabled="true" value="Carro"/>
                                    </Form.Group>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Modelo</Form.Label>
                                    <Form.Control disabled="true" value="HB-20"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Cor</Form.Label>
                                    <Form.Control disabled="true" value="Preto"/>
                                    </Form.Group>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Placa</Form.Label>
                                    <Form.Control disabled="true" value="AAAA-2000"/>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                            NEGAR ACESSO
                            </Button>
                            <Button variant="info" onClick={handleClose}>
                            APROVAR ACESSO
                            </Button>
                        </Modal.Footer>
                    </Modal>
                );
            })}
            
            <SideBar>
                <AreaLogo>
                    <Logo src={logo} alt=""/>
                </AreaLogo>
                <Legend>
                    <TextLegend>
                        Empresa A - Sala 210<br/>
                        João Alves
                    </TextLegend>
                </Legend>
                <Menu>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Agendamentos</a></li>
                    <li><a href="/">Cadastros</a></li>
                    <li><a href="/">Report</a></li>
                    <li><a href="/">Sair</a></li>
                </Menu>
            </SideBar>
            <AreaIndicator>
                <Header>
                    <Text>Home</Text>
                </Header>

                <Indicator>
                    <Cardbox>
                        <HeaderBox>
                            <HeaderText>Aprovação de Acesso</HeaderText>
                            <HeaderText>Pendente: {dados.data.access_approval.length}</HeaderText>
                        </HeaderBox>
                        <Content>
                            <tbody>
                            {dados.data.access_approval.map( item =>{
                                return(
                                    <tr key={item.id} className="contentUsers">
                                        <td className="avatar"><img src={item.avatar} alt=""/></td>
                                        <td className="name"><strong>{item.name}</strong></td>
                                        <td className="room">Sala {item.room}</td>
                                        <td className="dateHour" style={{width:175}}>
                                            <AiOutlineClockCircle className="clock"/>{item.dh_access}
                                        </td>
                                        <td className="btn" onClick={handleShow} ><a class="button">DECIDIR</a></td>   
                                    </tr>
                                    
                                );
                            })}
                            </tbody>
                        </Content>
                    </Cardbox>

                    <Cardbox>
                        <HeaderBox>
                            <HeaderText>Últimos Acessos</HeaderText>
                            <HeaderText><a href="/" className="linkviewall">Ver tudo</a> 
                                Total:{lastAccess.data.last_access.length}
                            </HeaderText>
                        </HeaderBox>
                        <Content>
                            <tbody>
                            {lastAccess.data.last_access.map( item2 =>{
                                return(
                                    <tr key={item2.id}>
                                        <td className="avatar"><img src={item2.avatar} alt=""/></td>
                                        <td><strong>{item2.name}</strong></td>
                                        <td className="dependents"><FaUserFriends className="iconUser"/>
                                            {item2.dependents.length}
                                        </td>
                                        <td className="status-icon">{
                                            item2.status === 'ENTRADA'       ?   <RiArrowUpFill className="icon" color="#0bb7b7"/>  :
                                            item2.status === 'ENTRADA_SAIDA' ?  <RiArrowUpDownFill className="icon"/> :
                                            item2.status === 'SAIDA'         ?  <RiArrowDownFill className="icon" color="#DB243D"/> : 
                                            <AiFillCar className="icon" color="#143047"/> }
                                        </td>
                                        <td className="status">{
                                            item2.status === 'ENTRADA'       ?   'Entrada'  :
                                            item2.status === 'ENTRADA_SAIDA' ?  'Entrada-Saída' :
                                            item2.status === 'SAIDA'         ?  'Saída': 'Entrega'}
                                        </td>
                                        <td className="dateHour">{item2.dh_access}</td>
                                        <td><a href="/" class="button" ><AiFillEye style={{width:18, height:18}}/></a></td>   
                                    </tr>
                                );
                            })}
                            </tbody>
                        </Content>
                        
                    </Cardbox>               
                </Indicator>

                <Indicator>
                    <Cardbox>
                        <HeaderBox>
                            <HeaderText>Programados</HeaderText>
                        </HeaderBox>
                        <Content style={{padding:7}}>
                            <tbody>
                                {scheduled.data.scheduled.map( item3 =>{
                                    return(
                                        <div>
                                            <tr key={item3.id}>
                                                <td rowspan="2" className="users"><img src={item3.avatar} alt="" /></td>
                                                <td style={{height:2, width:170, fontSize:7, border:'none'}}><strong>{item3.name}</strong></td>
                                                <td style={{height:2, width:120, fontSize:11, border:'none'}}>Data e Hora:</td>
                                            </tr>
                                            <tr>
                                                <td style={{height:2, width:190, fontSize:11}}>{item3.type_user}</td>
                                                <td style={{height:2, width:120, fontSize:11}}>{item3.dh_access}</td>
                                            </tr>
                                        </div>
                                    );
                                })}
                            </tbody>
                        </Content>

                    </Cardbox>

                    <Cardbox>
                        <HeaderBox>
                            <HeaderText>Indicador de Acessos</HeaderText>
                        </HeaderBox>
                        <Content style={{width: '99%', height: '99%'}}>

                            <Chart />

                        </Content>
                    </Cardbox>                  
                </Indicator>
                
            </AreaIndicator>
                      
        </Container>

    );
}